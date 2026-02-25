// ─── Static Jewellery Data (replaces Prisma DB) ──────────────────────────────

export interface CategoryBase {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}

export interface ProductWithCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    price: number;
    categoryId: number;
    category: CategoryBase;
    tags: string[];
    metalType: string;
    images: string[];
    featured: boolean;
    isNewArrival: boolean;
    createdAt: Date;
    updatedAt: Date;
}

// ─── Categories ───────────────────────────────────────────────────────────────

export const CATEGORIES: CategoryBase[] = [
    {
        id: 1,
        name: "Rings",
        slug: "rings",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&auto=format&fit=crop",
        description: "Exquisite rings for every occasion — from solitaire diamonds to stackable bands.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 2,
        name: "Necklaces",
        slug: "necklaces",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&auto=format&fit=crop",
        description: "Elegant necklaces crafted in gold, silver, and platinum with precious gemstones.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 3,
        name: "Earrings",
        slug: "earrings",
        image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&auto=format&fit=crop",
        description: "From subtle studs to dramatic drops — find your perfect pair.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 4,
        name: "Bracelets",
        slug: "bracelets",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop",
        description: "Beautiful bracelets and bangles to adorn your wrists.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 5,
        name: "Pendants",
        slug: "pendants",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop",
        description: "Meaningful pendants and charms that tell your story.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 6,
        name: "Bangles",
        slug: "bangles",
        image: "https://images.unsplash.com/photo-1612945578381-6481cdd73b0a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&auto=format&fit=crop",
        description: "Traditional and contemporary bangles in gold and silver.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
    {
        id: 7,
        name: "Sets",
        slug: "sets",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&auto=format&fit=crop",
        description: "Curated jewellery sets for a perfectly coordinated look.",
        createdAt: new Date("2024-01-01"),
        updatedAt: new Date("2024-01-01"),
    },
];

// ─── Products ─────────────────────────────────────────────────────────────────

// Helper to build a product
function makeProduct(
    id: number,
    name: string,
    slug: string,
    description: string,
    price: number,
    categoryId: number,
    tags: string[],
    metalType: string,
    images: string[],
    featured: boolean,
    isNewArrival: boolean,
    createdAt: Date
): ProductWithCategory {
    const cat = CATEGORIES.find((c) => c.id === categoryId)!;
    return {
        id,
        name,
        slug,
        description,
        price,
        categoryId,
        category: cat,
        tags,
        metalType,
        images,
        featured,
        isNewArrival,
        createdAt,
        updatedAt: createdAt,
    };
}

export const PRODUCTS: ProductWithCategory[] = [
    // ── Rings ──────────────────────────────────────────────────────────────────
    makeProduct(
        1,
        "Diamond Solitaire Ring",
        "diamond-solitaire-ring",
        "A timeless 1-carat round brilliant diamond set in classic 18K white gold. Perfect for engagements and milestones.",
        245000,
        1,
        ["diamond", "engagement", "solitaire", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-05")
    ),
    makeProduct(
        2,
        "Rose Gold Twisted Band",
        "rose-gold-twisted-band",
        "A delicate twisted band in warm 18K rose gold — effortlessly elegant for everyday wear.",
        18500,
        1,
        ["rose gold", "band", "everyday", "minimalist"],
        "Rose Gold",
        [
            "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-02-10")
    ),
    makeProduct(
        3,
        "Emerald Halo Ring",
        "emerald-halo-ring",
        "A vibrant Colombian emerald surrounded by a sparkling diamond halo in 22K yellow gold.",
        185000,
        1,
        ["emerald", "halo", "yellow gold", "gemstone"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1682822665515-60979096b579?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-20")
    ),
    makeProduct(
        4,
        "Silver Stackable Rings Set",
        "silver-stackable-rings-set",
        "Set of three dainty sterling silver rings — mix, match, and stack for your own unique look.",
        4500,
        1,
        ["silver", "stackable", "set", "minimalist"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-01")
    ),

    // ── Necklaces ──────────────────────────────────────────────────────────────
    makeProduct(
        5,
        "Gold Layered Chain Necklace",
        "gold-layered-chain-necklace",
        "Three layers of 22K gold chains at different lengths for a sophisticated, layered look.",
        38000,
        2,
        ["gold", "chain", "layered", "everyday"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-15")
    ),
    makeProduct(
        6,
        "Pearl Strand Necklace",
        "pearl-strand-necklace",
        "Classic freshwater pearl strand with a 18K gold clasp — a wardrobe essential.",
        27500,
        2,
        ["pearl", "strand", "classic", "white gold"],
        "White Gold",
        [
            "https://plus.unsplash.com/premium_photo-1674748385436-db725f68e312?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-25")
    ),
    makeProduct(
        7,
        "Diamond Tennis Necklace",
        "diamond-tennis-necklace",
        "A breathtaking line of round brilliant diamonds totalling 5 carats in 18K white gold.",
        850000,
        2,
        ["diamond", "tennis", "luxury", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-01")
    ),
    makeProduct(
        8,
        "Sapphire Pendant Necklace",
        "sapphire-pendant-necklace",
        "Deep blue sapphire drop pendant on a delicate 18K white gold chain.",
        62000,
        2,
        ["sapphire", "pendant", "blue", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-15")
    ),

    // ── Earrings ───────────────────────────────────────────────────────────────
    makeProduct(
        9,
        "Diamond Stud Earrings",
        "diamond-stud-earrings",
        "Half-carat each, G-color diamond studs in classic 18K white gold push-back setting.",
        95000,
        3,
        ["diamond", "studs", "classic", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-10")
    ),
    makeProduct(
        10,
        "Gold Hoop Earrings",
        "gold-hoop-earrings",
        "Chic 30mm gold hoops in 22K yellow gold — bold enough to notice, light enough to wear all day.",
        15500,
        3,
        ["gold", "hoops", "everyday", "yellow gold"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-05")
    ),
    makeProduct(
        11,
        "Ruby Drop Earrings",
        "ruby-drop-earrings",
        "Vivid Burmese rubies suspended from diamond-set tops in 18K yellow gold.",
        135000,
        3,
        ["ruby", "drop", "gemstone", "yellow gold"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-20")
    ),
    makeProduct(
        12,
        "Silver Chandelier Earrings",
        "silver-chandelier-earrings",
        "Intricate oxidised silver chandelier earrings inspired by traditional Indian craftsmanship.",
        3800,
        3,
        ["silver", "chandelier", "traditional", "oxidised"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-20")
    ),

    // ── Bracelets ──────────────────────────────────────────────────────────────
    makeProduct(
        13,
        "Diamond Tennis Bracelet",
        "diamond-tennis-bracelet",
        "Classic prong-set diamond tennis bracelet — 3 carats of round brilliants in 18K white gold.",
        425000,
        4,
        ["diamond", "tennis", "luxury", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-30")
    ),
    makeProduct(
        14,
        "Gold Charm Bracelet",
        "gold-charm-bracelet",
        "22K yellow gold charm bracelet — add charms to mark life's memorable moments.",
        32000,
        4,
        ["gold", "charm", "yellow gold", "personalised"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1689367436629-1d288f1e23b6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-10")
    ),
    makeProduct(
        15,
        "Emerald Beaded Bracelet",
        "emerald-beaded-bracelet",
        "Natural emerald and 18K gold bead bracelet for a touch of colour and luxury.",
        55000,
        4,
        ["emerald", "beaded", "green", "yellow gold"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop",
        ],
        false,
        false,
        new Date("2024-02-15")
    ),

    // ── Pendants ───────────────────────────────────────────────────────────────
    makeProduct(
        16,
        "Lotus Pendant",
        "lotus-pendant",
        "Handcrafted lotus flower pendant in 18K yellow gold with a central pink sapphire.",
        28500,
        5,
        ["lotus", "flower", "sapphire", "yellow gold"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-05")
    ),
    makeProduct(
        17,
        "Hamsa Hand Pendant",
        "hamsa-hand-pendant",
        "Sterling silver Hamsa pendant adorned with a turquoise evil eye for protection and good luck.",
        2800,
        5,
        ["hamsa", "silver", "turquoise", "spiritual"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-25")
    ),
    makeProduct(
        18,
        "Initial Letter Pendant",
        "initial-letter-pendant",
        "Personalised block-letter pendant in your choice of 18K gold — a thoughtful, timeless gift.",
        12500,
        5,
        ["initial", "personalised", "gold", "gift"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-04-01")
    ),
    makeProduct(
        19,
        "Diamond Cross Pendant",
        "diamond-cross-pendant",
        "Pavé-set diamond cross in 18K white gold — elegant faith-inspired jewellery.",
        78000,
        5,
        ["diamond", "cross", "religious", "white gold"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1771515411694-57fb626159d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-28")
    ),

    // ── Bangles ────────────────────────────────────────────────────────────────
    makeProduct(
        20,
        "Kundan Gold Bangle",
        "kundan-gold-bangle",
        "Traditional Kundan-work bangle in 22K gold, set with colourful meenakari enamel.",
        68000,
        6,
        ["kundan", "gold", "traditional", "meenakari"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1741071520904-37ef3c0fea09?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-18")
    ),
    makeProduct(
        21,
        "Diamond Bangle Bracelet",
        "diamond-bangle-bracelet",
        "Sleek 18K white gold bangle set with a continuous row of channel-set diamonds.",
        320000,
        6,
        ["diamond", "bangle", "white gold", "luxury"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-08")
    ),
    makeProduct(
        22,
        "Silver Oxidised Bangle",
        "silver-oxidised-bangle",
        "Set of four oxidised silver bangles with intricate tribal motifs — perfect for boho styling.",
        3200,
        6,
        ["silver", "oxidised", "tribal", "boho"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-30")
    ),

    // ── Sets ───────────────────────────────────────────────────────────────────
    makeProduct(
        23,
        "Bridal Gold Set",
        "bridal-gold-set",
        "Complete bridal set including necklace, earrings, maang tikka, and bangles in 22K gold.",
        485000,
        7,
        ["bridal", "gold", "set", "wedding", "traditional"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-08")
    ),
    makeProduct(
        24,
        "Diamond Solitaire Set",
        "diamond-solitaire-set",
        "Matching solitaire ring, pendant, and earrings — each centred with a 0.5ct diamond in 18K white gold.",
        395000,
        7,
        ["diamond", "solitaire", "set", "white gold", "luxury"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-01-22")
    ),
    makeProduct(
        25,
        "Pearl Jewellery Set",
        "pearl-jewellery-set",
        "Freshwater pearl necklace, bracelet, and stud earrings with 18K gold clasps.",
        58000,
        7,
        ["pearl", "set", "white gold", "classic"],
        "White Gold",
        [
            "https://images.unsplash.com/photo-1769857879388-df93b4c96bca?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-03-18")
    ),
    makeProduct(
        26,
        "Ruby and Diamond Set",
        "ruby-and-diamond-set",
        "Elegant ruby and diamond necklace with matching drop earrings in 18K gold.",
        275000,
        7,
        ["ruby", "diamond", "set", "yellow gold", "luxury"],
        "Yellow Gold",
        [
            "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&auto=format&fit=crop",
        ],
        true,
        false,
        new Date("2024-02-14")
    ),

    // ── Extra products ─────────────────────────────────────────────────────────
    makeProduct(
        27,
        "Moonstone Silver Ring",
        "moonstone-silver-ring",
        "Mystical rainbow moonstone cabochon set in a delicate sterling silver bezel ring.",
        4200,
        1,
        ["moonstone", "silver", "boho", "gemstone"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1749635705571-a262d6c6134c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-04-05")
    ),
    makeProduct(
        28,
        "Amethyst Drop Earrings",
        "amethyst-drop-earrings",
        "Faceted amethyst teardrops in sterling silver — a pop of purple for any occasion.",
        5800,
        3,
        ["amethyst", "purple", "silver", "gemstone"],
        "Silver",
        [
            "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&auto=format&fit=crop",
        ],
        false,
        true,
        new Date("2024-04-08")
    ),
];
