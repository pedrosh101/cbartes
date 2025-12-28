"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo from "../public/logo.png";
import Navbar from "@/components/navbar";

const ConstellationPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [decorativeNodes, setDecorativeNodes] = useState<any[]>([]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  // Gerar nós decorativos apenas no cliente
  useEffect(() => {
    const nodes = [];
    for (let i = 0; i < 35; i++) {
      let x, y;
      do {
        x = Math.random() * 100;
        y = Math.random() * 100;
      } while (Math.abs(x - 50) < 18 && Math.abs(y - 50) < 18);

      nodes.push({
        x,
        y,
        size: Math.random() * 1.5 + 0.8,
        opacity: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 2 + 1,
      });
    }
    setDecorativeNodes(nodes);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || decorativeNodes.length === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      const toPixels = (percent: number, dimension: number) =>
        (percent / 100) * dimension;

      // Desenha pontos decorativos com pulsação
      decorativeNodes.forEach((node) => {
        const x = toPixels(node.x, canvas.width);
        const y = toPixels(node.y, canvas.height);
        const pulse = Math.sin(time * node.pulseSpeed) * 0.2 + 0.8;

        ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * pulse})`;
        ctx.beginPath();
        ctx.arc(x, y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [decorativeNodes]);

  return (
    <div className="relative h-screen w-screen bg-neutral-900 text-white flex items-center justify-center overflow-hidden font-[futura]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: "blur(0.5px)" }}
      />

      {/* Botão de Menu */}
      <Navbar />

      <div className="relative w-[90vw] h-[90vh] max-w-6xl">
        {/* Pontos decorativos interativos */}
        {decorativeNodes.map((node, index) => {
          const isHovered = hoveredNode === index;
          return (
            <div
              key={index}
              className="absolute cursor-pointer transition-all duration-300"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoveredNode(index)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div
                className={`rounded-full bg-white transition-all duration-300 ${
                  isHovered ? "scale-150" : ""
                }`}
                style={{
                  width: `${node.size * 2}px`,
                  height: `${node.size * 2}px`,
                  opacity: isHovered ? 0.9 : node.opacity * 0.7,
                  boxShadow: isHovered
                    ? "0 0 20px rgba(255, 255, 255, 0.8), 0 0 40px rgba(255, 255, 255, 0.4)"
                    : "none",
                }}
              />
            </div>
          );
        })}

        {/* Centro */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white text-black flex items-center justify-center tracking-widest text-lg font-semibold shadow-[0_0_40px_rgba(255,255,255,0.3)] z-10"
          style={{ animation: "pulse-slow 3s ease-in-out infinite" }}
        >
          <Image src={logo} alt="image1" width={120} priority />
        </div>

        {/* Companhia */}
        <a
          href="/companhia"
          className="absolute w-26 h-26 rounded-full bg-red-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] z-10 group"
          style={{
            left: "45%",
            top: "82%",
            transform: "translate(-50%, -50%)",
            animation: "float 6s ease-in-out infinite 4.5s",
          }}
        >
          <span className="relative z-10">Companhia</span>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Escola */}
        <a
          href="/escola"
          className="absolute w-26 h-26 rounded-full bg-sky-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-sky-500 hover:shadow-[0_0_50px_rgba(14,165,233,0.7)] z-10 group"
          style={{
            left: "22%",
            top: "35%",
            transform: "translate(-50%, -50%)",
            animation: "float 6s ease-in-out infinite 1.5s",
          }}
        >
          <span className="relative z-10">Escola</span>
          <div className="absolute inset-0 rounded-full bg-sky-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Associação */}
        <a
          href="/associacao"
          className="absolute w-26 h-26 rounded-full bg-emerald-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] z-10 group"
          style={{
            left: "78%",
            top: "60%",
            transform: "translate(-50%, -50%)",
            animation: "float 6s ease-in-out infinite 3s",
          }}
        >
          <span className="relative z-10">Associação</span>
          <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Espaço CBARTES */}
        <a
          href="/espaco"
          className="absolute w-26 h-26 rounded-full bg-amber-400/80 text-black flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-amber-400 hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] z-10 group"
          style={{
            left: "48%",
            top: "18%",
            transform: "translate(-50%, -50%)",
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <span className="relative z-10">
            Espaço
            <br />
            CBARTES
          </span>
          <div className="absolute inset-0 rounded-full bg-amber-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(-50%, -50%) translateY(0) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px) scale(1.02);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(255, 255, 255, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ConstellationPage;