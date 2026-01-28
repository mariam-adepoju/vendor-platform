import ProductCard from "./ProductCard";
import { Product } from "@/types/product";

export default function ProductGrid({ products }: { products: Product[] }) {
    if (!products.length) {
        return (
            <div className="py-20 text-center text-muted-foreground">
                No products found.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}
