"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
    page: number;
    totalPages: number;
}

export default function ProductPagination({ page, totalPages }: Props) {
    const router = useRouter();
    const params = useSearchParams();

    function goToPage(newPage: number) {
        const query = new URLSearchParams(params.toString());
        query.set("page", String(newPage));
        router.push(`?${query.toString()}`, { scroll: false });
    }
    if (totalPages <= 1) return null;
    return (
        <div className="flex items-center justify-center gap-4 pt-12">
            <button
                disabled={page === 1}
                onClick={() => goToPage(page - 1)}
                className={cn(
                    "rounded-lg border border-brand text-brand px-4 py-2 text-sm font-medium transition-colors",
                    "hover:disabled:cursor-not-allowed disabled:opacity-40",

                )}
            >
                Previous
            </button>
            <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-brand text-sm font-bold text-white shadow-[0_0_15px_rgba(21,156,71,0.3)]">
                    {page}
                </span>
                <span className="text-sm text-gray-500">
                    of {totalPages}
                </span>
            </div>

            <button
                disabled={page === totalPages}
                onClick={() => goToPage(page + 1)}
                className={cn(
                    "rounded-lg text-brand border border-brand px-4 py-2 text-sm font-medium transition-colors",
                    "hover: disabled:cursor-not-allowed disabled:opacity-40",
                )}
            >
                Next
            </button>
        </div>
    );
}