import Image from 'next/image';
import { configForCommutationsPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from '../projectors/CardForChoiceBrand';
import CommutationsBlock from '../commutations/CommutationsBlock';
import { ProjectorsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsCommutations } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';

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
  const projectors: ProjectorsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div>
        <Breadcrumbs data={configBreadcumsCommutations} />
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
        Кол-во товаров: {projectors.totalProjectors}
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
            {projectors.projectors.length !== 0 ? (
              <CommutationsBlock
                projectors={projectors.projectors}
                layout={currentLayout}
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
            totalPages={projectors.totalPages}
            currentPage={projectors.currentPage}
            totalProduct={projectors.totalProjectors}
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
