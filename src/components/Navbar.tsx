"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-8 bg-bg/90 backdrop-blur-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <span className="font-display text-lg text-ink tracking-wide">
                Maison Elle
            </span>

            <div className="hidden md:flex gap-10 font-body text-sm text-ink-soft">
                {["Menu", "About", "Visit"].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className="hover:text-ink transition-colors duration-300"
                    >
                        {item}
                    </a>
                ))}
            </div>
        </motion.nav>
    );
}