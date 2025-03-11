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
}
