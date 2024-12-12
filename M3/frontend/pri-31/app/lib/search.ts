'use server';

import query_base from '@/app/lib/query_base.json';
import { redirect } from 'next/dist/server/api-utils';
import { notFound } from 'next/navigation';

export async function search(term: string) {
    term = term.toString();
    const address = process.env.SOLR_ADDR;
    const port = process.env.SOLR_PORT;
    const core = process.env.SOLR_CORE;

    let query = query_base;
    // query["query"] = term;

    const uri = "http://" +
        address +
        ":" + port +
        "/solr/" +
        core +
        "/select";

    const data = await (await fetch(uri, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(query)
    })).json();

    const docs = data.response.docs;

    docs.forEach((doc: any) => {
        console.log(doc.Id[0]);
    });

    if (data.response.numFound === 0) {
        notFound();
    }
}
