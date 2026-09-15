"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
                className="relative w-full aspect-[4/5]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <Image
                    src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=900"
                    alt="The bakery workspace"
                    fill
                    className="object-cover"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                <span className="text-ink-soft text-xs tracking-[0.3em] uppercase">
                    Our Approach
                </span>
                <h2 className="font-display text-3xl md:text-4xl text-ink mt-4 leading-tight">
                    We make six things.
                    <br />
                    We make them well.
                </h2>
                <p className="text-ink-soft text-base mt-6 leading-relaxed max-w-sm">
                    No seasonal menu, no specials board, no rotating flavors. Just the
                    same six pastries, refined slowly over years, made fresh every
                    morning by the same two hands.
                </p>
            </motion.div>
        </section>
    );
}