import { Metadata } from 'next';
import CommutationsMainPage from '../../components/commutations/CommutationsMainPage';
import { MainPageProps } from '../../type/types';

export const metadata: Metadata = {
  title: 'SOI-Commutations',
};

async function BracketsAll({ searchParams }: MainPageProps) {
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
    <CommutationsMainPage
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

export default BracketsAll;