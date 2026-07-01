import ScrollReveal from './ScrollReveal';

const specCards = [
  {
    id: 'tapered',
    icon: 'architecture',
    title: 'Tapered Integrity',
    description: 'Asymmetric leg design that widens at the base to distribute weight vectors and eliminate lateral oscillation.',
  },
  {
    id: 'carbon',
    icon: 'precision_manufacturing',
    title: 'Carbon Strength',
    description: 'Carbon-enriched steel processed for molecular density and high-tensile resistance, finished with VOC-free coatings.',
  },
  {
    id: 'laser',
    icon: 'straighten',
    title: 'Laser Tolerance',
    description: 'Every joint is laser-welded within a 0.01mm tolerance, creating a unibody feel even at full extension heights.',
  },
];

export default function SpecsDetails() {
  return (
    <section
      id="specs-details"
      aria-labelledby="specs-details-heading"
      className="py-20 lg:py-32 bg-surface"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Title */}
        <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto">
          <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
            Engineering Standards
          </span>
          <h2
            id="specs-details-heading"
            className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold"
          >
            Structural Absolute.
          </h2>
          <p className="font-body text-base text-on-surface-variant mt-4 leading-relaxed">
            Cold-rolled carbon steel frames designed for absolute structural integrity. Stability at every centimeter, anchored to your focus.
          </p>
        </ScrollReveal>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {specCards.map((card, idx) => (
            <ScrollReveal
              key={card.id}
              delay={idx * 100}
              className="bg-surface-container-lowest p-8 lg:p-10 border border-outline-variant/30 rounded-xl hover:border-primary/50 hover:shadow-xl transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg mb-8 group-hover:bg-primary transition-colors group-hover:text-white text-primary">
                  <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                </div>
                <h3 className="font-headline text-xl font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">
                  {card.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Seasoning Callout Block */}
        <div className="bg-surface-container-low rounded-2xl p-8 lg:p-16 border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
                Material Genesis • Engineered in Pune
              </span>
              <h3 className="font-headline text-3xl lg:text-4xl text-on-surface mb-6 font-extrabold">
                Provenance &amp; Climate Seasoning.
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                Traditional wood warps. Our surfaces undergo a proprietary 14-day seasoning process within controlled environmental chambers that simulate India's extreme atmospheric shifts, ensuring lifelong stability and biological connection.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100} className="space-y-6">
              <div className="flex gap-6 p-6 bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full text-primary h-fit" aria-hidden="true">
                  <span className="material-symbols-outlined">thermostat</span>
                </div>
                <div>
                  <h4 className="font-label text-sm font-bold text-on-surface mb-2">
                    CLIMATIC SEASONING
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    14 days of gradual desiccation within environmental chambers to guarantee zero thermal expansion even in peak monsoon and high-humidity seasons.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-xl border border-outline-variant/20 shadow-sm">
                <div className="bg-primary/10 p-3 rounded-full text-primary h-fit" aria-hidden="true">
                  <span className="material-symbols-outlined">science</span>
                </div>
                <div>
                  <h4 className="font-label text-sm font-bold text-on-surface mb-2 uppercase">
                    Bio-Alignment Finish
                  </h4>
                  <p className="font-body text-xs text-on-surface-variant leading-relaxed">
                    Hand-rubbed organic protective oils that seal the tabletop grain while maintaining wood breathability and absolute zero chemical off-gassing.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
