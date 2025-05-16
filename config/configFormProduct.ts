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
  { name: 'type', label: 'Type', type: 'select', options: ["Laser", "Lamp"] },
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
    options: [
      'Vestel',
      'Sharp'
    ],
  },
  { name: 'type', label: 'Type', type: 'select', options: ["Interactive", "Digital Signage", "LCD Video Walls"] },
  { name: 'model', label: 'Model', type: 'text' },
  { name: 'price', label: 'Price', type: 'text' },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL', type: 'textarea' },
  { name: 'brightness', label: 'Brightness', type: 'text' },
  { name: 'access', label: 'Available', type: 'checkbox' },
];
