export default function EspacoCBARTES() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white px-8 py-20">
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-light tracking-widest text-amber-400 uppercase">
          Espaço CBARTES
        </h1>

      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'Equipe de Gestão',
          'Galeria',
          'Cine CBARTES',
          'Residência Artística',
          'Eventos – Sala Multiuso',
          'Estrutura Física',
        ].map(item => (
          <div
            key={item}
            className="border border-amber-400/30 rounded-2xl p-8
                       hover:border-amber-400 transition"
          >
            <h2 className="text-lg tracking-wide text-amber-300">
              {item}
            </h2>
          </div>
        ))}
      </section>

    </main>
  )
}
