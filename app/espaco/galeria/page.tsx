"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { getExposicoesLinks } from "@/data/exposicoes-data";

const exposicoes = getExposicoesLinks();

// Agrupar por ano
const exposicoesPorAno = exposicoes.reduce((acc, expo) => {
  const ano = expo.ano;
  if (!acc[ano]) {
    acc[ano] = [];
  }
  acc[ano].push(expo);
  return acc;
}, {} as Record<string, typeof exposicoes>);

const anos = Object.keys(exposicoesPorAno).sort((a, b) => parseInt(b) - parseInt(a));

function Galeria() {
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
      <NavbarInside color="#3e6af3" />

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Simples - Página Interna */}
        <section className="pt-32 pb-20 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/espaco" className="hover:text-clr4 transition-colors">
                  Espaço Cultural
                </Link>
                <span>/</span>
                <span className="text-clr4">Galeria</span>
              </div>

              {/* Título */}
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none">
                Galeria <span className="text-clr4">CBARTES</span>
              </h1>
              <div className="w-32 h-1 bg-clr4 mb-8" />

              <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
                Desde 2022, a Galeria CBARTES promove a arte visual em Diamantina,
                apresentando trabalhos de artistas locais, nacionais e internacionais.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-black border-b border-zinc-800">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: exposicoes.length, label: "Exposições" },
                { value: anos.length, label: "Anos" },
                { value: 20, label: "Artistas", suffix: "+" },
                { value: 150, label: "Obras", suffix: "+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-5xl md:text-6xl font-black bg-linear-to-br from-clr4 to-[#2a5299] bg-clip-text text-transparent mb-2">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exposições por Ano */}
        {anos.map((ano, anoIndex) => (
          <section
            key={ano}
            className={anoIndex % 2 === 0 ? "py-20 bg-zinc-900" : "py-20 bg-black"}
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
                  <div className="text-7xl font-black text-clr4">
                    {ano}
                  </div>
                  <div className="text-base uppercase tracking-wider text-gray-500">
                    {exposicoesPorAno[ano].length}{" "}
                    {exposicoesPorAno[ano].length === 1 ? "exposição" : "exposições"}
                  </div>
                </div>
                <div className="w-24 h-1 bg-clr4" />
              </motion.div>

              {/* Grid de Exposições */}
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {exposicoesPorAno[ano].map((exposicao, index) => {
                  // Monta o caminho da imagem: terceira foto da pasta
                  const imagePath = `/images/galeria/${exposicao.link.split("/").pop()}/3.webp`;

                  return (
                    <motion.div
                      key={exposicao.link}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                    >
                      <Link href={exposicao.link}>
                        <div className="group cursor-pointer">
                          {/* Card com imagem real */}
                          <div className="bg-zinc-800 rounded-sm overflow-hidden mb-4 aspect-square relative border border-zinc-700 hover:border-clr4 transition-all duration-500">
                            {/* Imagem real (terceira foto) */}
                            <Image
                              src={imagePath}
                              alt={exposicao.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 50vw, 25vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

                            {/* Badge do ano */}
                            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                              <span className="text-xs font-bold text-white">
                                {exposicao.ano}
                              </span>
                            </div>

                            {/* Botão Ver - aparece no hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="px-5 py-2.5 bg-clr4 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                                Ver
                              </span>
                            </div>
                          </div>

                          {/* Info */}
                          <div>
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-clr4 transition-colors line-clamp-2">
                              {exposicao.title}
                            </h3>
                            <p className="text-sm text-gray-500 font-light line-clamp-1">
                              {exposicao.titulo}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
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
                Quer expor na <span className="text-clr4">Galeria CBARTES</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Entre em contato para submeter sua proposta de exposição
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-clr4 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300"
              >
                Enviar proposta
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer color="#3e6af3" />
      </main>
    </>
  );
}

export default Galeria;