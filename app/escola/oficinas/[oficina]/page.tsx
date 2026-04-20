"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import GalleryWithLightbox from "@/components/galleryWithLightbox";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import type { ImagemGaleria } from "@/components/galleryWithLightbox";
import { oficinas } from "@/data/escola/oficinas";

function OficinaPage() {
  const params = useParams();
  const slug = params.oficina as string;
  const oficina = oficinas[slug];

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  

  if (!oficina) {
    return (
      <>
        <NavbarInside color="#649d3f" />
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-4xl font-bold mb-4">Página não encontrado</h1>
            <Link
              href="/espaco"
              className="inline-block px-6 py-3 bg-clr3 text-white rounded-sm hover:bg-[#2a5299] transition-colors mt-4"
            >
              Voltar para Oficinas
            </Link>
          </div>
        </div>
      </>
    );
  }

  const imagens: ImagemGaleria[] = oficina.imagensCount > 0
    ? Array.from({ length: oficina.imagensCount }, (_, i) => ({
        src: `/images/oficinas/${slug}/${i + 1}.webp`,
        alt: `${oficina.titulo} - Foto ${i + 1}`,
      }))
    : [];

  // Prepara seções para o componente de galeria
  const galerySections = [
    {
      titulo: "Galeria de Fotos",
      imagens,
    },
  ];

  return (
    <>
      <CustomCursor />
      <NavbarInside color="#649d3f" />

      <main className="font-futura bg-black text-white min-h-screen">
        {/* Header */}
        <section className="pt-32 pb-16 bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <Link
                  href="/escola"
                  className="hover:text-clr3 transition-colors flex gap-3"
                >
                  <MdOutlineKeyboardReturn size={20} />
                  Espaço Cultural
                </Link>
                <span>/</span>
                <Link
                  href="/escola/oficinas"
                  className="hover:text-clr3 transition-colors"
                >
                  Oficinas
                </Link>
                <span>/</span>
                <span className="text-clr3">{oficina.titulo}</span>
              </div>

              {/* Title & Info */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  {/* Badge Tipo */}
                  <div className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider bg-clr3/20 text-clr3">
                    {oficina.tipo}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">
                    {oficina.titulo}
                  </h1>

                  <div className="w-24 h-1 bg-clr3 mb-8" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                        Ano
                      </h3>
                      <p className="text-2xl font-bold text-clr3">
                        {oficina.ano}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Sobre evento
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {oficina.descricao}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Data
                      </h3>
                      <p className="text-base font-semibold">
                        {oficina.data}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Local
                      </h3>
                      <p className="text-base font-semibold">
                        {oficina.local}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Participantes */}
        {oficina.participantes && (
          <section className="py-16 bg-black border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black mb-4">Participantes</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {oficina.participantes}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Programação */}
        {oficina.programacao && oficina.programacao.length > 0 && (
          <section className="py-16 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black mb-6">Programação</h2>
                <div className="space-y-3">
                  {oficina.programacao.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3 border-l-2 border-clr3 pl-4 py-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-clr3 mt-2 shrink-0" />
                      <p className="text-gray-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Galeria usando o componente */}
        {imagens.length > 0 ? (
          <GalleryWithLightbox sections={galerySections} />
        ) : (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-12">
                <p className="text-gray-500 text-lg">
                  Galeria de fotos em breve
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Acompanhe nossas <span className="text-clr3">oficinas</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Fique por dentro da programação cultural do CBARTES
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/espaco/oficinas">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-clr3 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300"
                  >
                    Ver mais oficinas
                  </motion.button>
                </Link>
                <Link href="/espaco">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 bg-transparent border-2 border-clr3 text-clr3 text-base font-bold uppercase tracking-widest rounded-full hover:bg-clr3 hover:text-white transition-all duration-300"
                  >
                    Voltar
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

export default OficinaPage;