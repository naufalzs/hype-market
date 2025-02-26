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

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  rating: number;
}

export interface NavLink {
  name: string;
  href: string;
}
