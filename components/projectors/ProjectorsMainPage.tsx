import Image from 'next/image';
import { configForProjectorsPage } from '../../config/configForProjectorsPage';
import CardForChoiceBrand from './CardForChoiceBrand';
import ProjectorsBlock from './ProjectorsBlock';
import { ProjectorsBlockType } from '../../type/types';
import Breadcrumbs from '../../uiComponents/Breadcums';
import { configBreadcums } from '../../config/configForBreadcums';
import Pagination from '../../uiComponents/Pagination';
import SortingBar from '../SortingBar';
import SortingSideBar from '../../uiComponents/SortingSideBar';
import NoticeBlock from '../../uiComponents/NoticeBlock';

async function ProjectorsMainPage({
  currentPage,
  currentperPage,
  currentLayout,
  currentSort,
  currentBrand,
  currentType,
  currentAccess,
  currentPriceFrom,
  currentPriceTo
}: {
  currentPage: number;
  currentperPage: number;
  currentLayout: string;
  currentSort: string;
  currentBrand: string;
  currentType: string;
  currentAccess: boolean;
  currentPriceFrom: string;
  currentPriceTo: string
}) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projector?page=${currentPage}&perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`,
    { cache: 'no-store' }
  );
  const projectors: ProjectorsBlockType = await data.json();
  const queryParams = `perPage=${currentperPage}&layout=${currentLayout}&sort=${currentSort}&brand=${currentBrand}&type=${currentType}&access=${currentAccess}&priceFrom=${currentPriceFrom}&priceTo=${currentPriceTo}`   

  return (
    <div className="mt-10 text-black">
      <div>
        <Breadcrumbs data={configBreadcums} />
      </div>
      <div className="flex">
        <Image
          src={
            'https://ik.imagekit.io/dku5gkauv/projectors/1714141638557-optoma-ZU860.jpg?updatedAt=1739909394002'
          }
          alt="image"
          width={200}
          height={200}
        />
        <div className="ml-4 flex flex-col">
          <h1>Проекторы</h1>
          <p>
            На портале Projektors.by вы можете приобрести проектор с
            консультацией, доставкой, установкой и настройкой. Перед покупкой
            проектора важно определить его назначение, источники подключения и
            условия эксплуатации. Выбор модели проектора должен быть основан на
            конкретных потребностях и условиях использования. Наши специалисты
            помогут определить необходимые параметры и подберут наилучшую
            модель, учитывая особенности помещения, область применения и бюджет
            клиента.
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
            {configForProjectorsPage.map((elem, index) => (
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
              <ProjectorsBlock
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
          />
          <div>
            <p>
              Подбор модели проектора зависит от нескольких ключевых факторов,
              включая ваши потребности, бюджет, особенности помещения и
              предполагаемое использование. Вот несколько шагов, которые могут
              помочь вам выбрать подходящую модель: Определите ваш бюджет:
              Проекторы доступны в различных ценовых категориях, от бюджетных до
              премиум. Определите, сколько вы готовы потратить на приобретение
              проектора. Определите основные потребности: Подумайте, для чего
              вам нужен проектор. Например, вы планируете использовать его для
              домашнего кинотеатра, презентаций в офисе, образовательных целей
              или для игр. Это поможет сузить выбор до определенных типов
              проекторов. Рассмотрите технические характеристики: Обратите
              внимание на такие параметры, как разрешение изображения (обычно
              указывается в формате ширина x высота, например, 1920 x 1080 для
              Full HD), яркость (измеряется в люменах), контрастность, тип лампы
              или источника света, а также оптические характеристики, такие как
              расстояние проекции и коэффициент увеличения. Учитывайте
              особенности помещения: Подумайте о размере помещения, в котором
              будет использоваться проектор, а также о том, есть ли возможность
              контролировать освещение. Например, для небольших помещений может
              быть лучше выбрать проектор с коротким фокусным расстоянием.
              Исследуйте отзывы и рейтинги: Посмотрите отзывы пользователей и
              рейтинги различных моделей проекторов. Это поможет вам понять, как
              проекторы работают на практике и соответствуют ли они вашим
              ожиданиям. Обратитесь к специалистам: Если у вас остались сомнения
              или вам нужна дополнительная консультация, обратитесь к
              специалистам в магазинах или форумам, где опытные пользователи
              могут поделиться своими рекомендациями. Подбор проектора – это
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

export default ProjectorsMainPage;
