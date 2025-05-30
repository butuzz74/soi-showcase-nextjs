import Image from 'next/image';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsCommutations } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import Markdown from 'react-markdown';

async function CommutationBrandPage({
  currentPage,
  currentperPage,
  currentLayout,
  currentSort,
  currentType,
  currentAccess,
  currentPriceFrom,
  currentPriceTo,
  currentBrand,
}: {
  currentPage: number;
  currentperPage: number;
  currentLayout: string;
  currentSort: string;
  currentType: string;
  currentAccess: boolean;
  currentPriceFrom: string;
  currentPriceTo: string;
  currentBrand: string;
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/commutation/brand/${currentBrand}?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const commutations: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between">
        <Breadcrumbs data={configBreadcumsCommutations} />        
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/AVCommutation/AVComForMainPage.jfif?updatedAt=1743167994451'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="prose ml-4 flex flex-col">
          <h1>Коммутационное оборудование {currentBrand}</h1>
          {commutations.brandInfo[0].descriptionTop && (
            <Markdown>
              {commutations.brandInfo[0].descriptionTop.replace(/\\n/g, '\n')}
            </Markdown>
          )}
        </div>
      </div>
      <div className="w-full p-2 font-semibold text-gray-800">
        Кол-во товаров: {commutations.totalProducts}
      </div>
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div>
          <SortingSideBar />
        </div>
        <div className="grid grid-rows-[auto_auto_1fr] gap-4">
          <div>
            <SortingBar />
            {commutations.products.length !== 0 ? (
              <ProductsBlock
                products={commutations.products}
                layout={currentLayout}
                currentProduct={"commutations"}
              />
            ) : (
              <NoticeBlock
                errorNumber={204}
                titleNotice={'Товар не найден!'}
                textNotice={
                  'Извините, по данным условиям ничего не найдено. Измените условия для поиска.'
                }
              />
            )}
          </div>
          <Pagination
            totalPages={commutations.totalPages}
            currentPage={commutations.currentPage}
            totalProduct={commutations.totalProducts}
            queryParams={queryParams}
            currentperPage={currentperPage}
            currentProduct={'commutations'}
            currentBrand={currentBrand.toLowerCase()}
          />
          <div className="prose">
            {commutations.brandInfo[0].descriptionBottom && (
              <Markdown>
                {commutations.brandInfo[0].descriptionBottom.replace(
                  /\\n/g,
                  '\n'
                )}
              </Markdown>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommutationBrandPage;
