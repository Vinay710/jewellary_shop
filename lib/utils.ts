// Utility helpers used across the codebase

export function formatPrice(price: number): string {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);
}

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

export function truncate(text: string, length = 120): string {
    if (text.length <= length) return text;
    return text.slice(0, length).trim() + "…";
}

export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}

export const METAL_TYPES = [
    "Yellow Gold",
    "White Gold",
    "Rose Gold",
    "Platinum",
    "Silver",
    "Gold Plated",
] as const;

export type MetalType = (typeof METAL_TYPES)[number];
