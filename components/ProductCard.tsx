import Link from "next/link";
import Image from "next/image";
import { formatPrice, truncate } from "@/lib/utils";
import type { ProductWithCategory } from "@/lib/queries";

interface ProductCardProps {
    product: ProductWithCategory;
    priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
    const image = product.images?.[0] || "/placeholder-product.jpg";

    return (
        <Link
            href={`/product/${product.slug}`}
            className="group block bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            aria-label={`View ${product.name}`}
        >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden bg-ivory-200">
                <Image
                    src={image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={priority}
                />
                {/* Overlay badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                    {product.featured && (
                        <span className="bg-gold text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            Featured
                        </span>
                    )}
                    {product.isNewArrival && (
                        <span className="bg-maroon text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                            New
                        </span>
                    )}
                </div>
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        View Details
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="p-4">
                <p className="text-xs text-gold font-semibold uppercase tracking-wider mb-1">
                    {product.category?.name}
                </p>
                <h3 className="font-serif text-gray-900 font-semibold leading-snug mb-2 line-clamp-2 text-sm sm:text-base">
                    {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2 hidden sm:block">
                    {truncate(product.description, 80)}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-maroon font-bold text-lg">{formatPrice(product.price)}</p>
                    <span className="text-xs text-gray-400">{product.metalType}</span>
                </div>
            </div>
        </Link>
    );
}
