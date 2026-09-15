"use client";

import { motion } from "framer-motion";
import { menu } from "@/data/menu";

export default function Menu() {
    return (
        <section className="max-w-2xl mx-auto px-6 py-24">
            <motion.h2
                className="font-display text-3xl text-ink text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Selection
            </motion.h2>

            <div className="flex flex-col">
                {menu.map((item, i) => (
                    <motion.div
                        key={item.name}
                        className="flex items-baseline justify-between py-6 border-b border-line group"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                    >
                        <div>
                            <h3 className="font-display text-xl text-ink group-hover:text-ink-soft transition-colors duration-300">
                                {item.name}
                            </h3>
                            <p className="text-ink-soft text-sm mt-1">{item.description}</p>
                        </div>
                        <span className="font-body text-ink text-sm tabular-nums shrink-0 ml-6">
                            {item.price}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}