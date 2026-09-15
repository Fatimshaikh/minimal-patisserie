"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageBreak() {
    return (
        <motion.section
            className="relative w-full h-[60vh] md:h-[80vh]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <Image
                src="https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=1600"
                alt="Hands shaping pastry dough"
                fill
                className="object-cover"
            />
        </motion.section>
    );
}