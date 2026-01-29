import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { vendors } from "@/data/vendors";
import { products } from "@/data/products";
import { Vendor } from "@/types/vendor";
import { ProductResponse } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    currencyDisplay: "symbol",
  }).format(price);
};
