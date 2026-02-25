import { ProductGridSkeleton } from "@/components/Skeleton";

export default function HomeLoading() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" />
            <div className="h-4 bg-gray-100 rounded w-96 mx-auto mb-10 animate-pulse" />
            <ProductGridSkeleton count={8} />
        </div>
    );
}
