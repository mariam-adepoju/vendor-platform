"use client";
import { useRouter } from "next/navigation";
import type { Vendor } from "@/types/vendor";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";

interface VendorSearchProps {
    vendors: Vendor[];
}
export default function VendorSearch({ vendors }: VendorSearchProps) {
    const router = useRouter();

    const goToVendor = (slug: string) => {
        router.push(`/site/${slug}`);
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="w-full max-w-xl flex items-center gap-3 rounded-xl border-2 bg-white px-6 py-4 ">
                    <Search className="w-5 h-5" />
                    <span className="text-lg">
                        Search vendors…
                    </span>
                </button>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-lg">
                <Command>
                    <CommandInput placeholder="Search vendors..." />
                    <CommandList>
                        <CommandEmpty>No vendors found.</CommandEmpty>
                        <CommandGroup heading="Vendors">
                            {vendors.map((vendor) => (
                                <CommandItem
                                    key={vendor.id}
                                    value={`${vendor.name} ${vendor.slug}`}
                                    onSelect={() => goToVendor(vendor.slug)}
                                    className="flex items-center gap-3"
                                >
                                    <img
                                        src={vendor.logo}
                                        alt={vendor.name}
                                        className="w-6 h-6 object-contain"
                                    />
                                    <span>{vendor.name}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
