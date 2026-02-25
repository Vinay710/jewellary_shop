// ─── Static data queries (Prisma-free) ────────────────────────────────────────
import {
    CATEGORIES,
    PRODUCTS,
    CategoryBase,
    ProductWithCategory,
} from "@/lib/data";

// Re-export types so existing imports elsewhere still work
export type { CategoryBase, ProductWithCategory };

// ─── CATEGORIES ───────────────────────────────────────────────────────────────

export async function getCategories() {
    return CATEGORIES.map((cat) => ({
        ...cat,
        _count: { products: PRODUCTS.filter((p) => p.categoryId === cat.id).length },
    }));
}

export async function getCategoryBySlug(slug: string) {
    const cat = CATEGORIES.find((c) => c.slug === slug) ?? null;
    if (!cat) return null;
    return {
        ...cat,
        _count: { products: PRODUCTS.filter((p) => p.categoryId === cat.id).length },
    };
}

// ─── PRODUCTS ─────────────────────────────────────────────────────────────────

export interface GetProductsOptions {
    categorySlug?: string;
    metalType?: string;
    minPrice?: number;
    maxPrice?: number;
    page?: number;
    limit?: number;
    featured?: boolean;
    isNewArrival?: boolean;
    orderBy?: "createdAt" | "price" | "name";
    order?: "asc" | "desc";
}

export async function getProducts(options: GetProductsOptions = {}) {
    const {
        categorySlug,
        metalType,
        minPrice,
        maxPrice,
        page = 1,
        limit = 12,
        featured,
        isNewArrival,
        orderBy = "createdAt",
        order = "desc",
    } = options;

    let filtered = [...PRODUCTS];

    if (categorySlug) filtered = filtered.filter((p) => p.category.slug === categorySlug);
    if (metalType) filtered = filtered.filter((p) => p.metalType === metalType);
    if (minPrice !== undefined) filtered = filtered.filter((p) => p.price >= minPrice);
    if (maxPrice !== undefined) filtered = filtered.filter((p) => p.price <= maxPrice);
    if (featured !== undefined) filtered = filtered.filter((p) => p.featured === featured);
    if (isNewArrival !== undefined) filtered = filtered.filter((p) => p.isNewArrival === isNewArrival);

    // Sort
    filtered.sort((a, b) => {
        const getRaw = (p: typeof a) => {
            const v = p[orderBy];
            return v instanceof Date ? v.getTime() : (v as number | string);
        };
        const av = getRaw(a);
        const bv = getRaw(b);
        if (av < bv) return order === "asc" ? -1 : 1;
        if (av > bv) return order === "asc" ? 1 : -1;
        return 0;
    });

    const total = filtered.length;
    const products = filtered.slice((page - 1) * limit, page * limit);

    return {
        products,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
    };
}

export async function getProductBySlug(slug: string): Promise<ProductWithCategory | null> {
    return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedProducts(limit = 8): Promise<ProductWithCategory[]> {
    return PRODUCTS.filter((p) => p.featured)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, limit);
}

export async function getNewArrivals(limit = 8): Promise<ProductWithCategory[]> {
    return PRODUCTS.filter((p) => p.isNewArrival)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, limit);
}

export async function getRelatedProducts(
    productId: number,
    categoryId: number,
    limit = 4
): Promise<ProductWithCategory[]> {
    return PRODUCTS.filter((p) => p.categoryId === categoryId && p.id !== productId)
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, limit);
}

// ─── SEARCH ───────────────────────────────────────────────────────────────────

export async function searchProducts(query: string, limit = 20) {
    if (!query || query.trim().length < 2) return { products: [], total: 0 };

    const q = query.trim().toLowerCase();

    const products = PRODUCTS.filter(
        (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.tags.includes(q) ||
            p.metalType.toLowerCase().includes(q) ||
            p.category.name.toLowerCase().includes(q)
    )
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
        .slice(0, limit);

    return { products, total: products.length };
}

export async function getSearchSuggestions(query: string, limit = 5) {
    if (!query || query.trim().length < 2) return [];

    const q = query.trim().toLowerCase();

    return PRODUCTS.filter(
        (p) =>
            p.name.toLowerCase().includes(q) ||
            p.tags.some((t) => t.includes(q))
    )
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, limit)
        .map(({ id, name, slug, images, price }) => ({ id, name, slug, images, price }));
}
