import Link from "next/link";
import Image from "next/image";

interface Category {
    id: number;
    name: string;
    slug: string;
    image: string;
    _count?: { products: number };
}

export default function CategoryCard({ category }: { category: Category }) {
    return (
        <Link
            href={`/category/${category.slug}`}
            className="group relative block rounded-2xl overflow-hidden aspect-square shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            aria-label={`Browse ${category.name}`}
        >
            <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <h3 className="font-serif text-white text-xl sm:text-2xl font-semibold leading-tight">
                    {category.name}
                </h3>
                {category._count && (
                    <p className="text-gold-light text-xs sm:text-sm mt-1 font-medium">
                        {category._count.products} pieces
                    </p>
                )}
                <span className="inline-block mt-2 text-white text-xs border border-white/40 rounded-full px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                </span>
            </div>
        </Link>
    );
}
