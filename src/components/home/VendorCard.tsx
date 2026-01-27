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
            <Card className="overflow-hidden transition-all hover:shadow-xl border border-gray-100">
                {/* Hero image */}
                <div className="relative h-48 overflow-hidden">
                    <Image
                        src={vendor.heroImage}
                        alt={vendor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="w-12 h-12 rounded-lg border p-1 bg-white shrink-0">
                        <Image
                            src={vendor.logo}
                            alt={`${vendor.name} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                        />
                    </div>
                    <h3 className="text-lg font-bold">{vendor.name}</h3>
                </CardHeader>

                <CardContent>
                    {vendor.description && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {vendor.description}
                        </p>
                    )}
                </CardContent>

                <CardFooter>
                    <span className="font-semibold text-brand">
                        Visit Storefront →
                    </span>
                </CardFooter>
            </Card>
        </Link>
    );
}
