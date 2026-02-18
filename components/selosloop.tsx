"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

interface SelosLoopProps {
  items: number[];
}

export function SelosLoop({ items }: SelosLoopProps) {
  return (
    <div className="overflow-hidden  border-y border-zinc-800">
      <Marquee speed={50} gradient={false}>
        {items.map((n, i) => (
          <div
            key={i}
            className="relative w-44 h-44 shrink-0 mx-44 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <Image
              src={`/selos/selo${n}.png`}
              alt={`Selo ${n}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
