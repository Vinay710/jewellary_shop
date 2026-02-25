import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: {
                    DEFAULT: "#FAFAF5",
                    50: "#FDFDF9",
                    100: "#FAFAF5",
                    200: "#F0F0E8",
                },
                gold: {
                    DEFAULT: "#C9A84C",
                    light: "#DBBF6A",
                    dark: "#A8872E",
                    50: "#FBF6E8",
                    100: "#F5EAC8",
                    200: "#DBBF6A",
                    300: "#C9A84C",
                    400: "#A8872E",
                    500: "#8A6E1E",
                },
                maroon: {
                    DEFAULT: "#5C0A14",
                    light: "#7D1020",
                    dark: "#3D0609",
                    50: "#F9E8EA",
                    100: "#F0C0C5",
                    200: "#D4747E",
                    300: "#B83040",
                    400: "#7D1020",
                    500: "#5C0A14",
                    600: "#3D0609",
                },
            },
            fontFamily: {
                serif: ["var(--font-playfair)", "Georgia", "serif"],
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            backgroundImage: {
                "gradient-gold": "linear-gradient(135deg, #C9A84C 0%, #DBBF6A 50%, #A8872E 100%)",
                "gradient-maroon": "linear-gradient(135deg, #5C0A14 0%, #7D1020 100%)",
            },
            animation: {
                "fade-in": "fadeIn 0.5s ease-in-out",
                "slide-up": "slideUp 0.4s ease-out",
                "shimmer": "shimmer 2s infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(20px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
            },
            boxShadow: {
                "gold": "0 4px 20px rgba(201, 168, 76, 0.3)",
                "gold-lg": "0 8px 40px rgba(201, 168, 76, 0.4)",
                "maroon": "0 4px 20px rgba(92, 10, 20, 0.2)",
                "card": "0 2px 20px rgba(0, 0, 0, 0.08)",
                "card-hover": "0 8px 40px rgba(0, 0, 0, 0.12)",
            },
            aspectRatio: {
                "product": "3 / 4",
            },
        },
    },
    plugins: [],
};

export default config;
