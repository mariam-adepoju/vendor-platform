import Image from "next/image";
import { getVendors } from "@/lib/api";
import VendorSearch from "@/components/home/VendorSearch";
import Hero from "@/components/home/Hero";
import FeaturedVendors from "@/components/home/FeaturedVendors";

export default async function HomePage() {
  const vendors = await getVendors();
  const featuredVendors = vendors.filter((v) => v.featured === true);

  return (
    <div className="w-full">
      <header className="px-5 py-2 bg-white flex items-center justify-between border-b">
        <Image src="/icons/logo.svg" alt="logo" width={150} height={50} />
      </header>
      <main className="max-w-7xl mx-auto px-6 space-y-16">
        <section className="pt-20 flex flex-col gap-10 items-center justify-center">
          <Hero />
          <VendorSearch vendors={vendors} />
        </section>
        {featuredVendors.length > 0 && (
          <FeaturedVendors featuredVendors={featuredVendors} />
        )}
      </main>
    </div>
  );
}
