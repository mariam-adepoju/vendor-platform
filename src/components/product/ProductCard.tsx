import Image from "next/image";
import { Product } from "@/types/product";
import { Card } from "../ui/card";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="group p-2 transition hover:shadow-md">
            <div className="relative aspect-square overflow-hidden mx-auto w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="font-semibold truncate leading-tight text-sm sm:text-base" title={product.name}>{product.name}</h3>
            <p className="mt-1 font-bold text-sm sm:text-base ">
                ₦{product.price.toLocaleString()}
            </p>
        </Card>
    );
}
