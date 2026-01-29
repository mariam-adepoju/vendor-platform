"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductSort() {
    const router = useRouter();
    const params = useSearchParams();

    function onChange(value: string) {
        const query = new URLSearchParams(params.toString());
        if (value) {
            query.set("sort", value);
        } else {
            query.delete("sort");
        }
        query.delete("page");

        router.push(`?${query.toString()}`, { scroll: false });
    }

    return (
        <select
            className="border text-muted-foreground rounded-lg px-3 py-2 bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 focus:ring-brand focus:border-brand/50"
            value={params.get("sort") ?? "recent"}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="recent">Most Recent</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
        </select>
    );
}