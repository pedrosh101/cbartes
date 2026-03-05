"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavbarInside from "@/components/navbarInside";
import CustomCursor from "@/components/cursor";
import Footer from "@/components/footer";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import GalleryWithLightbox from "@/components/galleryWithLightbox";
import { professores } from "@/data/curriculo/professores";

function CurriculoPage() {
  const params = useParams();
  const slug = params.curriculo as string;
  const professor = professores[slug];

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  if (!professor) {
    return (
      <>
        <NavbarInside color="#649d3f" />
        <div className="min-h-screen flex items-center justify-center bg-black text-white pt-32">
          <div className="text-center max-w-2xl px-8">
            <h1 className="text-4xl font-bold mb-4">
              Professor não encontrado
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

  return (
    <>
      <CustomCursor />
      <NavbarInside color="#649d3f" />

      <main className="font-futura bg-black text-white min-h-screen">
        {/* Header com imagem de capa */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={professor.imagemCapa}
              alt={professor.nome}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black" />
          </div>

          {/* Foto de perfil e nome (sobreposto) */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-8 pb-8">
              <div className="flex flex-col md:flex-row items-end md:items-center gap-6">
                {/* Foto de perfil */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-clr3 shrink-0"
                >
                  <Image
                    src={professor.imagemPerfil}
                    alt={professor.nome}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </motion.div>

                {/* Nome e área */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex-1 text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-7xl font-black leading-none mb-3">
                    {professor.nome}
                  </h1>
                  <div className="inline-block px-6 py-2 bg-clr3/20 border border-clr3/40 rounded-full backdrop-blur-sm">
                    <span className="text-lg font-bold uppercase tracking-wider text-clr3">
                      {professor.area}
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Breadcrumb no topo */}
          <div className="absolute top-32 left-0 right-0 z-10">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 text-sm text-gray-300"
              >
                <Link
                  href="/escola"
                  className="hover:text-clr3 transition-colors flex gap-2 items-center"
                >
                  <MdOutlineKeyboardReturn size={20} />
                  Escola
                </Link>
                <span>/</span>
                <Link
                  href="/escola#professores"
                  className="hover:text-clr3 transition-colors"
                >
                  professores
                </Link>
                <span>/</span>
                <span className="text-clr3">{professor.nome}</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-black mb-6">
                Sobre{" "}
                <span className="text-clr3">
                  {professor.nome.split(" ")[0]}
                </span>
              </h2>
              <div className="w-24 h-1 bg-clr3 mb-8" />
              <p className="text-xl text-gray-300 leading-relaxed">
                {professor.bio}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Formação */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-5xl font-black mb-4">
                <span className="text-clr3">Formação</span>
              </h2>
              <div className="w-24 h-1 bg-clr3" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {professor.formacao.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 hover:border-clr3 transition-colors group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-clr3 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    <p className="text-gray-300 leading-relaxed">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-5xl font-black mb-4">
                <span className="text-clr3">Experiência</span>
              </h2>
              <div className="w-24 h-1 bg-clr3" />
            </motion.div>

            <div className="relative">
              <div className="absolute left-0 md:left-32 top-0 bottom-0 w-px bg-clr3/30" />

              <div className="space-y-12">
                {professor.experiencia.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 md:pl-44"
                  >
                    {/* Ano */}
                    <div className="absolute left-0 md:left-0 top-0 w-28 md:w-32">
                      <div className="bg-clr3 text-black font-bold text-sm px-3 py-1 rounded-full text-center">
                        {exp.ano}
                      </div>
                    </div>

                    {/* Círculo na linha */}
                    <div className="absolute left-0 md:left-32 top-2 w-4 h-4 rounded-full bg-clr3 border-4 border-zinc-900 -translate-x-1/2" />

                    {/* Conteúdo */}
                    <div className="bg-black border border-zinc-800 rounded-sm p-6">
                      <h3 className="text-2xl font-black mb-1 text-clr3">
                        {exp.titulo}
                      </h3>
                      <p className="text-gray-500 mb-4 uppercase text-sm tracking-wider">
                        {exp.instituicao}
                      </p>
                      <p className="text-gray-400 leading-relaxed">
                        {exp.descricao}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Especializações */}
        <section className="py-20 bg-black">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-5xl font-black mb-4">
                <span className="text-clr3">Especializações</span>
              </h2>
              <div className="w-24 h-1 bg-clr3" />
            </motion.div>

            <div className="flex flex-wrap gap-4">
              {professor.especializacoes.map((esp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 bg-zinc-900 border border-zinc-700 hover:border-clr3 rounded-full transition-colors"
                >
                  <span className="text-gray-300 font-semibold">{esp}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Prêmios (se houver) */}
        {professor.premios && professor.premios.length > 0 && (
          <section className="py-20 bg-zinc-900">
            <div className="max-w-7xl mx-auto px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-12"
              >
                <h2 className="text-5xl font-black mb-4">
                  Prêmios e <span className="text-clr3">Reconhecimentos</span>
                </h2>
                <div className="w-24 h-1 bg-clr3" />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {professor.premios.map((premio, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-black border border-zinc-800 rounded-sm p-6 hover:border-clr3 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-5xl font-black text-clr3/20 group-hover:text-clr3/30 transition-colors">
                        🏆
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-500 mb-1">
                          {premio.ano}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {premio.titulo}
                        </h3>
                        <p className="text-sm text-gray-400 uppercase tracking-wider">
                          {premio.instituicao}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
            </div>
          </section>
          
        )}
        {professor.galeria && (
          <GalleryWithLightbox
            sections={[
              {
                titulo: "Galeria de Fotos",
                imagens: professor.galeria,
              },
            ]}
          />
        )}
        <Footer color="#649d3f" />
      </main>
    </>
  );
}

export default CurriculoPage;
