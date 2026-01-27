import { headers } from "next/headers";
import { Vendor } from "@/types/vendor";

export async function getVendors(): Promise<Vendor[]> {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/api/vendors`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch vendors");
  }
  return res.json();
}
