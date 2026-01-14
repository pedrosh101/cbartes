"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MaskSectionTransition() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Expande o círculo conforme o scroll
  const maskSize = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-black">
      {/* Seção base */}
      <section className="sticky top-0 flex h-screen items-center justify-center bg-neutral-900 text-white">
        <h1 className="text-6xl font-bold">Seção 1</h1>
      </section>

      {/* Seção mascarada */}
      <motion.section
        className="pointer-events-none sticky top-0 flex h-screen items-center justify-center bg-orange-500 text-black"
        style={{
          clipPath: useTransform(
            maskSize,
            (value) => `circle(${value} at 50% 50%)`
          ),
        }}
      >
        <h1 className="text-6xl font-bold">Seção 2</h1>
      </motion.section>
    </div>
  );
}
