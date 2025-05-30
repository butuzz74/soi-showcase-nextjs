import Image from 'next/image';
import { configForCommutationsPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from '../CardForChoiceBrand';
import ProductsBlock from '../ProductsBlock';
import { ProductsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsCommutations } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';
import ButtonAddProduct from '../../uiComponents/ButtonAddProduct';

async function CommutationsMainPage({
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/commutation?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const commutations: ProductsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div className="flex justify-between">
        <Breadcrumbs data={configBreadcumsCommutations} />
        <ButtonAddProduct path="/add/commutation">
          Добавить оборудование
        </ButtonAddProduct>
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
        <div className="ml-4 flex flex-col">
          <h1>Коммутационное оборудование</h1>
          <p>
            На портале Projektors.by вы можете приобрести коммутационное
            оборудование с консультацией, доставкой, установкой и настройкой.
            Перед покупкой важно определить тип используемой техники, требования
            к передаче сигнала и особенности инфраструктуры помещения. Выбор
            подходящего оборудования должен основываться на типах интерфейсов
            (HDMI, VGA, DVI и др.), необходимом количестве входов и выходов, а
            также расстоянии передачи сигнала. Наши специалисты помогут точно
            определить необходимые параметры и подберут оптимальное решение — от
            простых распределителей до многофункциональных матричных
            коммутаторов — с учётом задач проекта, условий эксплуатации и
            бюджета клиента.
          </p>
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
          <div className="grid grid-cols-3 gap-4">
            {configForCommutationsPage.map((elem, index) => (
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
            {commutations.products.length !== 0 ? (
              <ProductsBlock
                products={commutations.products}
                layout={currentLayout}
                currentProduct={'commutations'}
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
          />
          <div>
            <p>
              Подбор коммутационного оборудования зависит от нескольких ключевых
              факторов: ваших задач, особенностей помещения, используемой
              техники и бюджета. Ниже приведены основные шаги, которые помогут
              выбрать подходящее решение: Определите ваш бюджет. Коммутационное
              оборудование представлено в широком ценовом диапазоне — от базовых
              моделей для небольших проектов до профессиональных решений для
              сложных инсталляций. Чёткое понимание допустимой стоимости поможет
              сразу исключить неподходящие варианты и сосредоточиться на
              оптимальных. Уточните основные потребности. Продумайте, для чего и
              где будет использоваться оборудование — для конференц-залов,
              образовательных учреждений, видеостен, систем видеонаблюдения или
              презентационного оборудования. Это поможет выбрать тип устройства:
              сплиттер, переключатель, матричный коммутатор или AV-удлинитель.
              Учитывайте технические характеристики. Обратите внимание на
              количество входов и выходов, поддерживаемые интерфейсы (HDMI, DVI,
              VGA, HDBaseT и др.), максимальное разрешение, возможность передачи
              сигнала на расстояние и наличие управления по IP. Эти параметры
              критичны для стабильной и качественной работы всей системы.
              Проконсультируйтесь со специалистами. Если вы не уверены в выборе
              или не до конца понимаете технические нюансы, обратитесь к нашим
              экспертам. Мы поможем подобрать оборудование, которое будет
              полностью соответствовать вашему проекту — будь то простой офисный
              зал или сложная мультимедийная система. Звоните или пишите — мы
              подскажем лучшее решение под ваши задачи и условия!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommutationsMainPage;
