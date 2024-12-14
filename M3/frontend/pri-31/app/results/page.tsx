import { search } from '@/app/lib/search';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import Result from '@/app/ui/search';

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query: string = searchParams?.query || '';

    const results: number[] = await search(query);

    return (
        <div>
          <div className="flex flex-col justify-center w-full my-4">
            <Search />
          </div>
          <div className="p-4 flex flex-col justify-center rounded-lg bg-gray-50 w-full">
            <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                Results for "{query}"
            </p>
            {results.map((id: number) => (
                <div key={id} className="p-4 flex flex-col justify-center rounded-lg bg-blue-50 w-full my-2">
                    <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                        {id}
                    </p>
                </div>
            ))}
          </div>
        </div>
    );
}
