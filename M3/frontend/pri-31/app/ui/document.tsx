import { consolas, lusitana } from "./fonts";

export function Date({ date }: { date: String }) {
    date = String(date);
    date = date.replace("T", ", at ").substring(0, date.length - 1);
    return (
        <span>
            {date}
        </span>
    );
}

export function Tags({ tags }: { tags: String }) {
    tags = String(tags);
    tags = tags.substring(2, tags.length - 2);
    const arr: String[] = tags.split("' '");
    return (
        <span>
            {arr.map((tag, index) => (
                <span className={`${consolas.className} text-orange-800 text-lg`} key={index}>
                    {tag}
                    <span className={`${lusitana.className} text-gray-800 text-lg`} key={index}>
                        {index < arr.length - 1 && ', '}
                    </span>
                </span>
            ))}
        </span>
    );
}
