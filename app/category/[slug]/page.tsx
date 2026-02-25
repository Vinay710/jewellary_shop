import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { getProducts, getCategoryBySlug } from "@/lib/queries";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import FilterSidebar from "@/components/FilterSidebar";
import Pagination from "@/components/Pagination";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string; metal?: string; price?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const category = await getCategoryBySlug(slug);
    if (!category) return { title: "Category Not Found" };
    return {
        title: category.name,
        description:
            category.description ||
            `Browse ${category.name} at Suraj Group – handcrafted fine jewellery.`,
    };
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const resolvedSearch = await searchParams;
    const category = await getCategoryBySlug(slug);
    if (!category) notFound();

    const page = Number(resolvedSearch.page) || 1;

    // Parse price range "minPrice-maxPrice"
    let minPrice: number | undefined;
    let maxPrice: number | undefined;
    if (resolvedSearch.price) {
        const [min, max] = resolvedSearch.price.split("-").map(Number);
        if (!isNaN(min)) minPrice = min;
        if (!isNaN(max)) maxPrice = max;
    }

    const { products, totalPages } = await getProducts({
        categorySlug: slug,
        page,
        limit: 12,
        metalType: resolvedSearch.metal || undefined,
        minPrice,
        maxPrice,
    });


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            {/* Breadcrumb */}
            <AnimateIn variant="fade-in" duration={0.4}>
                <Breadcrumb
                    crumbs={[
                        { label: "Home", href: "/" },
                        { label: "Collections", href: "/categories" },
                        { label: category.name },
                    ]}
                />
            </AnimateIn>

            {/* Page header */}
            <div className="mt-6 mb-10">
                <AnimateIn variant="slide-left" delay={0.1}>
                    <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900">
                        {category.name}
                    </h1>
                    {category.description && (
                        <p className="text-gray-500 mt-2 max-w-2xl">{category.description}</p>
                    )}
                    <p className="text-sm text-gold font-medium mt-2">
                        {category._count?.products} piece{category._count?.products !== 1 ? "s" : ""}
                    </p>
                </AnimateIn>
            </div>

            {/* Layout: Sidebar + Product grid */}
            <div className="flex gap-8">
                <Suspense fallback={<div className="w-64 flex-shrink-0 hidden lg:block"><div className="bg-white rounded-2xl p-5 shadow-card h-64 animate-pulse" /></div>}>
                    <FilterSidebar />
                </Suspense>

                <div className="flex-1 min-w-0">
                    {products.length > 0 ? (
                        <>
                            <StaggerContainer
                                key={`grid-${resolvedSearch.price ?? ""}-${resolvedSearch.metal ?? ""}-${page}`}
                                className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
                                staggerDelay={0.07}
                            >
                                {products.map((product) => (
                                    <StaggerItem key={product.id} variant="fade-up">
                                        <ProductCard product={product} />
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <AnimateIn variant="fade-up" delay={0.2}>
                                <Pagination
                                    currentPage={page}
                                    totalPages={totalPages}
                                    basePath={`/category/${slug}`}
                                />
                            </AnimateIn>
                        </>
                    ) : (
                        <AnimateIn variant="fade-in" className="text-center py-24 text-gray-400">
                            {resolvedSearch.price || resolvedSearch.metal ? (
                                <>
                                    <p className="text-5xl mb-4">🔍</p>
                                    <p className="text-lg font-medium text-gray-600 mb-2">No products match your filters</p>
                                    <p className="text-sm mb-6">Try removing some filters to see more results.</p>
                                    <Link href={`/category/${slug}`} className="btn-outline text-sm">
                                        Clear Filters
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <p className="text-5xl mb-4">💎</p>
                                    <p className="text-lg">No products in this collection yet.</p>
                                </>
                            )}
                        </AnimateIn>
                    )}
                </div>
            </div>
        </div>
    );
}
