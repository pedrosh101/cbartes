"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring, useInView } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import NavbarInside from "@/components/navbarInside";
import image from "@/public/images/1.jpg";

const cursos = [
  {
    id: 1,
    categoria: "Dança",
    professor: "Ditto Leite",
    turmas: ["Pedagogia", "Diferencial", "Coreografia Social"],
    bolsas: "PIÁrte",
 
    
  },
  {
    id: 2,
    categoria: "Teatro",
    professor: "Jean Gimenes",
    turmas: ["Pedagogia", "Diferencial"],
    bolsas: "PIÁrte",
 

  },
  {
    id: 3,
    categoria: "Jovem Aprendiz",
    professor: "-",
    turmas: ["Estágio de professor de dança e teatro"],
    bolsas: "Associação Cultural",
 

  }
];

const cursosLivres = [
  { nome: "Oratória", vagas: "EmpreendArteLab" },
  { nome: "Iluminação", vagas: "EmpreendArteLab + Jovens Aprendizes" },
  { nome: "Sonoplastia", vagas: "Estágio gratuito" }
];

const espetaculos = [
  { ano: 2022, quantidade: 1, destaque: "PECADO - Nelson Rodrigues" },
  { ano: 2023, quantidade: 4, destaque: "A CASA DOS MISTÉRIOS" },
  { ano: 2024, quantidade: 6, destaque: "A BRUXINHA QUE ERA BOA" },
  { ano: 2025, quantidade: 5, destaque: "O AUTO DA COMPADECIDA" }
];

function CounterAnimation({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

function Escola() {
  const container = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const smoothMouseX = useSpring(0, { stiffness: 500, damping: 20 });
  const smoothMouseY = useSpring(0, { stiffness: 500, damping: 20 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      smoothMouseX.set(e.clientX);
      smoothMouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [smoothMouseX, smoothMouseY]);

  const cursorX = useTransform(smoothMouseX, (value) => value - 16);
  const cursorY = useTransform(smoothMouseY, (value) => value - 16);

  return (
    <>
      <NavbarInside color="#649D3F" />

      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-9999 mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="w-full h-full rounded-full border-2 border-white"
          animate={{
            scale: cursorVariant === "hover" ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 1000, damping: 30 }}
        />
      </motion.div>

      <main className="font-futura bg-black text-white overflow-hidden cursor-none">
       
        <div
          ref={container}
          className="relative flex items-center justify-center h-screen overflow-hidden"
        >
          <motion.div 
            className="absolute inset-0"
            style={{ scale }}
          >
            <motion.div style={{ y }} className="relative w-full h-full">
              <div className="absolute inset-0 bg-clr3 opacity-30 mix-blend-multiply z-10" />
              <Image
                src={image}
                fill
                alt="Escola CBARTES"
                priority
                style={{ objectFit: "cover" }}
                className="grayscale-30"
              />
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ opacity }}
            className="relative z-20 text-center px-8 max-w-7xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="overflow-hidden"
            >
              <h1 className="text-[12vw] md:text-[10vw] font-black leading-[0.85] tracking-wider my-4">
                ESCOLA
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-clr3 to-[#365e1c]">
                  CBARTES
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-3xl mt-8 font-light tracking-wide text-gray-300"
            >
              Formação artística em dança e teatro
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12  gap-4 justify-center 2xl:flex hidden"
            >
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Dança</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Teatro</span>
              </div>
              <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <span className="text-sm uppercase tracking-widest">Formação</span>
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-white/60 text-sm uppercase tracking-widest flex flex-col items-center gap-2"
            >
              <span>Explore</span>
              <div className="w-px h-12 bg-linear-to-b from-white/60 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Stats Section */}
        <section className="relative py-32 bg-linear-to-b from-black to-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
              {[
                { value: 16, label: "Espetáculos", suffix: "" },
                { value: 40, label: "Apresentações", suffix: "" },
                { value: 500, label: "Artistas", suffix: "+" },
                { value: 3, label: "Anos", suffix: "" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                >
                  <div className="text-6xl md:text-8xl font-black mb-4 bg-linear-to-br from-clr3 to-[#365e1c] bg-clip-text text-transparent">
                    <CounterAnimation value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 w-px h-1/2 bg-linear-to-b from-transparent via-clr3/30 to-transparent" />
          <div className="absolute top-1/2 right-0 w-px h-1/2 bg-linear-to-b from-transparent via-clr3/30 to-transparent" />
        </section>

        {/* Cursos Regulares */}
        <section className="py-32 relative bg-zinc-900">
          <div className="max-w-7xl mx-auto px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-8xl  font-black mb-6 leading-none">
                Cursos
                <br />
                <span className="text-clr3">Regulares</span>
              </h2>
              <div className="w-32 h-1 bg-linear-to-r from-clr3 to-transparent" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {cursos.map((curso, index) => (
                <motion.div
                  key={curso.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group relative"
                >
                  <div className="relative overflow-hidden bg-zinc-800 rounded-sm h-full p-8 border border-zinc-700 hover:border-clr3 transition-all duration-500">
   
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"

                    />

      

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-4xl font-black mb-2 uppercase tracking-tight">
                        {curso.categoria}
                      </h3>
                      
                      <div className="h-px w-16 bg-clr3 mb-6 group-hover:w-full transition-all duration-500" />

                      <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">
                        Professor: <span className="text-white font-semibold">{curso.professor}</span>
                      </p>

                      <div className="space-y-2 mb-6">
                        {curso.turmas.map((turma, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-1 h-1 rounded-full bg-clr3" />
                            {turma}
                          </div>
                        ))}
                      </div>

                      <div className="inline-block px-4 py-2 bg-clr3/20 border border-clr3/40 rounded-full">
                        <span className="text-xs uppercase tracking-widest text-clr3">
                          Bolsas {curso.bolsas}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cursos Livres */}
        <section className="py-32 bg-black relative overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-clr3 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-8 relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-8xl font-black mb-16"
            >
              Cursos <span className="text-clr3">Livres</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {cursosLivres.map((curso, index) => (
                <motion.div
                  key={curso.nome}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onMouseEnter={() => setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant("default")}
                  className="group relative bg-linear-to-br from-zinc-900 to-zinc-800 p-8 rounded-sm border border-zinc-700 hover:border-clr3 transition-all duration-300"
                >
              
                  <h3 className="text-3xl font-bold mb-3 uppercase">{curso.nome}</h3>
                  <p className="text-sm text-gray-400 uppercase tracking-wide">{curso.vagas}</p>
                  
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-clr3 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Espetáculos Timeline */}
        <section className="py-32 bg-zinc-900 relative">
          <div className="max-w-7xl mx-auto px-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-8xl  font-black mb-20 text-center"
            >
              Nossa <span className="text-clr3">Trajetória</span>
            </motion.h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-clr3 via-[#365e1c] to-clr3 hidden md:block" />

              {espetaculos.map((item, index) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 mb-16 ${
                    index % 2 === 0 ? "" : "md:grid-flow-dense"
                  }`}
                >
                  <div className={index % 2 === 0 ? "md:text-right" : "md:col-start-2"}>
                    <div className="inline-block">
                      <div className="text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-clr3 to-[#365e1c] mb-4">
                        {item.ano}
                      </div>
                      <div className="text-2xl font-bold mb-2">{item.destaque}</div>
                      <div className="text-lg text-gray-400">+{" "}
                        {item.quantidade} {item.quantidade === 1 ? "espetáculo" : "espetáculos"}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-clr3 border-4 border-black hidden md:block z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-linear-to-b from-black to-zinc-900 relative overflow-hidden">
          <motion.div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 50% 50%, #F1443E20, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8"
            >
              Faça parte da nossa história
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque est in semper maximus.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant("hover")}
              onMouseLeave={() => setCursorVariant("default")}
              className="px-12 py-5 bg-clr3 text-white text-lg font-bold uppercase tracking-widest rounded-full hover:bg-[#365e1c] transition-colors duration-300 shadow-2xl shadow-clr3/50"
            >
              Inscreva-se agora
            </motion.button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Escola;