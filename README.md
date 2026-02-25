# Suraj Group — Fine Jewellery Website

A modern, animated fine jewellery e-commerce website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. Featuring a curated product catalogue, category browsing, price & metal filtering, and rich Framer Motion animations throughout.

---

## ✨ Features

- **Homepage** — Animated hero banner with rotating decorative rings, staggered text reveal, and stat counters
- **Collections** — Browse all jewellery categories with zoom-in card animations
- **Category Pages** — Filter products by **price range** and **metal type** with live URL-based filtering
- **Product Detail** — Gallery + info panel slide-in animations, specifications table, related products
- **About Page** — Brand story, values grid, team section — all scroll-triggered
- **Contact Page** — Store info cards, interactive FAQ accordion, map section
- **Animations** — Scroll-triggered, staggered, and entrance animations via Framer Motion
- **Fully Responsive** — Mobile-first design with Tailwind CSS
- **SEO Ready** — Metadata, Open Graph tags, semantic HTML on every page

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Google Fonts — Playfair Display + Inter |
| Images | `next/image` with Unsplash CDN |
| Data | Static in-memory catalogue (`lib/data.ts`) |

---

## 📁 Project Structure

```
jewellery-website/
├── app/
│   ├── about/           # About page
│   ├── categories/      # All collections listing
│   ├── category/[slug]/ # Individual category with filters
│   ├── contact/         # Contact page + FAQ
│   ├── product/[slug]/  # Product detail page
│   ├── search/          # Search results page
│   ├── globals.css      # Global styles + keyframes
│   ├── layout.tsx       # Root layout (Header + Footer)
│   └── page.tsx         # Homepage
├── components/
│   ├── AnimateIn.tsx     # Scroll-triggered animation wrapper
│   ├── Breadcrumb.tsx    # Breadcrumb navigation
│   ├── CategoryCard.tsx  # Category grid card
│   ├── FilterSidebar.tsx # Price & metal filter sidebar
│   ├── Footer.tsx        # Site footer
│   ├── Header.tsx        # Site header + search
│   ├── HeroSection.tsx   # Animated hero (client component)
│   ├── Pagination.tsx    # Page navigation
│   ├── ProductCard.tsx   # Product grid card
│   └── ProductGallery.tsx# Product image gallery
├── lib/
│   ├── data.ts           # Static product & category catalogue
│   ├── queries.ts        # Data access functions (filtering, search)
│   └── utils.ts          # Helpers (formatPrice, METAL_TYPES, etc.)
├── next.config.js        # Image domains, config
├── tailwind.config.ts    # Custom colours, fonts, shadows
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/suraj-group-jewellery.git
cd suraj-group-jewellery

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Design System

### Colours

| Token | Value | Usage |
|---|---|---|
| `gold` | `#C9A84C` | Primary accent, CTAs |
| `maroon` | `#5C0A14` | Brand colour, hero background |
| `ivory` | `#FAFAF5` | Page background |

### Animations

All animations live in `components/AnimateIn.tsx` and are scroll-triggered via Framer Motion's `useInView`:

| Variant | Effect |
|---|---|
| `fade-up` | Fade in + slide up 40px |
| `fade-in` | Fade in only |
| `slide-left` | Fade in + slide from left |
| `slide-right` | Fade in + slide from right |
| `zoom-in` | Fade in + scale from 85% |

Use `StaggerContainer` + `StaggerItem` for sequential grid animations.

---

## 🔍 Filtering

Filters work via URL search params — fully bookmarkable and shareable:

```
/category/rings?price=25000-75000&metal=Yellow+Gold
```

| Param | Values |
|---|---|
| `price` | `0-25000`, `25000-75000`, `75000-150000`, `150000-9999999` |
| `metal` | `Yellow Gold`, `White Gold`, `Rose Gold`, `Platinum`, `Silver`, `Gold Plated` |
| `page` | Integer, defaults to `1` |

---

## 📦 Adding Products

Products live in `lib/data.ts`. Each product follows this shape:

```ts
{
  id: number,
  name: string,
  slug: string,
  description: string,
  price: number,          // in INR (paise not used)
  images: string[],       // array of image URLs
  categoryId: number,
  metalType: string,      // must match METAL_TYPES in utils.ts
  tags: string[],
  featured: boolean,
  isNewArrival: boolean,
  createdAt: Date,
}
```

---

## 🏗️ Deployment

This site deploys seamlessly to **Vercel**:

1. Push to GitHub
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy — no environment variables required for the static catalogue

---

## 📄 Licence

This project is proprietary. All rights reserved © 2025 Suraj Group.
