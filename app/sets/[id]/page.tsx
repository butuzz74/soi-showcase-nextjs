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
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/set/${id}`,
    { cache: 'no-store' }
  );
  const set: ProductType = await data.json();
  if (!set) {
    return {
      title: 'Set Not Found',
      description: 'Details about this set are not available.',
    };
  }

  return {
    title: set.model,
    description: set.description,
  };
}

async function SetPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/set/${id}`,
    { cache: 'no-store' }
  );
  const display: ProductType = await data.json();

  return (
    <div className="mx-auto my-8 flex h-full w-full flex-col items-center justify-between rounded-lg border border-gray-200 bg-white shadow-lg">
      <ProductCardOne
        id={display?._id}
        image={display?.image}
        price={display?.price}
        model={display?.model}
        type={display?.type}
        brand={display?.brand}
        access={display?.access}
        description={display?.description}
      />
      <div className="mb-8 flex justify-center">
        {session ? (
          <NavigationButton
            text="Редактировать"
            customAction={`/edit?currentProduct=set&id=${display._id}`}
          />
        ) : null}
        <NavigationButton text="Назад" back={true} />
      </div>
    </div>
  );
}

export default SetPage;
