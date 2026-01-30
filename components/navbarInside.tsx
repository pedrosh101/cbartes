"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

interface NavbarInsideProps {
  color?: string;
  colorText?: string;
  isBlack?: boolean;
}

export default function NavbarInside({
  color,
  colorText,
  isBlack,
}: NavbarInsideProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 z-50 text-white font-futura tracking-wide"
      style={{ backgroundColor: color, color: colorText }}
    >
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="hidden md:flex justify-around w-full gap-6">
          <Link href="/associacao" className="hover:opacity-70 transition">
            Associação
          </Link>
          <Link href="/espaco" className="hover:opacity-70 transition">
            Espaço Cultural
          </Link>
        </div>

        <div className="shrink-0 px-12">
          <Link href="/">
            <Image
              src={isBlack ? "/logoHeaderBlack.png" : "/logoHeader.png"}
              alt="Logo"
              width={160}
              height={60}
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-around w-full">
          <Link href="/escola" className="hover:opacity-70 transition">
            Escola
          </Link>
          <Link href="/companhia" className="hover:opacity-70 transition">
            Companhia
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4">
          <Link href="/associacao" onClick={() => setOpen(false)}>
            Associação
          </Link>
          <Link href="/espaco" onClick={() => setOpen(false)}>
            Espaço
          </Link>
          <Link href="/escola" onClick={() => setOpen(false)}>
            Escola
          </Link>
          <Link href="/companhia" onClick={() => setOpen(false)}>
            Companhia
          </Link>
        </div>
      )}
    </nav>
  );
}
