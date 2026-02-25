"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Suggestion {
    id: number;
    name: string;
    slug: string;
    images: string[];
    price: number;
}

export default function SearchBar({ className = "" }: { className?: string }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    // Debounced suggestions
    useEffect(() => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        if (!query || query.trim().length < 2) {
            setSuggestions([]);
            setOpen(false);
            return;
        }
        debounceRef.current = setTimeout(async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&mode=suggestions`);
                const data = await res.json();
                setSuggestions(data || []);
                setOpen(data && data.length > 0);
            } catch {
                setSuggestions([]);
            } finally {
                setLoading(false);
            }
        }, 300);
    }, [query]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
            setOpen(false);
        }
    };

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(price);

    return (
        <div ref={ref} className={`relative ${className}`}>
            <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative flex-1">
                    <input
                        id="search-input"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={() => suggestions.length > 0 && setOpen(true)}
                        placeholder="Search jewellery…"
                        aria-label="Search jewellery"
                        className="w-full bg-ivory-100 border border-gold-200 rounded-l-full pl-4 pr-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                    />
                    {loading && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2">
                            <svg className="animate-spin h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                        </span>
                    )}
                </div>
                <button
                    type="submit"
                    aria-label="Submit search"
                    className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-r-full transition-colors text-sm font-medium"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </form>

            {/* Suggestions dropdown */}
            {open && suggestions.length > 0 && (
                <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-card-hover border border-gold-100 overflow-hidden animate-fade-in">
                    <p className="text-xs text-gray-400 px-4 py-2 border-b border-gold-100">Suggestions</p>
                    <ul>
                        {suggestions.map((s) => (
                            <li key={s.id}>
                                <Link
                                    href={`/product/${s.slug}`}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-ivory-100 transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {s.images[0] && (
                                        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-ivory-200">
                                            <Image
                                                src={s.images[0]}
                                                alt={s.name}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{s.name}</p>
                                        <p className="text-xs text-gold-400 font-semibold">{formatPrice(s.price)}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href={`/search?q=${encodeURIComponent(query)}`}
                        className="block px-4 py-3 text-xs text-gold font-semibold text-center border-t border-gold-100 hover:bg-ivory-100 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        View all results for &quot;{query}&quot; →
                    </Link>
                </div>
            )}
        </div>
    );
}
