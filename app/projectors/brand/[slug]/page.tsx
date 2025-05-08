import { Metadata } from 'next';
import ProjectorBrandPage from '../../../../components/projectors/ProjectorBrandPage';

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
    type?: string;
    brightness?: string;       
  }>;
  params: Promise<{slug: string}>

};

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

async function ProjectorBrand({searchParams, params}: Props) {  
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
    <ProjectorBrandPage
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

export default ProjectorBrand;
