'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

type Filters = {
  keyword: string;
  priceFrom: string;
  priceTo: string;
  access: boolean;
  onSale: boolean;
  brands: string[];
  types: string[];
  brightness: string[];
};

const SortingSideBar = () => {
  const pathname = usePathname()
  const pathParts = pathname?.split('/').filter(Boolean) || [];
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>({
    keyword: '',
    priceFrom: '',
    priceTo: '',
    access: false,
    onSale: false,
    brands: [],
    types: [],
    brightness: [],
  });

  const brands = [
    'Optoma',
    'InFocus',
    'LG',
    'SONNOC',
    'NEC',
    'ABIRA',
    'DIELLO',
    'EPSON',
  ];
  const types = ['Laser', 'Lamp'];
  const brightness = ['до 5000', 'от 5000 до 7000', 'свыше 7000'];

  const handleCheckboxChange = (
    field: 'brands' | 'types' | 'brightness',
    value: string
  ) => {
    setFilters((prev) => {
      const list = prev[field];
      const updated = list.includes(value)
        ? list.filter((item) => item !== value)
        : [...list, value];
      return { ...prev, [field]: updated };
    });
  };

  const buildURLWithFilters = (filters: {
    keyword: string;
    priceFrom: string;
    priceTo: string;
    access: boolean;
    onSale: boolean;
    brands: string[];
    types: string[];
    brightness: string[];
  }) => {
    const url = new URL('http://localhost:3000/projectors');
  
    if (filters.keyword) url.searchParams.set('keyword', filters.keyword);
    if (filters.priceFrom) url.searchParams.set('priceFrom', filters.priceFrom);
    if (filters.priceTo) url.searchParams.set('priceTo', filters.priceTo);
    if (filters.access) url.searchParams.set('access', '1');
    if (filters.onSale) url.searchParams.set('onSale', '1');
    if (filters.brands.length) url.searchParams.set('brand', filters.brands.join(','));
    if (filters.types.length) url.searchParams.set('type', filters.types.join(','));
    if (filters.brightness.length) url.searchParams.set('brightness', filters.brightness.join(','));
  
    return url.pathname + url.search;
  };

  const pickUpProducts: () => void = () => {
    const url = buildURLWithFilters(filters)
    router.push(url);    
  };

  const clearFilters: () => void = () => {
    setFilters({
      keyword: '',
      priceFrom: '',
      priceTo: '',
      access: false,
      onSale: false,
      brands: [],
      types: [],
      brightness: [],
    });  
    router.push("/projectors")  
  };

  const isCurrentBrand = brands.includes(pathParts[pathParts.length-1])

  return (
    <aside className="w-full max-w-[250px] space-y-6 border-r border-gray-200 p-4 text-sm">
      <div>
        <label className="mb-1 block font-medium">Ключевая фраза</label>
        <input
          type="text"
          value={filters.keyword}
          onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
          className="w-full rounded border border-gray-300 px-2 py-1"
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Цена</label>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="От"
            value={filters.priceFrom}
            onChange={(e) =>
              setFilters({ ...filters, priceFrom: e.target.value })
            }
            className="w-1/2 rounded border border-gray-300 px-2 py-1"
          />
          <input
            type="number"
            placeholder="До"
            value={filters.priceTo}
            onChange={(e) =>
              setFilters({ ...filters, priceTo: e.target.value })
            }
            className="w-1/2 rounded border border-gray-300 px-2 py-1"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block font-medium">Товары</label>
        <div className="space-y-1">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={filters.access}
              onChange={(e) =>
                setFilters({ ...filters, access: e.target.checked })
              }
            />
            В наличии
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onSale}
              onChange={(e) =>
                setFilters({ ...filters, onSale: e.target.checked })
              }
            />
            Со скидкой
          </label>
        </div>
      </div>

      {isCurrentBrand && <div>
        <label className="mb-1 block font-medium">Производитель</label>
        <div className="max-h-[120px] space-y-1 overflow-y-auto">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckboxChange('brands', brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>}

      <div>
        <label className="mb-1 block font-medium">Тип источника света</label>
        <div className="space-y-1">
          {types.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => handleCheckboxChange('types', type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="mb-1 block font-medium">Яркость</label>
        <div className="space-y-1">
          {brightness.map((type) => (
            <label
              key={type}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={filters.brightness.includes(type)}
                onChange={() => handleCheckboxChange('brightness', type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
      <div className="flex space-x-3 pt-4">
        <button
          onClick={pickUpProducts}
          className="flex-1 cursor-pointer rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500"
        >
          Подобрать
        </button>
        <button
          onClick={clearFilters}
          className="flex-1 cursor-pointer rounded bg-gray-300 px-4 py-2 text-sm font-semibold text-white hover:bg-yellow-500"
        >
          Очистить
        </button>
      </div>
    </aside>
  );
};

export default SortingSideBar;
