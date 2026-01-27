import { Vendor } from "@/types/vendor";
import VendorGrid from "./VendorGrid";

interface FeaturedVendorsProps {
    featuredVendors: Vendor[];
}
export default function FeaturedVendors({
    featuredVendors,
}: FeaturedVendorsProps) {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
                Featured Vendors
            </h2>
            <VendorGrid vendors={featuredVendors.slice(0, 3)} />
        </section>
    );
}
