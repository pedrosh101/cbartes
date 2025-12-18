
import Link from 'next/link'

export default function Home() {
  return (
    <main className="h-screen w-screen bg-neutral-900 text-white flex items-center justify-center overflow-hidden">
      
      <div className="relative w-[90vw] h-[90vh] max-w-6xl">

        {/* Centro */}
        <div className="
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-36 h-36 rounded-full
          bg-white text-black
          flex items-center justify-center
          tracking-widest text-lg font-semibold
          shadow-[0_0_40px_rgba(255,255,255,0.15)]
        ">
          CBARTES
        </div>

        {/* Companhia */}
        <Link
          href="/companhia"
          className="
            absolute top-[6%] left-1/2 -translate-x-1/2
            w-40 h-40 rounded-full
            bg-red-500/90
            flex items-center justify-center text-center
             tracking-widest text-md font-bold
            transition-all duration-300
            hover:scale-110 hover:bg-red-500
            hover:shadow-[0_0_40px_rgba(239,68,68,0.6)]
          "
        >
          Companhia
        </Link>

        {/* Escola */}
        <Link
          href="/escola"
          className="
            absolute left-[6%] top-1/2 -translate-y-1/2
            w-40 h-40 rounded-full
            bg-sky-500/90
            flex items-center justify-center text-center
             tracking-widest text-md font-bold
            transition-all duration-300
            hover:scale-110 hover:bg-sky-500
            hover:shadow-[0_0_40px_rgba(14,165,233,0.6)]
          "
        >
          Escola
        </Link>

        {/* Associação */}
        <Link
          href="/associacao"
          className="
            absolute right-[6%] top-1/2 -translate-y-1/2
            w-40 h-40 rounded-full
            bg-emerald-500/90
            flex items-center justify-center text-center
             tracking-widest text-md font-bold
            transition-all duration-300
            hover:scale-110 hover:bg-emerald-500
            hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]
          "
        >
          Associação
        </Link>

        {/* Espaço CBARTES */}
        <Link
          href="/espaco"
          className="
            absolute bottom-[6%] left-1/2 -translate-x-1/2
            w-40 h-40 rounded-full
            bg-amber-400/90 text-black
            flex items-center justify-center text-center
             tracking-widest text-md font-bold
            transition-all duration-300
            hover:scale-110 hover:bg-amber-400
            hover:shadow-[0_0_40px_rgba(251,191,36,0.7)]
          "
        >
          Espaço<br />CBARTES
        </Link>

      </div>
    </main>
  )
}
