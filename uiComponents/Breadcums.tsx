'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { BreadCumsType } from '../type/types';

const Breadcrumbs = ({ data }: { data: BreadCumsType }) => {
  const pathname = usePathname();
  const pathParts = pathname?.split('/').filter(Boolean) || [];

  let pathPartsWithoutBrand: string[] = [];

  if (pathParts.length !== 0) {
    const arr = pathParts.filter((elem) => elem !== 'brand');

    if (arr.length !== 0) {
      pathPartsWithoutBrand = pathPartsWithoutBrand.concat(arr);
    }
  }
  return (
    <nav aria-label="breadcrumb" className='w-full'>
      <ol className="flex space-x-2 text-sm text-gray-700 w-full">
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>/</li>
        {pathPartsWithoutBrand.map((part, index) => {
          const pathName = data[part] || part;
          const isLast = index === pathPartsWithoutBrand.length - 1;
          return (
            <div key={index} className='flex'>
              <li>
                <Link
                  href={`/${pathParts.slice(0, index + 1).join('/')}`}
                  className={isLast ? 'font-bold text-red-500 pointer-events-none ' : ''}
                >
                  {pathName}
                </Link>
              </li>
              {index < pathPartsWithoutBrand.length - 1 && <li>/</li>}
            </div>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
