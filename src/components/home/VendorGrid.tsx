import { Vendor } from "@/types/vendor";
import VendorCard from "./VendorCard";

export default function VendorGrid({ vendors }: { vendors: Vendor[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {vendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
            ))}
        </div>
    );
}
