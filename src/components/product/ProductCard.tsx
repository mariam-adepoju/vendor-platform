import Image from "next/image";
import { Product } from "@/types/product";
import { Card } from "../ui/card";
import { formatPrice } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Card className="group p-2 transition-all hover:shadow-lg hover:ring-1 hover:ring-brand/50 dark:bg-slate-900/50 dark:border-slate-800">
            <div className="relative aspect-square overflow-hidden mx-auto w-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                />
            </div>
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{product.name}</h3>
            <p className="mt-1 font-bold text-brand">
                {formatPrice(product.price)}
            </p>
        </Card>
    );
}
