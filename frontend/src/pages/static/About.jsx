export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
      <h1 className="mt-2 font-display text-4xl font-bold">About FURCIL</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-gray-500 dark:text-gray-300">
        <p>FURCIL was born from a simple belief: caring for a pet should feel effortless. We curate
          everything your companion needs — nutrition, comfort, health and play — chosen to help pets
          live longer, happier lives.</p>
        <p>From complete dog and cat food to bird feed, aquarium essentials and small-pet habitats, every
          product in our store is selected for quality, safety, and value.</p>
        <p>We're a single-vendor pet store with a big heart — obsessed with detail, committed to animal
          wellbeing, and dedicated to making shopping for your pet as easy as it should be.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[['50k+', 'Happy Pets'], ['1200+', 'Curated Products'], ['4.8★', 'Average Rating']].map(([n, l]) => (
          <div key={l} className="card p-6 text-center">
            <p className="font-display text-3xl font-bold text-gold">{n}</p>
            <p className="mt-1 text-sm text-gray-400">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
