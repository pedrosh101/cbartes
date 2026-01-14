export default function Companhia() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white px-8 py-20 font-[futura]">
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-light tracking-widest text-red-500 uppercase">
          Companhia
        </h1>

      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'Espetáculos',
          'Formação de Elenco',
          'Núcleo de Pesquisa',
        ].map(item => (
          <div
            key={item}
            className="border border-red-500/30 rounded-2xl p-8
                       hover:border-red-500 transition"
          >
            <h2 className="text-lg tracking-wide text-red-500">
              {item}
            </h2>
          </div>
        ))}
      </section>

    </main>
  )
}


