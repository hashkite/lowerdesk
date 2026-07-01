import ScrollReveal from './ScrollReveal';

const stats = [
  {
    id: 'focus',
    value: '+22%',
    label: 'Focus Gain',
    description: 'Cognitive throughput improvement.',
    className: 'bg-surface-container border border-black/5',
    textClass: 'text-primary',
  },
  {
    id: 'stability',
    value: 'High Stability',
    label: 'Energy Baseline',
    description: 'Engineered for deep-work states.',
    className: 'bg-surface-container-high border border-black/5 md:col-span-2',
    textClass: 'text-on-surface font-extrabold',
  },
  {
    id: 'sustainability',
    value: '100%',
    label: 'Sustainability',
    description: 'Biological sourcing materials.',
    className: 'bg-primary text-white shadow-md',
    textClass: 'text-white',
  },
];

const comparisonRows = [
  {
    feature: 'Floor Sitting Mode',
    lowerdesk: 'Native Support',
    lowerdeskSub: 'Engineered for 49cm floor-sitting height.',
    traditional: 'Not Possible',
    traditionalSub: 'Minimum height restricted to 65cm+.',
  },
  {
    feature: 'Lowest Height',
    lowerdesk: '49cm',
    lowerdeskSub: 'True biological neutral for sitting.',
    traditional: '65cm',
    traditionalSub: 'Forces hip flexion and spinal strain.',
  },
  {
    feature: 'Motor Durability',
    lowerdesk: 'Industrial Dual-Drive',
    lowerdeskSub: '25,000+ lifecycle rating.',
    traditional: 'Consumer Single-Drive',
    traditionalSub: '5,000 lifecycle average.',
  },
  {
    feature: 'Stability at Peak',
    lowerdesk: 'Zero-Wobble Core',
    lowerdeskSub: 'Torsional rigidity up to 120cm.',
    traditional: 'Telescopic Sway',
    traditionalSub: 'Noticeable vibration above 105cm.',
  },
  {
    feature: 'Material Sourcing',
    lowerdesk: 'Regenerative Bamboo',
    lowerdeskSub: 'FSC Certified, Carbon Negative.',
    traditional: 'Melamine/MDF',
    traditionalSub: 'Chemical-heavy glues and non-recyclable.',
  },
];

export default function Stats() {
  return (
    <section
      id="reviews"
      aria-labelledby="stats-heading"
      className="py-20 lg:py-32 bg-surface-container-low"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <h2 id="stats-heading" className="sr-only">
          Yogeek Productivity Impact and Product Comparison
        </h2>

        {/* Section Header */}
        <ScrollReveal className="mb-12 border-l-4 border-primary pl-4">
          <h3 className="font-headline text-3xl text-on-surface font-extrabold">
            Yogeek Pro vs The World
          </h3>
          <p className="font-body text-base text-on-surface-variant mt-2">
            The metrics that define workspace longevity.
          </p>
        </ScrollReveal>

        {/* Comparison Table */}
        <ScrollReveal className="bg-white rounded-xl shadow-2xl overflow-x-auto border border-outline-variant/30 mb-20">
          <div className="min-w-[700px]" role="region" aria-label="Scrollable comparison table" tabIndex={0}>
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                Yogeek Pro vs Traditional Desks Comparison Matrix
              </caption>
              <thead>
                <tr className="border-b border-black/5">
                  <th className="p-6 lg:p-8 font-label text-[13px] font-bold tracking-[0.08em] uppercase text-on-surface-variant" scope="col">
                    Metric
                  </th>
                  <th className="p-6 lg:p-8 bg-primary/5 rounded-t-xl border-x border-t border-primary/10" scope="col">
                    <div className="flex flex-col">
                      <span className="text-primary font-bold font-headline text-xl">Yogeek Pro</span>
                      <span className="font-label text-[10px] text-primary/70 uppercase tracking-wider mt-1">
                        Biological Alignment Standard
                      </span>
                    </div>
                  </th>
                  <th className="p-6 lg:p-8" scope="col">
                    <div className="flex flex-col opacity-60">
                      <span className="font-headline text-xl text-on-surface font-bold">Traditional Desks</span>
                      <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-wider mt-1">
                        Market Average
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="font-body text-body-md">
                {comparisonRows.map((row, index) => (
                  <tr
                    key={row.feature}
                    className="border-b border-black/5 group hover:bg-primary/5 transition-colors"
                  >
                    <th className="p-6 lg:p-8 font-bold font-label text-[13px] tracking-wider uppercase text-on-surface-variant" scope="row">
                      {row.feature}
                    </th>
                    <td className="p-6 lg:p-8 bg-primary/[0.02] text-primary font-bold border-x border-primary/10">
                      {row.lowerdesk}
                      <span className="text-xs font-normal block text-on-surface-variant mt-1">
                        {row.lowerdeskSub}
                      </span>
                    </td>
                    <td className="p-6 lg:p-8 text-on-surface-variant">
                      {row.traditional}
                      <span className="text-xs block text-on-surface-variant/70 mt-1">
                        {row.traditionalSub}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Bento Grid Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <ScrollReveal
              key={stat.id}
              className={`p-8 rounded-xl flex flex-col justify-between min-h-[220px] ${stat.className}`}
            >
              <span className="font-label text-[11px] font-bold tracking-[0.08em] uppercase opacity-75">
                {stat.label}
              </span>
              <div>
                <span className={`font-headline text-4xl block mb-2 leading-none ${stat.textClass}`}>
                  {stat.value}
                </span>
                <p className="font-body text-sm opacity-90 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
