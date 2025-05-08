'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { TfiLayoutGrid3Alt, TfiLayoutListThumb } from 'react-icons/tfi'; // любые иконки можно использовать

function SortingBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [layout, setLayout] = useState(searchParams.get('layout') || 'grid');
  const [sort, setSort] = useState(searchParams.get('sort') || '');
  const [perPage, setPerPage] = useState(searchParams.get('perPage') || '6');

  const updateParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    params.set('page', '1'); 
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center justify-end gap-12 border-y py-4">
      <div className="flex items-center gap-2">
        {['6', '12', '24'].map((count) => (
          <button
            key={count}
            onClick={() => {
              setPerPage(count);
              updateParams('perPage', count);
            }}
            className={`rounded border px-3 py-1 hover:cursor-pointer ${
              perPage === count ? 'bg-yellow-500 text-white' : ''
            }`}
          >
            {count}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setLayout('grid');
            updateParams('layout', 'grid');
          }}
          className={`rounded border p-2 hover:cursor-pointer ${
            layout === 'grid' ? 'bg-yellow-500 text-white' : ''
          }`}
        >
          <TfiLayoutGrid3Alt size={20} />
        </button>
        <button
          onClick={() => {
            setLayout('list');
            updateParams('layout', 'list');
          }}
          className={`rounded border p-2 hover:cursor-pointer ${
            layout === 'list' ? 'bg-yellow-500 text-white' : ''
          }`}
        >
          <TfiLayoutListThumb size={20} />
        </button>
      </div>

      <select
        value={sort}
        onChange={(e) => {
          const value = e.target.value;
          setSort(value);
          updateParams('sort', value);
        }}
        className="rounded border px-3 py-2 hover:cursor-pointer"
      >
        <option value="">Без сортировки</option>
        <option value="price-asc">Сначала дешевые</option>
        <option value="price-desc">Сначала дорогие</option>
        <option value="newest">Сначала новые</option>
      </select>
    </div>
  );
}

export default SortingBar;
