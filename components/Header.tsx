"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const CATEGORIES = [
    { name: "Rings", slug: "rings", icon: "💍" },
    { name: "Necklaces", slug: "necklaces", icon: "📿" },
    { name: "Earrings", slug: "earrings", icon: "✨" },
    { name: "Bracelets", slug: "bracelets", icon: "⌚" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [catOpen, setCatOpen] = useState(false);
    const catRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Shadow on scroll
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setCatOpen(false);
    }, [pathname]);

    // Close categories dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (catRef.current && !catRef.current.contains(e.target as Node)) {
                setCatOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gold-100"
                }`}
            role="banner"
        >


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 gap-4">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Suraj Group Home">
                        <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
                            <span className="text-white font-serif font-bold text-sm">S</span>
                        </div>
                        <span className="font-serif text-xl font-bold text-maroon tracking-wide hidden sm:block">
                            Suraj Group
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive(link.href)
                                    ? "text-maroon after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-0.5 after:bg-gold after:rounded-full"
                                    : "text-gray-700 hover:text-maroon hover:bg-maroon-50"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        {/* Categories dropdown */}
                        <div ref={catRef} className="relative">
                            <button
                                onMouseEnter={() => setCatOpen(true)}
                                onClick={() => setCatOpen(!catOpen)}
                                aria-haspopup="true"
                                aria-expanded={catOpen}
                                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-maroon hover:bg-maroon-50 rounded-lg transition-colors"
                            >
                                Categories
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${catOpen ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {catOpen && (
                                <div
                                    onMouseLeave={() => setCatOpen(false)}
                                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-gold-100 overflow-hidden animate-fade-in z-50"
                                >
                                    <div className="p-2">
                                        {CATEGORIES.map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                href={`/category/${cat.slug}`}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-ivory-100 transition-colors group"
                                            >
                                                <span className="text-lg">{cat.icon}</span>
                                                <span className="text-sm font-medium text-gray-700 group-hover:text-maroon transition-colors">
                                                    {cat.name}
                                                </span>
                                            </Link>
                                        ))}
                                        <div className="h-px bg-gold-100 my-2" />
                                        <Link
                                            href="/categories"
                                            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-gold hover:bg-gold-50 transition-colors"
                                        >
                                            All Collections →
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Search bar – desktop */}
                    <SearchBar className="hidden lg:block flex-1 max-w-xs" />

                    {/* Mobile: menu button */}
                    <button
                        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-ivory-100 transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        aria-expanded={mobileOpen}
                    >
                        {mobileOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t border-gold-100 bg-white animate-slide-up">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
                        {/* Mobile search */}
                        <SearchBar />
                        <div className="h-px bg-gold-100" />
                        {/* Mobile nav links */}
                        <nav className="space-y-1" aria-label="Mobile navigation">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive(link.href)
                                        ? "bg-maroon text-white"
                                        : "text-gray-700 hover:bg-ivory-100 hover:text-maroon"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="h-px bg-gold-100 my-2" />
                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-1">
                                Collections
                            </p>
                            {CATEGORIES.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/category/${cat.slug}`}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-ivory-100 hover:text-maroon transition-colors"
                                >
                                    <span>{cat.icon}</span>
                                    {cat.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
