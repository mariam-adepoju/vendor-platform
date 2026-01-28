import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="group rounded-xl border bg-white p-4 transition hover:shadow-md">
            <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition group-hover:scale-105"
                />
            </div>
            <h3 className="font-semibold leading-tight">{product.name}</h3>
            <p className="mt-3 font-bold">
                ₦{product.price.toLocaleString()}
            </p>
        </div>
    );
}
