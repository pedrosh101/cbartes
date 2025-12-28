import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // trava o scroll quando aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
      >
        <Menu className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
          open
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* PAINEL */}
      <aside
        className={`
          fixed z-50
          right-0
          top-10
          bottom-10
          w-1/3 rounded-l-2xl
          bg-neutral-900/95
          backdrop-blur-xl
          border-y border-l border-white/20
          p-8
          shadow-[0_0_60px_rgba(0,0,0,0.6)]
          transition-transform duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)]
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* FECHAR */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* NAV */}
        <nav className="mt-12 flex flex-col gap-8">
          <NavItem href="/companhia" color="red">
            Companhia
          </NavItem>
          <NavItem href="/escola" color="sky">
            Escola
          </NavItem>
          <NavItem href="/associacao" color="emerald">
            Associação
          </NavItem>
          <NavItem href="/espaco" color="amber">
            Espaço CBARTES
          </NavItem>

          <div className="mt-8">
            <Button>
              <NavItemSmall href="/agenda">Agenda</NavItemSmall>
            </Button>
            <Button>
              <NavItemSmall href="/contato">Contato</NavItemSmall>
            </Button>
          </div>
        </nav>
      </aside>
    </>
  );
}

/* ========================= */

function NavItem({
  href,
  color,
  children,
}: {
  href: string;
  color: "red" | "sky" | "emerald" | "amber";
  children: React.ReactNode;
}) {
  const colors = {
    red: "hover:text-red-500 hover:border-red-500/50",
    sky: "hover:text-sky-500 hover:border-sky-500/50",
    emerald: "hover:text-emerald-500 hover:border-emerald-500/50",
    amber: "hover:text-amber-400 hover:border-amber-400/50",
  };

  return (
    <a
      href={href}
      className={`text-2xl 2xl:text-6xl text-white/80 transition-all duration-300 py-2 border-b border-white/10 ${colors[color]}`}
    >
      {children}
    </a>
  );
}

function NavItemSmall({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex flex-col text-lg text-white/70 hover:text-white transition px-6 py-2 border border-white/10 rounded-md"
    >
      {children}
    </a>
  );
}
