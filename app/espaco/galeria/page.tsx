"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/2.jpg";
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
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      <NavbarInside color="#4A90E2" />

      <main className="font-futura bg-zinc-50">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-[70vh] overflow-hidden"
        >
          <div className="absolute top-[-12vh] left-0 h-[124vh] w-full">
            <motion.div style={{ y }} className="relative w-full h-full">
              <Image
                src={image}
                fill
                alt="Galeria CBARTES"
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/70" />
            </motion.div>
          </div>

          <div className="relative z-10 px-8 text-white w-full h-full flex flex-col justify-between py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-right"
            >
              <p className="text-lg md:text-2xl uppercase tracking-wide">
                Exposições de artes visuais
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-4">
                Galeria
                <br />
                CBARTES
              </h1>
              <div className="w-24 h-1 bg-[#4A90E2]" />
            </motion.div>
          </div>
        </div>

        {/* Intro */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="py-20 bg-white"
        >
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
              Um espaço dedicado às artes visuais
            </h2>
            <p className="text-xl text-zinc-700 leading-relaxed">
              Desde 2022, a Galeria CBARTES promove a arte visual em Diamantina, 
              apresentando trabalhos de artistas locais, nacionais e internacionais 
              em exposições que celebram a diversidade criativa.
            </p>
          </div>
        </motion.section>

        {/* Stats */}
        <section className="py-16 bg-zinc-100">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { numero: exposicoes.length, label: "Exposições" },
                { numero: anos.length, label: "Anos Ativos" },
                { numero: "20+", label: "Artistas" },
                { numero: "150+", label: "Obras Expostas" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-5xl md:text-6xl font-black text-[#4A90E2] mb-2">
                    {stat.numero}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-zinc-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Exposições por Ano */}
        {anos.map((ano, anoIndex) => (
          <section key={ano} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-8">
              {/* Header do Ano */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 flex items-center gap-6"
              >
                <div className="text-7xl md:text-8xl font-black text-zinc-200">
                  {ano}
                </div>
                <div className="flex-1 h-px bg-zinc-200" />
                <div className="text-sm uppercase tracking-wider text-zinc-500">
                  {exposicoesPorAno[ano].length} {exposicoesPorAno[ano].length === 1 ? 'exposição' : 'exposições'}
                </div>
              </motion.div>

              {/* Grid de Exposições */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exposicoesPorAno[ano].map((exposicao, index) => (
                  <motion.div
                    key={exposicao.link}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={exposicao.link}>
                      <div className="group cursor-pointer">
                        {/* Card */}
                        <div className="bg-zinc-50 rounded-sm overflow-hidden mb-4 aspect-square relative">
                          {/* Placeholder para imagem de preview */}
                          <div className="absolute inset-0 bg-linear-to-br from-zinc-200 to-zinc-300 group-hover:from-zinc-300 group-hover:to-zinc-400 transition-colors duration-500" />
                          
                          {/* Overlay com info */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <span className="inline-block px-6 py-3 bg-white text-zinc-900 text-sm font-bold uppercase tracking-wider rounded-full">
                                Ver exposição
                              </span>
                            </div>
                          </div>

                          {/* Badge do ano */}
                          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                            <span className="text-xs font-bold text-zinc-900">
                              {exposicao.ano}
                            </span>
                          </div>
                        </div>

                        {/* Info */}
                        <div>
                          <h3 className="text-2xl font-bold text-zinc-900 mb-2 group-hover:text-[#4A90E2] transition-colors">
                            {exposicao.title}
                          </h3>
                          <p className="text-lg text-zinc-600 font-light">
                            {exposicao.titulo}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Divider entre anos */}
            {anoIndex < anos.length - 1 && (
              <div className="max-w-7xl mx-auto px-8 mt-20">
                <div className="h-px bg-linear-to-r from-transparent via-zinc-200 to-transparent" />
              </div>
            )}
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Quer expor na Galeria CBARTES?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Entre em contato para submeter sua proposta de exposição
              </p>
              <button className="px-10 py-4 bg-[#4A90E2] text-white text-lg font-bold uppercase tracking-wider rounded-sm hover:bg-[#3d7bc4] transition-colors duration-300">
                Enviar proposta
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Galeria;