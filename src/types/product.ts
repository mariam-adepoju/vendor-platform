export interface Product {
  id: string;
  vendorSlug: string;
  name: string;
  price: number;
  image: string;
  createdAt: string;
}
export interface ProductResponse {
  items: Product[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}
