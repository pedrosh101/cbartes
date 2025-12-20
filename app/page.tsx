"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "../public/logo.png"

const ConstellationPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Configuração dos nós principais (os 4 círculos + centro)
  const mainNodes = [
    {
      x: 50,
      y: 15,
      label: "Companhia",
      color: "rgb(239, 68, 68)",
      link: "/companhia",
    },
    {
      x: 15,
      y: 50,
      label: "Escola",
      color: "rgb(14, 165, 233)",
      link: "/escola",
    },
    {
      x: 85,
      y: 50,
      label: "Associação",
      color: "rgb(16, 185, 129)",
      link: "/associacao",
    },
    {
      x: 50,
      y: 85,
      label: "Espaço\nCBARTES",
      color: "rgb(251, 191, 36)",
      link: "/espaco",
    },
  ];

  // Pontos decorativos aleatórios
  const generateDecorativeNodes = () => {
    const nodes = [];
    for (let i = 0; i < 25; i++) {
      // Evita a região central
      let x, y;
      do {
        x = Math.random() * 100;
        y = Math.random() * 100;
      } while (Math.abs(x - 50) < 15 && Math.abs(y - 50) < 15);

      nodes.push({
        x,
        y,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.3,
        pulseSpeed: Math.random() * 2 + 1,
      });
    }
    return nodes;
  };

  const [decorativeNodes] = React.useState(generateDecorativeNodes());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

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

      // Converte porcentagem para pixels
      const toPixels = (percent: number, dimension: number) =>
        (percent / 100) * dimension;

      // Desenha linhas entre nós principais
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let i = 0; i < mainNodes.length; i++) {
        for (let j = i + 1; j < mainNodes.length; j++) {
          const x1 = toPixels(mainNodes[i].x, canvas.width);
          const y1 = toPixels(mainNodes[i].y, canvas.height);
          const x2 = toPixels(mainNodes[j].x, canvas.width);
          const y2 = toPixels(mainNodes[j].y, canvas.height);

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // Linhas do centro para os nós principais
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      mainNodes.forEach((node) => {
        const x = toPixels(node.x, canvas.width);
        const y = toPixels(node.y, canvas.height);

        ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
      });

      // Linhas conectando alguns pontos decorativos
      decorativeNodes.forEach((node, i) => {
        const x1 = toPixels(node.x, canvas.width);
        const y1 = toPixels(node.y, canvas.height);

        // Conecta com alguns pontos próximos
        decorativeNodes.slice(i + 1, i + 4).forEach((otherNode) => {
          const x2 = toPixels(otherNode.x, canvas.width);
          const y2 = toPixels(otherNode.y, canvas.height);
          const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

          if (distance < canvas.width * 0.15) {
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              0.05 * (1 - distance / (canvas.width * 0.15))
            })`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        });
      });

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

      <div className="relative w-[90vw] h-[90vh] max-w-6xl">
        {/* Centro */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-white text-black flex items-center justify-center tracking-widest text-lg font-semibold shadow-[0_0_40px_rgba(255,255,255,0.3)] z-10 animate-pulse-slow"
          style={{ animation: "pulse-slow 3s ease-in-out infinite" }}
        >
          
          <Image src={logo} alt="image1" width={120} priority  />
        </div>

        {/* Companhia */}
        <a
          href="/companhia"
          className="absolute top-[15%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-red-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(239,68,68,0.7)] z-10 group"
          style={{ animation: "float 6s ease-in-out infinite" }}
        >
          <span className="relative z-10">Companhia</span>
          <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Escola */}
        <a
          href="/escola"
          className="absolute left-[15%] top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-sky-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-sky-500 hover:shadow-[0_0_50px_rgba(14,165,233,0.7)] z-10 group"
          style={{ animation: "float 6s ease-in-out infinite 1.5s" }}
        >
          <span className="relative z-10">Escola</span>
          <div className="absolute inset-0 rounded-full bg-sky-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Associação */}
        <a
          href="/associacao"
          className="absolute right-[15%] top-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-emerald-500/80 flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-emerald-500 hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] z-10 group"
          style={{ animation: "float 6s ease-in-out infinite 3s" }}
        >
          <span className="relative z-10">Associação</span>
          <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
        </a>

        {/* Espaço CBARTES */}
        <a
          href="/espaco"
          className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-amber-400/80 text-black flex items-center justify-center text-center tracking-widest text-md font-bold transition-all duration-500 hover:scale-110 hover:bg-amber-400 hover:shadow-[0_0_50px_rgba(251,191,36,0.8)] z-10 group"
          style={{ animation: "float 6s ease-in-out infinite 4.5s" }}
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
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-10px) scale(1.02);
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
