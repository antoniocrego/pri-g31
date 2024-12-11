import { lusitana } from '@/app/ui/fonts';
import { getDocument, Answer } from '@/app/lib/get-question';
import ReactMarkdown from 'react-markdown';

export default async function Page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    const id = (await params).id;
    const doc = await getDocument(id);

    const question = doc.q;
    const answers: Answer[] = doc.a;
    
    return (
        <div className="p-2 flex flex-col justify-center rounded-lg bg-gray-50 w-full">
            <div>
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Question: "{question.Title}"
                </p>
                <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                        Score: {question.Score}
                </p>
                <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full my-2">
                    <ReactMarkdown>
                        {question.Body}
                    </ReactMarkdown>
                </div>
            </div>
            <div>
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Answers:
                </p>
                {answers.map((answer: { Score: number, Body: string }) => (
                    <div className="p-4 flex flex-col justify-center rounded-lg bg-yellow-50 w-full my-2">
                        <div>
                            <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                                    Score: {answer.Score}
                            </p>
                            {/* <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full md:px-20 my-2"> */}
                                <ReactMarkdown>
                                    {answer.Body}
                                </ReactMarkdown>
                            {/* </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
