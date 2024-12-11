import { notFound } from "next/navigation";
import { lusitana } from '@/app/ui/fonts';

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const doc = await getDocument(id);

    const question = doc.q;
    const answers = doc.a;
    
    return (
        <div className="p-2 flex flex-col justify-center rounded-lg bg-gray-50 w-full">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                Question: "{question["Title"]}"
            </p>
            <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full md:px-20 my-2">
                {JSON.stringify(question)}
            </div>
            <div>
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Answers:
                </p>
                {answers.map((answer : Object) => (
                    <div className="p-4 flex flex-col justify-center rounded-lg bg-yellow-50 w-full md:px-20 my-2">
                        {JSON.stringify(answer)}
                    </div>
                ))}
            </div>
        </div>
    );
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
