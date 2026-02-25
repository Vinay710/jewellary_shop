import { NextRequest, NextResponse } from "next/server";
import { searchProducts, getSearchSuggestions } from "@/lib/queries";

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const q = searchParams.get("q") || "";
        const mode = searchParams.get("mode") || "full"; // "full" | "suggestions"

        if (!q || q.trim().length < 2) {
            return NextResponse.json({ products: [], total: 0 });
        }

        if (mode === "suggestions") {
            const suggestions = await getSearchSuggestions(q, 5);
            return NextResponse.json(suggestions);
        }

        const data = await searchProducts(q);
        return NextResponse.json(data);
    } catch (error) {
        console.error("[GET /api/search]", error);
        return NextResponse.json({ error: "Search failed" }, { status: 500 });
    }
}
