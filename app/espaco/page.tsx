"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/3.jpg";
import ctaImage from "@/public/images/pulso.webp";
import { galeria } from "@/data/espaco/galeria";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { SelosLoop } from "@/components/selosloop";

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
          <motion.div className="absolute inset-0" style={{ scale }}>
            <motion.div style={{ y }} className="relative w-full h-full">
              {/* Película escura */}
              <div className="absolute inset-0 bg-black/40 z-5" />
              <div className="absolute inset-0 bg-clr2 opacity-20 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Espaço CBARTES"
                priority
                style={{ objectFit: "cover" }}
                className="grayscale-30"
              />
            </motion.div>
          </motion.div>

          <motion.div
            style={{ opacity }}
            className="relative z-20 text-center px-8 max-w-8xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="overflow-hidden"
            >
              <h1 className="text-[12vw] md:text-[5.5vw] font-black leading-none tracking-wider my-4">
                ESPAÇO E PONTO DE CULTURA
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-clr4 to-[#2a5299]">
                  CAMPO BELO DAS ARTES
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mt-8 font-light tracking-wide text-gray-300"
            >
              Território vivo de criação, formação, acesso a arte como direito e
              economia criativa
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 gap-4 justify-center 2xl:flex hidden"
            >
              <a href="#nossas-acoes">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="text-sm uppercase tracking-widest">
                    Nossas Ações
                  </span>
                </div>
              </a>
              <a href="#impacto">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="text-sm uppercase tracking-widest">
                    Impacto
                  </span>
                </div>
              </a>
              <a href="#apoio">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="text-sm uppercase tracking-widest">
                    Apoio
                  </span>
                </div>
              </a>
              <a href="#clipping">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors">
                  <span className="text-sm uppercase tracking-widest">
                    Clipping
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

        {/* ── Selos + Stats ── */}
        <section className="relative bg-linear-to-b from-black to-zinc-900">
          <SelosLoop items={[7, 8, 17, 10, 16, 19, 13, 6, 1, 2]} />
          <div className="max-w-7xl mx-auto px-8 py-24">
            {/* Título da seção */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-4">
                Principais <span className="text-clr4">Ações</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr4 to-transparent mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
              {[
                { value: 20, label: "Eventos", suffix: "+" },
                { value: 14, label: "Exposições", suffix: "" },
                { value: 18, label: "Oficinas", suffix: "+" },
                { value: 42, label: "Articulações em Rede", suffix: "" },
                { value: 50, label: "Artistas Recebidos", suffix: "+" },
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
                Um território vivo, comunitário e{" "}
                <span className="text-clr4">acessível</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light">
                O CBARTES é um polo de criação e produção cultural, um espaço
                onde todas as idades criam, aprendem e se expressam através das
                artes. Desde 2022, consolidamos ações que fortalecem a cultura
                em Diamantina.
              </p>
                            <Link href="/espaco/quem-somos">
              <button className="pt-8 text-clr4">Saiba Mais</button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Nossas Ações */}
        <section id="nossas-acoes" className="py-32 bg-black">
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
                          background: `radial-gradient(circle at 50% 50%, bg-clr4, transparent 70%)`,
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-3xl font-black uppercase  text-white group-hover:text-clr4 transition-colors duration-300">
                            {section.title}
                          </h3>
                          {section.count && (
                            <div className="text-5xl font-bold opacity-60 text-clr4">
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
                            <li
                              key={i}
                              className="flex items-start text-sm text-gray-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0 bg-clr4" />
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
                          <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impacto Cultural e Econômico */}
        <section id="impacto" className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                Impacto Cultural e <span className="text-clr4">Econômico</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr4 to-transparent mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  numero: "16",
                  label: "Espetáculos",
                  descricao: "Produzidos entre 2022 e 2025",
                },
                {
                  numero: "40",
                  label: "Apresentações",
                  sufixo: "+",
                  descricao: "Públicas em diversos espaços",
                },
                {
                  numero: "500",
                  label: "Artistas",
                  sufixo: "+",
                  descricao: "Envolvidos em nossas ações",
                },
                {
                  numero: "3.5",
                  label: "Anos",
                  descricao: "De atuação continuada",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-7xl md:text-8xl font-black mb-4 bg-clip-text text-transparent bg-clr4/80">
                    {item.numero}
                    {item.sufixo}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-white">
                    {item.label}
                  </h3>
                  <p className="text-sm text-gray-400">{item.descricao}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 max-w-4xl mx-auto text-center"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                O CBARTES gera impacto direto na economia criativa local,
                profissionalizando artistas, promovendo circulação cultural e
                fortalecendo a cadeia produtiva das artes em Diamantina e
                região.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Apoios e Parcerias */}
        <section id="apoio" className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                Apoios e <span className="text-clr4">Parcerias</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr4 to-transparent mx-auto" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-gray-400 mb-12 max-w-3xl mx-auto"
            >
              Nosso trabalho é viabilizado por uma rede de apoiadores,
              instituições e políticas públicas que acreditam no poder
              transformador da cultura.
            </motion.p>

            <SelosLoop items={[1, 2, 3]} />
          </div>
        </section>

        {/* Clipping */}
        <section id="clipping" className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                <span className="text-clr4">Clipping</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr4 to-transparent mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  titulo: "CBARTES apresenta espetáculo no Teatro Santa Izabel",
                  veiculo: "Jornal Voz da Serra",
                  data: "Dezembro 2024",
                  link: "#",
                },
                {
                  titulo:
                    "Galeria do CBARTES recebe exposição de arte contemporânea",
                  veiculo: "Portal Diamantina",
                  data: "Novembro 2024",
                  link: "#",
                },
                {
                  titulo: "Projeto social do CBARTES beneficia 50+ jovens",
                  veiculo: "Rádio Teófilo Otoni",
                  data: "Outubro 2024",
                  link: "#",
                },
                {
                  titulo:
                    "Ponto de Cultura fortalece cena artística em Diamantina",
                  veiculo: "Jornal Hoje em Dia",
                  data: "Setembro 2024",
                  link: "#",
                },
                {
                  titulo: "CBARTES é destaque em festival de dança",
                  veiculo: "Portal G1 Minas",
                  data: "Agosto 2024",
                  link: "#",
                },
                {
                  titulo: "Escola de artes oferece bolsas gratuitas",
                  veiculo: "TV Integração",
                  data: "Julho 2024",
                  link: "#",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <a
                    href={item.link}
                    className="block bg-zinc-800 border border-zinc-700 hover:border-clr4 rounded-sm p-6 h-full transition-all duration-300"
                  >
                    <div className="mb-4">
                      <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {item.veiculo} · {item.data}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-clr4 transition-colors duration-300 line-clamp-3">
                        {item.titulo}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-400 group-hover:text-clr4 transition-colors duration-300">
                      <span>Ler matéria</span>
                      <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                        →
                      </span>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Link
                href="/espaco-cultural/midia"
                className="inline-block px-8 py-4 bg-transparent border-2 border-clr4 text-clr4 font-bold uppercase tracking-wider rounded-full hover:bg-clr4 hover:text-white transition-all duration-300"
              >
                Ver todo o clipping
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={ctaImage}
              fill
              alt="Inscreva-se"
              style={{ objectFit: "cover" }}
              className="brightness-80"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              Seja presença ativa nessa trajetória cultural
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed"
            >
              Acompanhe nossas atividades, envie propostas e aproprie-se deste
              espaço cultural,
              <br />
              como lugar de encontro, criação, troca e pertencimento.
            </motion.p>
            <a href="https://wa.me/553897421313">
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-clr4 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300 shadow-2xl shadow-clr4/50"
              >
                Fale Conosco
              </motion.button>
            </a>
          </div>
        </section>
        <Footer color="#3e6af3" />
      </main>
    </>
  );
}

export default EspacoCultural;
