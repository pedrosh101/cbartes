"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/8.jpg";

const projetos = [
  {
    title: "PIÁrte",
    subtitle: "Programa Integral de Artes",

    description: "Bolsas integrais para formação em dança e teatro",
    items: [
      "Bolsas 100% gratuitas para alunos em vulnerabilidade social",
      "Acompanhamento pedagógico especializado",
      "Figurinos e materiais fornecidos pela Associação",
      "Participação em espetáculos profissionais",
      "Edital público de seleção anual"
    ],
  
  },
  {
    title: "EmpreendArteLab",
    subtitle: "Formação e Capacitação",

    description: "Desenvolvimento profissional gratuito",
    items: [
      "Curso de Oratória (vagas gratuitas)",
      "Formação em Iluminação Cênica",
      "Operador de Sonoplastia (jovens aprendizes)",
      "Estágio de professor de dança e teatro",
      "Capacitação técnica para o mercado cultural"
    ],

  },
  {
    title: "Periferia para Periferia",
    subtitle: "Arte e Transformação Social",

    description: "Levando arte para comunidades",
    items: [
      "Oficinas em comunidades rurais e periféricas",
      "Apresentações gratuitas em escolas públicas",
      "Parceria com projetos sociais (CRAS, FUMBEM)",
      "Ações em distritos e bairros afastados",
      "Democratização do acesso à cultura"
    ],

  },
  {
    title: "Produção Cultural",
    subtitle: "Viabilização de Projetos",

    description: "Sustentabilidade das ações artísticas",
    items: [
      "Produção de espetáculos de dança (2024 e 2025)",
      "Sessões gratuitas em parceria com instituições",
      "Captação via Lei Rouanet e PNAB",
      "Organização de oficinas e mini-cursos",
      "Gestão de projetos culturais"
    ],

  },
  {
    title: "Arte é Política",
    subtitle: "Participação",

    description: "Fortalecimento das políticas culturais",
    items: [
      "Participação no Fórum Mineiro de Dança",
      "Articulação em Câmara dos Vereadores (LDO)",
      "Reivindicação da PNAB Municipal",
      "Pré-Fóruns e encontros setoriais",
      "Representação da sociedade civil"
    ],
 
  }
];

const acoes = [
  {
    ano: "2024",
    total: 8,
    destaques: [
      "Produção dos espetáculos Subvercirco e Pulso Invisível",
      "Figurinos para 40+ bolsistas",
      "12 sessões gratuitas para comunidade",
      "Edital de bolsas para dança e teatro"
    ]
  },
  {
    ano: "2025",
    total: 12,
    destaques: [
      "Apresentações gratuitas em parceria com Banco do Nordeste",
      "Oficina Música e Movimento (UFVJM)",
      "Curso de Oratória (10 encontros gratuitos)",
      "Projeto Reescrevendo Histórias (PROCART/UFVJM)",
      "Produção dos espetáculos de final de ano"
    ]
  }
];

const transparencia = [
  { item: "Prestação de contas pública", status: "Anual" },
  { item: "Editais de seleção transparentes", status: "Publicados" },
  { item: "Relatórios de atividades", status: "Disponíveis" },
  { item: "Documentação fiscal regularizada", status: "Em dia" }
];

function Associacao() {
  const container = useRef<HTMLDivElement>(null);

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
      <NavbarInside color="#F5E764" colorText="black" isBlack />

      <main className="font-futura bg-zinc-50">
        {/* Hero Section */}
        <div
          ref={container}
          className="relative flex items-center justify-center h-[80vh] overflow-hidden"
        >
          <div className="absolute top-[-12vh] left-0 h-[124vh] w-full">
            <motion.div style={{ y }} className="relative w-full h-full">
              <Image
                src={image}
                fill
                alt="Associação Cultural Amigos do CBARTES"
                priority
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/70" />
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
                ASSOCIAÇÃO CULTURAL
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-[3vw] uppercase font-bold tracking-tight"
              >
                AMIGOS DO CBARTES
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
                Transformando vidas através da arte
              </h2>
              <p className="text-xl text-zinc-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus. Donec fermentum ullamcorper sem vitae fermentum. Nullam ac mauris finibus, hendrerit dolor vitae, dictum felis. Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>
              <p className="text-lg text-zinc-600 leading-relaxed">
                Donec fermentum ullamcorper sem vitae fermentum. Nullam ac mauris finibus, hendrerit dolor vitae, dictum felis. Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>
            </div>
            <div className="bg-clr2 p-8 rounded-sm flex flex-col justify-center">
              <div className="text-6xl font-bold text-zinc-900 mb-2">5</div>
              <p className="text-sm uppercase tracking-wider text-zinc-800 mb-6">
                Projetos Estruturantes
              </p>
              <div className="text-6xl font-bold text-zinc-900 mb-2">100%</div>
              <p className="text-sm uppercase tracking-wider text-zinc-800 mb-6">
                Gratuito
              </p>
              <div className="text-6xl font-bold text-zinc-900 mb-2">50+</div>
              <p className="text-sm uppercase tracking-wider text-zinc-800">
                Bolsistas atendidos
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projetos Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold mb-20 text-center text-zinc-900"
            >
              Nossos Projetos
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projetos.map((projeto, index) => (
                <motion.div
                  key={projeto.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group bg-zinc-50 rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-500"
                >
                  <div 
                    className="h-2 w-full transition-all duration-300 group-hover:h-3 bg-clr2" 
            
                  />
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-4 mb-2">
            
                          <h3 className="text-3xl font-bold text-zinc-900 uppercase tracking-tight">
                            {projeto.title}
                          </h3>
                        </div>
                        <p className="text-sm uppercase tracking-wider text-zinc-600 mb-3">
                          {projeto.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-lg font-semibold text-zinc-800 mb-6 leading-snug">
                      {projeto.description}
                    </p>

                    <ul className="space-y-3">
                      {projeto.items.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: i * 0.05 }}
                          className="flex items-start text-zinc-700 leading-relaxed"
                        >
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0 bg-clr2"
                     
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div 
                    className="h-1 w-0 group-hover:w-full transition-all duration-500 mx-auto bg-clr2" 
           
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Ações Realizadas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-100 py-20"
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center text-zinc-900">
              Ações Realizadas
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {acoes.map((acao, index) => (
                <motion.div
                  key={acao.ano}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-sm border-l-4 border-clr2"
                >
                  <div className="flex gap-4 mb-6 w-full justify-between">
                    <h3 className="text-6xl font-black text-zinc-900">{acao.ano}</h3>
                    <div className="">
                      <div className="text-4xl font-bold text-clr2">{acao.total}</div>
                      <p className="text-sm uppercase tracking-wider text-zinc-600">
                        Ações realizadas
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {acao.destaques.map((destaque, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-clr2 mt-1.5 shrink-0" />
                        <p className="text-zinc-700 leading-relaxed">{destaque}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Histórico e Fundação */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white py-20"
        >
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-zinc-900">
              Nossa História
            </h2>
            
            <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus. Donec fermentum ullamcorper sem vitae fermentum. Nullam ac mauris finibus, hendrerit dolor vitae, dictum felis. Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus. Donec fermentum ullamcorper sem vitae fermentum. Nullam ac mauris finibus, hendrerit dolor vitae, dictum felis. Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>

              <p className="font-semibold text-zinc-900">
                Mauris nulla ligula, lacinia eget iaculis a, consectetur sit amet augue.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Transparência */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-zinc-900 text-white py-20"
        >
          <div className="max-w-6xl mx-auto px-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center">
              Compromisso com a <span className="text-clr2">Transparência</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {transparencia.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-800 p-6 rounded-sm border  border-zinc-700 hover:border-clr2 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">{item.item}</p>
                    <span className="px-4 py-1 bg-clr2 text-zinc-900 text-sm font-bold rounded-full w-25 text-center">
                      {item.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                Todos os nossos projetos são executados com prestação de contas pública, 
                editais transparentes e documentação regularizada.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-clr2 to-[#E6C744] py-20"
        >
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-zinc-900">
              Faça parte dessa transformação
            </h2>
            
            <p className="text-xl md:text-2xl text-zinc-800 mb-10 leading-relaxed">
              Apoie nossos projetos, seja voluntário ou participe dos editais públicos.
              <br />
              Juntos, fortalecemos a cultura e transformamos vidas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-10 py-4 bg-zinc-900 text-white text-lg font-bold uppercase tracking-wider rounded-sm hover:bg-zinc-800 transition-colors duration-300 shadow-xl">
                Apoiar Projeto
              </button>
              <button className="px-10 py-4 bg-white text-zinc-900 text-lg font-bold uppercase tracking-wider rounded-sm hover:bg-zinc-100 transition-colors duration-300 shadow-xl">
                Ver Editais
              </button>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Associacao;