import { CatalogType } from '../type/types';

export const productForCatalog: CatalogType[] = [
  {
    title: 'Проекторы',
    icon: 'https://ik.imagekit.io/dku5gkauv/projectors/1714141638557-optoma-ZU860.jpg?updatedAt=1739909394002',
    link: '/projectors',
    data: [
      {
        name: 'Проекторы OPTOMA',
        linkForTransition: '/projectors/brand/optoma',
      },
      {
        name: 'Проекторы INFOCUS',
        linkForTransition: '/projectors/brand/infocus',
      },
      { name: 'Проекторы LG', linkForTransition: '/projectors/brand/lg' },
      {
        name: 'Проекторы SONNOC',
        linkForTransition: '/projectors/brand/sonnoc',
      },
      { name: 'Проекторы NEC', linkForTransition: '/projectors/brand/nec' },
      { name: 'Проекторы ABIRA', linkForTransition: '/projectors/brand/abira' },
      {
        name: 'Проекторы DIELLO',
        linkForTransition: '/projectors/brand/diello',
      },
      { name: 'Проекторы EPSON', linkForTransition: '/projectors/brand/epson' },
      { name: 'Аксессуары для проектора', linkForTransition: '/' },
    ],
  },
  {
    title: 'Экраны для проекторов',
    icon: 'https://ik.imagekit.io/dku5gkauv/progectorScreen/ScreenForMainPage.jpg?updatedAt=1743167693462',
    link: '/screens',
    data: [
      { name: 'Экраны Lumien', linkForTransition: '/screens/brand/lumien' },
      { name: 'Экраны Projecta', linkForTransition: '/screens/brand/projecta' },
    ],
  },
  {
    title: 'Кронштейны и крепления',
    icon: 'https://ik.imagekit.io/dku5gkauv/brackets/BracketForMainPage2.jpg?updatedAt=1743169226202',
    link: '/brackets',
    data: [
      { name: 'Кронштейны Wize', linkForTransition: '/brackets/brand/wize' },
    ],
  },
  {
    title: 'Мониторы и панели',
    icon: 'https://ik.imagekit.io/dku5gkauv/displays/DisplayForMainPage.jfif?updatedAt=1746608301555',
    link: '/displays',
    data: [
      { name: 'Мониторы VESTEL', linkForTransition: '/displays/brand/vestel' },
      { name: 'Мониторы Sharp', linkForTransition: '/displays/brand/sharp' },
    ],
  },
  {
    title: 'Готовые решения',
    icon: 'https://ik.imagekit.io/dku5gkauv/readySolutions/ReadySolutionForMainPage.jfif?updatedAt=1743167937855',
    link: '/sets',
  },
  {
    title: 'AV-коммутация',
    icon: 'https://ik.imagekit.io/dku5gkauv/AVCommutation/AVComForMainPage.jfif?updatedAt=1743167994451',
    link: '/commutations',
    data: [
      {
        name: 'Коммутационное оборудование SCT',
        linkForTransition: '/commutations/brand/sct',
      },
      {
        name: 'Коммутационное оборудование Aten',
        linkForTransition: '/commutations/brand/aten',
      },
      {
        name: 'Коммутационное оборудование Kramer',
        linkForTransition: '/commutations/brand/kramer',
      },
    ],
  },
];
