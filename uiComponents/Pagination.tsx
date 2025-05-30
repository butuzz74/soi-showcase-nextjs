'use client';
import Link from 'next/link';
function Pagination({
  totalProduct,
  currentPage,
  totalPages,
  queryParams,
  currentperPage,
  currentProduct,
  currentBrand,
}: {
  totalProduct: number;
  currentPage: number;
  totalPages: number;
  queryParams: string;
  currentperPage: number | 6;
  currentProduct: string;
  currentBrand?: string;
}) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing
            <span className="font-medium"> 1 </span>
            to
            <span className="font-medium"> {currentperPage} </span>
            of
            <span className="font-medium"> {totalProduct} </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-xs"
            aria-label="Pagination"
          >
            <Link
              href={
                currentPage === 1
                  ? ''
                  : currentBrand
                    ? `/${currentProduct}/brand/${currentBrand}?page=${currentPage - 1}&` +
                      queryParams
                    : `/${currentProduct}?page=${currentPage - 1}&` +
                      queryParams
              }
              onClick={(e) => {
                if (currentPage === 1) {
                  e.preventDefault();
                }
              }}
              aria-disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 ${
                currentPage === 1
                  ? 'cursor-not-allowed bg-gray-100 text-gray-300'
                  : 'text-gray-400 hover:bg-gray-50'
              } `}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            {pages.map((elem, index) => (
              <Link
                key={index}
                href={
                  elem === currentPage
                    ? ''
                    : currentBrand
                      ? `/${currentProduct}/brand/${currentBrand}?page=${elem}&` +
                        queryParams
                      : `/${currentProduct}?page=${elem}&` + queryParams
                }
                onClick={(e) => {
                  if (elem === currentPage) {
                    e.preventDefault();
                  }
                }}
                className={
                  elem === currentPage
                    ? 'relative z-10 inline-flex items-center bg-red-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'
                    : 'relative z-10 inline-flex items-center bg-gray-400 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300'
                }
              >
                {elem}
              </Link>
            ))}
            <Link
              href={
                currentPage >= totalPages
                  ? ''
                  : currentBrand
                    ? `/${currentProduct}/brand/${currentBrand}?page=${currentPage + 1}&` +
                      queryParams
                    : `/${currentProduct}?page=${currentPage + 1}&` +
                      queryParams
              }
              onClick={(e) => {
                if (currentPage >= totalPages) {
                  e.preventDefault();
                }
              }}
              aria-disabled={currentPage >= totalPages}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-gray-300 ring-inset focus:z-20 focus:outline-offset-0 ${
                currentPage >= totalPages
                  ? 'cursor-not-allowed bg-gray-100 text-gray-300'
                  : 'text-gray-400 hover:bg-gray-50'
              } `}
            >
              <span className="sr-only">Next</span>
              <svg
                className="size-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fillRule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
