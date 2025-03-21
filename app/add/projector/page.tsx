import NewProductForm from '../../../components/NewProductForm';
import { productFormConfig } from '../../../config/configFormProduct';
async function createProduct(data: FormData) {
  'use server';
  const { brand, type, model, price, description, image, brightness, access } =
    Object.fromEntries(data);
}

const AddProjectorForm = () => {
  return <NewProductForm action={createProduct} data={productFormConfig} />;
};
export default AddProjectorForm;
