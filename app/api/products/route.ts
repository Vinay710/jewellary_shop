import { NextRequest, NextResponse } from "next/server";
import { getProducts } from "@/lib/queries";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const categorySlug = searchParams.get("category") || undefined;
        const metalType = searchParams.get("metal") || undefined;
        const minPrice = searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined;
        const maxPrice = searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined;
        const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
        const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : 12;
        const featured = searchParams.get("featured") === "true" ? true : undefined;
        const isNewArrival = searchParams.get("newArrival") === "true" ? true : undefined;

        const data = await getProducts({
            categorySlug,
            metalType,
            minPrice,
            maxPrice,
            page,
            limit,
            featured,
            isNewArrival,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error("[GET /api/products]", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
