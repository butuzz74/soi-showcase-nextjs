'use client';

import { ChangeEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductSearchCard from './ProductSearchCard';

type ResultSearch = {
  _id: string;
  model: string;
  image: string;
  collection: string;  
};

type SearchSectionProps = {
  searchCancel: () => void
}

function SearchSection({searchCancel}: SearchSectionProps): React.ReactNode {
  const [data, setData] = useState<string>('');
  const [result, setResult] = useState<ResultSearch[]>([]);  

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData(value);

    if (value.length >= 2) {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/search?q=${value}`,
          { cache: 'no-store' }
        );
        const json = await response.json();
        setResult(json.results);
      } catch (error) {
        console.log(error);
      }
    } else {
      setResult([]);
    }
  };

  return (
    <div className="w-full space-y-6 bg-white p-6 shadow-lg">
      <div>
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-900"
        >
          Найти товар
        </label>
        <div className="mt-2">
          <input
            type="search"
            name="search"
            id="search"
            onChange={handleOnChange}
            autoComplete="off"
            placeholder="Например: Optoma или ZH506"
            className="block w-full rounded-md border border-gray-300 px-4 py-2 text-base text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
          />
        </div>
      </div>

      {result.length > 0 ? (
        <div className="max-h-[300px] overflow-y-auto pr-2">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <AnimatePresence>
              {result.map((elem, index) => (
                <motion.div
                  key={elem._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="rounded-lg border border-gray-200 p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <ProductSearchCard
                    id={elem._id}
                    model={elem.model}
                    image={elem.image}
                    collection={elem.collection}
                    onClick={searchCancel}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      ) : (
        data.length > 2 && (
          <div className="text-gray-500">К сожалению, ничего не найдено</div>
        )
      )}
    </div>
  );
}

export default SearchSection;
