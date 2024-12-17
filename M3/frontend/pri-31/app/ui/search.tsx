'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';

export default function Search(
  {
    placeholder,
    semantic
  } : {
    placeholder: string
    semantic: boolean
  }
) {
  const router = useRouter();

  function handleSearch(term: string) {
    const uri = ('/results'
      + (semantic? '_semantic' : '')
      + '?query'
      + '=' + term);
    console.log(uri);
    router.push(uri);
  }

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <input
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.currentTarget.value !== "") {
            handleSearch(e.currentTarget.value);
          }
        }}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"/>
    </div>
  );
}
