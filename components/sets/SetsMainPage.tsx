import Image from 'next/image';
import { configForBracketsPage } from '../../config/configForProjectorsPage';
//import CardForChoiceBrand from '../projectors/CardForChoiceBrand';
import SetsBlock from '../sets/SetsBlock';
import { ProjectorsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcumsSets } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';

async function SetsMainPage({
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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/set?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const projectors: ProjectorsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`;

  return (
    <div className="mt-10 text-black">
      <div>
        <Breadcrumbs data={configBreadcumsSets} />
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/readySolutions/ReadySolutionForMainPage.jfif?updatedAt=1743167937855'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="ml-4 flex flex-col">
          <h1>Готовые комплекты</h1>
          <p>
            На портале Projektors.by вы можете приобрести готовые проекционные
            комплекты с консультацией, доставкой, установкой и настройкой. Такие
            комплекты включают всё необходимое для запуска системы проекции:
            проектор, экран, кронштейн и кабельную продукцию. Перед покупкой
            важно определить тип помещения, цели использования и предполагаемые
            условия эксплуатации. Выбор подходящего комплекта зависит от
            множества факторов: размеров помещения, уровня освещённости,
            необходимого разрешения и диагонали изображения. Наши специалисты
            помогут точно определить оптимальную конфигурацию и подберут
            решение, которое обеспечит качественное изображение и комфорт в
            использовании. Готовые проекционные комплекты — это удобный и
            экономичный способ организовать систему отображения "под ключ", без
            необходимости подбора компонентов по отдельности. Мы учтём все
            нюансы — от высоты потолка до типа подключения — и предложим
            решение, полностью соответствующее вашим задачам и бюджету.
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
          <div>
            <SortingBar />
            {projectors.projectors.length !== 0 ? (
              <SetsBlock
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
            currentProduct={'sets'}
          />
          <div>
            <p>
              Подбор готового проекционного комплекта зависит от нескольких
              ключевых факторов: ваших задач, особенностей помещения, типа
              контента и бюджета. Ниже приведены основные шаги, которые помогут
              вам выбрать подходящее решение: Определите ваш бюджет.
              Проекционные комплекты представлены в разных ценовых категориях —
              от базовых решений для дома или офиса до профессиональных систем
              для залов и учебных аудиторий. Заранее определив допустимую сумму,
              вы сможете быстрее сориентироваться в ассортименте и
              сосредоточиться на подходящих вариантах. Уточните основные
              потребности. Подумайте, где и как будет использоваться система —
              для домашних киносеансов, бизнес-презентаций, образовательных
              целей или цифровых вывесок. Это поможет подобрать комплект с
              нужными характеристиками: яркостью, разрешением, типом экрана и
              методами крепления. Обратите внимание на технические параметры.
              Важно учитывать размеры помещения, уровень освещённости,
              расстояние до экрана, а также тип подключения к источникам
              сигнала. Эти детали напрямую влияют на качество изображения и
              комфорт использования проекционной системы. Проконсультируйтесь со
              специалистами. Если вы не уверены в выборе или хотите получить
              максимально сбалансированное решение, обратитесь к нашим
              экспертам. Мы подберём комплект под конкретные задачи и условия,
              предложим варианты установки и обеспечим полную поддержку — от
              консультации до монтажа.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetsMainPage;
