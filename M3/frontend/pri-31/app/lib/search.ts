import query_base from '@/app/lib/query_base.json';

export async function search(term: string) {
    term = term.toString();
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    let query = query_base;
    query["query"] = term;

    const uri = "http://" +
        address +
        ":" + port +
        "/solr/" +
        core +
        "/select";

    console.log(uri);

    const data = await (await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
    })).json();

    const docs = data.response.docs;

    let result_ids: number[] = [];

    docs.forEach((doc: any) => {
        result_ids.push(parseInt(doc.Id[0]));
    });

    return result_ids;
}
