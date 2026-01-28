import { notFound } from "next/navigation";
import VendorHero from "@/components/vendor/VendorHero";
import VendorProducts from "@/components/vendor/VendorProducts";
import { getVendor, getVendorProducts } from "@/lib/utils";
import VendorHeader from "@/components/vendor/VendorHeader";

interface PageProps {
    params: { vendorSlug: string };
    searchParams: {
        q?: string;
        sort?: "price_asc" | "price_desc" | "recent";
        page?: string;
    };
}
export function generateMetadata({ params }: PageProps) {
    const vendor = getVendor(params.vendorSlug);
    if (!vendor) return {};
    return {
        title: `${vendor.name} | Vendor Platform`,
        description: vendor.description,
        openGraph: {
            title: vendor.name,
            images: [vendor.heroImage],
        },
    };
}
export default function VendorPage({ params, searchParams }: PageProps) {
    const vendor = getVendor(params.vendorSlug);
    if (!vendor) notFound();
    const response = getVendorProducts(vendor.slug, {
        search: searchParams.q,
        sort: searchParams.sort,
        page: Number(searchParams.page ?? 1),
    });
    return (
        <main className="min-h-screen">
            <VendorHeader vendor={vendor} />
            <VendorHero vendor={vendor} />
            <VendorProducts response={response} />
        </main>
    );
}
