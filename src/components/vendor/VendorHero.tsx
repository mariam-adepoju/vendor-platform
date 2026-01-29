import Image from "next/image";
import { Vendor } from "@/types/vendor";

export default function VendorHero({ vendor }: { vendor: Vendor }) {
    const images = vendor.heroImage || [];
    return (
        <section className="max-w-7xl mx-auto px-6 py-4 lg:py-10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="flex flex-col space-y-6 md:space-y-10 text-center py-10 lg:text-left order-2 lg:order-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Explore <span className="text-brand">{vendor.name}</span> Exclusive Collections.
                    </h1>
                    <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        {vendor.description} Discover our curated collection designed for quality and style,
                        powered by the <span className="text-brand font-medium">Padisquare</span> platform.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4 h-[150px] md:h-[300px] lg:h-[500px] order-1 lg:order-2">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <div className="relative flex-[2] w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src={images[0] || "/images/placeholder.jpg"}
                                alt={`${vendor.name} visual 1`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>
                        {/* Interactive Brand Badge */}
                        <div className="relative flex-[1] w-full rounded-[2rem] overflow-hidden bg-brand/5 border border-brand/20 dark:bg-brand/10 dark:border-brand/30 flex items-center justify-center p-6 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent blur-2xl group-hover:opacity-100 transition-opacity" />
                            <span className="relative text-brand font-bold text-xs uppercase tracking-widest">
                                {vendor.name} Official Store
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4 pt-8 md:pt-12">
                        <div className="relative flex-[1] w-full rounded-[2rem] overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800">
                            <Image
                                src={images[1] || "/images/placeholder.jpg"}
                                alt={`${vendor.name} visual 2`}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}