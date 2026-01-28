"use client";
import ProductSort from "../product/ProductSort";
import ProductGrid from "../product/ProductGrid";
import ProductSearch from "../product/ProductSearch";
import ProductPagination from "../product/ProductPagination";
import { ProductResponse } from "@/types/product";

export default function VendorProducts({
    response,
}: {
    response: ProductResponse;
}) {
    return (
        <section className="container mx-auto px-6 py-10 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <ProductSearch />
                <ProductSort />
            </div>
            <ProductGrid products={response.items} />
            <ProductPagination
                page={response.page}
                totalPages={response.totalPages}
            />
        </section>
    );
}
