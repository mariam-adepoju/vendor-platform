import { notFound } from "next/navigation";
import VendorHero from "@/components/vendor/VendorHero";
import VendorProducts from "@/components/vendor/VendorProducts";
import VendorHeader from "@/components/vendor/VendorHeader";
import { getVendor, getVendorProducts } from "@/lib/api";
import { connection } from "next/server";

interface PageProps {
    params: Promise<{ vendorSlug: string }>;
    searchParams: Promise<{
        q?: string;
        sort?: "price_asc" | "price_desc" | "recent";
        page?: string;
    }>;
}
export async function generateMetadata({ params }: PageProps) {
    const { vendorSlug } = await params;
    const vendor = await getVendor(vendorSlug);
    if (!vendor) return {};
    return {
        title: vendor.name,
        description: vendor.description,
        openGraph: {
            title: `${vendor.name} Official Storefront`,
            description: vendor.description,
            images: [
                {
                    url: vendor.heroImage[0],
                    alt: `${vendor.name} brand image`,
                }
            ],
        },
    };
}
export default async function VendorPage({ params, searchParams }: PageProps) {
    await connection();
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const vendor = await getVendor(resolvedParams.vendorSlug);
    if (!vendor) notFound();
    const response = await getVendorProducts(vendor.slug, {
        search: resolvedSearchParams.q,
        sort: resolvedSearchParams.sort,
        page: resolvedSearchParams.page ? parseInt(resolvedSearchParams.page, 10) : undefined,
    });
    return (
        <main className="min-h-screen">
            <VendorHeader vendor={vendor} />
            <VendorHero vendor={vendor} />
            <VendorProducts response={response} />
        </main>
    );
}
