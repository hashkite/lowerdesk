import ScrollReveal from './ScrollReveal';

const stats = [
  { id: 'energy', value: '42%', label: 'Energy Increase', delay: 0 },
  { id: 'mobility', value: '3X', label: 'More Mobility', delay: 100 },
  { id: 'reviews', value: '550+', label: 'Positive Reviews', delay: 200 },
  { id: 'warranty', value: '3 Yr', label: 'Full Warranty', delay: 300 },
];

const comparisonRows = [
  {
    feature: 'Min Height',
    traditional: '72 cm (Standard)',
    lowerdesk: '49 cm (Floor-capable)',
  },
  {
    feature: 'Health Focus',
    traditional: 'None (Sedentary)',
    lowerdesk: 'Bio-Movement Optimized',
  },
  {
    feature: 'Motor Type',
    traditional: 'Standard (Noisy)',
    lowerdesk: 'Silent Linear Drive',
  },
  {
    feature: 'Construction',
    traditional: 'Particle Board',
    lowerdesk: 'Solid Core Engineering',
  },
];

export default function Stats() {
  return (
    <section
      id="reviews"
      aria-labelledby="stats-heading"
      className="py-vignette-padding bg-indigo-50/50 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 id="stats-heading" className="sr-only">
          Productivity Impact and Comparison
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-20 text-center">
          {stats.map((stat) => (
            <ScrollReveal key={stat.id} delay={stat.delay} className="p-8">
              <div
                className="text-5xl font-display text-primary mb-2"
                aria-label={`${stat.value} ${stat.label}`}
              >
                {stat.value}
              </div>
              <p className="font-label text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Comparison Table */}
        <ScrollReveal className="bg-white rounded-xl shadow-2xl overflow-x-auto border border-indigo-100">
          <div className="min-w-[600px]" role="region" aria-label="Scrollable comparison table" tabIndex={0}>
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                Comparison between Traditional Desks and Lowerdesk Pro
              </caption>
              <thead>
                <tr className="bg-indigo-950 text-white">
                  <th className="p-8 font-headline text-headline-lg" scope="col">Feature</th>
                  <th className="p-8 font-headline text-headline-lg" scope="col">Traditional Desk</th>
                  <th className="p-8 font-headline text-headline-lg bg-primary" scope="col">Lowerdesk Pro</th>
                </tr>
              </thead>
              <tbody className="text-body-md">
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={index < comparisonRows.length - 1 ? 'border-b border-indigo-50' : ''}
                  >
                    <th className="p-8 font-bold text-on-surface" scope="row">{row.feature}</th>
                    <td className="p-8 text-on-surface-variant">{row.traditional}</td>
                    <td className="p-8 bg-indigo-50 font-bold text-primary">{row.lowerdesk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
