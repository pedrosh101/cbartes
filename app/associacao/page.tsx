"use client";

import { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { SelosLoop } from "@/components/selosloop";
import image from "@/public/images/8.jpg";
import ctaImage from "@/public/images/pulso.webp";

const projetos = [
  {
    id: 1,
    nome: "PIÁrte",
    link: "/escola",
    subtitulo: "Programa Integral de Artes",
    descricao: "Bolsas integrais para formação em dança e teatro",
    itens: [
      "Bolsas 100% gratuitas para alunos em vulnerabilidade social",
      "Acompanhamento pedagógico especializado",
      "Figurinos e materiais fornecidos",
      "Participação em espetáculos profissionais",
    ],
  },
  {
    id: 2,
    nome: "EmpreendArteLab",
    link: "/escola",
    subtitulo: "Formação e Capacitação",
    descricao: "Desenvolvimento profissional gratuito",
    itens: [
      "Curso de Oratória (vagas gratuitas)",
      "Formação em Iluminação Cênica",
      "Operador de Sonoplastia (jovens aprendizes)",
      "Estágio de professor de dança e teatro",
    ],
  },
  {
    id: 3,
    nome: "Produção Cultural",
    link: "/companhia",
    subtitulo: "Viabilização de Projetos",
    descricao: "Sustentabilidade das ações artísticas",
    itens: [
      "Produção de espetáculos de dança (2024 e 2025)",
      "Sessões gratuitas em parceria com instituições",
      "Captação via Lei Rouanet e PNAB",
      "Gestão de projetos culturais",
    ],
  },
  {
    id: 4,
    nome: "Periferia para Periferia",
    link: "/espaco",
    subtitulo: "Arte e Transformação Social",
    descricao: "Levando arte para comunidades",
    itens: [
      "Oficinas em comunidades rurais e periféricas",
      "Apresentações gratuitas em escolas públicas",
      "Parceria com projetos sociais (CRAS, FUMBEM)",
      "Democratização do acesso à cultura",
    ],
  },
  {
    id: 5,
    nome: "CineCBARTES",
    link: "/espaco",
    subtitulo: "Cinema e Audiovisual",
    descricao: "Formação e exibição cinematográfica",
    itens: [
      "Sessões de cinema gratuitas semanais",
      "Oficinas de audiovisual para jovens",
      "Produção de documentários locais",
      "Cineclube e debates sobre cinema",
    ],
  },
  {
    id: 6,
    nome: "Galeria",
    link: "/espaco/galeria",
    subtitulo: "Artes Visuais",
    descricao: "Espaço para exposições e artistas visuais",
    itens: [
      "14 exposições realizadas desde 2022",
      "Apoio a artistas locais e regionais",
      "Curadoria e montagem de exposições",
      "Formação de público para artes visuais",
    ],
  },
];

const acoesRealizadas = [
  { titulo: "Arte é Política", tipo: "popup" },
  { titulo: "Arte em Rede", tipo: "popup" },
  { titulo: "Apoios", tipo: "popup" },
];

const transparencia = [
  { item: "Prestação de contas pública", status: "Anual" },
  { item: "Editais de seleção transparentes", status: "Publicados" },
  { item: "Relatórios de atividades", status: "Disponíveis" },
  { item: "Documentação fiscal regularizada", status: "Em dia" },
];

const depoimentos = [
  {
    texto:
      "A bolsa PIÁrte mudou minha vida. Nunca imaginei que poderia fazer dança profissionalmente. Hoje sou bolsista e participei de 3 espetáculos!",
    autor: "Ana Carolina",
    projeto: "Bolsista PIÁrte - Dança",
  },
  {
    texto:
      "O curso de Oratória do EmpreendArteLab me deu confiança para falar em público. Consegui meu primeiro emprego graças a isso.",
    autor: "Lucas Mendes",
    projeto: "EmpreendArteLab",
  },
  {
    texto:
      "Ver meu filho receber figurino completo e participar de espetáculos gratuitamente é uma realização. A Associação faz a diferença.",
    autor: "Márcia Silva",
    projeto: "Mãe de bolsista",
  },
];

// Popup Component
function AcaoPopup({ acao, onClose }: { acao: string; onClose: () => void }) {
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

  const conteudo: Record<string, { titulo: string; texto: string }> = {
    "Arte é Política": {
      titulo: "Arte é Política",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    "Arte em Rede": {
      titulo: "Arte em Rede",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    Apoios: {
      titulo: "Apoios e Parcerias",
      texto:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.",
    },
  };

  const info = conteudo[acao];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9998 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 32, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        className="relative bg-zinc-900 border border-zinc-700 rounded-sm w-full max-w-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-zinc-900 border-b border-zinc-800 px-8 py-6 flex items-start justify-between">
          <div>
            <div className="w-8 h-0.75 bg-clr2 mb-3" />
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">
              {info.titulo}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-white transition-colors ml-4"
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
        <div className="px-8 py-6">
          <p className="text-gray-300 leading-relaxed">{info.texto}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Associacao() {
  const container = useRef<HTMLDivElement>(null);
  const [popupAcao, setPopupAcao] = useState<string | null>(null);

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
      <NavbarInside color="#F5E764" colorText="black" isBlack />

      <AnimatePresence>
        {popupAcao && (
          <AcaoPopup acao={popupAcao} onClose={() => setPopupAcao(null)} />
        )}
      </AnimatePresence>

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
        >
          <motion.div className="absolute inset-0" style={{ scale }}>
            <motion.div style={{ y }} className="relative w-full h-full">
              {/* Película escura */}
              <div className="absolute inset-0 bg-black/40 z-5" />
              <div className="absolute inset-0 bg-clr2 opacity-20 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Associação Cultural Amigos do CBARTES"
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
              <h1 className="text-[8vw] 2xl:text-[10vw] font-black leading-[0.85] tracking-wider my-4">
                ASSOCIAÇÃO
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-clr2 to-[#d4b93c]">
                  CULTURAL
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-2xl 2xl:text-3xl 2xl:mt-8 font-light tracking-wide text-gray-300"
            >
              Projetos sociais e democratização da cultura
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="2xl:mt-12 mt-4 gap-4 justify-center flex"
            >
              <a href="#nossos-projetos">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Nossos Projetos
                  </span>
                </div>
              </a>
              <a href="#acoes-realizadas">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Ações Realizadas
                  </span>
                </div>
              </a>
              <a href="#depoimentos">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Depoimentos
                  </span>
                </div>
              </a>
              <a href="#transparencia">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="2xl:text-sm text-xs uppercase tracking-widest">
                    Transparência
                  </span>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 ">
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
          <SelosLoop items={[15, 14, 9, 6, 13, 8, 16, 7, 1, 2]} />
          <div className="max-w-7xl mx-auto px-8 py-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { value: "6", label: "Projetos Ativos", suffix: "" },
                { value: "50", label: "Bolsistas", suffix: "+" },
                { value: "100", label: "Gratuito", suffix: "%" },
                { value: "3", label: "Anos", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-6xl md:text-8xl font-black mb-4 bg-linear-to-br from-clr2 to-[#d4b93c] bg-clip-text text-transparent">
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
                Democratização do acesso às{" "}
                <span className="text-clr2">artes</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                A Associação Cultural Amigos do CBARTES atua na democratização
                do acesso às artes cênicas, promovendo formação gratuita,
                produção cultural e fortalecimento de políticas públicas. Nosso
                compromisso é com a transformação social através da cultura.
              </p>
              <Link href="/associacao/quem-somos">
              <button className="pt-8 text-clr2">Saiba Mais</button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Nossos Projetos */}
        <section id="nossos-projetos" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl font-black mb-6 leading-none">
                Nossos
                <br />
                <span className="text-clr2">Projetos</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr2 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projetos.map((projeto, index) => (
                <motion.div
                  key={projeto.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative"
                >
                  <Link href={projeto.link}>
                    <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr2 transition-all duration-500">
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 50% 50%, #F5E764, transparent 70%)`,
                        }}
                      />

                      <div className="relative z-10">
                        <h3 className="text-4xl font-black mb-2 uppercase">
                          {projeto.nome}
                        </h3>
                        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                          {projeto.subtitulo}
                        </p>
                        <div className="h-px w-16 bg-clr2 mb-6 group-hover:w-full transition-all duration-500" />
                        <p className="text-sm text-gray-400 mb-6">
                          {projeto.descricao}
                        </p>
                        <ul className="space-y-2">
                          {projeto.itens.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-clr2 mt-2 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ações Realizadas */}
        <section id="acoes-realizadas" className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-7xl font-black mb-6">
                Ações <span className="text-clr2">Realizadas</span>
              </h2>
              <div className="w-32 h-1 bg-clr2" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {acoesRealizadas.map((acao, i) => (
                <motion.button
                  key={i}
                  onClick={() => setPopupAcao(acao.titulo)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-zinc-800 border border-zinc-700 hover:border-clr2 rounded-sm p-6 text-left transition-all duration-300"
                >
                  <h3 className="text-2xl font-black uppercase text-white mb-2">
                    {acao.titulo}
                  </h3>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    Clique para ver mais
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-7xl md:text-8xl font-black mb-20 text-center"
            >
              O que falam <span className="text-clr2">sobre nós</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((dep, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative bg-zinc-900 p-8 rounded-sm border border-zinc-800 hover:border-clr2 transition-all duration-500"
                >
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-clr2 opacity-50"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-300 mb-6 font-light italic">
                    "{dep.texto}"
                  </p>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-bold text-white mb-1">{dep.autor}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {dep.projeto}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr2 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section id="transparencia" className="py-32 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-6xl font-black mb-4">
                <span className="text-clr2">Transparência</span>
              </h2>
              <div className="w-24 h-1 bg-clr2" />
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {transparencia.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-800 border border-zinc-700 rounded-sm p-6"
                >
                  <p className="text-gray-300 mb-2">{t.item}</p>
                  <p className="text-sm font-bold text-clr2">{t.status}</p>
                </motion.div>
              ))}
            </div>
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
              Faça parte dessa transformação
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            >
              Apoie nossos projetos e ajude a transformar vidas através da
              cultura
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-clr2 text-black text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#d4b93c] transition-colors duration-300 shadow-2xl shadow-clr2/50"
              >
                Entre em contato
              </motion.button>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent border-2 border-clr2 text-clr2 text-lg font-bold uppercase tracking-widest rounded-full hover:bg-clr2 hover:text-black transition-all duration-300"
              >
                Como contribuir
              </motion.button>
            </div>
          </div>
        </section>

        <Footer color="#F5E764" />
      </main>
    </>
  );
}

export default Associacao;
