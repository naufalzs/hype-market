export interface ProductNameData {
  id: string;
  name: string;
}

export interface ProductImageData {
  id: string[];
  image: string;
}

export interface Product extends ProductNameData {
  image: string | null;
}

export interface ProductPayload {
  data: Product[];
}
