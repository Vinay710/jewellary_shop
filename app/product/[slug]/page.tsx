import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug, getRelatedProducts } from "@/lib/queries";
import { formatPrice } from "@/lib/utils";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import Breadcrumb from "@/components/Breadcrumb";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) return { title: "Product Not Found" };
    return {
        title: product.name,
        description: product.description.slice(0, 160),
        openGraph: {
            title: product.name,
            description: product.description.slice(0, 160),
            images: product.images[0] ? [{ url: product.images[0] }] : [],
        },
    };
}

export const dynamic = "force-dynamic";

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) notFound();

    const related = await getRelatedProducts(product.id, product.categoryId, 4);

    const specs = [
        { label: "Metal Type", value: product.metalType },
        { label: "Category", value: product.category.name },
        { label: "SKU", value: `SRJ-${product.id.toString().padStart(5, "0")}` },
        ...(product.tags.length > 0
            ? [{ label: "Tags", value: product.tags.join(", ") }]
            : []),
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

            {/* Breadcrumb */}
            <AnimateIn variant="fade-in" duration={0.4}>
                <Breadcrumb
                    crumbs={[
                        { label: "Home", href: "/" },
                        { label: product.category.name, href: `/category/${product.category.slug}` },
                        { label: product.name },
                    ]}
                />
            </AnimateIn>

            {/* ── Main product layout ─────────────────────────────────────────────── */}
            <div className="mt-8 grid lg:grid-cols-2 gap-10 lg:gap-16">

                {/* LEFT: Gallery slides in from left */}
                <AnimateIn variant="slide-left" duration={0.7}>
                    <ProductGallery images={product.images} productName={product.name} />
                </AnimateIn>

                {/* RIGHT: Details stagger in from right */}
                <AnimateIn variant="slide-right" duration={0.7}>
                    <div className="flex flex-col">

                        {/* Badges */}
                        <StaggerContainer className="flex gap-2 mb-3 flex-wrap" staggerDelay={0.1}>
                            {product.featured && (
                                <StaggerItem variant="zoom-in">
                                    <span className="bg-gold/10 text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold/20">
                                        ✦ Featured Piece
                                    </span>
                                </StaggerItem>
                            )}
                            {product.isNewArrival && (
                                <StaggerItem variant="zoom-in">
                                    <span className="bg-maroon/10 text-maroon text-xs font-semibold px-3 py-1 rounded-full border border-maroon/20">
                                        ✦ New Arrival
                                    </span>
                                </StaggerItem>
                            )}
                        </StaggerContainer>

                        {/* Category */}
                        <AnimateIn variant="fade-up" delay={0.15}>
                            <Link
                                href={`/category/${product.category.slug}`}
                                className="text-gold font-semibold text-xs uppercase tracking-widest hover:text-gold-dark transition-colors mb-2 inline-block"
                            >
                                {product.category.name}
                            </Link>
                        </AnimateIn>

                        {/* Name */}
                        <AnimateIn variant="fade-up" delay={0.25}>
                            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4">
                                {product.name}
                            </h1>
                        </AnimateIn>

                        {/* Price */}
                        <AnimateIn variant="fade-up" delay={0.35}>
                            <div className="flex items-center gap-3 mb-6">
                                <p className="text-maroon font-bold text-3xl">{formatPrice(product.price)}</p>
                                <span className="text-gray-400 text-sm">(incl. of all taxes)</span>
                            </div>
                        </AnimateIn>

                        {/* Description */}
                        <AnimateIn variant="fade-up" delay={0.4}>
                            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
                        </AnimateIn>

                        {/* Specifications table */}
                        <AnimateIn variant="fade-up" delay={0.48}>
                            <div className="bg-ivory-100 rounded-2xl p-5 mb-8">
                                <h2 className="font-serif font-semibold text-gray-900 mb-4">Specifications</h2>
                                <dl className="space-y-3">
                                    {specs.map((spec) => (
                                        <div key={spec.label} className="flex justify-between text-sm border-b border-gold-100 pb-3 last:border-0 last:pb-0">
                                            <dt className="text-gray-500 font-medium">{spec.label}</dt>
                                            <dd className="text-gray-900 font-semibold text-right capitalize">{spec.value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </AnimateIn>

                        {/* CTA Button */}
                        <AnimateIn variant="fade-up" delay={0.55}>
                            <Link
                                href="/contact"
                                className="btn-primary w-full justify-center text-base py-4 mb-4"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.95V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Contact for Details
                            </Link>
                        </AnimateIn>

                        {/* Trust badges */}
                        <AnimateIn variant="fade-up" delay={0.62}>
                            <div className="flex items-center justify-around border border-gold-100 rounded-2xl p-4">
                                {[
                                    { icon: "🏆", label: "BIS Hallmarked" },
                                    { icon: "💎", label: "Certified Gems" },
                                    { icon: "🛡️", label: "Lifetime Service" },
                                ].map((b) => (
                                    <div key={b.label} className="text-center">
                                        <span className="text-xl block">{b.icon}</span>
                                        <p className="text-gray-500 text-[10px] mt-1 font-medium">{b.label}</p>
                                    </div>
                                ))}
                            </div>
                        </AnimateIn>

                    </div>
                </AnimateIn>
            </div>

            {/* ── Related Products ────────────────────────────────────────────────── */}
            {related.length > 0 && (
                <section aria-labelledby="related-heading" className="mt-20">
                    <AnimateIn variant="fade-up" className="text-center mb-8">
                        <h2 id="related-heading" className="section-title text-2xl">
                            You May Also Like
                        </h2>
                        <div className="w-12 h-0.5 bg-gradient-gold rounded-full mx-auto mt-3" />
                    </AnimateIn>

                    <StaggerContainer
                        className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
                        staggerDelay={0.1}
                    >
                        {related.map((p) => (
                            <StaggerItem key={p.id} variant="fade-up">
                                <ProductCard product={p} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>
            )}
        </div>
    );
}
