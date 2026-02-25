import type { Metadata } from "next";
import { Suspense } from "react";
import { searchProducts } from "@/lib/queries";
import ProductCard from "@/components/ProductCard";
import { ProductGridSkeleton } from "@/components/Skeleton";
import Link from "next/link";

interface Props {
    searchParams: Promise<{ q?: string }>;
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { q = "" } = await searchParams;
    return {
        title: q ? `Search: "${q}"` : "Search",
        description: `Search results for "${q}" – Lumière Jewels`,
    };
}

async function SearchResults({ query }: { query: string }) {
    const { products, total } = await searchProducts(query, 24);

    if (products.length === 0) {
        return (
            <div className="text-center py-24">
                <p className="text-6xl mb-6">🔍</p>
                <h2 className="font-serif text-2xl text-gray-800 font-semibold mb-3">
                    No results found
                </h2>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    We couldn&apos;t find any jewellery matching &quot;{query}&quot;. Try a different search
                    term or browse our collections.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/categories" className="btn-primary">
                        Browse Collections
                    </Link>
                    <Link href="/" className="btn-outline">
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <p className="text-sm text-gray-500 mb-6">
                Showing <span className="font-semibold text-gray-900">{total}</span> result{total !== 1 ? "s" : ""} for{" "}
                <span className="font-semibold text-maroon">&quot;{query}&quot;</span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {products.map((product, i) => (
                    <ProductCard key={product.id} product={product} priority={i < 4} />
                ))}
            </div>
        </>
    );
}

export default async function SearchPage({ searchParams }: Props) {
    const { q = "" } = await searchParams;
    const query = q.trim();

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Header */}
            <div className="mb-8">
                <h1 className="section-title">
                    {query ? `Results for "${query}"` : "Search Jewellery"}
                </h1>
                <div className="w-16 h-0.5 bg-gradient-gold rounded-full mt-4" />
            </div>

            {!query ? (
                <div className="text-center py-24">
                    <p className="text-6xl mb-6">💎</p>
                    <p className="text-gray-500 text-lg">
                        Enter a search term in the header to find jewellery.
                    </p>
                    <Link href="/categories" className="btn-primary mt-6 inline-flex">
                        Browse All Collections
                    </Link>
                </div>
            ) : (
                <Suspense fallback={<ProductGridSkeleton count={8} />}>
                    <SearchResults query={query} />
                </Suspense>
            )}
        </div>
    );
}
