"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

export interface ImagemGaleria {
  src: string;
  alt: string;
}

interface GallerySection {
  titulo: string;
  imagens: ImagemGaleria[];
}

interface LightboxState {
  imagens: ImagemGaleria[];
  initialSlide: number;
}

interface Props {
  sections: GallerySection[];
}

export default function GalleryWithLightbox({ sections }: Props) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const openLightbox = (imagens: ImagemGaleria[], index: number) => {
    setLightbox({ imagens, initialSlide: index });
  };

  return (
    <>
      {lightbox && (
        <Lightbox
          imagens={lightbox.imagens}
          initialSlide={lightbox.initialSlide}
          onClose={() => setLightbox(null)}
        />
      )}

      {sections.map(
        (section) =>
          section.imagens.length > 0 && (
            <section key={section.titulo} className="py-16 bg-black">
              <div className="max-w-7xl mx-auto px-8">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-black mb-12"
                >
                                 
                  Galeria de <span className="">Fotos</span>
        
                <div className="w-24 h-1 " />
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.imagens.map((imagem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6, delay: index * 0.04 }}
                      className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm bg-zinc-800"
                      onClick={() =>
                        openLightbox(section.imagens, index)
                      }
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
          )
      )}
    </>
  );
}

function Lightbox({
  imagens,
  initialSlide,
  onClose,
}: {
  imagens: ImagemGaleria[];
  initialSlide: number;
  onClose: () => void;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-9999 bg-black">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10000 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
      >
        ✕
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
              thumbsSwiper && !thumbsSwiper.destroyed
                ? thumbsSwiper
                : null,
          }}
          className="h-full w-full"
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

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 hidden md:block">
        <Swiper
          modules={[FreeMode, Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={12}
          slidesPerView="auto"
          freeMode
          watchSlidesProgress
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
                  sizes="60px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}