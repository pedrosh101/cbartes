"use client";

import Image, { StaticImageData } from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import logo from "@/public/logoHeader.png";

type IntroProps = {
  color: string;
  image: StaticImageData;
};

export default function Intro({ image, color }: IntroProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <>
      <nav
        style={{ backgroundColor: color }}
        className="h-18 fixed top-0 left-0 w-full z-50 flex items-center justify-center"
      >
        <Link href="/" className="w-40">
          <Image src={logo} alt="logo" style={{ objectFit: "cover" }} />
        </Link>
      </nav>
      <div ref={container} className="mt-18 h-screen overflow-hidden">
        <motion.div style={{ y }} className="relative h-full">
          <Image src={image} fill alt="image" style={{ objectFit: "cover" }} />
        </motion.div>
      </div>
    </>
  );
}
