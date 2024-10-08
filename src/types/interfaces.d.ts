export interface PRODUCTCARDPROPS {
  ImgUrl: string;
  title: string;
  strikThroughPrice: string;
  price: string;
}

export interface stockInterface { variant: string; quantity: number }

export interface Product {
  name: string;
  description: string;
  price: string;
  category: string;
  colors: { colorName: string }[];
  totalStockQuantity: number;
  variantStockQuantities: [];
  modelDetails: stockInterface[];
  spacification: { specsDetails: string }[];
  discountPrice: string;
  category: string;
}

export interface Category {
  name: string;
}

interface CloudinaryImage {
  public_id: string | undefined;
  imageUrl: string | undefined;
  _id: string | undefined;
}
interface Images {
  posterImageUrl: string | undefined;
  hoverImageUrl: string | undefined;
  imageUrl: CloudinaryImage[];
}

interface ProductWithImages extends Product, Images {}
