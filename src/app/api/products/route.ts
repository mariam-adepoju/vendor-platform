import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const vendorSlug = searchParams.get("vendorSlug") || "";
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort"); // "price_asc", "price_desc", "recent"
  const page = Number(searchParams.get("page") || 1);
  const perPage = Number(searchParams.get("perPage") || 6);

  let filtered = products.filter((p) => p.vendorSlug === vendorSlug);

  if (search) {
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

  if (sort === "price_asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "recent")
    filtered.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  const start = (page - 1) * perPage;
  const end = start + perPage;

  return NextResponse.json({
    total: filtered.length,
    products: filtered.slice(start, end),
  });
}
