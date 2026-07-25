export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</p>
      <h1 className="mt-2 font-display text-4xl font-bold">About FURCIL</h1>
      <div className="mt-8 space-y-5 leading-relaxed text-gray-500 dark:text-gray-300">
        <p>At FURCIL, we believe that better pet health doesn't have to begin with a complete change in diet.</p>
        <p>For many Indian pet parents, switching foods can be expensive, inconvenient, or simply not
          practical. Yet, they still want to give their pets better nutrition, healthier digestion, stronger
          immunity and a happier life.</p>
        <p>We started FURCIL with a simple belief: improving a pet's well-being should fit into everyday
          life and not disrupt it.</p>
        <p>That's why we create thoughtfully formulated nutritional toppers and everyday wellness products
          that work alongside your pet's existing routine. Instead of asking you to replace everything, we
          help you build on what you're already doing.</p>
        <p>Every FURCIL product is developed with one purpose — to make better pet care simpler, more
          practical and more accessible for Indian pet parents.</p>
        <p className="font-medium text-luxe-ink dark:text-white">Because healthier pets don't always need a new diet.
          Sometimes, they just need something better added to it.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[['🇮🇳', 'Made for Indian pets'], ['🐾', 'Vet-informed formulas'], ['➕', "Works with your pet's routine"]].map(([n, l]) => (
          <div key={l} className="card p-6 text-center">
            <p className="font-display text-3xl font-bold text-gold">{n}</p>
            <p className="mt-1 text-sm text-gray-400">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
