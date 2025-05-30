import { Metadata } from 'next';
import {
  EditPageProps,
  ProductType,
  FieldConfigForFormProduct,
} from '../../type/types';
import { redirect } from 'next/navigation';
import EditProductForm from '../../components/EditProductForm';
import {
  catalogConfig,
  catalogConfigFormBracket,
  catalogConfigFormCommutation,
  catalogConfigFormDisplay,
  catalogConfigFormScreen,
  catalogConfigFormSet,
} from '../../config/configFormProduct';

function updateProduct(id: string, currentProduct: string) {
  return async function createProduct(data: FormData) {
    'use server';
    const obj = Object.fromEntries(data);
    obj.access = obj.access === 'on' ? 'true' : 'false';

    const updateProjector = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${currentProduct}/${id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        cache: 'no-store',
      }
    );
    const res: ProductType = await updateProjector.json();
    redirect(`/${currentProduct}s/${res._id}`);
  };
}

async function EditPage({ searchParams }: EditPageProps) {
  const { currentProduct, id } = await searchParams;
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/edit?currentProduct=${currentProduct}&id=${id}`,
    { cache: 'no-store' }
  );
  const product: ProductType = await data.json();

  const catalogMap: Record<string, FieldConfigForFormProduct[]> = {
    projector: catalogConfig,
    screen: catalogConfigFormScreen,
    display: catalogConfigFormDisplay,
    bracket: catalogConfigFormBracket,
    commutation: catalogConfigFormCommutation,
    set: catalogConfigFormSet,
  };

  const catalog = currentProduct ? catalogMap[currentProduct] : [];

  return (
    <div>
      {currentProduct && (
        <EditProductForm
          action={updateProduct(id, currentProduct)}
          data={catalog}
          product={product}
        />
      )}
    </div>
  );
}

export default EditPage;
