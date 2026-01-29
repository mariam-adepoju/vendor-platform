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
    DialogTitle,
    DialogDescription,
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
                <button className="w-full max-w-xl flex items-center gap-3 rounded-xl border-2 border-brand bg-white px-6 py-4 shadow-sm ring-1 ring-gray-200 transition-all hover:ring-brand hover:shadow-md dark:bg-slate-900 dark:ring-slate-800">
                    <Search className="w-5 h-5 text-brand" />
                    <span className="text-lg text-brand">Search vendors…</span>
                </button>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-lg overflow-hidden">
                <div className="sr-only">
                    <DialogTitle>Search Vendors</DialogTitle>
                    <DialogDescription>
                        Search for a vendor to visit their storefront.
                    </DialogDescription>
                </div>

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