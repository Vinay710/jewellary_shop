"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

type VariantName = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";

interface AnimateInProps {
    children: React.ReactNode;
    variant?: VariantName;
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
}

const variantMap: Record<VariantName, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    },
    "zoom-in": {
        hidden: { opacity: 0, scale: 0.85 },
        visible: { opacity: 1, scale: 1 },
    },
};

export default function AnimateIn({
    children,
    variant = "fade-up",
    delay = 0,
    duration = 0.6,
    className,
    once = true,
}: AnimateInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-80px" });

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variantMap[variant]}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            }}
        >
            {children}
        </motion.div>
    );
}

/** Stagger container – children animate in sequence */
export function StaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    once = true,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-60px" });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: staggerDelay },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {children}
        </motion.div>
    );
}

/** Child item for use inside StaggerContainer */
export function StaggerItem({
    children,
    className,
    variant = "fade-up",
}: {
    children: React.ReactNode;
    className?: string;
    variant?: VariantName;
}) {
    const itemVariants: Variants = {
        hidden: variantMap[variant].hidden,
        visible: {
            ...(variantMap[variant].visible as object),
            transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}
