import { notFound } from "next/navigation";

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const doc = await getDocument(id);
    console.log(doc);
    return <p>{JSON.stringify(doc)}</p>;
}

async function getDocument(id: number) {
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

    return {
        q: data["response"]["docs"][0],
        a: await getAnswers(id)
    };
}

async function getAnswers(question_id: number) {
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    //http://localhost:8983/solr/stackoverflow/select?indent=true&q.op=OR&q=ParentId%3A34984898

    const uri = "http://" +
        address +
        ":" + port +
        "/solr/" +
        core +
        "/select?indent=true&q.op=OR&q=ParentId%3A" +
        question_id;
    
    const data = await (await fetch(uri)).json();

    if (data["response"]["numFound"] == 0)
        notFound();

    return data["response"]["docs"];
}
