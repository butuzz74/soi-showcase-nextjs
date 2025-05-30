import { Metadata } from 'next';
import CommutationBrandPage from '../../../../components/commutations/CommutationBrandPage';
import { BrandPageProps } from '../../../../type/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const {slug} = await params;
  return {
    title: slug,    
  };
}

async function CommutationBrand({searchParams, params}: BrandPageProps) {  
  const {
    page,
    perPage,
    layout,
    sort,    
    type,
    access,
    priceFrom,
    priceTo  
  } = await searchParams;
  const {slug} = await params
  const currentPage = parseInt(page || '1');
  const currentperPage = parseInt(perPage || '6');
  const currentLayout = layout || 'grid';
  const currentSort = sort || 'price-asc';  
  const currentType = type || '';
  const currentAccess = access || false;
  const currentPriceFrom = priceFrom || '0';
  const currentPriceTo = priceTo || '0';

  return (
    <CommutationBrandPage
      currentPage={currentPage}
      currentperPage={currentperPage}
      currentLayout={currentLayout}
      currentSort={currentSort}      
      currentType={currentType}
      currentAccess={currentAccess}
      currentPriceFrom={currentPriceFrom}
      currentPriceTo={currentPriceTo}
      currentBrand={slug}
    />
  );
}

export default CommutationBrand;

