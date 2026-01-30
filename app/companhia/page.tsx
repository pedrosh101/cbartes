"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/5.jpg";

const nucleos = [
  {
    id: 1,
    nome: "Dança-Teatro",
    descricao: "Investigação das fronteiras entre movimento e dramaturgia",
    areas: ["Improvisação", "Composição Coreográfica", "Performance"],
    icon: "○"
  },
  {
    id: 2,
    nome: "Dança-Arquitetura",
    descricao: "Relação entre corpo, espaço e estruturas urbanas",
    areas: ["Site-specific", "Intervenção Urbana", "Vídeo-dança"],
    icon: "△"
  },
  {
    id: 3,
    nome: "Processos Criativos",
    descricao: "Metodologias autorais de criação em artes cênicas",
    areas: ["Pesquisa Corporal", "Dramaturgia do Corpo", "Experimentação"],
    icon: "□"
  }
];

const espetaculos = [
  {
    titulo: "Espaço Sagrado",
    ano: "2023",
    tipo: "Dança Contemporânea",
    concepcao: "Ditto Leite"
  },
  {
    titulo: "Subvercirco",
    ano: "2024",
    tipo: "Dança-Circo",
    concepcao: "Ditto Leite"
  },
  {
    titulo: "Pulso Invisível",
    ano: "2024",
    tipo: "Dança Contemporânea",
    concepcao: "Ditto Leite"
  },
  {
    titulo: "Brincantes",
    ano: "2025",
    tipo: "Documentário/Performance",
    concepcao: "Ditto Leite"
  },
  {
    titulo: "Circunsdanças da Vida",
    ano: "2025",
    tipo: "Dança-Teatro",
    concepcao: "Ditto Leite"
  }
];

const timeline = [
  { ano: "2022", evento: "Fundação da Confraria Tijucana de Artes" },
  { ano: "2023", evento: "Primeira produção autoral - Espaço Sagrado" },
  { ano: "2024", evento: "Consolidação do núcleo de pesquisa" },
  { ano: "2025", evento: "Expansão nacional e documentário" },
  { ano: "2026", evento: "Projeto PLUMAS em desenvolvimento" }
];

function Companhia() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

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
      <NavbarInside color="#F1443E" />

      <main className="font-futura bg-white text-black overflow-hidden">
        {/* Hero Section - Minimalista */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden bg-white"
        >
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 opacity-5"
          >
            <motion.div style={{ y }} className="relative w-full h-full">
              <Image
                src={image}
                fill
                alt="Confraria Tijucana de Artes"
                priority
                style={{ objectFit: "cover" }}
                className="grayscale"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative z-20 text-center px-8 max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-8 text-gray-200">
                Núcleo de criação artística
              </p>
              
              <h1 className="text-[8vw] md:text-[6vw] font-light leading-[0.9] tracking-tighter mb-8 text-white/90">
                CONFRARIA
                <br />
                <span className="font-black">TIJUCANA</span>
                <br />
                <span className="text-clr1 font-black">DE ARTES</span>
              </h1>

              <div className="w-16 h-px bg-black mx-auto mb-8" />

              <p className="text-lg md:text-xl font-light tracking-wide text-gray-200 max-w-2xl mx-auto">
                Corpo, arte e território em movimento
              </p>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-16 bg-black/20"
            />
          </div>
        </div>

        {/* Manifesto Section */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-light mb-12 leading-tight">
                Uma companhia de
                <br />
                <span className="font-black">criação autoral</span>
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                <p>
                  A Confraria Tijucana de Artes é um núcleo de pesquisa e criação em artes 
                  cênicas, fundado e dirigido por Ditto Leite, que investiga as relações entre 
                  corpo, espaço e narrativa.
                </p>
                
                <p>
                  Nosso trabalho se baseia em processos colaborativos de criação, onde dança, 
                  teatro e artes visuais dialogam na construção de espetáculos autorais que 
                  refletem sobre a contemporaneidade.
                </p>

                <p className="font-normal text-black">
                  Desde 2023, já produzimos 5 espetáculos autorais, consolidando uma linguagem 
                  própria que transita entre o experimental e o popular.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Fundador */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
                  Diretor Artístico
                </p>
                <h3 className="text-6xl md:text-7xl font-black mb-6 leading-none">
                  Ditto
                  <br />
                  Leite
                </h3>
                <div className="w-16 h-px bg-clr1 mb-8" />
                <p className="text-lg leading-relaxed text-gray-700 font-light">
                  Multi-artista com vasta experiência em dança contemporânea, artes visuais 
                  e direção artística. Fundador da Escola CBARTES e da Confraria Tijucana de Artes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="border-l-2 border-gray-200 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Formação
                  </p>
                  <p className="font-light text-gray-800">
                    Dança Contemporânea, Artes Visuais, Performance
                  </p>
                </div>
                <div className="border-l-2 border-gray-200 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Atuação
                  </p>
                  <p className="font-light text-gray-800">
                    Diretor, Bailarino, Artista Visual, Professor
                  </p>
                </div>
                <div className="border-l-2 border-clr1 pl-6 py-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                    Criações
                  </p>
                  <p className="font-semibold text-black">
                    5 espetáculos autorais desde 2023
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Núcleos de Pesquisa */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
                Linhas de investigação
              </p>
              <h2 className="text-5xl md:text-7xl font-light">
                Núcleos de <span className="font-black">Pesquisa</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              {nucleos.map((nucleo, index) => (
                <motion.div
                  key={nucleo.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="text-8xl font-light text-gray-200 group-hover:text-clr1 transition-colors duration-500 mb-6">
                    {nucleo.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black mb-3 uppercase tracking-tight">
                    {nucleo.nome}
                  </h3>
                  
                  <p className="text-gray-600 font-light mb-6 leading-relaxed">
                    {nucleo.descricao}
                  </p>

                  <div className="space-y-2">
                    {nucleo.areas.map((area, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1 h-1 bg-black rounded-full" />
                        <span className="text-sm uppercase tracking-wider text-gray-500">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Espetáculos */}
        <section className="py-32 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <p className="text-xs uppercase tracking-[0.3em] mb-4 text-gray-500">
                Produções autorais
              </p>
              <h2 className="text-5xl md:text-7xl font-light mb-4">
                <span className="font-black">Espetáculos</span>
              </h2>
            </motion.div>

            <div className="space-y-1">
              {espetaculos.map((esp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group border-b border-gray-200 hover:border-clr1 transition-colors duration-300"
                >
                  <div className="py-8 grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 text-sm font-light text-gray-400">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="col-span-6 md:col-span-5">
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-clr1 transition-colors">
                        {esp.titulo}
                      </h3>
                    </div>
                    <div className="col-span-5 md:col-span-3 text-sm uppercase tracking-wider text-gray-500 font-light">
                      {esp.tipo}
                    </div>
                    <div className="col-span-12 md:col-span-3 text-right">
                      <span className="inline-block px-4 py-2 bg-white text-xs uppercase tracking-widest font-semibold">
                        {esp.ano}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="text-5xl md:text-6xl font-light">
                Nossa <span className="font-black">Trajetória</span>
              </h2>
            </motion.div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-12 items-start"
                >
                  <div className="text-6xl font-black text-gray-100 w-32 shrink-0">
                    {item.ano}
                  </div>
                  <div className="flex-1 pt-4">
                    <p className="text-xl font-light text-gray-700 leading-relaxed">
                      {item.evento}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projeto PLUMAS */}
        <section className="py-32 bg-linear-to-b from-zinc-50 to-white">
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
              
              <h2 className="text-7xl md:text-8xl font-black mb-8 leading-none">
                PLUMAS
              </h2>
              
              <div className="w-24 h-px bg-clr1 mx-auto mb-8" />
              
              <p className="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Um novo espetáculo em desenvolvimento que promete expandir os limites 
                da dança contemporânea em Diamantina
              </p>

              <p className="text-sm uppercase tracking-widest text-gray-400">
                Em breve
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 bg-black text-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-light mb-6">
                Faça parte da
                <br />
                <span className="font-black">nossa história</span>
              </h2>
              
              <div className="w-16 h-px bg-white mx-auto my-12" />
              
              <p className="text-lg font-light text-gray-400 mb-12">
                Acompanhe nossos processos, participe de audições e
                <br />
                seja parte do futuro das artes cênicas
              </p>

              <button className="px-12 py-4 bg-white text-black text-sm uppercase tracking-widest font-bold hover:bg-gray-100 transition-colors duration-300">
                Entre em contato
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Companhia;