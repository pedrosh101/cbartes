"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { oficinasHistorico } from "@/data/escola/oficinasHistorico";

function OficinasPage() {
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
          href="/escola"
          className="hover:text-clr3 transition-colors"
        >
          Escola
        </Link>
        <span>/</span>
        <span className="text-clr3">Oficinas - Histórico</span>
      </div>

      {/* Título */}
      <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none">
        Oficinas <span className="text-clr3">Realizadas</span>
      </h1>

      <div className="w-32 h-1 bg-clr3 mb-8" />

      <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
        Confira o histórico de oficinas realizadas pela Escola CBARTES
      </p>
    </motion.div>
  </div>
</section>

        {/* Stats */}
        <section className="py-16 bg-black border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: oficinasHistorico.length, label: "Oficinas", suffix: "" },
                { value: 4, label: "Anos", suffix: "" },
                { value: 10, label: "Ministrantes", suffix: "+" },
                { value: 200, label: "Participantes", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-black bg-linear-to-br from-clr3 to-[#365e1c] bg-clip-text text-transparent mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Grid de Oficinas */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {oficinasHistorico.map((oficina, index) => (
                <motion.div
                  key={oficina.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/escola/oficinas/${oficina.slug}`}>
                    <div className="group cursor-pointer h-full">
                      {/* Card com placeholder de imagem */}
                      <div className="bg-zinc-800 rounded-sm overflow-hidden mb-4 aspect-video relative border border-zinc-700 hover:border-clr3 transition-all duration-500">
                        {/* Placeholder */}
                        <div className="absolute inset-0 bg-linear-to-br from-zinc-700 to-zinc-800 group-hover:from-zinc-600 group-hover:to-zinc-700 transition-colors duration-500" />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                        {/* Badge do ministrante */}
                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                          <span className="text-xs font-bold text-white">
                            {oficina.ministrante}
                          </span>
                        </div>

                        {/* Badge do ano */}
                        <div className="absolute bottom-3 left-3 bg-clr3 px-3 py-1.5 rounded-full">
                          <span className="text-xs font-bold text-white">
                            {oficina.ano}
                          </span>
                        </div>

                        {/* Botão Ver - aparece no hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-5 py-2.5 bg-clr3 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                            Ver Oficina
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-clr3 transition-colors line-clamp-2">
                          {oficina.nome}
                        </h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {oficina.local} • {oficina.cargaHoraria}
                        </p>
                        <p className="text-sm text-gray-400 line-clamp-2">
                          {oficina.sinopse}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Quer participar de uma <span className="text-clr3">oficina</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Acompanhe a programação e fique por dentro das próximas oficinas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/escola/oficinas/proximas">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-clr3 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300"
                  >
                    Ver próximas oficinas
                  </motion.button>
                </Link>
                <Link href="/escola">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-transparent border-2 border-clr3 text-clr3 text-base font-bold uppercase tracking-widest rounded-full hover:bg-clr3 hover:text-white transition-all duration-300"
                  >
                    Voltar para Escola
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer color="#649d3f" />
      </main>
    </>
  );
}

export default OficinasPage;