"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { SelosLoop } from "@/components/selosloop";
import image from "@/public/images/confraria-bg.jpg";
import ctaImage from "@/public/images/pulso.webp";
import Link from "next/link";

const nucleos = [
  {
    id: 1,
    nome: "Dança-Teatro",
    descricao: "Investigação das fronteiras entre movimento e dramaturgia",
    areas: ["Improvisação", "Composição Coreográfica", "Performance"],
    icon: "○",
  },
  {
    id: 2,
    nome: "Dança-Arquitetura",
    descricao: "Relação entre corpo, espaço e estruturas urbanas",
    areas: ["Site-specific", "Intervenção Urbana", "Vídeo-dança"],
    icon: "△",
  },
  {
    id: 3,
    nome: "Processos Criativos",
    descricao: "Metodologias autorais de criação em artes cênicas",
    areas: ["Pesquisa Corporal", "Dramaturgia do Corpo", "Experimentação"],
    icon: "□",
  },
];

const espetaculos = [
  {
    titulo: "Espaço Sagrado",
    ano: "2023",
    tipo: "Dança Contemporânea",
    concepcao: "Ditto Leite",
  },
  {
    titulo: "Subvercirco",
    ano: "2024",
    tipo: "Dança-Circo",
    concepcao: "Ditto Leite",
  },
  {
    titulo: "Pulso Invisível",
    ano: "2024",
    tipo: "Dança Contemporânea",
    concepcao: "Ditto Leite",
  },
  {
    titulo: "Brincantes",
    ano: "2025",
    tipo: "Documentário/Performance",
    concepcao: "Ditto Leite",
  },
  {
    titulo: "Circunsdanças da Vida",
    ano: "2025",
    tipo: "Dança-Teatro",
    concepcao: "Ditto Leite",
  },
];

function Companhia() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

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
      <NavbarInside color="#F1443E" />

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
        >
          <motion.div className="absolute inset-0" style={{ scale }}>
            <motion.div style={{ y }} className="relative w-full h-full">
              <div className="absolute inset-0 bg-clr2 opacity-20 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Confraria"
                priority
                style={{ objectFit: "cover" }}
                className="grayscale-30"
              />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="relative z-20 text-center px-8 max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="overflow-hidden"
            >
              <Image
                src="/confraria-logo.png"
                alt="Confraria"
                width={800}
                height={300}
                priority
                className="mx-auto w-[70vw] max-w-175 lg:h-60 2xl:h-120 object-contain"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl 2xl:text-3xl 2xl:mt-8 font-light tracking-wide text-gray-300"
            >
              Corpo, território e memória em movimento
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="2xl:mt-12 mt-4 gap-4 justify-center flex"
            >
              <a href="#quem-somos">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Quem Somos
                  </span>
                </div>
              </a>
              <a href="#pesquisa">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Núcleo de pesquisa
                  </span>
                </div>
              </a>
              <a href="#projetos">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Projetos
                  </span>
                </div>
              </a>
              <a href="#em-execucao">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Em execução
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/60 text-sm uppercase tracking-widest flex flex-col items-center gap-2"
            >
              <span>Explore</span>
              <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Selos + Stats */}
        <section className="relative bg-linear-to-b from-black to-zinc-900">
          <SelosLoop items={[20, 18, 9, 1, 2, 3]} />
        </section>

        {/* Manifesto */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Uma companhia de{" "}
                <span className="text-clr1">criação autoral</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                A Confraria Tijucana de Artes é um núcleo de pesquisa e criação
                em artes cênicas, fundado e dirigido por Ditto Leite, que
                investiga as relações entre corpo, espaço e narrativa. Nosso
                trabalho se baseia em processos colaborativos de criação, onde
                dança, teatro e artes visuais dialogam na construção de
                espetáculos autorais que refletem sobre a contemporaneidade.
              </p>
            </motion.div>
            <Link href="/companhia/quem-somos">
              <button className="pt-8 text-clr1">Saiba Mais</button>
            </Link>
          </div>
        </section>

        {/* Fundador */}
        <section id="quem-somos" className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
                Quem
                <br />
                <span className="text-clr1">Somos</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr1 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-6xl md:text-7xl font-black mb-6 leading-none">
                  Ditto
                  <br />
                  Leite
                </h3>
                <div className="w-16 h-1 bg-clr1 mb-8" />
                <p className="text-lg leading-relaxed text-gray-300 font-light">
                  Multi-artista com vasta experiência em dança contemporânea,
                  artes visuais e direção artística. Fundador da Escola CBARTES
                  e da Confraria Tijucana de Artes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="border-l-2 border-zinc-700 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Formação
                  </p>
                  <p className="font-light text-gray-300">
                    Dança Contemporânea, Artes Visuais, Performance
                  </p>
                </div>
                <div className="border-l-2 border-zinc-700 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Atuação
                  </p>
                  <p className="font-light text-gray-300">
                    Diretor, Bailarino, Artista Visual, Professor
                  </p>
                </div>
                <div className="border-l-2 border-clr1 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Criações
                  </p>
                  <p className="font-semibold text-clr1">
                    5 espetáculos autorais desde 2023
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Núcleos de Pesquisa */}
        <section id="pesquisa" className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
                Núcleos de
                <br />
                <span className="text-clr1">Pesquisa</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr1 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {nucleos.map((nucleo, index) => (
                <motion.div
                  key={nucleo.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr1 transition-all duration-500">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, #F1443E, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <div className="text-7xl font-light text-zinc-700 group-hover:text-clr1 transition-colors duration-500 mb-6">
                        {nucleo.icon}
                      </div>

                      <h3 className="text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-clr1 transition-colors duration-300">
                        {nucleo.nome}
                      </h3>

                      <div className="h-px w-16 bg-clr1 mb-6 group-hover:w-full transition-all duration-500" />

                      <p className="text-base text-gray-400 font-light mb-6 leading-relaxed">
                        {nucleo.descricao}
                      </p>

                      <div className="space-y-3">
                        {nucleo.areas.map((area, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <div className="w-1 h-1 rounded-full bg-clr1" />
                            {area}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Espetáculos */}
        <section id="projetos" className="py-32 bg-black">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
                <span className="text-clr1">Projetos</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr1 to-transparent" />
            </motion.div>

            <div className="space-y-1">
              {espetaculos.map((esp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border-b border-zinc-800 hover:border-clr1 transition-colors duration-300"
                >
                  <div className="py-8 grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 text-sm font-light text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="col-span-6 md:col-span-5">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-clr1 transition-colors">
                        {esp.titulo}
                      </h3>
                    </div>
                    <div className="col-span-5 md:col-span-3 text-sm uppercase tracking-wider text-gray-500 font-light">
                      {esp.tipo}
                    </div>
                    <div className="col-span-12 md:col-span-3 text-right">
                      <span className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-widest font-semibold text-gray-400">
                        {esp.ano}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projeto PLUMAS */}
        <section id="em-execucao" className="py-32 bg-black">
          <div className="max-w-5xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-6 text-gray-500">
                Próximo projeto
              </p>

              <h2 className="text-7xl md:text-9xl font-black mb-8 leading-none text-clr1">
                PLUMAS
              </h2>

              <div className="w-24 h-1 bg-clr1 mx-auto mb-8" />

              <p className="text-xl md:text-2xl font-light text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Um novo espetáculo em desenvolvimento que promete expandir os
                limites da dança contemporânea em Diamantina
              </p>

              <p className="text-sm uppercase tracking-widest text-gray-600">
                Em breve
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={ctaImage}
              fill
              alt="Faça parte"
              style={{ objectFit: "cover" }}
              className="brightness-80"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              Faça parte da nossa história
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            >
              Acompanhe nossos processos, participe de audições e
              <br />
              seja parte do futuro das artes cênicas
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-clr1 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#a8302a] transition-colors duration-300 shadow-2xl shadow-clr1/50"
            >
              Entre em contato
            </motion.button>
          </div>
        </section>

        <Footer color="#F1443E" />
      </main>
    </>
  );
}

export default Companhia;
