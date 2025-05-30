import NewProductForm from '../../../components/NewProductForm';
import { catalogConfigFormBracket } from '../../../config/configFormProduct';
import { redirect } from 'next/navigation';
import { ProductType } from '../../../type/types';
async function createProduct(data: FormData) {
  'use server';
  const obj = Object.fromEntries(data);
  obj.access = obj.access === 'on' ? 'true' : 'false';

  const newSet = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bracket`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
    cache: 'no-store',
  });
  const res: ProductType = await newSet.json();
  redirect(`/brackets/${res._id}`);
}

const AddProjectorForm = () => {
  return <NewProductForm action={createProduct} data={catalogConfigFormBracket} />;
};

export default AddProjectorForm;

