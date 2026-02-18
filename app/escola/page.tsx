"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/1.jpg";
import ctaImage from "@/public/images/pulso.webp";
import { getEspetaculosParaTimeline } from "@/data/espetaculos";
import { depoimentos } from "@/data/depoimentos";
import { cursos } from "@/data/cursos"
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { SelosLoop } from "@/components/selosloop";



const cursosLivres = [
  { nome: "Oratória", vagas: "EmpreendArteLab" },
  { nome: "Iluminação", vagas: "EmpreendArteLab + Jovens Aprendizes" },
  { nome: "Sonoplastia", vagas: "Estágio gratuito" },
];

const oficinasProximas = [
  {
    nome: "Dança Africana",
    data: "15 e 16 de março de 2026",
    horario: "14h às 17h",
    ministrante: "A confirmar",
    vagas: 20,
    investimento: "Gratuito",
  },
  {
    nome: "Palhaçaria",
    data: "05 de abril de 2026",
    horario: "9h às 13h",
    ministrante: "A confirmar",
    vagas: 15,
    investimento: "A confirmar",
  },
];

const oficinasContratacao = [
  "Dança Contemporânea (mín. 8h)",
  "Teatro e Jogos Teatrais (mín. 4h)",
  "Oratória e Comunicação (mín. 6h)",
  "Expressão Corporal para empresas",
  "Teatro do Oprimido",
];

const oficinasHistorico = [
  { nome: "Dança Contemporânea", ano: "2022", ministrante: "Ditto Leite" },
  { nome: "Teatro do Oprimido", ano: "2022", ministrante: "Jean Gimenes" },
  { nome: "Oratória", ano: "2023", ministrante: "Jean Gimenes" },
  { nome: "Palhaçaria", ano: "2023", ministrante: "Convidado externo" },
  { nome: "Dança de Salão", ano: "2023", ministrante: "Convidado externo" },
  { nome: "Música e Movimento", ano: "2024", ministrante: "UFVJM" },
  { nome: "Vídeo-Dança", ano: "2024", ministrante: "Cib Maia" },
  { nome: "Corpo.Movídeo", ano: "2024", ministrante: "Convidado externo" },
  { nome: "Dança Africana", ano: "2025", ministrante: "Convidado externo" },
  {
    nome: "Oratória — EmpreendArteLab",
    ano: "2025",
    ministrante: "Jean Gimenes",
  },
];

const apresentacoesPorAno: Record<
  number,
  { titulo: string; local: string; data: string }[]
> = {
  2023: [
    { titulo: "Aula-show — Praça JK", local: "Praça JK", data: "Jun/2023" },
    { titulo: "Festival Alecrim", local: "Diamantina", data: "Out/2023" },
  ],
  2024: [
    {
      titulo: "Sessão Espaço Sagrado",
      local: "Cine CBARTES",
      data: "Mai/2024",
    },
    {
      titulo: "Flash mob — Festa da Luz",
      local: "Centro Histórico",
      data: "Set/2024",
    },
    {
      titulo: "Circuito Banco do Nordeste",
      local: "Teatro Santa Izabel",
      data: "Nov/2024",
    },
  ],
  2025: [
    {
      titulo: "Quadrilha — Mercado Velho",
      local: "Praça do Mercado Velho",
      data: "Jun/2025",
    },
    { titulo: "Mostra Telas Amigáveis", local: "CBARTES", data: "Ago/2025" },
    {
      titulo: "Performance PL da Devastação",
      local: "Espaço público",
      data: "Set/2025",
    },
  ],
};

const espetaculosPorAno = getEspetaculosParaTimeline();

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
      } else setCount(Math.floor(start));
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

function CursoPopup({
  curso,
  onClose,
}: {
  curso: (typeof cursos)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9998 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="relative bg-zinc-900 border border-zinc-700 rounded-sm w-full max-w-xl max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header fixo */}
        <div className="sticky top-0 z-10 bg-zinc-900 border-b border-zinc-800 px-8 py-6 flex items-start justify-between">
          <div>
            <div className="w-8 h-3px bg-clr3 mb-3" />
            <h2 className="text-3xl font-bold text-white uppercase tracking-tight">
              {curso.categoria}
            </h2>
            {curso.professor && (
              <p className="text-xs uppercase tracking-widest text-gray-400 mt-1">
                Prof. {curso.professor}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors shrink-0 ml-4"
            aria-label="Fechar"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-8 py-6 space-y-7">
          {/* Descrição */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
              Sobre o curso
            </p>
            <p className="text-gray-300 leading-relaxed">
              {curso.popup.descricao}
            </p>
          </div>

          {/* Metodologia */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
              Metodologia
            </p>
            <p className="text-gray-300 leading-relaxed">
              {curso.popup.metodologia}
            </p>
          </div>

          {/* Turmas */}
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">
              Turmas e horários
            </p>
            <div className="space-y-1">
              {curso.popup.turmas.map((t, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-4 py-3 border-b border-zinc-800 last:border-0 items-start"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-clr3 mt-2 shrink-0" />
                  <div>
                    <p className="font-semibold text-white text-sm">{t.nome}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{t.horario}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investimento + Vagas */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                Investimento
              </p>
              <p className="text-gray-300 text-sm">
                {curso.popup.investimento}
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">
                Vagas
              </p>
              <p className="text-gray-300 text-sm">{curso.popup.vagas}</p>
            </div>
          </div>

          {/* CTA */}
          <a href="https://wa.me/553897421313">
          <button className="w-full py-4 bg-clr3 text-white font-bold uppercase tracking-widest text-sm rounded-sm hover:bg-[#365e1c] transition-colors duration-300">
            Entre em contato
          </button>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

function Escola() {
  const container = useRef<HTMLDivElement>(null);
  const [popupCurso, setPopupCurso] = useState<(typeof cursos)[0] | null>(null);

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
      <NavbarInside color="#649D3F" />

      <AnimatePresence>
        {popupCurso && (
          <CursoPopup curso={popupCurso} onClose={() => setPopupCurso(null)} />
        )}
      </AnimatePresence>

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* ── Hero ── */}
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
              Formação artística e cultural
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 gap-4 justify-center 2xl:flex hidden"
            >
              {["Dança", "Teatro", "Formação"].map((tag) => (
                <div
                  key={tag}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <span className="text-sm uppercase tracking-widest">
                    {tag}
                  </span>
                </div>
              ))}
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

        {/* ── Selos + Stats ── */}
        <section className="relative bg-linear-to-b from-black to-zinc-900">
          <SelosLoop items={[1, 2, 3]} />
          <div className="max-w-7xl mx-auto px-8 py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { value: 16, label: "Espetáculos", suffix: "" },
                { value: 40, label: "Apresentações", suffix: "" },
                { value: 18, label: "Oficinas", suffix: "+" },
                { value: 3.5, label: "Anos", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
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

        {/* ── Cursos Regulares ── */}
        <section className="py-32 relative bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
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
                      <h3 className="text-4xl font-black mb-2 uppercase">
                        {curso.categoria}
                      </h3>
                      <div className="h-px w-16 bg-clr3 mb-6 group-hover:w-full transition-all duration-500" />

                      {curso.professor && (
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

                      {/* Saiba mais → abre popup */}
                      <button
                        onClick={() => setPopupCurso(curso)}
                        className="w-full px-4 py-3 bg-transparent border-2 border-zinc-600 text-zinc-300 text-sm font-bold uppercase tracking-wider rounded-sm hover:border-clr3 hover:text-clr3 transition-all duration-300"
                      >
                        Saiba mais
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cursos Livres ── */}
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

        {/* ── Oficinas ── */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
                <span className="text-clr3">Oficinas</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr3 to-transparent" />
            </motion.div>

            {/* Próximas oficinas */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-clr3" />
                <h3 className="text-xl font-black uppercase tracking-wider">
                  Próximas Oficinas
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {oficinasProximas.map((o, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-zinc-800 border border-zinc-700 hover:border-clr3 transition-colors duration-300 rounded-sm p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-2xl font-black uppercase">
                        {o.nome}
                      </h4>
                      <span className="ml-4 shrink-0 px-3 py-1 bg-clr3/20 border border-clr3/40 text-clr3 text-xs uppercase tracking-wider rounded-full">
                        {o.vagas} vagas
                      </span>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-clr3 shrink-0" />
                        <span className="text-white font-semibold">
                          {o.data}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                        <span className="text-gray-400">{o.horario}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                        <span className="text-gray-400">{o.ministrante}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" />
                        <span className="text-gray-400">{o.investimento}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Disponíveis para contratação */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 bg-zinc-800 border border-zinc-700 rounded-sm p-8"
            >
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-5">
                Oficinas disponíveis para contratação
              </h3>
              <div className="flex flex-wrap gap-3">
                {oficinasContratacao.map((o, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-black border border-zinc-700 hover:border-clr3 text-sm text-gray-300 hover:text-clr3 rounded-full transition-all duration-300 cursor-default"
                  >
                    {o}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Histórico */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2 h-2 rounded-full bg-clr3" />
                <h3 className="text-xl font-black uppercase tracking-wider">
                  Histórico
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {oficinasHistorico.map((o, i) => (
                  <div
                    key={i}
                    className="py-3 px-4 border-l-2 border-zinc-800 hover:border-clr3 transition-colors duration-300"
                  >
                    <p className="font-semibold text-white text-sm">{o.nome}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {o.ano} · {o.ministrante}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA dar uma oficina */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="border  border-zinc-700 hover:border-clr3 transition-colors duration-300 rounded-sm p-8 text-center"
            >
              <p className="text-gray-400 mb-5">
                Quer dar uma oficina no CBARTES?
              </p>
              <a href="https://wa.me/553897421313">
                <button className="px-8 py-3 bg-clr3 text-white font-bold uppercase tracking-wider rounded-full hover:bg-[#365e1c] transition-colors duration-300 text-sm">
                  Clique aqui e entre em contato
                </button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── Espetáculos e Apresentações ── */}
        <section className="py-32 bg-black relative">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20 text-center"
            >
              <h2 className="font-black leading-tight">
                <span className="text-7xl md:text-8xl block">Espetáculos</span>
                <span className="text-4xl md:text-5xl text-clr3 block">
                  e Apresentações
                </span>
              </h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-clr3 via-[#365e1c] to-clr3 hidden md:block" />

              {espetaculosPorAno.map((item, index) => {
                const apres = apresentacoesPorAno[item.ano] ?? [];
                return (
                  <motion.div
                    key={item.ano}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative grid md:grid-cols-2 gap-8 mb-20 ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}
                  >
                    <div
                      className={
                        index % 2 === 0 ? "md:text-right" : "md:col-start-2"
                      }
                    >
                      <div className="inline-block">
                        {/* Ano */}
                        <div className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-clr3 to-[#365e1c] mb-6">
                          {item.ano}
                        </div>

                        {/* Espetáculos */}
                        {item.espetaculos.length > 0 && (
                          <div className="mb-6">
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
                              {item.espetaculos.length}{" "}
                              {item.espetaculos.length === 1
                                ? "espetáculo"
                                : "espetáculos"}
                            </p>
                            <div className="space-y-3">
                              {item.espetaculos.map((esp, espIndex) => (
                                <Link
                                  key={esp.espetaculo}
                                  href={`/escola/espetaculo/${esp.espetaculo}`}
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
                                      delay: espIndex * 0.08,
                                    }}
                                    whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                                    className="group flex items-center gap-3"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-clr3 transition-colors duration-300 shrink-0" />
                                    <span className="text-lg text-gray-400 group-hover:text-clr3 transition-colors duration-300">
                                      {esp.titulo}
                                    </span>
                                  </motion.div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Apresentações */}
                        {apres.length > 0 && (
                          <div>
                            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-3">
                              {apres.length}{" "}
                              {apres.length === 1
                                ? "apresentação"
                                : "apresentações"}
                            </p>
                            <div className="space-y-2">
                              {apres.map((ap, ai) => (
                                <div
                                  key={ai}
                                  className="flex items-start gap-3"
                                >
                                  <div className="w-2 h-2 rounded-full bg-zinc-700 shrink-0 mt-1.5" />
                                  <div>
                                    <span className="text-sm text-gray-500">
                                      {ap.titulo}
                                    </span>
                                    <span className="text-xs text-zinc-700 ml-2">
                                      {ap.data}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-1/2 top-10 -translate-x-1/2 w-6 h-6 rounded-full bg-clr3 border-4 border-black hidden md:block z-10" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Depoimentos ── */}
        <section className="py-32 bg-zinc-900 relative overflow-hidden">
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
                  className="group relative bg-black p-8 rounded-sm border border-zinc-800 hover:border-clr3 transition-all duration-500"
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

        {/* ── CTA ── */}
        <section className="relative py-32 overflow-hidden">
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
              Somos um ecossistema cultural em Diamantina com produção continuada
              <br />
              Compromisso real com a expansão das artes cênicas
            </motion.p>
            <a href="https://wa.me/553897421313">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-clr3 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300 shadow-2xl shadow-clr3/50"
              >
                Fale Conosco
              </motion.button>
            </a>
          </div>
        </section>
        <Footer color="#649d3f" />

      </main>
    </>
  );
}

export default Escola;
