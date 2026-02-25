import Link from "next/link";

interface Crumb {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    crumbs: Crumb[];
}

export default function Breadcrumb({ crumbs }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-xs sm:text-sm text-gray-500 flex-wrap">
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                    <span key={index} className="flex items-center gap-1">
                        {index > 0 && (
                            <svg className="w-3 h-3 text-gold-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        )}
                        {!isLast && crumb.href ? (
                            <Link
                                href={crumb.href}
                                className="text-gray-500 hover:text-gold transition-colors"
                            >
                                {crumb.label}
                            </Link>
                        ) : (
                            <span className={isLast ? "text-maroon font-medium" : "text-gray-500"}>
                                {crumb.label}
                            </span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}
