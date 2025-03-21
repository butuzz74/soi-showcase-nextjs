import { FieldConfigForFormProduct } from '../type/types';

export const productFormConfig: FieldConfigForFormProduct[] = [
  { name: 'brand', label: 'Brand', type: 'text' },
  { name: 'type', label: 'Type', type: 'text' },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'brightness', label: 'Brightness', type: 'text' },
  { name: 'access', label: 'Available', type: 'text' },
];
