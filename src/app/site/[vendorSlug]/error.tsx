"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function VendorError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error("Vendor page error:", error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-2xl font-semibold mb-2">
                Something went wrong
            </h1>

            <p className="text-muted-foreground mb-6 max-w-md">
                We couldn’t load this vendor’s page right now.
                Please try again or come back later.
            </p>

            <button
                onClick={reset}
                className="rounded-md bg-black text-white px-6 py-2 hover:bg-black/90 transition"
            >
                Try again
            </button>
        </div>
    );
}
