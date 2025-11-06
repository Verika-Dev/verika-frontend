"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import logoipsum from "@/public/icons/logo-ipsuim.svg";
import logoipsum1 from "@/public/icons/logo-ipsum-1.svg";
import logoipsum2 from "@/public/icons/logo-ipsum-2.svg";
import logoipsum3 from "@/public/icons/logo-ipsum-3.svg";
import logoipsum4 from "@/public/icons/logo-ipsum-4.svg";

const trustedLogos = [
  logoipsum,
  logoipsum1,
  logoipsum2,
  logoipsum3,
  logoipsum4,
];

export default function TrustedBy() {
  return (
    <section className="text-center mb-12 px-4">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-500 text-sm sm:text-base mb-4">
        We Are Trusted By
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-evenly gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {trustedLogos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center justify-center flex-shrink-0 opacity-80 hover:opacity-100 transition">
            <Image
              src={logo}
              alt={`Trusted brand ${index + 1}`}
              height={40}
              width={140}
              className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
