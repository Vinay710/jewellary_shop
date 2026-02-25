import { ProductGridSkeleton } from "@/components/Skeleton";

export default function CategoryLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="h-4 bg-gray-100 rounded w-48 mb-8 animate-pulse" />
            <div className="h-8 bg-gray-200 rounded w-64 mb-2 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-48 mb-10 animate-pulse" />
            <ProductGridSkeleton count={12} />
        </div>
    );
}
