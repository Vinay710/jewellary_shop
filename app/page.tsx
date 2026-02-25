import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getCategories, getFeaturedProducts, getNewArrivals } from "@/lib/queries";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import HeroSection from "@/components/HeroSection";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import type { CategoryBase, ProductWithCategory } from "@/lib/queries";

export const metadata: Metadata = {
    title: "Timeless Fine Jewellery – Suraj Group",
    description:
        "Explore Suraj Group's curated collections of rings, necklaces, earrings, and bracelets crafted in 18K & 22K gold and platinum. Based in Bangalore.",
};

// Render on each request so a live DB is not required at build time
export const dynamic = "force-dynamic";

export default async function HomePage() {
    const [categories, featuredProducts, newArrivals] = await Promise.all([
        getCategories(),
        getFeaturedProducts(8),
        getNewArrivals(4),
    ]);

    return (
        <>
            {/* ── HERO BANNER ──────────────────────────────────────────────────────── */}
            <HeroSection />

            {/* ── SHOP BY CATEGORY ─────────────────────────────────────────────────── */}
            <section
                aria-labelledby="categories-heading"
                className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <AnimateIn variant="fade-up" className="text-center mb-10">
                    <h2 id="categories-heading" className="section-title">Shop by Category</h2>
                    <div className="gold-divider" />
                    <p className="section-subtitle">Discover our curated collections for every occasion</p>
                </AnimateIn>

                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.12}>
                    {categories.slice(0, 4).map((cat: CategoryBase & { _count?: { products: number } }) => (
                        <StaggerItem key={cat.id} variant="zoom-in">
                            <CategoryCard category={cat} />
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                <AnimateIn variant="fade-up" delay={0.2} className="text-center mt-8">
                    <Link href="/categories" className="btn-outline">
                        View All Collections →
                    </Link>
                </AnimateIn>
            </section>

            {/* ── FEATURED PRODUCTS ─────────────────────────────────────────────────── */}
            {featuredProducts.length > 0 && (
                <section
                    aria-labelledby="featured-heading"
                    className="py-16 sm:py-20 bg-white"
                >
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <AnimateIn variant="fade-up" className="text-center mb-10">
                            <h2 id="featured-heading" className="section-title">Featured Pieces</h2>
                            <div className="gold-divider" />
                            <p className="section-subtitle">
                                Hand-selected masterpieces from our finest collections
                            </p>
                        </AnimateIn>

                        <StaggerContainer
                            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
                            staggerDelay={0.08}
                        >
                            {featuredProducts.map((product: ProductWithCategory) => (
                                <StaggerItem key={product.id} variant="fade-up">
                                    <ProductCard product={product} />
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </section>
            )}

            {/* ── NEW ARRIVALS ──────────────────────────────────────────────────────── */}
            {newArrivals.length > 0 && (
                <section
                    aria-labelledby="new-arrivals-heading"
                    className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
                    <div className="flex items-end justify-between mb-10">
                        <AnimateIn variant="slide-left">
                            <h2 id="new-arrivals-heading" className="section-title">New Arrivals</h2>
                            <div className="w-16 h-0.5 bg-gradient-gold rounded-full mt-4 mb-2" />
                            <p className="text-gray-500 mt-2">The latest additions to our collection</p>
                        </AnimateIn>
                        <AnimateIn variant="slide-right">
                            <Link href="/search?q=new" className="text-gold font-semibold text-sm hover:underline hidden sm:block">
                                View all →
                            </Link>
                        </AnimateIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6" staggerDelay={0.1}>
                        {newArrivals.map((product: ProductWithCategory) => (
                            <StaggerItem key={product.id} variant="fade-up">
                                <ProductCard product={product} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </section>
            )}

            {/* ── BRAND STORY SECTION ───────────────────────────────────────────────── */}
            <section
                aria-labelledby="brand-story-heading"
                className="py-16 sm:py-24"
                style={{
                    background: "linear-gradient(135deg, #5C0A14 0%, #7D1020 100%)",
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text */}
                        <div>
                            <AnimateIn variant="slide-left">
                                <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                                    Our Heritage
                                </p>
                                <h2 id="brand-story-heading" className="font-serif text-4xl sm:text-5xl text-white font-semibold leading-tight mb-6">
                                    Crafting Dreams in Gold Since 1987
                                </h2>
                            </AnimateIn>
                            <AnimateIn variant="fade-up" delay={0.15}>
                                <p className="text-white/70 leading-relaxed mb-6">
                                    Suraj Group was born from a simple belief — that fine jewellery should be more
                                    than an accessory. It should carry emotions, memories, and the artistry of
                                    generations. From our workshop in Bangalore&apos;s jewellery district, our master craftsmen
                                    handcraft each piece with painstaking attention to detail.
                                </p>
                                <p className="text-white/70 leading-relaxed mb-8">
                                    Every gem is hand-selected, every setting hand-set. We use only BIS Hallmarked gold
                                    and GIA-certified diamonds, because you deserve nothing less than the finest.
                                </p>
                            </AnimateIn>
                            <StaggerContainer className="flex flex-wrap gap-6 mb-8" staggerDelay={0.12}>
                                {[
                                    { icon: "🏆", label: "BIS Hallmarked" },
                                    { icon: "💎", label: "GIA Certified" },
                                    { icon: "🤝", label: "Lifetime Service" },
                                ].map((item) => (
                                    <StaggerItem key={item.label} variant="fade-up">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl">{item.icon}</span>
                                            <span className="text-white/80 text-sm font-medium">{item.label}</span>
                                        </div>
                                    </StaggerItem>
                                ))}
                            </StaggerContainer>
                            <AnimateIn variant="fade-up" delay={0.3}>
                                <Link href="/about" className="btn-gold">
                                    Discover Our Story →
                                </Link>
                            </AnimateIn>
                        </div>

                        {/* Image grid */}
                        <StaggerContainer className="grid grid-cols-2 gap-3" staggerDelay={0.15}>
                            {[
                                "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&q=80",
                                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&q=80",
                                "https://images.unsplash.com/photo-1635767798638-3e25273a8236?w=500&q=80",
                                "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
                            ].map((src, i) => (
                                <StaggerItem key={i} variant="zoom-in">
                                    <div
                                        className={`rounded-2xl overflow-hidden ${i === 0 ? "aspect-[4/5]" : i === 1 ? "aspect-square mt-6" : i === 2 ? "aspect-square" : "aspect-[4/5] -mt-6"} bg-maroon-light shadow-xl`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Jewellery craftsmanship ${i + 1}`}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* ── PROMISE STRIP ─────────────────────────────────────────────────────── */}
            <section aria-label="Our promises" className="bg-gold/5 border-y border-gold/20 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-6" staggerDelay={0.15}>
                        {[
                            { icon: "🔬", title: "Certified Quality", desc: "BIS Hallmarked & GIA diamonds" },
                            { icon: "↩️", title: "15-Day Returns", desc: "Hassle-free exchange policy" },
                            { icon: "🛡️", title: "Lifetime Service", desc: "Free cleaning & polishing" },
                        ].map((item) => (
                            <StaggerItem key={item.title} variant="fade-up">
                                <div className="text-center">
                                    <span className="text-3xl block mb-3">{item.icon}</span>
                                    <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                                    <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
