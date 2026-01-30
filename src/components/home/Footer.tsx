async function getYear() {
    'use cache';
    return new Date().getFullYear();
}

export default async function Footer() {
    const year = await getYear();
    return (
        <footer className="text-brand py-6 mt-8 border-t">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p>&copy; {year} Padisquare. All rights reserved.</p>
            </div>
        </footer>
    );
}