import { search_semantic } from '@/app/lib/search';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import ReactMarkdown from 'react-markdown';

function prepareBody(body: string) {
    const limit = 250;
    if (body.length > limit) {
        return body.substring(0, limit) + '...';
    }
    return body;
}

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query: string = searchParams?.query || '';

    const results = await search_semantic(query);
    const num_results = Object.keys(results).length;

    return (
        <div>
          <div className="flex flex-col justify-center w-full my-4">
            <div className="mb-2">
            <Search placeholder="Search..." semantic={false}/>
            </div>
            <div className="mt-2">
            <Search placeholder="Semantic search..." semantic={true}/>
            </div>
          </div>
          <div className="p-4 flex flex-col justify-center rounded-lg bg-gray-50 w-full">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                {num_results > 0 ? `Results for "${query}"` : `No results for "${query}"`}
            </p>
            {Object.entries(results).map(([key, value]) => (
                <a href={`/question/${value.Id}`}>
                    <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full my-2">
                        <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                            Question: "{value.Title}"
                        </p>
                        <p className={`${lusitana.className} text-gray-800 md:text-xl md:leading-normal`}>
                            Score: {value.Score}
                        </p>
                        <div className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full my-2">
                            <ReactMarkdown>
                                {prepareBody(value.Body)}
                            </ReactMarkdown>
                        </div>
                    </div>
                </a>
            ))}
          </div>
        </div>
    );
}
