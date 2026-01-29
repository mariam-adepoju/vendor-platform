import { vendorIcons } from "@/lib/vendoricons";
import { Vendor } from "@/types/vendor";
import { Button } from "../ui/button";
import Link from "next/link";

interface VendorHeaderProps {
    vendor: Vendor;
}
const VendorHeader = ({ vendor }: VendorHeaderProps) => {
    const Icon = vendorIcons[vendor.logo];

    return (
        <header className="px-5 py-3 flex items-center justify-between  border-b">
            <div className="flex items-center gap-2">
                {Icon && (
                    <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-brand" />
                    </div>
                )}
                <p className="text-lg font-semibold">{vendor.name}</p>
            </div>
            <div>
                <Button variant="outline" asChild className="border-brand/20 hover:border-brand hover:bg-brand/5 dark:hover:bg-brand/10 transition-all">
                    <Link href="/" className="text-brand flex items-center gap-2">
                        ← <span className="hidden sm:inline">Back Home</span>
                    </Link>
                </Button>
            </div>
        </header>
    );
};

export default VendorHeader;
