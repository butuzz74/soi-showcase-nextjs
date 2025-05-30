export type NavLinksProp = {
  [key: string]: string[];
};

export type ProductCardType = {
  id: string;
  brand: string;
  type: string;
  model: string;
  price: number;
  description: string;
  image: string;
  access: boolean;
}

export type ButtonProps = {
  text: string;
  redirect?: string;
  back?: boolean;
  customAction?: string;
};

export type ProductType = {
  _id: string;
  brand: string;
  type: string;
  model: string;
  price: number;
  description: string;
  image: string;
  brightness: number;
  access: boolean;
}

export type AdminType = {
  _id: string;
  email: string;
  password: string;
  role: string;
};
export type ProductFieldName = keyof ProductType
export type FieldConfigForFormProduct = {
  name: ProductFieldName;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'file' | 'checkbox' | "select";
  options?: string[]
};

export type ServerAction = {
  action: (data: FormData) => Promise<void>;
  data: FieldConfigForFormProduct[];
};

export type ServerActionEditForm = {
  action: (data: FormData) => Promise<void>;
  data: FieldConfigForFormProduct[];
  product: ProductType
};

export type ConfigForProductMainPage = {
  title: string;
  image: string;
  linkForTransition: string;
};

export type HomeLinkType = {
  title: string;
  icon: React.ReactNode;
  link: string
}

export type LinkForCatalogType = {
  name: string
  linkForTransition: string
}
export type CatalogType = {
  data? : LinkForCatalogType[]
} & HomeLinkType


export type BreadCumsType = {
  [key: string]: string;
}

export type ProductsBlockType = {
  products: ProductType[];
  totalPages: number;
  currentPage: number;
  totalProducts: number;
  brandInfo: BrandInfoType[];
}

export type BrandInfoType = {
  brand: string;
  descriptionTop: string;
  descriptionBottom: string;
}

export type MainPageProps = {
   searchParams: Promise<{
    page?: string;
    perPage?: '6' | '12' | '24';
    layout?: 'grid' | 'list';
    sort?: 'price-asc' | 'price-desc' | 'newest';
    keyword?: string;
    priceFrom?: string;
    priceTo?: string;
    access?: boolean;
    onSale?: boolean;
    brand?: string;
    type?: string;
    brightness?: string;
  }>;
}

export type BrandPageProps = {
   params: Promise<{slug: string}>
} & MainPageProps

export type EditPageProps = {
   searchParams: Promise<{
    currentProduct?: string;
    id: string    
  }>;
}