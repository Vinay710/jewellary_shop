import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Suraj Group – our heritage, master craftsmen, and commitment to creating timeless fine jewellery since 1987. Based in Bangalore.",
};

const VALUES = [
    {
        icon: "🏅",
        title: "Uncompromising Quality",
        description:
            "Every piece passes a 47-point quality inspection before leaving our workshop. We accept nothing less than perfection.",
    },
    {
        icon: "✋",
        title: "Handcrafted Mastery",
        description:
            "Our artisans have trained for 15+ years. Each gem is hand-set, each filigree hand-drawn, each finish hand-polished.",
    },
    {
        icon: "🌿",
        title: "Ethical Sourcing",
        description:
            "We source only conflict-free diamonds and responsibly mined metals, ensuring every jewel has a clean conscience.",
    },
    {
        icon: "❤️",
        title: "Made for Memories",
        description:
            "We believe jewellery is the vessel of life's most precious moments — engagements, births, milestones, and love.",
    },
];

const TEAM = [
    {
        name: "Arjun Mehta",
        role: "Founder & Chief Artisan",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
        bio: "Started Suraj Group at 24 after training under master jewellers in Jaipur.",
    },
    {
        name: "Priya Mehta",
        role: "Creative Director",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
        bio: "Designs each collection inspired by India's rich textile and architectural heritage.",
    },
    {
        name: "Rajan Nair",
        role: "Head Gemologist (GIA)",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        bio: "GIA-certified with 20 years of experience selecting the world's finest gemstones.",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* ── Hero ──────────────────────────────────────────────────────────────── */}
            <section
                className="relative py-24 sm:py-32 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3D0609 0%, #5C0A14 60%, #7D1020 100%)" }}
            >
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <AnimateIn variant="fade-up" delay={0.1}>
                        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Our Heritage
                        </p>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.3}>
                        <h1 className="font-serif text-5xl sm:text-6xl text-white font-semibold leading-tight mb-6">
                            The Story of <span className="text-gold italic">Suraj Group</span>
                        </h1>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.5}>
                        <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                            For over three decades, Suraj Group has been crafting the jewellery you pass down
                            through generations — pieces that carry love, memory, and meaning.
                        </p>
                    </AnimateIn>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
                        <path d="M0 50L1440 50L1440 20C1200 50 900 0 720 25C540 50 240 10 0 35L0 50Z" fill="#FAFAF5" />
                    </svg>
                </div>
            </section>

            {/* ── Origin Story ──────────────────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimateIn variant="slide-left">
                        <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
                                alt="Jewellery workshop Bangalore"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </AnimateIn>
                    <AnimateIn variant="slide-right">
                        <h2 className="section-title mb-4">Born in Bangalore&apos;s Gold Quarter</h2>
                        <div className="w-16 h-0.5 bg-gradient-gold rounded-full mb-6" />
                        <p className="text-gray-600 leading-relaxed mb-5">
                            In 1987, a visionary founder established Suraj Group with a dream:
                            to make fine jewellery accessible without sacrificing artistry. The philosophy was
                            simple — every customer deserves a masterpiece, not a mass-produced piece.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-5">
                            Today, Suraj Group has grown into a beloved name across India, with a reputation built on
                            one piece at a time. We still hand-set every stone in our original Bangalore workshop, now
                            expanded and staffed by 25 dedicated artisans.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            &quot;Suraj&quot; — meaning the sun in Sanskrit — reflects our belief that fine jewellery
                            should illuminate the wearer, bringing radiance to life&apos;s greatest moments.
                        </p>
                    </AnimateIn>
                </div>
            </section>

            {/* ── Values ───────────────────────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimateIn variant="fade-up" className="text-center mb-12">
                        <h2 className="section-title">What We Stand For</h2>
                        <div className="gold-divider" />
                    </AnimateIn>
                    <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
                        {VALUES.map((v) => (
                            <StaggerItem key={v.title} variant="zoom-in">
                                <div className="bg-ivory-100 rounded-2xl p-6 text-center card-hover h-full">
                                    <span className="text-4xl block mb-4">{v.icon}</span>
                                    <h3 className="font-serif font-semibold text-gray-900 mb-2">{v.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{v.description}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* ── Team ─────────────────────────────────────────────────────────────── */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimateIn variant="fade-up" className="text-center mb-12">
                    <h2 className="section-title">The People Behind Every Piece</h2>
                    <div className="gold-divider" />
                </AnimateIn>
                <StaggerContainer className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto" staggerDelay={0.15}>
                    {TEAM.map((person) => (
                        <StaggerItem key={person.name} variant="fade-up">
                            <div className="text-center">
                                <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-gold/20 shadow-gold hover:ring-gold/50 transition-all duration-300">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        width={112}
                                        height={112}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <h3 className="font-serif font-semibold text-gray-900">{person.name}</h3>
                                <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">{person.role}</p>
                                <p className="text-gray-500 text-sm">{person.bio}</p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* ── CTA ──────────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-gold/5 border-y border-gold/20">
                <AnimateIn variant="zoom-in" className="max-w-2xl mx-auto text-center px-4">
                    <h2 className="font-serif text-3xl text-gray-900 font-semibold mb-4">
                        Ready to Find Your Piece?
                    </h2>
                    <p className="text-gray-500 mb-8">
                        Explore our full collection or get in touch — we&apos;d love to help you find
                        the perfect jewel for your occasion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/categories" className="btn-primary">
                            Explore Collections
                        </Link>
                        <Link href="/contact" className="btn-outline">
                            Contact Us
                        </Link>
                    </div>
                </AnimateIn>
            </section>
        </>
    );
}
