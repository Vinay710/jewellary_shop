import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center max-w-md mx-auto px-4">
                <p className="text-7xl mb-6">💎</p>
                <h1 className="font-serif text-4xl text-gray-900 font-semibold mb-3">Page Not Found</h1>
                <p className="text-gray-500 mb-8 leading-relaxed">
                    We couldn&apos;t find the jewel you were looking for. It may have been moved or doesn&apos;t
                    exist. Let&apos;s help you find something beautiful.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-primary">
                        Back to Home
                    </Link>
                    <Link href="/categories" className="btn-outline">
                        Browse Collections
                    </Link>
                </div>
            </div>
        </div>
    );
}
