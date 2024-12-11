import { notFound } from "next/navigation";

export async function getDocument(id: number) {
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    const uri = "http://" +
        address +
        ":" + port +
        "/solr/" +
        core +
        "/select?indent=true&q.op=OR&q=Id%3A" +
        id;

    const data = await (await fetch(uri)).json();

    if (data["response"]["numFound"] == 0)
        notFound();

    const question = data["response"]["docs"][0];
    const answer_ids = question["Answers"];

    return {
        q: question,
        a: await getAnswers(answer_ids)
    };
}

async function getAnswers(answer_ids: [number]) {
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    let ret: Object[] = [];

    for (const id of answer_ids) {
        const uri = "http://" +
            address +
            ":" + port +
            "/solr/" +
            core +
            "/select?indent=true&q.op=OR&q=Id%3A" +
            id;
    
        const data = await (await fetch(uri)).json();

        if (data["response"]["numFound"] == 0)
            notFound();

        let a = data["response"]["docs"][0];
        a.key = id;     // so that nextjs doesn't complain
        ret.push(a);
    }
    
    return ret;
}
