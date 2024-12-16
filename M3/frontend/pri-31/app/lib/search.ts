import query_base from '@/app/lib/query_base.json';

export async function search(term: string) {
    term = term.toString();
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    const query = query_base;
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

    const results: { [key: number]: any } = {};

    docs.forEach((doc: any) => {
        doc.Id = parseInt(doc.Id);
        doc.PostTypeId = parseInt(doc.PostTypeId[0]);
        results[parseInt(doc.Id)] = doc;
    });

    return results;
}

export async function search_semantic(term: string) {
    term = term.toString();
    const address = process.env.SEMANTIC_ADDR;
    const port = process.env.SEMANTIC_PORT;

    const uri = "http://" +
        address +
        ":" + port +
        "/semantic-query?q=" +
        term;

    console.log(uri);

    const data = await (await fetch(uri, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })).json();

    const docs = data;

    const results: { [key: number]: any } = {};

    docs.forEach((doc: any) => {
        doc.Id = parseInt(doc.Id);
        results[parseInt(doc.Id)] = doc;
    });

    return results;
}

