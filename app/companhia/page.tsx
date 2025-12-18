export default function Companhia() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white px-8 py-20">
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-light tracking-widest text-red-500 uppercase">
          Companhia
        </h1>

      </header>

      <section className="max-w-4xl mx-auto space-y-6">
        {[
          'Espetáculos',
          'Formação de Elenco',
          'Núcleo de Pesquisa',
        ].map(item => (
          <div
            key={item}
            className="border-l-4 border-red-500 pl-6 py-6
                       hover:bg-red-500/5 transition"
          >
            <h2 className="text-xl tracking-wide">
              {item}
            </h2>
          </div>
        ))}
      </section>

    </main>
  )
}

