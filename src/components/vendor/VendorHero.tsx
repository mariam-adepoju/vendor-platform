import Image from "next/image";
import { Vendor } from "@/types/vendor";

export default function VendorHero({ vendor }: { vendor: Vendor }) {
    const img1 = vendor.heroImage?.[1] || "/images/placeholder.jpg";
    const img0 = vendor.heroImage?.[0] || "/images/placeholder.jpg";
    return (
        <section className="max-w-7xl mx-auto px-6 py-2 lg:py-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-10 lg:gap-16 items-center">
                <div className="flex flex-col space-y-6 md:space-y-10 text-center py-10 lg:text-left order-2 lg:order-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                        Explore <span className="text-brand">{vendor.name}</span> <br className="hidden lg:block" />
                        Exclusive Collections.
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {vendor.description || "Discover our curated collection designed for quality and style,"}
                        powered by the <span className="text-brand font-medium">Padisquare</span> platform.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4 h-[250px] md:h-[350px] lg:h-[500px] order-1 lg:order-2">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <div className="relative flex-[2] w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src={img1}
                                alt={`${vendor.name} showcase`}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 50vw, 33vw"
                            />
                        </div>
                        <div className="relative flex-[1] w-full rounded-[2rem] overflow-hidden bg-brand/5 border border-brand/20 dark:bg-brand/10 dark:border-brand/30 flex items-center justify-center p-4 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent blur-2xl group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-brand font-bold text-[10px] md:text-xs uppercase tracking-widest text-center">
                                {vendor.name} Official Store
                            </span>
                        </div>
                    </div>
                    <div className="relative my-5 w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                        <Image
                            src={img0}
                            alt={`${vendor.name} collection`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}