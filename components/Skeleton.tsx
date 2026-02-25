// Skeleton loading components for all card types

export function ProductCardSkeleton() {
    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-card animate-pulse">
            <div className="aspect-[3/4] bg-ivory-200" />
            <div className="p-4 space-y-2">
                <div className="h-3 bg-gold-100 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-100 rounded w-full" />
                <div className="flex justify-between items-center pt-1">
                    <div className="h-5 bg-maroon-100 rounded w-1/3" />
                    <div className="h-3 bg-gray-100 rounded w-1/4" />
                </div>
            </div>
        </div>
    );
}

export function CategoryCardSkeleton() {
    return (
        <div className="rounded-2xl overflow-hidden aspect-square bg-ivory-200 animate-pulse shadow-card" />
    );
}

export function ProductGallerySkeleton() {
    return (
        <div className="space-y-3 animate-pulse">
            <div className="aspect-square bg-ivory-200 rounded-2xl" />
            <div className="flex gap-2">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="w-20 h-20 bg-ivory-200 rounded-xl flex-shrink-0" />
                ))}
            </div>
        </div>
    );
}

export function ProductGridSkeleton({ count = 8 }: { count?: number }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <ProductCardSkeleton key={i} />
            ))}
        </div>
    );
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2 animate-pulse">
            {Array.from({ length: lines }).map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-gray-100 rounded"
                    style={{ width: `${100 - (i * 15) % 40}%` }}
                />
            ))}
        </div>
    );
}
