import Link from "next/link";

export default function VendorNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-2xl font-semibold mb-2">
                Vendor not found
            </h1>
            <p className="text-muted-foreground mb-6">
                The vendor you’re looking for doesn’t exist or has been removed.
            </p>
            <Link
                href="/"
                className="text-sm underline hover:text-black"
            >
                Go back home
            </Link>
        </div>
    );
}
