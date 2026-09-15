"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="max-w-3xl mx-auto px-6 pt-48 pb-24 text-center flex flex-col items-center">
            <motion.span
                className="text-ink-soft text-xs tracking-[0.35em] uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Maison Elle
            </motion.span>

            <motion.h1
                className="font-display text-5xl md:text-6xl text-ink mt-6 leading-tight"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
            >
                Nothing more than
                <br />
                it needs to be.
            </motion.h1>

            <motion.p
                className="text-ink-soft text-base mt-6 max-w-sm leading-relaxed"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                A small patisserie in the city, making a small number of things,
                carefully.
            </motion.p>

            <motion.div
                className="relative w-full max-w-md aspect-[4/5] mt-16"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900"
                    alt="Signature pastry"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>
        </section>
    );
}