'use client'
import { useScroll, useTransform, motion } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef } from 'react';

export default function Home() {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start center', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className=" bg-amber-300">
      <div className='h-screen'/>
      <div ref={container}>
        <Slide progress={scrollYProgress}/>
      </div>
      <div className='h-screen' />
    </main>
  );
}

const Slide = (props: any) => {
  return (
    <div className="relative flex justify-center items-center py-20">
      <Phrase src={props.src} progress={props.progress}/>
    </div>
  )
}

const Phrase = ({src, progress}: {src: any, progress: any}) => {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero risus, iaculis in turpis vel, gravida pellentesque lorem. Phasellus rhoncus dui ac porta porta. In tempor efficitur mauris.";
  
  const words = text.split(' ');
  
  return (
    <div className={'px-5 flex gap-5 items-center max-w-7xl'}>
      <p className='text-[5vw] leading-tight'>
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          
          return (
            <Word key={i} progress={progress} range={[start, end]}>
              {word}
            </Word>
          )
        })}
      </p>

    </div>
  )
}

const Word = ({children, progress, range}: {children: string, progress: any, range: [number, number]}) => {
  const chars = children.split('');
  const amount = range[1] - range[0];
  const step = amount / children.length;
  
  return (
    <span className="inline-block mr-[0.3em]">
      {chars.map((char, i) => {
        const start = range[0] + (step * i);
        const end = range[0] + (step * (i + 1));
        
        return (
          <Character key={i} progress={progress} range={[start, end]}>
            {char}
          </Character>
        )
      })}
    </span>
  )
}

const Character = ({children, progress, range}: {children: string, progress: any, range: [number, number]}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <motion.span style={{opacity}} className="inline-block">
      {children}
    </motion.span>
  )
}