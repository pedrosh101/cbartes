"use client";

import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";



type SectionProps = {
  text: string;
  name: string;
  image: StaticImageData;
};

export default function Section({ text, name, image }: SectionProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
 


      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
      >
        <div className="absolute top-[-12vh] left-0 h-[124vh] w-full">

          <motion.div style={{ y }} className="relative w-full h-full">
            <Image
              src={image}
              fill
              alt={name}
              priority
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>

        <div className="relative z-10 p-20 text-white w-full h-full flex flex-col justify-between">
          <p className="w-[50vw] text-[2vw] self-end uppercase">
            Aqui pensei em colocarmos um {text}
          </p>
          <p className="text-[5vw] uppercase">{name}</p>
        </div>
      </div>
 
  );
}
