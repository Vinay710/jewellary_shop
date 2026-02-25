"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
    images: string[];
    productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

    const activeImage = images[activeIndex] || "/placeholder-product.jpg";

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x, y });
    };

    return (
        <div className="space-y-4">
            {/* Main Image */}
            <div
                className="relative aspect-square rounded-2xl overflow-hidden bg-ivory-200 cursor-zoom-in shadow-card"
                onMouseEnter={() => setZoomed(true)}
                onMouseLeave={() => setZoomed(false)}
                onMouseMove={handleMouseMove}
                aria-label={`${productName} – main product image`}
            >
                <Image
                    src={activeImage}
                    alt={`${productName} – view ${activeIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-200"
                    style={
                        zoomed
                            ? {
                                transformOrigin: `${mousePos.x}% ${mousePos.y}%`,
                                transform: "scale(1.8)",
                            }
                            : {}
                    }
                    priority
                />
                {/* Zoom hint */}
                {!zoomed && (
                    <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-500 flex items-center gap-1 shadow-sm">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                        Hover to zoom
                    </div>
                )}
            </div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`View image ${i + 1}`}
                            className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-200 ${i === activeIndex
                                    ? "ring-2 ring-gold shadow-gold"
                                    : "ring-1 ring-gray-200 opacity-70 hover:opacity-100 hover:ring-gold-200"
                                }`}
                        >
                            <Image
                                src={img}
                                alt={`${productName} thumbnail ${i + 1}`}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
