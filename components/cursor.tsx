"use client";

import { useEffect, useState } from "react";
import { useTransform, motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");

  const smoothMouseX = useSpring(0, { stiffness: 300, damping: 25 });
  const smoothMouseY = useSpring(0, { stiffness: 300, damping: 25 });
  
useEffect(() => {
  document.body.classList.add("custom-cursor");
  return () => document.body.classList.remove("custom-cursor");
}, []);



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      smoothMouseX.set(e.clientX);
      smoothMouseY.set(e.clientY);
    };
    

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothMouseX, smoothMouseY]);

  const cursorX = useTransform(smoothMouseX, (value) => value - 20);
  const cursorY = useTransform(smoothMouseY, (value) => value - 20);

  return (
    <>
      {/* Custom SVG Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-2147483647 hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            scale: cursorVariant === "hover" ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <image href="/cursor.svg" width="40" height="40" />
        </motion.svg>
      </motion.div>
    </>
  );
}
