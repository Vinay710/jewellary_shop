import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/categories" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

const SOCIAL_LINKS = [
    {
        label: "Instagram",
        href: "https://instagram.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
        ),
    },
    {
        label: "Pinterest",
        href: "https://pinterest.com",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
        ),
    },
];

export default function Footer() {
    return (
        <footer className="bg-maroon text-white" role="contentinfo">
            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2 mb-4">
                            <span className="font-serif text-2xl text-gold font-bold tracking-wide">
                                Suraj Group
                            </span>
                        </Link>
                        <p className="text-maroon-100 text-sm leading-relaxed mb-5">
                            Crafting timeless jewellery since 1987. Based in Bangalore, each piece tells a
                            story of heritage, artistry, and enduring love.
                        </p>
                        <div className="flex gap-3">
                            {SOCIAL_LINKS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-maroon-100 hover:text-gold transition-colors"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Collections */}
                    <div>
                        <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-widest">
                            Collections
                        </h3>
                        <ul className="space-y-2">
                            {["Rings", "Necklaces", "Earrings", "Bracelets"].map((cat) => (
                                <li key={cat}>
                                    <Link
                                        href={`/category/${cat.toLowerCase()}`}
                                        className="text-maroon-100 hover:text-gold text-sm transition-colors"
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-widest">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { label: "About Us", href: "/about" },
                                { label: "Contact", href: "/contact" },
                                { label: "All Categories", href: "/categories" },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-maroon-100 hover:text-gold text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h3 className="font-serif text-gold font-semibold mb-4 text-sm uppercase tracking-widest">
                            Visit Us
                        </h3>
                        <address className="not-italic space-y-2 text-sm text-maroon-100">
                            <p>Jewellers Street, MG Road</p>
                            <p>Bangalore, Karnataka 560001</p>
                            <a href="tel:+918012345678" className="block hover:text-gold transition-colors">
                                +91 80 1234 5678
                            </a>
                            <a href="mailto:hello@surajgroup.in" className="block hover:text-gold transition-colors">
                                hello@surajgroup.in
                            </a>
                            <p className="text-maroon-100/70 text-xs mt-3">
                                Mon–Sat: 10 AM – 8 PM<br />Sun: 11 AM – 6 PM
                            </p>
                        </address>
                    </div>
                </div>

                {/* Gold divider */}
                <div className="h-px bg-gold/20 mb-6" />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-maroon-100/60">
                    <p>© {new Date().getFullYear()} Suraj Group. All rights reserved.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
