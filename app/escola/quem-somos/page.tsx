"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";

function QuemSomos() {
  useEffect(() => {
    const lenis = new Lenis();
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
      <NavbarInside color="#649d3f" colorText="black" isBlack />

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero Simples */}
        <section className="pt-32 pb-20 bg-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-linear-to-br from-clr3/20 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link href="/escola" className="hover:text-clr3 transition-colors">
                  Escola
                </Link>
                <span>/</span>
                <span className="text-clr3">Quem Somos</span>
              </div>

              {/* Título */}
              <div className="mb-12">
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-6xl md:text-8xl font-black leading-none mb-6"
                >
                  Quem <span className="text-clr3">Somos</span>
                </motion.h1>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-32 h-1 bg-clr3 origin-left"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-gray-300 max-w-4xl font-light leading-relaxed"
              >
                Uma Escola cultural comprometida com a democratização do acesso às artes
                e o fortalecimento da cultura em Diamantina
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Bloco 1: Texto + Imagem à direita */}
        <section className="py-32 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Nossa <span className="text-clr3">História</span>
                </h2>
                <div className="w-24 h-1 bg-clr3 mb-8" />
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-4/3 overflow-hidden rounded-sm"
              >
                <Image
                  src="/images/9.jpg"
                  alt="Nossa História"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bloco 2: Imagem à esquerda + Texto */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-square overflow-hidden rounded-sm order-2 md:order-1"
              >
                <Image
                  src="/images/2.jpg"
                  alt="Nossa Missão"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-clr3/10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  Nossa <span className="text-clr3">Missão</span>
                </h2>
                <div className="w-24 h-1 bg-clr3 mb-8" />
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bloco 3: Destaque Full Width com overlay */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/8.jpg"
              alt="Nossos Valores"
              fill
              className="object-cover opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                Nossos <span className="text-clr3">Valores</span>
              </h2>
              <div className="w-24 h-1 bg-clr3 mb-8" />
              
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { titulo: "Democratização", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor." },
                  { titulo: "Inclusão", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi." },
                  { titulo: "Transformação", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum." },
                  { titulo: "Excelência", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia." },
                ].map((valor, i) => (
                  <motion.div
                    key={valor.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="border-l-4 border-clr3 pl-6 py-2 hover:border-[#d4b93c] transition-colors">
                      <h3 className="text-2xl font-bold mb-2 text-clr3">{valor.titulo}</h3>
                      <p className="text-gray-400">{valor.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bloco 4: Grid 3 colunas com ícones conceituais */}
        <section className="py-32 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Como <span className="text-clr3">Atuamos</span>
              </h2>
              <div className="w-32 h-1 bg-clr3 mx-auto mb-8" />
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  numero: "01",
                  titulo: "Formação",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lacinia leo eu condimentum.",
                },
                {
                  numero: "02",
                  titulo: "Produção",
                  desc: "Phasellus sit amet ipsum tellus. Donec non vestibulum turpis. Nam vel quam volutpat.",
                },
                {
                  numero: "03",
                  titulo: "Mobilização",
                  desc: "Integer efficitur convallis dolor, nec condimentum nulla viverra in. Vivamus et turpis.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.numero}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-black border border-zinc-800 hover:border-clr3 rounded-sm p-8 transition-all duration-500"
                >
                  <div className="text-7xl font-black text-clr3/20 mb-6 group-hover:text-clr3/30 transition-colors">
                    {item.numero}
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase">{item.titulo}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr3 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 5: Timeline vertical */}
        <section className="py-32 bg-black">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Nossa <span className="text-clr3">Trajetória</span>
              </h2>
              <div className="w-32 h-1 bg-clr3 mx-auto" />
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-clr3/30" />

              <div className="space-y-12">
                {[
                  { ano: "2022", titulo: "Fundação", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." },
                  { ano: "2023", titulo: "Primeiros Projetos", desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip." },
                  { ano: "2024", titulo: "Expansão", desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat." },
                  { ano: "2025", titulo: "Consolidação", desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt." },
                ].map((marco, i) => (
                  <motion.div
                    key={marco.ano}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-clr3 flex items-center justify-center border-4 border-black">
                      <span className="text-black font-black text-sm">{marco.ano}</span>
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
                      <h3 className="text-2xl font-black mb-2 text-clr3">{marco.titulo}</h3>
                      <p className="text-gray-400">{marco.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 6: Imagem grande com texto sobreposto */}
        <section className="py-32 bg-zinc-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/5.jpg"
              alt="Nosso Compromisso"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                Nosso <span className="text-clr3">Compromisso</span>
              </h2>
              <div className="w-32 h-1 bg-clr3 mx-auto mb-12" />
              <p className="text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-black border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Faça parte dessa <span className="text-clr3">história</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Entre em contato e conheça mais sobre nossos projetos
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/escola">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-clr3 text-black text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#d4b93c] transition-colors duration-300"
                  >
                    Voltar para Escola
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent border-2 border-clr3 text-clr3 text-base font-bold uppercase tracking-widest rounded-full hover:bg-clr3 hover:text-black transition-all duration-300"
                >
                  Fale Conosco
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer color="#649d3f" />
      </main>
    </>
  );
}

export default QuemSomos;