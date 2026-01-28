import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { vendors } from "@/data/vendors";
import { products } from "@/data/products";
import { Vendor } from "@/types/vendor";
import { ProductResponse } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getVendor(slug: string): Vendor | undefined {
  return vendors.find((vendor) => vendor.slug === slug) as Vendor | undefined;
}

export function getVendorProducts(
  vendorSlug: string,
  options?: {
    search?: string;
    sort?: "price_asc" | "price_desc" | "recent";
    page?: number;
    perPage?: number;
  },
): ProductResponse {
  const { search = "", sort = "recent", page = 1, perPage = 6 } = options || {};

  let filtered = products.filter(
    (product) => product.vendorSlug === vendorSlug,
  );
  if (search) {
    filtered = filtered.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
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
