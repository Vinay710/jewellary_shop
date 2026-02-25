import { ProductGallerySkeleton, TextSkeleton } from "@/components/Skeleton";

export default function ProductLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
            <div className="h-4 bg-gray-100 rounded w-64 mb-8" />
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                <ProductGallerySkeleton />
                <div className="space-y-4">
                    <div className="h-4 bg-gold-100 rounded w-24" />
                    <div className="h-8 bg-gray-200 rounded w-3/4" />
                    <div className="h-6 bg-maroon-100 rounded w-1/3" />
                    <TextSkeleton lines={4} />
                    <div className="h-32 bg-ivory-200 rounded-2xl" />
                    <div className="h-12 bg-gray-200 rounded-full" />
                </div>
            </div>
        </div>
    );
}
