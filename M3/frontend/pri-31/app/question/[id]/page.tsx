import { lusitana } from '@/app/ui/fonts';
import { getDocument, Answer } from '@/app/lib/get-question';
import ReactMarkdown from 'react-markdown';
import { Date, Tags } from '@/app/ui/document';

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
        <div className="p-2 flex flex-col justify-center rounded-lg bg-gray-50 w-full mt-4">
            <div>
                <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                    Question: "{question.Title}"
                </p>
                <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                    Score: {question.Score}
                </p>
                <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                    Creation Date: <Date date={question.CreationDate}/>
                </p>
                <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                    Last Edit Date: <Date date={question.LastEditDate}/>
                </p>
                <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                    Tags: <Tags tags={question.Tags}/>
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
                {answers.map((answer: Answer) => (
                    <div className="p-4 flex flex-col justify-center rounded-lg bg-yellow-50 w-full my-2">
                        <div>
                            <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                                Score: {answer.Score}
                            </p>
                            <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                                Creation Date: <Date date={answer.CreationDate}/>
                            </p>
                            <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                                Last Edit Date: <Date date={answer.LastEditDate}/>
                            </p>
                            <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full my-2">
                                <ReactMarkdown>
                                    {answer.Body}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
