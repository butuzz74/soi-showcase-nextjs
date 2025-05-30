import { Metadata } from 'next';
import ProjectorsMainPage from '../../components/projectors/ProjectorsMainPage';
import { MainPageProps } from '../../type/types';

export const metadata: Metadata = {
  title: 'SOI-Projectors',
};

async function ProjectorsAll({ searchParams }: MainPageProps) {
  const {
    page,
    perPage,
    layout,
    sort,
    brand,
    type,
    access,
    priceFrom,
    priceTo,
  } = await searchParams;

  const currentPage = parseInt(page || '1');
  const currentperPage = parseInt(perPage || '6');
  const currentLayout = layout || 'grid';
  const currentSort = sort || 'price-asc';
  const currentBrand = brand || '';
  const currentType = type || '';
  const currentAccess = access || false;
  const currentPriceFrom = priceFrom || '0';
  const currentPriceTo = priceTo || '0';

  return (
    <ProjectorsMainPage
      currentPage={currentPage}
      currentperPage={currentperPage}
      currentLayout={currentLayout}
      currentSort={currentSort}
      currentBrand={currentBrand}
      currentType={currentType}
      currentAccess={currentAccess}
      currentPriceFrom={currentPriceFrom}
      currentPriceTo={currentPriceTo}
    />
  );
}

export default ProjectorsAll;
