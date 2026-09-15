"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="border-t border-line py-16 px-6 md:px-16">
            <motion.div
                className="max-w-2xl mx-auto flex flex-col items-center text-center gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <span className="font-display text-lg text-ink">Maison Elle</span>
                <p className="text-ink-soft text-sm">
                    12 Rue des Abbesses · Open Tue–Sun, 8am–6pm
                </p>
                <p className="text-ink-soft text-xs mt-6">
                    © {new Date().getFullYear()} Maison Elle
                </p>
            </motion.div>
        </footer>
    );
}