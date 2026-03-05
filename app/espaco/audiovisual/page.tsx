"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";

function AudiovisualPage() {
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
      <NavbarInside color="#3e6af3" />

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
        {/* Hero */}
        <section className="pt-32 pb-20 relative bg-[url('/images/4.jpg')] bg-cover bg-center bg-no-repeat">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                <Link
                  href="/espaco"
                  className="hover:text-clr4 transition-colors"
                >
                  Espaço
                </Link>
                <span>/</span>
                <span className="text-clr4">Audiovisual</span>
              </div>

              {/* Título */}
              <h1 className="text-6xl md:text-7xl font-black mb-6 leading-none">
                <span className="text-clr4">Audiovisual</span>
              </h1>

              <div className="w-32 h-1 bg-clr4 mb-8" />

              <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Bloco 1: O que é */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  O que é <span className="text-clr4">Audiovisual</span>
                  ?
                </h2>
                <div className="w-24 h-1 bg-clr4 mb-8" />
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
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
                  src="/images/6.jpg"
                  alt="Audiovisual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-clr4/20" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bloco 2: Nossos Objetivos */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8 text-center">
                Nossos <span className="text-clr4">Objetivos</span>
              </h2>
              <div className="w-24 h-1 bg-clr4 mx-auto mb-12" />

              <div className="space-y-8">
                {[
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                ].map((texto, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-l-4 border-clr4 pl-6 py-2"
                  >
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {texto}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bloco 3: Como Participar */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 text-center"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Como <span className="text-clr4">Participar</span>
              </h2>
              <div className="w-32 h-1 bg-clr4 mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  numero: "01",
                  titulo: "Primeiro Passo",
                  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta lacinia leo eu condimentum. Phasellus sit amet ipsum tellus.",
                },
                {
                  numero: "02",
                  titulo: "Segundo Passo",
                  desc: "Donec non vestibulum turpis. Nam vel quam volutpat, volutpat quam in, placerat erat. Integer efficitur convallis dolor.",
                },
                {
                  numero: "03",
                  titulo: "Terceiro Passo",
                  desc: "Nec condimentum nulla viverra in. Vivamus et turpis lobortis, rutrum velit iaculis, tempus diam. Suspendisse fringilla quam.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.numero}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group relative bg-zinc-900 border border-zinc-800 hover:border-clr4 rounded-sm p-8 transition-all duration-500"
                >
                  <div className="text-7xl font-black text-clr4/20 mb-6 group-hover:text-clr4/30 transition-colors">
                    {item.numero}
                  </div>
                  <h3 className="text-3xl font-black mb-4 uppercase">
                    {item.titulo}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr4 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloco 4: Parcerias */}
        <section className="py-20 bg-zinc-900">
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
                  src="/images/8.jpg"
                  alt="Parcerias"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-1 md:order-2"
              >
                <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
                  <span className="text-clr4">Parcerias</span> e Colaborações
                </h2>
                <div className="w-24 h-1 bg-clr4 mb-8" />
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bloco 5: Impactos e Resultados */}
        <section className="py-20 bg-black">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-8">
                Impactos e <span className="text-clr4">Resultados</span>
              </h2>
              <div className="w-32 h-1 bg-clr4 mx-auto mb-12" />

              <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-left">
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident.
                </p>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expedita distinctio.
                </p>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bloco 6: Destaques / Timeline */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                Principais <span className="text-clr4">Ações</span>
              </h2>
              <div className="w-32 h-1 bg-clr4 mx-auto" />
            </motion.div>

            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-clr4/30" />

              <div className="space-y-12">
                {[
                  {
                    ano: "2022",
                    titulo: "Ação de Destaque 1",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
                  },
                  {
                    ano: "2023",
                    titulo: "Ação de Destaque 2",
                    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                  },
                  {
                    ano: "2024",
                    titulo: "Ação de Destaque 3",
                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
                  },
                  {
                    ano: "2025",
                    titulo: "Ação de Destaque 4",
                    desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.ano}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-clr4 flex items-center justify-center border-4 border-zinc-900">
                      <span className="text-black font-black text-sm">
                        {item.ano}
                      </span>
                    </div>
                    <div className="bg-black border border-zinc-800 rounded-sm p-6">
                      <h3 className="text-2xl font-black mb-2 text-clr4">
                        {item.titulo}
                      </h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-black border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Faça parte da nossa <span className="text-clr4">Ocupacoes</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Entre em contato e colabore com o fortalecimento da cultura
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-clr4 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300"
                >
                  Entre em contato
                </motion.button>
                <Link href="/espaco">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-transparent border-2 border-clr4 text-clr4 text-base font-bold uppercase tracking-widest rounded-full hover:bg-clr4 hover:text-white transition-all duration-300"
                  >
                    Voltar para Espaço
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer color="#3e6af3" />
      </main>
    </>
  );
}

export default AudiovisualPage;
