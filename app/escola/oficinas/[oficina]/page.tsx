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
import { oficinasRecord } from "@/data/escola/oficinasHistorico";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";



function OficinaPage() {
  const params = useParams();
  const slug = params.oficina as string;
  const oficina = oficinasRecord[slug];



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

  if (!oficina) {
    return (
      <>
        <NavbarInside color="#649d3f" />
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-4xl font-bold mb-4">Oficina não encontrada</h1>
            <Link
              href="/escola/oficinas/historico"
              className="inline-block px-6 py-3 bg-clr3 text-white rounded-sm hover:bg-[#365e1c] transition-colors mt-4"
            >
              Voltar para Oficinas
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Gera array de imagens - path: /images/oficinas/slug/1.webp
  const imagens = oficina.imagensCount > 0
    ? Array.from({ length: oficina.imagensCount }, (_, i) => ({
        src: `/images/oficinas/${slug}/${i + 1}.webp`,
        alt: `${oficina.nome} - Foto ${i + 1}`,
        index: i,
      }))
    : [];

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
                  Escola
                </Link>
                <span>/</span>
                <Link
                  href="/escola/oficinas/historico"
                  className="hover:text-clr3 transition-colors"
                >
                  Oficinas
                </Link>
                <span>/</span>
                <span className="text-clr3">{oficina.nome}</span>
              </div>

              {/* Title & Info */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  {/* Badge Ano */}
                  <div className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider bg-clr3/20 text-clr3">
                    {oficina.ano}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">
                    {oficina.nome}
                  </h1>

                  <div className="w-24 h-1 bg-clr3 mb-8" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                        Ministrante
                      </h3>
                      <p className="text-2xl font-bold text-clr3">
                        {oficina.ministrante}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Sobre a oficina
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {oficina.sinopse}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {oficina.cargaHoraria && (
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                          Carga Horária
                        </h3>
                        <p className="text-base font-semibold">
                          {oficina.cargaHoraria}
                        </p>
                      </div>
                    )}
                    {oficina.vagas && (
                      <div>
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                          Vagas
                        </h3>
                        <p className="text-base font-semibold">
                          {oficina.vagas}
                        </p>
                      </div>
                    )}
                    {oficina.local && (
                      <div className="col-span-2">
                        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                          Local
                        </h3>
                        <p className="text-base font-semibold">
                          {oficina.local}
                        </p>
                      </div>
                    )}
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
                Galeria de <span className="text-clr3">Fotos</span>
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
                <p className="text-gray-500 text-lg">
                  Galeria de fotos em breve
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20 bg-zinc-900 border-t border-zinc-800">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Quer participar de uma <span className="text-clr3">oficina</span>?
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Acompanhe nossa programação e fique por dentro das próximas
                oficinas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/escola/oficinas/proximas">
                  <button className="px-10 py-4 bg-clr3 text-white text-base font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300">
                    Ver próximas oficinas
                  </button>
                </Link>
                <Link href="/escola/oficinas/historico">
                  <button className="px-10 py-4 bg-transparent border-2 border-clr3 text-clr3 text-base font-bold uppercase tracking-widest rounded-full hover:bg-clr3 hover:text-white transition-all duration-300">
                    Ver histórico
                  </button>
                </Link>
              </div>
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

      <Footer color="#649d3f" />
    </>
  );
}

export default OficinaPage;