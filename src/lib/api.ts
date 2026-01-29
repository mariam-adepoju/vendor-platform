import { vendors } from "@/data/vendors";
import { products } from "@/data/products";
import { Vendor } from "@/types/vendor";
import { ProductResponse } from "@/types/product";

export async function getVendors(): Promise<Vendor[]> {
  return vendors;
}
export async function getVendor(slug: string): Promise<Vendor | undefined> {
  return vendors.find((vendor) => vendor.slug === slug);
}
export async function getVendorProducts(
  vendorSlug: string,
  options?: {
    search?: string;
    sort?: "price_asc" | "price_desc" | "recent";
    page?: number;
    perPage?: number;
  },
): Promise<ProductResponse> {
  const { search = "", sort = "recent", page = 1, perPage = 6 } = options || {};
  let filtered = products.filter(
    (product) => product.vendorSlug === vendorSlug,
  );
  if (search) {
    const query = search.toLowerCase();
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
  }
  switch (sort) {
    case "price_asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "recent":
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
      break;
  }
  const total = filtered.length;
  const totalPages = Math.ceil(total / perPage);
  const start = (page - 1) * perPage;
  const items = filtered.slice(start, start + perPage);

  return {
    items,
    total,
    page,
    perPage,
    totalPages,
  };
}
