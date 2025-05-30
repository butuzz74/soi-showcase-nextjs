import Image from 'next/image';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsScreens } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import Markdown from 'react-markdown';

async function ScreenBrandPage({
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/screen/brand/${currentBrand}?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const screens: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between">
        <Breadcrumbs data={configBreadcumsScreens} />        
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/progectorScreen/ScreenForMainPage.jpg?updatedAt=1743167693462'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="prose ml-4 flex flex-col">
          <h1>Проекционные экраны {currentBrand}</h1>
          {screens.brandInfo[0].descriptionTop && (
            <Markdown>
              {screens.brandInfo[0].descriptionTop.replace(/\\n/g, '\n')}
            </Markdown>
          )}
        </div>
      </div>
      <div className="w-full p-2 font-semibold text-gray-800">
        Кол-во товаров: {screens.totalProducts}
      </div>
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div>
          <SortingSideBar />
        </div>
        <div className="grid grid-rows-[auto_auto_1fr] gap-4">
          <div>
            <SortingBar />
            {screens.products.length !== 0 ? (
              <ProductsBlock
                products={screens.products}
                layout={currentLayout}
                currentProduct={"screens"}
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
            totalPages={screens.totalPages}
            currentPage={screens.currentPage}
            totalProduct={screens.totalProducts}
            queryParams={queryParams}
            currentperPage={currentperPage}
            currentProduct={"screens"}
            currentBrand={currentBrand.toLowerCase()}
          />
          <div className="prose">
            {screens.brandInfo[0].descriptionBottom && (
              <Markdown>
                {screens.brandInfo[0].descriptionBottom.replace(
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

export default ScreenBrandPage;
