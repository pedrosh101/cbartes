"use client";

import { useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import Lenis from "lenis";
import { sectionImages } from "@/data/sectionImages";
import Intro from "@/components/intro";
import Description from "@/components/description";
import Section from "@/components/section";
import { secoes } from "@/data/secoes";

export default function SecaoPage() {
  const { secao } = useParams<{ secao: string }>();

  const data = secoes[secao as keyof typeof secoes];

  if (!data) notFound();

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="font-futura">
      <Intro 
      color={data.color}
        image={sectionImages[data.section.imageKeyHeader as keyof typeof sectionImages]}
      />
      <Description />
      <Section
        text={data.section.text}
        name={data.section.name}
        image={sectionImages[data.section.imageKey as keyof typeof sectionImages]}
      />
      <div className="h-screen flex justify-center items-center" ><p className="text-[2vw]  uppercase">
          Arquivo
        </p></div>
              
    </main>
    
  );
}
