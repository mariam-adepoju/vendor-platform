"use client";
import { useDebounce } from "@/hooks/usedebounce";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProductSearch() {
    const router = useRouter();
    const params = useSearchParams();
    const [query, setQuery] = useState(params.get("q") ?? "");
    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        const search = new URLSearchParams(params.toString());
        if (debouncedQuery) {
            search.set("q", debouncedQuery);
        } else {
            search.delete("q");
        }
        search.delete("page");
        router.push(`?${search.toString()}`, { scroll: false });
    }, [debouncedQuery, router]);

    return (
        <div className="w-full md:max-w-sm">
            <input
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand transition-all"
            />
        </div>
    );
}