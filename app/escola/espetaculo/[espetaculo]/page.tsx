"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import { espetaculos } from "@/data/espetaculos";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, Thumbs, FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import CustomCursor from "@/components/cursor";

function EspetaculoPage() {
  const params = useParams();
  const slug = params.espetaculo as string;
  const espetaculo = espetaculos[slug];

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!espetaculo) {
    return (
      <>
      
        <NavbarInside color="#649D3F" />
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-4xl font-bold mb-4">
              Espetáculo não encontrado
            </h1>
            <Link
              href="/escola"
              className="inline-block px-6 py-3 bg-clr3 text-white rounded-sm hover:bg-[#365e1c] transition-colors mt-4"
            >
              Voltar para Escola
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Gera array de imagens baseado na quantidade disponível
  const imagens = espetaculo.imagensCount > 0 
    ? Array.from({ length: espetaculo.imagensCount }, (_, i) => ({
        src: `/images/espetaculos/${espetaculo.slug}/${i + 1}.jpg`,
        alt: `${espetaculo.titulo} - Foto ${i + 1}`,
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

  const tipoColor = {
    "Dança": "#649D3F",
    "Teatro": "#F1443E",
    "Dança-Teatro": "#F5E764"
  }[espetaculo.tipo] || "#649D3F";

  return (
    <>
    <CustomCursor />
      <NavbarInside color="#649D3F" />

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
                <Link href="/escola" className="hover:text-clr3 transition-colors">
                  Escola
                </Link>
                <span>/</span>
                <span className="text-gray-300">Espetáculos</span>
                <span>/</span>
                <span className="text-clr3">{espetaculo.titulo}</span>
              </div>

              {/* Title & Info */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  {/* Badge Tipo */}
                  <div 
                    className="inline-block px-4 py-2 rounded-full mb-6 text-sm font-bold uppercase tracking-wider"
                    style={{ backgroundColor: tipoColor + '20', color: tipoColor }}
                  >
                    {espetaculo.tipo}
                  </div>

                  <h1 className="text-6xl md:text-7xl font-black mb-4 leading-none">
                    {espetaculo.titulo}
                  </h1>
                  
                  <div className="w-24 h-1 bg-clr3 mb-8" />

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                        Ano
                      </h3>
                      <p className="text-2xl font-bold text-clr3">{espetaculo.ano}</p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">
                        Direção
                      </h3>
                      <p className="text-xl font-semibold">{espetaculo.diretor}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                      Sinopse
                    </h3>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {espetaculo.sinopse}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Data
                      </h3>
                      <p className="text-base font-semibold">{espetaculo.data}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Local
                      </h3>
                      <p className="text-base font-semibold">{espetaculo.local}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Sessões
                      </h3>
                      <p className="text-base font-semibold">{espetaculo.sessoes}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Turma
                      </h3>
                      <p className="text-base font-semibold">{espetaculo.turma}</p>
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
                Galeria de <span className="text-clr3">Fotos</span>
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-bold text-zinc-900">
                        {index + 1}/{imagens.length}
                      </span>
                    </div>
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

        {/* Elenco & Ficha Técnica */}
        <section className="py-16 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black mb-4">Elenco</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {espetaculo.elenco}
                </p>
              </motion.div>

              {espetaculo.fichaTecnica && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-3xl font-black mb-4">Ficha Técnica</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {espetaculo.fichaTecnica}
                  </p>
                </motion.div>
              )}
            </div>
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
                Faça parte da <span className="text-clr3">nossa história</span>
              </h2>
              <p className="text-xl text-gray-400 mb-10">
                Venha conhecer a Escola CBARTES e participar dos próximos espetáculos
              </p>
              <Link href="/escola">
                <button className="px-12 py-4 bg-clr3 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300">
                  Voltar para Escola
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
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-6 left-6 z-10000 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full max-w-md">
            <p className="text-white font-semibold text-sm md:text-base truncate">
              {espetaculo.titulo}
            </p>
          </div>

          <div className="w-full h-full pt-24 pb-32 md:pb-40">
            <Swiper
              modules={[Navigation, Pagination, Keyboard, Thumbs]}
              initialSlide={initialSlide}
              spaceBetween={10}
              navigation
        
              keyboard={{ enabled: true }}
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
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
                <SwiperSlide key={index} style={{ width: '120px', height: '80px' }}>
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

      <style jsx global>{`
        .swiper-main .swiper-button-next,
        .swiper-main .swiper-button-prev {
          width: 50px !important;
          height: 50px !important;
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          color: white !important;
        }

        .swiper-main .swiper-button-next:hover,
        .swiper-main .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.1) !important;
        }

        .swiper-main .swiper-button-next::after,
        .swiper-main .swiper-button-prev::after {
          font-size: 20px !important;
          font-weight: bold !important;
        }

        .swiper-main .swiper-pagination {
          bottom: 140px !important;
        }

        .swiper-main .swiper-pagination-fraction {
          background: rgba(255, 255, 255, 0.1) !important;
          backdrop-filter: blur(10px) !important;
          padding: 8px 16px !important;
          border-radius: 20px !important;
          width: auto !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          font-size: 16px !important;
          font-weight: 600 !important;
          color: white !important;
        }

        .thumbs-swiper .swiper-slide-thumb-active > div {
          opacity: 1 !important;
          outline: 2px solid white !important;
          outline-offset: 2px !important;
        }

        @media (max-width: 768px) {
          .swiper-main .swiper-button-next,
          .swiper-main .swiper-button-prev {
            width: 40px !important;
            height: 40px !important;
          }

          .swiper-main .swiper-button-next::after,
          .swiper-main .swiper-button-prev::after {
            font-size: 16px !important;
          }

          .swiper-main .swiper-pagination {
            bottom: 20px !important;
          }
        }
      `}</style>
    </>
  );
}

export default EspetaculoPage;