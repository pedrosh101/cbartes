

export default function AssociacaoOld() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white px-8 py-20 font-[futura]">
      
      <header className="max-w-6xl mx-auto mb-20">
        <h1 className="text-5xl font-light tracking-widest text-emerald-500 uppercase">
          Associação
        </h1>

      </header>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          'Produção Cultural',
          'Equipe de Formação',
          'Empreendedorismo Artístico',
        ].map(item => (
          <div
            key={item}
            className="border border-emerald-500/30 rounded-2xl p-8
                       hover:border-emerald-500 transition"
          >
            <h2 className="text-lg tracking-wide text-emerald-500">
              {item}
            </h2>
          </div>
        ))}
      </section>

    </main>
  )
}


