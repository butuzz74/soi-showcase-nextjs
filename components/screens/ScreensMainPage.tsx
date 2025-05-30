import Image from 'next/image';
import { configForScreensPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from '../CardForChoiceBrand';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsScreens } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import ButtonAddProduct from '../../uiComponents/ButtonAddProduct';

async function ScreensMainPage({
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/screen?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const screens: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between" >
        <Breadcrumbs data={configBreadcumsScreens} />
        <ButtonAddProduct path="/add/screen">
          Добавить экран
        </ButtonAddProduct>
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
        <div className="ml-4 flex flex-col">
          <h1>Мониторы</h1>
          <p>
            На портале Projektors.by вы можете приобрести проекционный экран с
            консультацией, доставкой, установкой и настройкой. Перед покупкой
            проекционного экрана важно определить его назначение и условия
            эксплуатации. Выбор модели проекционного экрана должен быть основан
            на конкретных потребностях и условиях использования. Наши
            специалисты помогут определить необходимые параметры и подберут
            наилучшую модель, учитывая особенности помещения, область применения
            и бюджет клиента.
          </p>
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
          <div className="grid grid-cols-3 gap-4">
            {configForScreensPage.map((elem, index) => (
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
            {screens.products.length !== 0 ? (
              <ProductsBlock
                products={screens.products}
                layout={currentLayout}
                currentProduct={'screens'}
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
            currentProduct={'screens'}
          />
          <div>
            <p>
              Подбор модели проекционного экрана зависит от нескольких ключевых
              факторов, включая ваши потребности, бюджет, особенности помещения
              и предполагаемое использование. Вот несколько шагов, которые
              помогут вам выбрать подходящую модель: 1. Определите ваш бюджет.
              Проекционные экраны бывают в разных ценовых категориях — от
              доступных до премиальных. Решите, сколько вы готовы потратить на
              покупку экрана, чтобы сразу отсеять неподходящие варианты. 2.
              Уточните основные потребности. Продумайте, где и для чего вы
              планируете использовать экран — для домашнего кинотеатра, офисных
              презентаций, в учебных аудиториях или, возможно, для игр. Это
              поможет сузить круг поиска до наиболее подходящих типов экранов
              (настенные, моторизованные, мобильные и т.д.). 3. Обратите
              внимание на технические характеристики. Учитывайте формат и размер
              экрана, тип проекционной поверхности (матовое покрытие, с
              усилением яркости и т.п.), угол обзора и совместимость с вашим
              проектором. Эти параметры важны для получения качественного и
              комфортного изображения. 4. Посоветуйтесь со специалистами. Если у
              вас остались вопросы или вы не уверены в выборе, обратитесь за
              консультацией к специалистам в магазинах или на профильных форумах
              — опытные пользователи помогут определиться. Подбор проекционного
              экрана — индивидуальный процесс. Важно выбрать модель, которая
              наилучшим образом соответствует вашим задачам и условиям
              эксплуатации. Потерялись в многообразии моделей? Позвоните или
              напишите нам — мы поможем подобрать оптимальный вариант под вашу
              задачу!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreensMainPage;
