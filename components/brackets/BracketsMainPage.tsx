import Image from 'next/image';
import { configForBracketsPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from '../CardForChoiceBrand';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsBrackets } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import ButtonAddProduct from '../../uiComponents/ButtonAddProduct';

async function BracketsMainPage({
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/bracket?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const brackets: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between">
        <Breadcrumbs data={configBreadcumsBrackets} />
        <ButtonAddProduct path="/add/bracket">
          Добавить кронштейн
        </ButtonAddProduct>
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/brackets/BracketForMainPage2.jpg?updatedAt=1743169226202'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="ml-4 flex flex-col">
          <h1>Кронштейны</h1>
          <p>
            На портале Projektors.by вы можете приобрести кронштейны для
            проекторов с консультацией, доставкой, установкой и настройкой.
            Перед покупкой важно определить тип проектора, особенности помещения
            и предполагаемое место установки. Выбор подходящего кронштейна
            должен основываться на весе устройства, способе крепления и угле
            наклона. Наши специалисты помогут точно определить необходимые
            параметры и подберут оптимальную модель с учётом конструкции потолка
            или стены, условий эксплуатации и бюджета клиента.
          </p>
        </div>
      </div>
      <div className="w-full p-2 font-semibold text-gray-800">
        Кол-во товаров: {brackets.totalProducts}
      </div>
      <div className="grid grid-cols-[1fr_5fr] gap-4">
        <div>
          <SortingSideBar />
        </div>
        <div className="grid grid-rows-[auto_auto_1fr] gap-4">
          <div className="grid grid-cols-3 gap-4">
            {configForBracketsPage.map((elem, index) => (
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
            {brackets.products.length !== 0 ? (
              <ProductsBlock
                products={brackets.products}
                layout={currentLayout}
                currentProduct={'brackets'}
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
            totalPages={brackets.totalPages}
            currentPage={brackets.currentPage}
            totalProduct={brackets.totalProducts}
            queryParams={queryParams}
            currentperPage={currentperPage}
            currentProduct={'brackets'}
          />
          <div>
            <p>
              Подбор кронштейна для проектора зависит от нескольких ключевых
              факторов: ваших потребностей, особенностей помещения, типа
              проектора и бюджета. Ниже приведены основные шаги, которые помогут
              выбрать подходящую модель: Определите ваш бюджет. Кронштейны
              бывают в разных ценовых категориях — от базовых до
              профессиональных. Заранее определив допустимую сумму, вы сможете
              исключить неподходящие варианты и сосредоточиться на оптимальных
              решениях. Уточните основные потребности. Подумайте, где и как
              будет использоваться проектор — в домашнем кинотеатре, офисе,
              учебной аудитории или другом помещении. Это поможет выбрать
              подходящий тип крепления: настенный, потолочный, универсальный или
              регулируемый. Учитывайте технические характеристики. Важно знать
              вес и размер проектора, необходимый угол наклона и поворота, длину
              вылета (если кронштейн выдвижной), а также тип поверхности для
              крепления. Эти параметры повлияют на безопасность установки и
              удобство использования. Проконсультируйтесь со специалистами. Если
              вы сомневаетесь в выборе, обратитесь за помощью к нашим экспертам.
              Мы поможем подобрать кронштейн с учётом всех нюансов: от
              конструкции потолка до специфики модели проектора. Выбор
              кронштейна — это не просто аксессуар, а важный элемент системы,
              влияющий на удобство и качество просмотра. Не уверены в выборе?
              Позвоните или напишите нам — мы подскажем оптимальное решение для
              вашего помещения и оборудования!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BracketsMainPage;
