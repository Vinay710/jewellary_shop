"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { METAL_TYPES } from "@/lib/utils";

const PRICE_RANGES = [
    { label: "Under ₹25,000", value: "0-25000" },
    { label: "₹25,000 – ₹75,000", value: "25000-75000" },
    { label: "₹75,000 – ₹1,50,000", value: "75000-150000" },
    { label: "Above ₹1,50,000", value: "150000-9999999" },
];

export default function FilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPrice = searchParams.get("price") ?? "";
    const currentMetal = searchParams.get("metal") ?? "";

    /** Build a new query string, preserving other params */
    const buildUrl = useCallback(
        (key: string, value: string | null) => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("page"); // reset to page 1 on filter change
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
            const qs = params.toString();
            // avoid trailing "?" when there are no params
            return qs ? `${pathname}?${qs}` : pathname;
        },
        [pathname, searchParams]
    );

    const handlePrice = (value: string) => {
        const next = currentPrice === value ? null : value;
        router.push(buildUrl("price", next));
    };

    const handleMetal = (value: string) => {
        const next = currentMetal === value ? null : value;
        router.push(buildUrl("metal", next));
    };

    const clearAll = () => {
        // Use a hard navigation to guarantee the server re-fetches
        // fresh unfiltered data — avoids router-cache race conditions
        window.location.href = pathname;
    };

    const hasFilters = currentPrice || currentMetal;

    return (
        <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl p-5 shadow-card sticky top-24">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="font-serif text-lg font-semibold text-gray-900">Filters</h2>
                    {hasFilters && (
                        <button
                            onClick={clearAll}
                            className="text-xs text-gold hover:text-gold-dark font-semibold transition-colors underline underline-offset-2"
                        >
                            Clear all
                        </button>
                    )}
                </div>

                {/* Price Range */}
                <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Price Range
                    </h3>
                    <div className="space-y-2">
                        {PRICE_RANGES.map((range) => {
                            const active = currentPrice === range.value;
                            return (
                                <label
                                    key={range.value}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="radio"
                                        name="price"
                                        value={range.value}
                                        checked={active}
                                        onChange={() => handlePrice(range.value)}
                                        className="accent-gold w-4 h-4 cursor-pointer"
                                    />
                                    <span
                                        className={`text-sm transition-colors ${active
                                            ? "text-gold font-semibold"
                                            : "text-gray-600 group-hover:text-gold"
                                            }`}
                                    >
                                        {range.label}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                <div className="h-px bg-gold-100 mb-6" />

                {/* Metal Type */}
                <div className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Metal Type
                    </h3>
                    <div className="space-y-2">
                        {METAL_TYPES.map((metal) => {
                            const active = currentMetal === metal;
                            return (
                                <label
                                    key={metal}
                                    className="flex items-center gap-2 cursor-pointer group"
                                >
                                    <input
                                        type="checkbox"
                                        name="metal"
                                        value={metal}
                                        checked={active}
                                        onChange={() => handleMetal(metal)}
                                        className="accent-gold w-4 h-4 rounded cursor-pointer"
                                    />
                                    <span
                                        className={`text-sm transition-colors ${active
                                            ? "text-gold font-semibold"
                                            : "text-gray-600 group-hover:text-gold"
                                            }`}
                                    >
                                        {metal}
                                    </span>
                                </label>
                            );
                        })}
                    </div>
                </div>

                {hasFilters && (
                    <>
                        <div className="h-px bg-gold-100 mb-4" />
                        <div className="space-y-1">
                            {currentPrice && (
                                <p className="text-xs text-gold bg-gold/5 rounded-lg px-3 py-1.5 font-medium flex items-center justify-between">
                                    <span>💰 {PRICE_RANGES.find(r => r.value === currentPrice)?.label}</span>
                                    <button onClick={() => router.push(buildUrl("price", null))} className="ml-2 hover:text-maroon">✕</button>
                                </p>
                            )}
                            {currentMetal && (
                                <p className="text-xs text-gold bg-gold/5 rounded-lg px-3 py-1.5 font-medium flex items-center justify-between">
                                    <span>⚙️ {currentMetal}</span>
                                    <button onClick={() => router.push(buildUrl("metal", null))} className="ml-2 hover:text-maroon">✕</button>
                                </p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </aside>
    );
}
