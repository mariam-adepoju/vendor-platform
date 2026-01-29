import Image from "next/image";
import { getVendors } from "@/lib/api";
import VendorSearch from "@/components/home/VendorSearch";
import Hero from "@/components/home/Hero";
import FeaturedVendors from "@/components/home/FeaturedVendors";
import ThemeToggle from "@/components/ThemeToggle";

export default async function HomePage() {
  const vendors = await getVendors();
  const featuredVendors = vendors.filter((v) => v.featured === true);

  return (
    <div className="w-full">
      <header className="px-5 py-4 flex items-center justify-between border-b">
        <div className="relative h-[50px] w-[150px]">
          <Image src="/icons/logo.svg" alt="logo" fill className="dark:hidden object-contain" />
          <Image
            src="/icons/logo-dark.svg"
            alt="logo"
            fill
            className="hidden dark:block object-contain"
          />
        </div>
        <ThemeToggle />
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
