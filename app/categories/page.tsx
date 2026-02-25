import type { Metadata } from "next";
import { getCategories } from "@/lib/queries";
import CategoryCard from "@/components/CategoryCard";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";
import type { CategoryBase } from "@/lib/queries";

export const metadata: Metadata = {
    title: "All Collections",
    description:
        "Browse all jewellery collections at Suraj Group – rings, necklaces, earrings, bracelets and more.",
};

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
    const categories = await getCategories();

    return (
        <>
            {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
            <section
                className="relative py-20 text-center overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3D0609 0%, #5C0A14 60%, #7D1020 100%)" }}
            >
                <div className="relative max-w-3xl mx-auto px-4">
                    <AnimateIn variant="fade-up" delay={0.1}>
                        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Fine Jewellery
                        </p>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.3}>
                        <h1 className="font-serif text-5xl sm:text-6xl text-white font-semibold leading-tight mb-4">
                            Our <span className="text-gold italic">Collections</span>
                        </h1>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.5}>
                        <p className="text-white/70 text-lg max-w-xl mx-auto">
                            Explore our full range of handcrafted fine jewellery, each piece made with
                            love and precision in Bangalore.
                        </p>
                    </AnimateIn>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
                        <path d="M0 50L1440 50L1440 20C1200 50 900 0 720 25C540 50 240 10 0 35L0 50Z" fill="#FAFAF5" />
                    </svg>
                </div>
            </section>

            {/* ── Category Grid ────────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {categories.length > 0 ? (
                    <StaggerContainer
                        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
                        staggerDelay={0.12}
                    >
                        {categories.map((cat: CategoryBase & { _count?: { products: number } }) => (
                            <StaggerItem key={cat.id} variant="zoom-in">
                                <CategoryCard category={cat} />
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                ) : (
                    <AnimateIn variant="fade-in" className="text-center py-24 text-gray-400">
                        <p className="text-5xl mb-4">💎</p>
                        <p className="text-lg">Collections coming soon.</p>
                    </AnimateIn>
                )}
            </div>
        </>
    );
}
