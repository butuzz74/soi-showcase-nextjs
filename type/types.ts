export type NavLinksProp = {
  [key: string]: string[];
};
export type ProjectorCardProps = {
  id: string;
  brand: string;
  type: string;
  model: string;
  price: string;
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
  price: string;
  description: string;
  image: string;
  brightness: string;
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
  type: 'text' | 'textarea' | 'number' | 'file' | 'checkbox';
};

export type ServerAction = {
  action: (data: FormData) => Promise<void>;
  data: FieldConfigForFormProduct[];
};
