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
            className="border rounded-lg px-3 py-2 bg-white text-sm focus:ring-2 focus:ring-brand outline-none"
            value={params.get("sort") ?? "recent"} // Controlled value
            onChange={(e) => onChange(e.target.value)}
        >
            <option value="recent">Most Recent</option>
            <option value="price_asc">Price: Low to High</option>
            <option value="price_desc">Price: High to Low</option>
        </select>
    );
}