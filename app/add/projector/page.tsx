import NewProductForm from '../../../components/NewProductForm';
import { catalogConfig } from '../../../config/configFormProduct';
import { redirect } from 'next/navigation';
import { ProductType } from '../../../type/types';
async function createProduct(data: FormData) {
  'use server';
  const obj = Object.fromEntries(data); 
  obj.access = obj.access === "on" ? "true" : "false";
    
  const newProjector = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/projector`,
    {
      method: 'POST',     
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(obj),
      cache: 'no-store',
    }
  ); 
  const res : ProductType = await newProjector.json()
  redirect(`/projectors/${res._id}`) 
}

const AddProjectorForm = () => {
  return <NewProductForm action={createProduct} data={catalogConfig} />;
};
export default AddProjectorForm;
