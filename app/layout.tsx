import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: {
        default: "Suraj Group – Timeless Fine Jewellery",
        template: "%s | Suraj Group",
    },
    description:
        "Discover Suraj Group – a curated collection of exquisite rings, necklaces, earrings, and bracelets crafted in 18K & 22K gold, platinum, and precious gemstones. Based in Bangalore.",
    keywords: ["jewellery", "gold jewellery", "diamond rings", "necklaces", "bracelets", "earrings", "luxury jewellery Bangalore", "Suraj Group"],
    authors: [{ name: "Suraj Group" }],
    openGraph: {
        type: "website",
        locale: "en_IN",
        siteName: "Suraj Group",
    },
    twitter: {
        card: "summary_large_image",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="min-h-screen flex flex-col">
                <Header />
                {/* Offset for fixed header: header (64px) */}
                <main className="flex-1 pt-[64px]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
