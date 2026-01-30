"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useParams } from "next/navigation";
import NavbarInside from "@/components/navbarInside";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { exposicoes } from "@/data/exposicoes-data";
import { DialogTitle } from "@radix-ui/react-dialog";

function GaleriaExposicao() {
  const params = useParams();
  const slug = params.slug as string;
  const exposicao = exposicoes[slug as keyof typeof exposicoes];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (!exposicao) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900 mb-4">
            Exposição não encontrada
          </h1>
          <a
            href="/espaco-cultural"
            className="text-lg text-zinc-600 hover:text-zinc-900 underline"
          >
            Voltar para Espaço Cultural
          </a>
        </div>
      </div>
    );
  }

  // Gera array de imagens
  const imagens = Array.from({ length: exposicao.quantidade }, (_, i) => ({
    src: `/images/galeria/${exposicao.pasta}/${exposicao.prefixo} (${i + 1}).JPG`,
    alt: `${exposicao.titulo} - Imagem ${i + 1}`,
    index: i,
  }));

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % imagens.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? imagens.length - 1 : selectedImage - 1
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedImage]);

  return (
    <>
      <NavbarInside color="#3E6AF3" />

      <main className="font-futura bg-zinc-50 min-h-screen">
        {/* Header */}
        <section className="pt-32 pb-16 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-zinc-600 mb-8">
                <a href="/espaco-cultural" className="hover:text-zinc-900">
                  Espaço Cultural
                </a>
                <span>/</span>
                <a
                  href="/espaco-cultural/galeria"
                  className="hover:text-zinc-900"
                >
                  Galeria
                </a>
                <span>/</span>
                <span className="text-zinc-900">{exposicao.artista}</span>
              </div>

              {/* Title */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h1 className="text-6xl md:text-7xl font-black text-zinc-900 mb-4 leading-none">
                    {exposicao.titulo}
                  </h1>
                  <div
                    className="w-24 h-1 mb-8"
         
                  />
                  <p className="text-3xl font-bold text-zinc-800 mb-2">
                    {exposicao.artista}
                  </p>
                  <p className="text-xl text-zinc-600">{exposicao.ano}</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
                      Sobre a exposição
                    </h3>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                      {exposicao.descricao}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
                        Data
                      </h3>
                      <p className="text-lg font-semibold text-zinc-900">
                        {exposicao.data}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
                        Local
                      </h3>
                      <p className="text-lg font-semibold text-zinc-900">
                        {exposicao.local}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
                        Técnica
                      </h3>
                      <p className="text-lg font-semibold text-zinc-900">
                        {exposicao.tecnica}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-2">
                        Obras
                      </h3>
                      <p className="text-lg font-semibold text-zinc-900">
                        {exposicao.quantidade}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {imagens.map((imagem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm bg-zinc-200"
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
                  
                  {/* Número da obra */}
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

        {/* Sobre o Artista */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">
                Sobre o Artista
              </h2>
              <p className="text-lg text-zinc-700 leading-relaxed">
                {exposicao.sobre}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTitle />
          <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Image Counter */}
              <div className="absolute top-6 left-6 z-50 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-semibold">
                  {selectedImage !== null ? selectedImage + 1 : 0} /{" "}
                  {imagens.length}
                </span>
              </div>

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </button>

              {/* Image */}
              {selectedImage !== null && (
                <div className="relative w-full h-full flex items-center justify-center p-20">
                  <Image
                    src={imagens[selectedImage].src}
                    alt={imagens[selectedImage].alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              )}

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </button>

              {/* Image Title */}
              {selectedImage !== null && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                  <p className="text-white font-semibold">
                    {exposicao.titulo} - {exposicao.artista}
                  </p>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}

export default GaleriaExposicao;