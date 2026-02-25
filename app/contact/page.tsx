import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn, { StaggerContainer, StaggerItem } from "@/components/AnimateIn";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Suraj Group – visit our showroom in Bangalore or reach us by phone and email.",
};

const CONTACT_INFO = [
    {
        icon: "📍",
        title: "Showroom",
        lines: ["Jewellers Street, MG Road", "Bangalore, Karnataka 560001"],
    },
    {
        icon: "📞",
        title: "Phone",
        lines: ["+91 80 1234 5678", "+91 98765 43210"],
    },
    {
        icon: "📧",
        title: "Email",
        lines: ["hello@surajgroup.in", "care@surajgroup.in"],
    },
    {
        icon: "🕐",
        title: "Hours",
        lines: ["Monday – Saturday: 10 AM – 8 PM", "Sunday: 11 AM – 6 PM"],
    },
];

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section
                className="py-20 text-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #3D0609 0%, #5C0A14 60%, #7D1020 100%)" }}
            >
                <div className="relative max-w-2xl mx-auto px-4">
                    <AnimateIn variant="fade-up" delay={0.1}>
                        <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            We'd Love to Hear from You
                        </p>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.3}>
                        <h1 className="font-serif text-5xl text-white font-semibold leading-tight mb-4">
                            Get in Touch
                        </h1>
                    </AnimateIn>
                    <AnimateIn variant="fade-up" delay={0.5}>
                        <p className="text-white/70 text-lg">
                            Visit our showroom or reach out — our jewellery consultants are always happy to help
                            you find the perfect piece.
                        </p>
                    </AnimateIn>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none">
                        <path d="M0 50L1440 50L1440 20C1200 50 900 0 720 25C540 50 240 10 0 35L0 50Z" fill="#FAFAF5" />
                    </svg>
                </div>
            </section>

            {/* Contact Info Grid */}
            <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
                    {CONTACT_INFO.map((item) => (
                        <StaggerItem key={item.title} variant="fade-up">
                            <div className="bg-white rounded-2xl p-6 text-center shadow-card card-hover h-full">
                                <span className="text-4xl block mb-4">{item.icon}</span>
                                <h2 className="font-serif font-semibold text-gray-900 mb-3">{item.title}</h2>
                                {item.lines.map((line, i) => (
                                    <p key={i} className="text-gray-500 text-sm">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </section>

            {/* Map placeholder + CTA */}
            <section className="pb-16 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Map placeholder */}
                    <AnimateIn variant="slide-left">
                        <div
                            className="rounded-3xl overflow-hidden h-80 bg-ivory-200 flex items-center justify-center shadow-card"
                            aria-label="Showroom location map"
                        >
                            <div className="text-center text-gray-400">
                                <span className="text-5xl block mb-3">🗺️</span>
                                <p className="text-sm font-medium">Interactive Map</p>
                                <p className="text-xs mt-1">Jewellers Street, MG Road, Bangalore</p>
                                <a
                                    href="https://maps.google.com/?q=MG+Road+Bangalore"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-4 text-gold text-xs font-semibold underline underline-offset-2"
                                >
                                    Open in Google Maps ↗
                                </a>
                            </div>
                        </div>
                    </AnimateIn>

                    {/* Info */}
                    <AnimateIn variant="slide-right">
                        <h2 className="section-title mb-4">Come Visit Us</h2>
                        <div className="w-16 h-0.5 bg-gradient-gold rounded-full mb-6" />
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Experience our collection in person at our flagship showroom in the heart of
                            Bangalore&apos;s renowned MG Road jewellery district. Our expert jewellery consultants are on hand
                            to guide you through our collections and help you find the perfect piece.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            For bespoke or customised jewellery enquiries, we recommend booking a private
                            consultation. Our master craftsmen can bring your dream jewel to life.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-gold text-xl">🚗</span>
                                <p className="text-sm text-gray-600">Valet parking available on weekends</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-gold text-xl">🚇</span>
                                <p className="text-sm text-gray-600">5 min walk from MG Road Metro station</p>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-8">
                            <Link href="/categories" className="btn-primary">
                                Browse Online
                            </Link>
                            <a href="tel:+918012345678" className="btn-outline">
                                Call Now
                            </a>
                        </div>
                    </AnimateIn>
                </div>
            </section>

            {/* FAQ teaser */}
            <section className="py-12 bg-gold/5 border-y border-gold/20">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <AnimateIn variant="fade-up">
                        <h2 className="font-serif text-2xl text-gray-900 font-semibold mb-2">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-500 text-sm mb-8">
                            Quick answers to common jewellery questions
                        </p>
                    </AnimateIn>
                    <StaggerContainer className="space-y-4 text-left" staggerDelay={0.12}>
                        {[
                            {
                                q: "Do you offer jewellery customisation?",
                                a: "Yes! We offer full bespoke service. Contact us or visit our showroom to discuss your vision with our master jewellers.",
                            },
                            {
                                q: "Is your gold BIS Hallmarked?",
                                a: "Absolutely. All our gold jewellery is BIS Hallmarked (Bureau of Indian Standards) to guarantee purity and authenticity.",
                            },
                            {
                                q: "What is your return policy?",
                                a: "We offer a 15-day hassle-free exchange policy for all purchases. Please bring the original invoice and packaging.",
                            },
                        ].map((faq, i) => (
                            <StaggerItem key={i} variant="fade-up">
                                <details className="bg-white rounded-xl p-5 shadow-card cursor-pointer group">
                                    <summary className="font-semibold text-gray-900 text-sm list-none flex items-center justify-between">
                                        {faq.q}
                                        <span className="text-gold text-lg">+</span>
                                    </summary>
                                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">{faq.a}</p>
                                </details>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </>
    );
}
