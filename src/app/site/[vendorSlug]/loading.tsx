export default function Loading() {
    return (
        <div className="container mx-auto px-6 py-10">
            <div className="animate-pulse h-60 bg-muted rounded-xl mb-6" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-48 bg-muted rounded-lg" />
                ))}
            </div>
        </div>
    );
}