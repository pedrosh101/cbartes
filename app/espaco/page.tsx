"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/3.jpg";
import { galeria } from "@/data/galeria";
import CustomCursor from "@/components/cursor";



function EspacoCultural() {
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
      <NavbarInside color="#3E6AF3" />

     
      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0"
            style={{ scale }}
          >
            <motion.div style={{ y }} className="relative w-full h-full">
              <div className="absolute inset-0 bg-clr4 opacity-30 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Espaço Cultural CBARTES"
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
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-wider my-4">
                ESPAÇO
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-clr4 to-[#2a5299]">
                  CULTURAL
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mt-8 font-light tracking-wide text-gray-300"
            >
              Produção cultural, eventos e ocupação do espaço
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 gap-4 justify-center 2xl:flex hidden"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Ponto de Cultura</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Galeria</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Produção</span>
              </div>
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

        {/* Stats Section */}
        <section className="relative py-32 bg-linear-to-b from-black to-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { value: 42, label: "Articulações", suffix: "" },
                { value: 18, label: "Oficinas", suffix: "" },
                { value: 14, label: "Exposições", suffix: "" },
                { value: 3, label: "Anos", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
          
                >
                  <div className="text-6xl md:text-8xl font-black mb-4 bg-linear-to-br from-clr4 to-[#2a5299] bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8">
                Um território vivo, comunitário e <span className="text-clr4">acessível</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                O CBARTES é um polo de criação e produção cultural, um espaço onde 
                todas as idades criam, aprendem e se expressam através das artes. 
                Desde 2022, consolidamos ações que fortalecem a cultura em Diamantina.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nossas Ações */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl  font-black mb-6 leading-none">
                Nossas
                <br />
                <span className="text-clr4">Ações</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr4 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galeria.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
           
                  className="group relative"
                >
                  <Link href={section.link}>
                    <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr4 transition-all duration-500">
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, ${section.color}, transparent 70%)`
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-3xl font-black uppercase tracking-tight text-white group-hover:text-clr4 transition-colors duration-300">
                            {section.title}
                          </h3>
                          {section.count && (
                            <div className="text-5xl font-bold opacity-20" style={{ color: section.color }}>
                              {section.count}
                            </div>
                          )}
                        </div>
                        
                        <div className="h-px w-16 bg-clr4 mb-6 group-hover:w-full transition-all duration-500" />

                        {section.description && (
                          <p className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                            {section.description}
                          </p>
                        )}

                        <ul className="space-y-3 mb-6">
                          {section.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-300">
                              <span 
                                className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0"
                                style={{ backgroundColor: section.color }}
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                          {section.items.length > 3 && (
                            <li className="text-xs text-gray-500 italic ml-5">
                              +{section.items.length - 3} mais...
                            </li>
                          )}
                        </ul>

                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-clr4 transition-colors duration-300">
                          <span>Ver mais</span>
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impacto Cultural */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-16"
            >
              Impacto <span className="text-clr4">Cultural</span>
            </motion.h3>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { value: "16", label: "Espetáculos", color: "#F1443E" },
                { value: "40", label: "Apresentações", color: "#649D3F" },
                { value: "500+", label: "Artistas Envolvidos", color: "#3E6AF3" },
                { value: "3", label: "Anos de História", color: "#F5E764" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-6xl font-black mb-2" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <p className="text-sm uppercase tracking-wider text-gray-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light"
            >
              Único coletivo/escola de Diamantina com essa produção continuada, 
              comprometido com a expansão, fruição e fortalecimento do mercado cultural 
              das artes cênicas na região.
            </motion.p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-linear-to-b from-black to-zinc-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, #3E6AF320, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              Faça parte dessa transformação
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
            >
              Acompanhe nossos eventos, participe das oficinas e
              <br />
              seja parte do movimento cultural de Diamantina
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
    
              className="px-12 py-5 bg-clr4 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300 shadow-2xl shadow-clr4/50"
            >
              Entre em contato
            </motion.button>
          </div>
        </section>
      </main>
    </>
  );
}

export default EspacoCultural;