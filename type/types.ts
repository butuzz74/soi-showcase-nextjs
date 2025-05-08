export type NavLinksProp = {
  [key: string]: string[];
};
export type ProjectorCardProps = {
  id: string;
  brand: string;
  type: string;
  model: string;
  price: number;
  description: string;
  image: string;
  access: boolean;
};

export type ButtonProps = {
  text: string;
  redirect?: string;
  back?: boolean;
  customAction?: () => void;
};

export type ProjectorType = {
  _id: string;
  brand: string;
  type: string;
  model: string;
  price: number;
  description: string;
  image: string;
  brightness: number;
  access: boolean;
};

export type AdminType = {
  _id: string;
  email: string;
  password: string;
  role: string;
};

export type FieldConfigForFormProduct = {
  name: string;
  label: string;
  type: 'text' | 'textarea' | 'number' | 'file' | 'checkbox' | "select";
  options?: string[]
};

export type ServerAction = {
  action: (data: FormData) => Promise<void>;
  data: FieldConfigForFormProduct[];
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

export type ProjectorsBlockType = {
  projectors: ProjectorType[];
  totalPages: number;
  currentPage: number;
  totalProjectors: number;
  brandInfo: BrandInfoType[];
}

export type BrandInfoType = {
  brand: string;
  descriptionTop: string;
  descriptionBottom: string;
}