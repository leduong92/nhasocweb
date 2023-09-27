'use client';

import { createUrl } from '@/lib/utils';
import { urlParameters } from '@/util/constant';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [input, setInput] = useState<string>('');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input) {
      fetch(input);
    } else {
      router.push("/search");
    }
  }

  const handleSearchClick = () => {
    fetch(input);
  }

  const fetch = (input: string) => {
    const newParams = new URLSearchParams(searchParams.toString());

    newParams.delete(urlParameters.pageIndex);

    if (input) {
      newParams.set('q', input);
    } else {
      newParams.delete('q');
    }

    router.push(createUrl('/search', newParams));
  }


  return (
    <form onSubmit={onSubmit} className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        type="text"
        name="search"
        placeholder="Từ khoá..."
        autoComplete="off"
        onChange={(e) => setInput(e.target.value)}
        defaultValue={searchParams?.get('q') || ''}
        className="w-full rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center cursor-pointer">
        <MagnifyingGlassIcon className="h-4" onClick={() => handleSearchClick()} />
      </div>
    </form>
  );
}
