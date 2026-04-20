"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { getOficinasPorAno } from "@/data/escola/oficinas";

function OficinasPage() {
  const oficinasPorAno = getOficinasPorAno();
  const anos = Object.keys(oficinasPorAno)
    .map(Number)
    .sort((a, b) => b - a);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <>
      <CustomCursor />
      <NavbarInside color="#649d3f" />

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Simples */}
        <section className="pt-32 pb-20 relative bg-[url('/images/4.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                <Link
                  href="/espaco"
                  className="hover:text-clr3 transition-colors"
                >
                  Espaço
                </Link>
                <span>/</span>
                <span className="text-clr3">Oficinas</span>
              </div>

              {/* Título */}
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none">
                <span className="text-clr3">Oficinas</span>
              </h1>
              <div className="w-32 h-1 bg-clr3 mb-8" />

              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                Confira as Oficinas e atividades realizadas pelo Espaço Cultural
                CBARTES
              </p>
            </motion.div>
          </div>
        </section>

        {/* Oficinas por Ano */}
        {anos.map((ano, anoIndex) => (
          <section
            key={ano}
            className={
              anoIndex % 2 === 0 ? "py-20 bg-zinc-900" : "py-20 bg-black"
            }
          >
            <div className="max-w-7xl mx-auto px-8">
              {/* Header do Ano */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-baseline gap-6 mb-4">
                  <div className="text-7xl font-black text-clr3">{ano}</div>
                  <div className="text-base uppercase tracking-wider text-gray-500">
                    {oficinasPorAno[ano].length}{" "}
                    {oficinasPorAno[ano].length === 1 ? "Oficina" : "Oficinas"}
                  </div>
                </div>
                <div className="w-24 h-1 bg-clr3" />
              </motion.div>

              {/* Grid de redes */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {oficinasPorAno[ano].map((oficina, index) => (
                  <motion.div
                    key={oficina.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/escola/oficinas/${oficina.slug}`}>
                      <div className="group cursor-pointer h-full">
                        <div className="bg-zinc-800 rounded-sm overflow-hidden mb-4 aspect-video relative border border-zinc-700 hover:border-clr4 transition-all duration-500">
                          <img
                            src={
                              oficina.imagens?.[0] || "/images/placeholder.png"
                            }
                            alt={oficina.titulo}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                          {/* Badge do tipo */}
                          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                            <span className="text-xs font-bold text-white uppercase">
                              {oficina.tipo}
                            </span>
                          </div>

                          {/* Badge do ano */}
                          <div className="absolute bottom-3 left-3 bg-clr4 px-3 py-1.5 rounded-full">
                            <span className="text-xs font-bold text-white">
                              {oficina.data}
                            </span>
                          </div>

                          {/* Botão Ver - aparece no hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="px-5 py-2.5 bg-clr3 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                              Ver Evento
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-clr3 transition-colors line-clamp-2">
                            {oficina.titulo}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {oficina.local}
                          </p>
                          <p className="text-sm text-gray-400 line-clamp-2">
                            {oficina.descricao}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-24 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Participe dos nossos <span className="text-clr3">redes</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Acompanhe a programação e seja parte da cultura em Diamantina
              </p>
              <Link href="/oficinas">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-clr3 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300"
                >
                  Voltar para Espaço
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer color="#649d3f" />
      </main>
    </>
  );
}

export default OficinasPage;
