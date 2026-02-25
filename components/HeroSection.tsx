"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const STATS = [
    { value: "35+", label: "Years of Craft" },
    { value: "10K+", label: "Pieces Created" },
    { value: "100%", label: "Hallmarked Gold" },
];

export default function HeroSection() {
    return (
        <section
            aria-label="Hero banner"
            className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #3D0609 0%, #5C0A14 40%, #7D1020 70%, #5C0A14 100%)",
            }}
        >
            {/* Decorative pattern overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Rotating decorative rings */}
            <motion.div
                className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold/20 hidden lg:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute top-32 right-32 w-48 h-48 rounded-full border border-gold/10 hidden lg:block"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-gold/15 hidden lg:block"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">

                {/* Eyebrow */}
                <motion.p
                    className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className="w-12 h-px bg-gold-300 inline-block" />
                    Est. 1987 · Bangalore, India
                    <span className="w-12 h-px bg-gold-300 inline-block" />
                </motion.p>

                {/* Headline */}
                <motion.h1
                    className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-6 text-balance"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Where Every Jewel
                    <br />
                    <motion.span
                        className="text-gold italic"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.9 }}
                    >
                        Tells a Story
                    </motion.span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="text-white/70 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                >
                    Handcrafted fine jewellery in 18K &amp; 22K gold, platinum, and precious gemstones —
                    for every cherished moment.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                >
                    <Link href="/categories" className="btn-gold px-8 py-4 text-base">
                        Explore Collections
                    </Link>
                    <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-maroon px-8 py-4 text-base">
                        Our Story
                    </Link>
                </motion.div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.7, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.55 + i * 0.15 }}
                        >
                            <p className="font-serif text-2xl text-gold font-bold">{stat.value}</p>
                            <p className="text-white/60 text-xs mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Wave bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 60L1440 60L1440 20C1200 60 900 0 720 30C540 60 240 10 0 40L0 60Z" fill="#FAFAF5" />
                </svg>
            </div>
        </section>
    );
}
