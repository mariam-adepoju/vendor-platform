import { vendorIcons } from "@/lib/vendoricons";
import { Vendor } from "@/types/vendor";

interface VendorHeaderProps {
    vendor: Vendor;
}
const VendorHeader = ({ vendor }: VendorHeaderProps) => {
    const Icon = vendorIcons[vendor.logo];

    return (
        <header className="px-5 py-3 bg-white flex items-center gap-3 border-b">
            {Icon && (
                <div className="h-10 w-10 rounded-lg bg-brand/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-brand" />
                </div>
            )}
            <p className="text-lg font-semibold">{vendor.name}</p>
        </header>
    );
};

export default VendorHeader;
