"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    if (totalPages <= 1) return null;

    const getPageUrl = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", String(page));
        return `${basePath}?${params.toString()}`;
    };

    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
            pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
    }

    return (
        <nav aria-label="Pagination" className="flex items-center justify-center gap-1 mt-10">
            {/* Previous */}
            <Link
                href={getPageUrl(currentPage - 1)}
                aria-disabled={currentPage === 1}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === 1
                        ? "pointer-events-none text-gray-300"
                        : "text-gray-600 hover:bg-gold-50 hover:text-gold"
                    }`}
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Prev
            </Link>

            {/* Page numbers */}
            {pages.map((page, i) =>
                page === "..." ? (
                    <span key={`ellipsis-${i}`} className="w-9 h-9 flex items-center justify-center text-gray-400">
                        …
                    </span>
                ) : (
                    <Link
                        key={page}
                        href={getPageUrl(page as number)}
                        aria-current={page === currentPage ? "page" : undefined}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${page === currentPage
                                ? "bg-gold text-white shadow-gold"
                                : "text-gray-600 hover:bg-gold-50 hover:text-gold"
                            }`}
                    >
                        {page}
                    </Link>
                )
            )}

            {/* Next */}
            <Link
                href={getPageUrl(currentPage + 1)}
                aria-disabled={currentPage === totalPages}
                className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${currentPage === totalPages
                        ? "pointer-events-none text-gray-300"
                        : "text-gray-600 hover:bg-gold-50 hover:text-gold"
                    }`}
            >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </Link>
        </nav>
    );
}
