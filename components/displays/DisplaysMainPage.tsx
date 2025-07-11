import Image from 'next/image';
import { configForDisplaysPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from '../CardForChoiceBrand';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsDisplays } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import ButtonAddProduct from '../../uiComponents/ButtonAddProduct';

async function DisplaysMainPage({
  currentPage,
  currentperPage,
  currentLayout,
  currentSort,
  currentBrand,
  currentType,
  currentAccess,
  currentPriceFrom,
  currentPriceTo,
}: {
  currentPage: number;
  currentperPage: number;
  currentLayout: string;
  currentSort: string;
  currentBrand: string;
  currentType: string;
  currentAccess: boolean;
  currentPriceFrom: string;
  currentPriceTo: string;
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/display?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const displays: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between">
        <Breadcrumbs data={configBreadcumsDisplays} />
        <ButtonAddProduct path="/add/display">
          Добавить монитор
        </ButtonAddProduct>
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/displays/DisplayForMainPage.jfif?updatedAt=1746608301555'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="ml-4 flex flex-col">
          <h1>Мониторы</h1>
          <p>
            На портале Projektors.by вы можете приобрести монитор с
            консультацией, доставкой, установкой и настройкой. Перед покупкой
            монитора важно определить его назначение, источники подключения и
            условия эксплуатации. Выбор модели монитора должен быть основан на
            конкретных потребностях и условиях использования. Наши специалисты
            помогут определить необходимые параметры и подберут наилучшую
            модель, учитывая особенности помещения, область применения и бюджет
            клиента.
          </p>
        </div>
      </div>
      <div className="w-full p-2 font-semibold text-gray-800">
        Кол-во товаров: {displays.totalProducts}
      </div>
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div>
          <SortingSideBar />
        </div>
        <div className="grid grid-rows-[auto_auto_1fr] gap-4">
          <div className="grid grid-cols-3 gap-4">
            {configForDisplaysPage.map((elem, index) => (
              <CardForChoiceBrand
                key={index}
                linkImage={elem.image}
                title={elem.title}
                linkForHref={elem.linkForTransition}
              />
            ))}
          </div>
          <div>
            <SortingBar />
            {displays.products.length !== 0 ? (
              <ProductsBlock
                products={displays.products}
                layout={currentLayout}
                currentProduct={'displays'}
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
            totalPages={displays.totalPages}
            currentPage={displays.currentPage}
            totalProduct={displays.totalProducts}
            queryParams={queryParams}
            currentperPage={currentperPage}
            currentProduct={'displays'}
          />
          <div>
            <p>
              Подбор модели монитора зависит от нескольких ключевых факторов,
              включая ваши потребности, бюджет, особенности помещения и
              предполагаемое использование. Вот несколько шагов, которые могут
              помочь вам выбрать подходящую модель: Определите ваш бюджет:
              Мониторы доступны в различных ценовых категориях, от бюджетных до
              премиум. Определите, сколько вы готовы потратить на приобретение
              монитора. Определите основные потребности: Подумайте, для чего вам
              нужен монитор. Например, вы планируете использовать его для
              домашнего использования, презентаций в офисе, образовательных
              целей или для игр. Это поможет сузить выбор до определенных типов
              мониторов. Рассмотрите технические характеристики: Обратите
              внимание на такие параметры, как разрешение изображения (обычно
              указывается в формате ширина x высота, например, 1920 x 1080 для
              Full HD), яркость, контрастность. Это поможет вам понять, как
              мониторы работают на практике и соответствуют ли они вашим
              ожиданиям. Обратитесь к специалистам: Если у вас остались сомнения
              или вам нужна дополнительная консультация, обратитесь к
              специалистам в магазинах или форумам, где опытные пользователи
              могут поделиться своими рекомендациями. Подбор монитора – это
              индивидуальный процесс, и важно выбрать модель, которая наилучшим
              образом соответствует вашим потребностям и ожиданиям. Потерялись в
              моногообразии моделей? Позвоните или напишите нам и мы поможем с
              выбором оптимальной модели под вашу задачу.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaysMainPage;
