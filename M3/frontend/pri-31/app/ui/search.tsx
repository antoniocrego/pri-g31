import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { search } from '@/app/lib/search';

export function Search() {

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <form action={search}
      className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full"
        />
      </form>
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
    </div>
  );
}
