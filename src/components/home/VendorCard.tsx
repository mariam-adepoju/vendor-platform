import Link from "next/link";
import Image from "next/image";
import { Vendor } from "@/types/vendor";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
interface VendorCardProps {
    vendor: Vendor;
}
export default function VendorCard({ vendor }: VendorCardProps) {
    return (
        <Link href={`/site/${vendor.slug}`} className="group">
            <Card className="overflow-hidden hover:shadow-lg space-y-3 transition-shadow dark:bg-slate-900/50 border-brand/50">
                <CardHeader className="p-0">
                    <div className="relative h-60 overflow-hidden">
                        <Image
                            src={vendor.heroImage[0]}
                            alt={vendor.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </CardHeader>
                <CardContent className="space-y-2 py-1">
                    <h3 className="text-lg font-bold">{vendor.name}</h3>
                    {vendor.description && (
                        <p className="text-sm line-clamp-2">
                            {vendor.description}
                        </p>
                    )}

                </CardContent>
                <CardFooter>
                    <span className="font-semibold text-brand">
                        Visit Storefront
                    </span>
                </CardFooter>
            </Card>
        </Link >
    );
}
