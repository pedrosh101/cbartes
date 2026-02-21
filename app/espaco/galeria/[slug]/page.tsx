"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { exposicoes } from "@/data/exposicoes-data";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

function GaleriaExposicao() {
  const params = useParams();
  const slug = params.slug as string;
  const exposicao = exposicoes[slug as keyof typeof exposicoes];

  const [isOpen, setIsOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!exposicao) {
    return (
      <>
        <NavbarInside color="#3e6af3" />
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-4xl font-bold mb-4">Exposição não encontrada</h1>
            <Link
              href="/espaco/galeria"
              className="inline-block px-6 py-3 bg-clr4 text-white rounded-sm hover:bg-[#2a5299] transition-colors mt-4"
            >
              Voltar para Galeria
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Gera array de imagens - path simplificado: /images/galeria/slug/1.webp
  const imagens = Array.from({ length: exposicao.quantidade }, (_, i) => ({
    src: `/images/galeria/${slug}/${i + 1}.webp`,
    alt: `${exposicao.titulo} - Obra ${i + 1}`,
    index: i,
  }));

  const openLightbox = (index: number) => {
    setInitialSlide(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <>
      <CustomCursor />
      <NavbarInside color="#3e6af3" />

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
                  href="/espaco"
                  className="hover:text-clr4 transition-colors flex gap-3"
                >
                  <MdOutlineKeyboardReturn size={20} />
                  Espaço Cultural
                </Link>
                <span>/</span>
                <Link
                  href="/espaco/galeria"
                  className="hover:text-clr4 transition-colors"
                >
                  Galeria
                </Link>
                <span>/</span>
                <span className="text-clr4">{exposicao.artista}</span>
              </div>

              {/* Title & Info */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  {/* Badge Ano */}
                  <div className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider bg-clr4/20 text-clr4">
                    {exposicao.ano}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">
                    {exposicao.titulo}
                  </h1>

                  <div className="w-24 h-1 bg-clr4 mb-8" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                        Artista
                      </h3>
                      <p className="text-2xl font-bold text-clr4">
                        {exposicao.artista}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Sobre a exposição
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {exposicao.descricao}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Data
                      </h3>
                      <p className="text-base font-semibold">
                        {exposicao.data}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Local
                      </h3>
                      <p className="text-base font-semibold">
                        {exposicao.local}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Técnica
                      </h3>
                      <p className="text-base font-semibold">
                        {exposicao.tecnica}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Obras
                      </h3>
                      <p className="text-base font-semibold">
                        {exposicao.quantidade}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Galeria */}
        {imagens.length > 0 ? (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black mb-12"
              >
                Obras <span className="text-clr4">Expostas</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {imagens.map((imagem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm bg-zinc-800"
                    onClick={() => openLightbox(index)}
                  >
                    <Image
                      src={imagem.src}
                      alt={imagem.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-12">
                <p className="text-gray-500 text-lg">Galeria em breve</p>
              </div>
            </div>
          </section>
        )}

        {/* Sobre o Artista */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black mb-4">Sobre o Artista</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                {exposicao.sobre}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-black border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Visite a <span className="text-clr4">Galeria CBARTES</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Conheça as próximas exposições e participe da nossa programação
              </p>
              <Link href="/espaco/galeria">
                <button className="px-12 py-4 bg-clr4 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#2a5299] transition-colors duration-300">
                  Ver Galeria
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox com Swiper */}
      {isOpen && imagens.length > 0 && (
        <div className="fixed inset-0 z-9999 bg-black">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10000 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="w-full h-full pt-4 pb-24">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Thumbs]}
              initialSlide={initialSlide}
              spaceBetween={10}
              navigation
              keyboard={{ enabled: true }}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              className="h-full w-full swiper-main"
            >
              {imagens.map((imagem, index) => (
                <SwiperSlide key={index}>
                  <div className="flex items-center justify-center w-full h-full px-4 md:px-20">
                    <div className="relative w-full h-full max-w-6xl">
                      <Image
                        src={imagem.src}
                        alt={imagem.alt}
                        fill
                        className="object-contain"
                        priority={index === initialSlide}
                        sizes="100vw"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10000 w-full max-w-5xl px-6 hidden md:block">
            <Swiper
              modules={[FreeMode, Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={12}
              slidesPerView="auto"
              freeMode={true}
              watchSlidesProgress={true}
              className="thumbs-swiper"
            >
              {imagens.map((imagem, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "60px", height: "60px" }}
                >
                  <div className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden opacity-60 hover:opacity-100 transition-opacity">
                    <Image
                      src={imagem.src}
                      alt={imagem.alt}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

 

      <Footer color="#3e6af3" />
    </>
  );
}

export default GaleriaExposicao;