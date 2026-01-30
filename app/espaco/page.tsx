"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const sections = [
  {
    title: "Quem Somos",
    link: "/",
    items: [
      "Equipe de gestão: diretores, coordenações, secretaria",
      "Regimento interno e estrutura organizacional",
      "Missão e valores do espaço cultural",
    ],
  },
  {
    title: "Oficinas",
    link: "/",
    count: 18,
    description: "Oficinas realizadas desde 2022",
    items: [
      "Dança (contemporânea, africana, de salão)",
      "Teatro do Oprimido e palhaçaria",
      "Oratória e desenvolvimento pessoal",
      "Música e movimento",
      "Artes visuais e audiovisual",
    ],
  },
  {
    title: "Articulação em Redes",
    link: "/",
    count: 42,
    description: "Parcerias e ações colaborativas",
    items: [
      "Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)",
      "Circuito Cultural Banco do Nordeste",
      "Prefeitura Municipal de Diamantina",
      "OAB - Ordem dos Advogados do Brasil",
      "Instituto Federal IFNMG",
      "Museu do Diamante e espaços culturais locais",
    ],
  },
  {
    title: "Residências Artísticas",
    link: "/",
    items: [
      "Hospedagem e suporte para artistas convidados",
      "Espaço para criação e pesquisa",
      "Intercâmbio cultural nacional e internacional",
      "NzangoArtistResidency (Moçambique, 2025)",
    ],
  },
  {
    title: "Eventos CBARTES",
    link: "/",
    items: [
      "Saraus: 8 edições com música, poesia e artes plásticas",
      "CBARTES de Portas Abertas (inauguração, 2022)",
      "Festival Alecrim (2023)",
      "Entrelaços: 6 encontros de mulheres",
      "Diálogos sobre Dança",
      "Bailes dançantes e shows musicais",
    ],
  },
  {
    title: "Galeria de Exposições",
    link: "/espaco/galeria",
    count: 14,
    description: "Exposições de artes plásticas e fotografia",
    items: [
      '"Filhos do Rio" - Ditto Leite',
      '"Boas Vindas" - Marcelo Brant',
      '"O Que Nos Constitui" - Cristiane Queiroz (fotografia)',
      '"A Pintura e a Palavra" - Kuta Ndumbu (África)',
      '"Fragmentos que Respiram" - Chrystel Baue (França)',
    ],
  },
  {
    title: "Produção Audiovisual",
    link: "/",
    items: [
      "Captação e edição de espetáculos",
      "Documentário BRINCANTES (2025)",
      "Vídeo-dança com Cib Maia",
      "Registro de eventos e processos criativos",
      "Parceria com Postura Digital",
    ],
  },
  {
    title: "Cine CBARTES",
    link: "/",
    items: [
      "Exibições de filmes e documentários",
      'Sessão "Espaço Sagrado" (2024)',
      "Mostra Telas Amigáveis - Documentário BRINCANTES",
      "Programação voltada para a comunidade",
    ],
  },
  {
    title: "Ocupações de Espaços Públicos",
    link: "/",
    items: [
      "Aulas-show em praças públicas",
      "Quadrilha do CBARTES - Praça do Mercado Velho",
      "Performance contra a PL da Devastação",
      "Flash mob na Festa da Luz",
      "Oficina Corpo.Movídeo em espaços urbanos",
    ],
  },
  {
    title: "Clipping & Mídia",
    link: "/",
    items: [
      "Jornal Voz de Diamantina",
      "Rádio Rosa do Vale",
      "Programa Café com Cidadania - Rádio Mundo Mix",
      "Programa de TV Agenda",
      "Cobertura de eventos e processos artísticos",
    ],
  },
];

function EspacoCultural() {
  const container = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "60vh"]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <NavbarInside color="#3E6AF3" />

      <main className="font-futura bg-zinc-50">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-[60vh] overflow-hidden"
        >
          <div className="absolute top-[-12vh] left-0 h-[124vh] w-full">
            <motion.div style={{ y }} className="relative w-full h-full">
              <Image
                src={image}
                fill
                alt="Espaço Cultural CBARTES"
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/20 to-black/60" />
            </motion.div>
          </div>

          <div className="relative z-10 p-8 md:p-20 text-white w-full h-full flex mt-24">
            <div className="self-end w-[60vw]">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-[3vw] uppercase font-bold tracking-tight"
              >
                ESPAÇO CULTURAL &
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-[3vw] uppercase font-bold tracking-tight"
              >
                PONTO DE CULTUA
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full text-lg md:text-[2vw] uppercase tracking-wide text-end"
            >
              Selos aqui
            </motion.p>
          </div>
        </div>

        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto px-8 py-20"
        >
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900 leading-tight">
                Um território vivo, comunitário e acessível
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus. Donec fermentum ullamcorper sem vitae fermentum. Nullam ac mauris finibus, hendrerit dolor vitae, dictum felis. Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>
            </div>
            <div className="bg-clr4 p-8 rounded-sm flex flex-col justify-center">
              <div className="text-6xl font-bold text-zinc-50 mb-2">42</div>
              <p className="text-sm uppercase tracking-wider text-zinc-200">
                Articulações em rede
              </p>
              <div className="text-6xl font-bold text-zinc-50 mb-2 mt-6">
                18
              </div>
              <p className="text-sm uppercase tracking-wider text-zinc-200">
                Oficinas gratuitas
              </p>
              <div className="text-6xl font-bold text-zinc-50 mb-2 mt-6">
                14
              </div>
              <p className="text-sm uppercase tracking-wider text-zinc-200">
                Exposições de arte
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections Grid */}
        <div ref={contentRef} className="bg-white py-16">
          <div className="max-w-9xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-20 text-center text-zinc-900"
            >
              Nossas Ações
            </motion.h2>

            <div className="grid grid-cols-3 2xl:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-zinc-50 rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500 flex flex-col"
                >
                  {/* linha superior */}
                  <div className="h-2 w-full transition-all duration-300 group-hover:h-3 bg-clr4" />

                  {/* conteúdo */}
                  <div className="p-8 flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight">
                        {section.title}
                      </h3>

                      {section.count && (
                        <div className="text-5xl font-bold opacity-20 text-clr4">
                          {section.count}
                        </div>
                      )}
                    </div>

                    {section.description && (
                      <p className="text-sm uppercase tracking-wider text-zinc-600 mb-6">
                        {section.description}
                      </p>
                    )}

                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="flex items-start text-zinc-700 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0 bg-clr4" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* footer */}
                  <Link href={section.link} className="px-8 pb-6">
                    <Button className="bg-clr4 cursor-pointer">Saiba Mais</Button>
                  </Link>

                  {/* linha inferior colada no fundo */}
                  <div className="h-1 w-full bg-clr4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 text-white py-20"
        >
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wide">
              Impacto Cultural
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-5xl font-bold text-clr2 mb-2">16</div>
                <p className="text-sm uppercase tracking-wider text-zinc-400">
                  Espetáculos
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-clr3 mb-2">40</div>
                <p className="text-sm uppercase tracking-wider text-zinc-400">
                  Apresentações
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-clr4 mb-2">+500</div>
                <p className="text-sm uppercase tracking-wider text-zinc-400">
                  Artistas Envolvidos
                </p>
              </div>
              <div>
                <div className="text-5xl font-bold text-clr1 mb-2">3</div>
                <p className="text-sm uppercase tracking-wider text-zinc-400">
                  Anos de História
                </p>
              </div>
            </div>
            <p className="mt-12 text-zinc-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus. 
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default EspacoCultural;
