import { Metadata } from 'next';
import ScreensMainPage from '../../components/screens/ScreensMainPage';

type Props = {
  searchParams: Promise<{
    page?: string;
    perPage?: '6' | '12' | '24';
    layout?: 'grid' | 'list';
    sort?: 'price-asc' | 'price-desc' | 'newest';
    keyword?: string;
    priceFrom?: string;
    priceTo?: string;
    access?: boolean;
    onSale?: boolean;
    brand?: string;
    type?: string;
    brightness?: string;
  }>;
};

type SearchParams = Promise<{ page?: string }>;
export const metadata: Metadata = {
  title: 'SOI-Screens',
};

async function ScreensAll({ searchParams }: Props) {
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
    <ScreensMainPage
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

export default ScreensAll;