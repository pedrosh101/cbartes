"use client";

import Link from "next/link";
import { useEffect } from 'react';
import { useRef } from "react";
import Lenis from 'lenis'



const HomePage = () => {
  const videoRefs = [
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
    useRef<HTMLVideoElement>(null),
  ];

    useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  const handleMouseEnter = (index: number) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index: number) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
    }
  };

  const videos = [
    { href: "/associacao", title: "Associação", video: "/videos/video1.mp4", color: "bg-blue-500/30" },
    { href: "/espaco", title: "Espaço CBARTES", video: "/videos/video2.mp4", color: "bg-yellow-500/30" },
    { href: "/escola", title: "Escola", video: "/videos/video3.mp4", color: "bg-green-500/30" },
    { href: "/companhia", title: "Companhia", video: "/videos/video4.mp4", color: "bg-red-500/30" },
  ];

  return (
    <>
    <div className="h-screen w-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Grid de vídeos */}
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 w-full h-full gap-0.5 bg-white">
          {videos.map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className="relative overflow-hidden group cursor-pointer h-full touch-manipulation"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <video
                  ref={videoRefs[index]}
                  src={item.video}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                />
                
                {/* Filtro colorido */}
                <div className={`absolute inset-0 ${item.color} opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 ease-in-out`} />
                
                {/* Título */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 ease-in-out">
                  <h2 className="text-white text-2xl md:text-4xl font-light tracking-wider uppercase px-4 text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Logo centralizada */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-4 rounded-full shadow-2xl pointer-events-none">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-20 w-20 md:h-32 md:w-32 rounded-full object-cover"
          />
        </div>
      </div>

    </div>

    </>
  );
};

export default HomePage;