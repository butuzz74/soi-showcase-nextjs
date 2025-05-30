import NavigationButton from '../../../components/Button';
import ProductCardOne from '../../../components/ProductCardOne';
import { ProductType } from '../../../type/types';
import { Metadata } from 'next';
import { auth } from '../../../config/auth';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projector/${id}`,
    { cache: 'no-store' }
  );
  const projector: ProductType = await data.json();
  if (!projector) {
    return {
      title: 'Projector Not Found',
      description: 'Details about this projector are not available.',
    };
  }

  return {
    title: projector.model,
    description: projector.description,
  };
}

async function ProjectorPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projector/${id}`,
    { cache: 'no-store' }
  );
  const projector: ProductType = await data.json();

  return (
    <div className="mx-auto flex h-full w-full flex-col items-center justify-between rounded-lg border border-gray-200 bg-white shadow-lg">
      <ProductCardOne
        id={projector?._id}
        image={projector?.image}
        price={projector?.price}
        model={projector?.model}
        type={projector?.type}
        brand={projector?.brand}
        access={projector?.access}
        description={projector?.description}
      />
      <div className="flex justify-center">
        {session ? (
          <NavigationButton
            text="Редактировать"
            customAction={`/edit?currentProduct=projector&id=${projector._id}`}
          />
        ) : null}
        <NavigationButton text="Назад" back={true} />
      </div>
    </div>
  );
}

export default ProjectorPage;
