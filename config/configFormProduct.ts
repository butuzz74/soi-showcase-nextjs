import { FieldConfigForFormProduct } from '../type/types';

export const catalogConfig: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: [
      'Optoma',
      'InFocus',
      'LG',
      'Sonnoc',
      'NEC',
      'Abira',
      'Diello',
      'Epson',
    ],
  },
  { name: 'type', label: 'Type', type: 'select', options: ['Laser', 'Lamp'] },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'brightness', label: 'Brightness', type: 'text' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];

export const catalogConfigFormDisplay: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: ['Vestel', 'Sharp'],
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: ['Interactive', 'Digital Signage', 'LCD Video Walls'],
  },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'brightness', label: 'Brightness', type: 'text' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];

export const catalogConfigFormScreen: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: ['Lumien', 'Projecta'],
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: [
      'Настенно-потолочный',
      'Натяжной на раме',
      'Мобильный на штативе',
    ],
  },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];

export const catalogConfigFormBracket: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: ['Wize'],
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: ['Для проекторов'],
  },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];

export const catalogConfigFormCommutation: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: ['SCT', 'Aten', 'Kramer'],
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: ['Splitter', 'Matrix', 'Converter'],
  },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];

export const catalogConfigFormSet: FieldConfigForFormProduct[] = [
  {
    name: 'brand',
    label: 'Brand',
    type: 'select',
    options: ['Готовые комплекты'],
  },
  {
    name: 'type',
    label: 'Type',
    type: 'select',
    options: ['Ready-made set'],
  },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];
