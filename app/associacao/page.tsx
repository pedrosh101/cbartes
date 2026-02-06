"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";

import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/8.jpg";
import CustomCursor from "@/components/cursor";

const projetos = [
  {
    id: 1,
    nome: "PIÁrte",
    subtitulo: "Programa Integral de Artes",
    cor: "#F5E764",
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
    subtitulo: "Formação e Capacitação",
    cor: "#FFD93D",
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
    nome: "Periferia para Periferia",
    subtitulo: "Arte e Transformação Social",
    cor: "#FFC759",
    descricao: "Levando arte para comunidades",
    itens: [
      "Oficinas em comunidades rurais e periféricas",
      "Apresentações gratuitas em escolas públicas",
      "Parceria com projetos sociais (CRAS, FUMBEM)",
      "Democratização do acesso à cultura",
    ],

  },
  {
    id: 4,
    nome: "Produção Cultural",
    subtitulo: "Viabilização de Projetos",
    cor: "#E6C744",
    descricao: "Sustentabilidade das ações artísticas",
    itens: [
      "Produção de espetáculos de dança (2024 e 2025)",
      "Sessões gratuitas em parceria com instituições",
      "Captação via Lei Rouanet e PNAB",
      "Gestão de projetos culturais",
    ],

  },
  {
    id: 5,
    nome: "Arte é Política",
    subtitulo: "Participação e Advocacy",
    cor: "#D4B93C",
    descricao: "Fortalecimento das políticas culturais",
    itens: [
      "Participação no Fórum Mineiro de Dança",
      "Articulação em Câmara dos Vereadores (LDO)",
      "Reivindicação da PNAB Municipal",
      "Representação da sociedade civil",
    ],

  }
];

const acoesPorAno = [
  {
    ano: 2024,
    total: 8,
    destaques: [
      { titulo: "Produção SUBVERCIRCO", descricao: "Espetáculo de dança contemporânea" },
      { titulo: "Produção PULSO INVISÍVEL", descricao: "Criação com turmas adultas" },
      { titulo: "Figurinos para 40+ bolsistas", descricao: "Material completo fornecido" },
      { titulo: "12 sessões gratuitas", descricao: "Apresentações para a comunidade" },
    ]
  },
  {
    ano: 2025,
    total: 12,
    destaques: [
      { titulo: "Apresentações gratuitas", descricao: "Parceria Banco do Nordeste" },
      { titulo: "Oficina Música e Movimento", descricao: "UFVJM - 10 vagas gratuitas" },
      { titulo: "Curso de Oratória", descricao: "10 encontros gratuitos" },
      { titulo: "Projeto Reescrevendo Histórias", descricao: "PROCART/UFVJM" },
    ]
  }
];

const transparencia = [
  { item: "Prestação de contas pública", status: "Anual" },
  { item: "Editais de seleção transparentes", status: "Publicados" },
  { item: "Relatórios de atividades", status: "Disponíveis" },
  { item: "Documentação fiscal regularizada", status: "Em dia" }
];

const depoimentos = [
  {
    texto: "A bolsa PIÁrte mudou minha vida. Nunca imaginei que poderia fazer dança profissionalmente. Hoje sou bolsista e participei de 3 espetáculos!",
    autor: "Ana Carolina",
    projeto: "Bolsista PIÁrte - Dança"
  },
  {
    texto: "O curso de Oratória do EmpreendArteLab me deu confiança para falar em público. Consegui meu primeiro emprego graças a isso.",
    autor: "Lucas Mendes",
    projeto: "EmpreendArteLab"
  },
  {
    texto: "Ver meu filho receber figurino completo e participar de espetáculos gratuitamente é uma realização. A Associação faz a diferença.",
    autor: "Márcia Silva",
    projeto: "Mãe de bolsista"
  }
];

function Associacao() {
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
      <NavbarInside color="#F5E764" colorText="black" isBlack />




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
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-wider my-4">
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
              className="text-xl md:text-3xl mt-8 font-light tracking-wide text-gray-300"
            >
              Projetos sociais e democratização da cultura
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 gap-4 justify-center 2xl:flex hidden"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">PIÁrte</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">EmpreendArteLab</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Arte é Política</span>
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
                { value: "5", label: "Projetos Ativos", suffix: "" },
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
                Transformando vidas através da <span className="text-clr2">arte</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                A Associação Cultural Amigos do CBARTES é uma organização sem fins lucrativos 
                dedicada a democratizar o acesso às artes e fortalecer as políticas culturais 
                em Diamantina e região. Garantimos que crianças, jovens e adultos em vulnerabilidade 
                social tenham oportunidades reais de formação artística de qualidade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projetos */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl  font-black mb-6 leading-none">
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
                  <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr2 transition-all duration-500">
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${projeto.cor}, transparent 70%)`
                      }}
                    />

                    <div className="relative z-10">
                 
                      
                      <h3 className="text-3xl font-black uppercase tracking-tight mb-2 group-hover:text-clr2 transition-colors duration-300">
                        {projeto.nome}
                      </h3>

                      <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
                        {projeto.subtitulo}
                      </p>
                      
                      <div className="h-px w-16 bg-clr2 mb-6 group-hover:w-full transition-all duration-500" />

                      <p className="text-base font-semibold text-gray-300 mb-6">
                        {projeto.descricao}
                      </p>

                      <ul className="space-y-3">
                        {projeto.itens.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-400">
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0"
                              style={{ backgroundColor: projeto.cor }}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ações por Ano */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black mb-16 text-center"
            >
              Ações <span className="text-clr2">Realizadas</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {acoesPorAno.map((acao, index) => (
                <motion.div
                  key={acao.ano}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-black border border-zinc-800 rounded-sm p-8 hover:border-clr2 transition-colors duration-300"
                >
                  <div className="flex items-baseline gap-6 mb-8">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-clr2 to-[#d4b93c]">
                      {acao.ano}
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-clr2">{acao.total}</div>
                      <p className="text-sm uppercase tracking-wider text-gray-500">
                        Ações realizadas
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {acao.destaques.map((destaque, i) => (
                      <div key={i} className="border-l-2 border-clr2 pl-4 py-2">
                        <p className="font-bold text-white mb-1">{destaque.titulo}</p>
                        <p className="text-sm text-gray-400">{destaque.descricao}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-7xl font-black mb-16 text-center"
            >
              Histórias de <span className="text-clr2">Transformação</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
       
                  className="group bg-zinc-900 p-8 rounded-sm border border-zinc-800 hover:border-clr2 transition-all duration-500 relative"
                >
                  <div className="mb-6">
                    <svg className="w-12 h-12 text-clr2 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  
                  <p className="text-lg leading-relaxed text-gray-300 mb-6 font-light italic">
                    "{depoimento.texto}"
                  </p>
                  
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-bold text-white mb-1">{depoimento.autor}</p>
                    <p className="text-sm text-gray-500 uppercase tracking-wider">{depoimento.projeto}</p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr2 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transparência */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-6xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black mb-12 text-center"
            >
              Compromisso com a <span className="text-clr2">Transparência</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {transparencia.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-black p-6 rounded-sm border border-zinc-800 hover:border-clr2 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">{item.item}</p>
                    <span className="px-4 py-1 bg-clr2 text-black text-sm font-bold rounded-full">
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 bg-linear-to-b from-black to-zinc-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, #F5E76420, transparent 70%)`
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
              Apoie nossos projetos, seja voluntário ou participe dos editais públicos.
              <br />
              Juntos, fortalecemos a cultura e transformamos vidas.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
      
              className="px-12 py-5 bg-clr2 text-black text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#d4b93c] transition-colors duration-300 shadow-2xl shadow-clr2/50"
            >
              Apoiar Projeto
            </motion.button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Associacao;