export default function Escola() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-20">
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-light tracking-widest text-sky-400 uppercase">
          Escola
        </h1>

      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Cursos */}
        <div className="border border-sky-400/30 rounded-2xl p-8">
          <h2 className="text-xl tracking-wide text-sky-300 mb-6 uppercase">
            Cursos
          </h2>

          <ul className="space-y-4 text-neutral-300">
            <li className="hover:text-sky-400 transition">Curso de Teatro</li>
            <li className="hover:text-sky-400 transition">Curso de Dança</li>
            <li className="hover:text-sky-400 transition">Curso de Oficinas</li>
          </ul>
        </div>

        {/* Atividades */}
        <div className="border border-sky-400/30 rounded-2xl p-8">
          <h2 className="text-xl tracking-wide text-sky-300 mb-6 uppercase">
            Atividades
          </h2>

          <ul className="space-y-4 text-neutral-300">
            <li className="hover:text-sky-400 transition">Espetáculos</li>
            <li className="hover:text-sky-400 transition">
              Calendário – Ações Programadas
            </li>
          </ul>
        </div>

      </section>

    </main>
  )
}
