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
    if (!response.items.length) {
        return (
            <div className="py-20 text-center text-muted-foreground">
                <h2 className="text-4xl font-semibold mb-8 text-gray-800">Products</h2>
                <p className="text-lg">No products found for this vendor.</p>
            </div>
        );
    }
    return (
        <section className="container mx-auto px-6 py-10 space-y-6">
            <h2 className="text-4xl font-semibold mb-8 text-gray-800">Products</h2>
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
