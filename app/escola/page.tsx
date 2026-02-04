"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useSpring,
  useInView,
} from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/1.jpg";
import ctaImage from "@/public/images/5.jpg";
import {depoimentos} from "@/data/depoimentos"

const cursos = [
  {
    id: 1,
    categoria: "Dança",
    professor: "Ditto Leite",
    professorSlug: "ditto-leite",
    turmas: ["Pedagogia", "Diferencial", "Coreografia Social"],
    bolsas: "PIÁrte",
  },
  {
    id: 2,
    categoria: "Teatro",
    professor: "Jean Gimenes",
    professorSlug: "jean-gimenes",
    turmas: ["Pedagogia", "Diferencial"],
    bolsas: "PIÁrte",
  },
  {
    id: 3,
    categoria: "Jovem Aprendiz",
    professor: "-",
    professorSlug: null,
    turmas: ["Estágio de professor de dança e teatro"],
    bolsas: "Associação Cultural",
  },
];

const cursosLivres = [
  { nome: "Oratória", vagas: "EmpreendArteLab" },
  { nome: "Iluminação", vagas: "EmpreendArteLab + Jovens Aprendizes" },
  { nome: "Sonoplastia", vagas: "Estágio gratuito" },
];

const espetaculosPorAno = [
  {
    ano: 2022,
    espetaculos: [{ titulo: "PECADO", slug: "pecado" }],
  },
  {
    ano: 2023,
    espetaculos: [
      { titulo: "A CASA DOS MISTÉRIOS", slug: "a-casa-dos-misterios" },
      { titulo: "ESPAÇO SAGRADO", slug: "espaco-sagrado" },
      { titulo: "CAMINHOS", slug: "caminhos" },
      { titulo: "A GREVE DO SEXO", slug: "a-greve-do-sexo" },
    ],
  },
  {
    ano: 2024,
    espetaculos: [
      { titulo: "A BRUXINHA QUE ERA BOA", slug: "a-bruxinha-que-era-boa" },
      { titulo: "COM AMOR SHAKESPEARE", slug: "com-amor-shakespeare" },
      { titulo: "ROXAS", slug: "roxas" },
      { titulo: "SUBVERCIRCO", slug: "subvercirco" },
      { titulo: "PULSO INVISÍVEL", slug: "pulso-invisivel" },
      { titulo: "RUPTURA DO SILÊNCIO", slug: "ruptura-do-silencio" },
    ],
  },
  {
    ano: 2025,
    espetaculos: [
      { titulo: "A DROGA DA OBEDIÊNCIA", slug: "a-droga-da-obediencia" },
      { titulo: "O AUTO DA COMPADECIDA", slug: "o-auto-da-compadecida" },
      { titulo: "DOROTEIA", slug: "doroteia" },
      { titulo: "BRINCANTES", slug: "brincantes" },
      { titulo: "CIRCUNSDANÇAS DA VIDA", slug: "circunsdancas-da-vida" },
    ],
  },
];



function CounterAnimation({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function Escola() {
  const container = useRef<HTMLDivElement>(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const smoothMouseX = useSpring(0, { stiffness: 300, damping: 25 });
  const smoothMouseY = useSpring(0, { stiffness: 300, damping: 25 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      smoothMouseX.set(e.clientX);
      smoothMouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothMouseX, smoothMouseY]);

  const cursorX = useTransform(smoothMouseX, (value) => value - 20);
  const cursorY = useTransform(smoothMouseY, (value) => value - 20);

  return (
    <>
      <NavbarInside color="#649D3F" />

      {/* Custom SVG Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-9999 hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{
            scale: cursorVariant === "hover" ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <image href="/cursor.svg" width="40" height="40" />
        </motion.svg>
      </motion.div>

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
        >
          <motion.div className="absolute inset-0" style={{ scale }}>
            <motion.div style={{ y }} className="relative w-full h-full">
              <div className="absolute inset-0 bg-clr3 opacity-30 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Escola CBARTES"
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
                ESCOLA
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-clr3 to-[#365e1c]">
                  CBARTES
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mt-8 font-light tracking-wide text-gray-300"
            >
              Formação artística em dança e teatro
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 gap-4 justify-center 2xl:flex hidden"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Dança</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">
                  Teatro
                </span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">
                  Formação
                </span>
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
                { value: 16, label: "Espetáculos", suffix: "" },
                { value: 40, label: "Apresentações", suffix: "" },
                { value: 500, label: "Artistas", suffix: "+" },
                { value: 3, label: "Anos", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="text-6xl md:text-8xl font-black mb-4 bg-linear-to-br from-clr3 to-[#365e1c] bg-clip-text text-transparent">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cursos Regulares */}
        <section className="py-32 relative bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-7xl md:text-9xl font-black mb-6 leading-none">
                Cursos
                <br />
                <span className="text-clr3">Regulares</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr3 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cursos.map((curso, index) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group relative"
                >
                  <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr3 transition-all duration-500">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, #649D3F, transparent 70%)`,
                      }}
                    />

                    <div className="relative z-10">
                      <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">
                        {curso.categoria}
                      </h3>

                      <div className="h-px w-16 bg-clr3 mb-6 group-hover:w-full transition-all duration-500" />

                      {curso.professorSlug ? (
                        <Link href={`/escola/professor/${curso.professorSlug}`}>
                          <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider group/prof">
                            Professor:{" "}
                            <span className="text-white font-semibold group-hover/prof:text-clr3 transition-colors duration-300">
                              {curso.professor}
                            </span>
                          </p>
                        </Link>
                      ) : (
                        <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
                          Professor:{" "}
                          <span className="text-white font-semibold">
                            {curso.professor}
                          </span>
                        </p>
                      )}

                      <div className="space-y-2 mb-6">
                        {curso.turmas.map((turma, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300"
                          >
                            <div className="w-1 h-1 rounded-full bg-clr3" />
                            {turma}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3">
  

                        {curso.professorSlug && (
                          <Link
                            href={`/escola/professor/${curso.professorSlug}`}
                          >
                            <button className="w-full px-4 py-3 bg-transparent border-2 border-zinc-600 text-zinc-300 text-sm font-bold uppercase tracking-wider rounded-sm hover:border-clr3 hover:text-clr3 transition-all duration-300">
                              Saiba mais
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cursos Livres */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-8xl font-black mb-16"
            >
              Cursos <span className="text-clr3">Livres</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {cursosLivres.map((curso, index) => (
                <motion.div
                  key={curso.nome}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group relative bg-linear-to-br from-zinc-900 to-zinc-800 p-8 rounded-sm border border-zinc-700 hover:border-clr3 transition-all duration-300"
                >
                  <h3 className="text-3xl font-bold mb-3 uppercase">
                    {curso.nome}
                  </h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {curso.vagas}
                  </p>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr3 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Espetáculos Timeline */}
        <section className="py-32 bg-zinc-900 relative">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-8xl font-black mb-20 text-center"
            >
              <span className="text-clr3">Espetáculos</span>
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-clr3 via-[#365e1c] to-clr3 hidden md:block" />

              {espetaculosPorAno.map((item, index) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 mb-16 ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div
                    className={
                      index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                    }
                  >
                    <div className="inline-block">
                      <div className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-clr3 to-[#365e1c] mb-4">
                        {item.ano}
                      </div>
                      <div className="text-2xl font-bold mb-4">
                        {item.espetaculos.length}{" "}
                        {item.espetaculos.length === 1
                          ? "espetáculo"
                          : "espetáculos"}
                      </div>

                      {/* Lista de espetáculos clicáveis */}
                      <div className="space-y-3">
                        {item.espetaculos.map((espetaculo, espIndex) => (
                          <Link
                            key={espetaculo.slug}
                            href={`/escola/espetaculo/${espetaculo.slug}`}
                          >
                            <motion.div
                              initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -20 : 20,
                              }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.4,
                                delay: espIndex * 0.1,
                              }}
                              whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                              onMouseEnter={() => setCursorVariant("hover")}
                              onMouseLeave={() => setCursorVariant("default")}
                              className="group  flex items-center gap-3"
                            >
                              <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-clr3 transition-colors duration-300" />
                              <span className="text-lg text-gray-400 group-hover:text-clr3 transition-colors duration-300">
                                {espetaculo.titulo}
                              </span>
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-clr3 border-4 border-zinc-900 hidden md:block z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-8xl font-black mb-20 text-center"
            >
              O que falam <span className="text-clr3">sobre nós</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group bg-zinc-900 p-8 rounded-sm border border-zinc-800 hover:border-clr3 transition-all duration-500"
                >
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-clr3 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <p className="text-lg leading-relaxed text-gray-300 mb-6 font-light italic">
                    "{depoimento.texto}"
                  </p>

                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-bold text-white mb-1">
                      {depoimento.autor}
                    </p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {depoimento.curso}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr3 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section com Imagem de Fundo */}
        <section className="relative py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={ctaImage}
              fill
              alt="Inscreva-se"
              style={{ objectFit: "cover" }}
              className="brightness-50"
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
              Único coletivo/escola de Diamantina com produção continuada.
              <br />
              Compromisso real com a expansão das artes cênicas.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-12 py-5 bg-clr3 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300 shadow-2xl shadow-clr3/50"
            >
              Inscreva-se agora
            </motion.button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Escola;
