import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    id: 'flexibility',
    title: 'Reclaim Your Natural Range',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12a10 10 0 0 1 10-10" />
        <path d="M22 12a10 10 0 0 1-10 10" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <path d="M12 22a10 10 0 0 1-10-10" />
      </svg>
    ),
    description: "Sitting on the floor gently stretches your hips, knees, and ankles. If you spend most of your day locked in a chair, it's the simplest way to regain the flexibility your body was born with.",
  },
  {
    id: 'posture',
    title: 'Stand Taller, Naturally',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v20M8 5h8M8 12h8M8 19h8" />
      </svg>
    ),
    description: "Unlike chairs that let you slouch, floor sitting prompts your spine to align itself naturally. It encourages you to sit tall, engaging the supporting muscles that keep your back strong.",
  },
  {
    id: 'circulation',
    title: 'Keep Things Flowing',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    description: "Chairs pinch blood flow. On the floor, you naturally shift, adjust, and move. This subtle activity keeps your circulation active and keeps you feeling refreshed all day.",
  },
  {
    id: 'core',
    title: 'Build Core Strength',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    description: "Staying upright on the floor gently keeps your core active. Over time, you build stability and strength in your midsection—all while just checking your emails.",
  },
];

export default function FloorSittingBenefits() {
  return (
    <section
      id="floor-sitting-benefits"
      aria-labelledby="benefits-heading"
      className="py-20 lg:py-32 bg-[#faf6f0]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 text-center">
        <ScrollReveal className="mb-20 max-w-2xl mx-auto">
          <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
            Ergonomic Benefits
          </span>
          <h2
            id="benefits-heading"
            className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold"
          >
            Benefits of floor-sitting
          </h2>
        </ScrollReveal>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
          {benefits.map((benefit, idx) => (
            <ScrollReveal
              key={benefit.id}
              delay={idx * 100}
              className="bg-[#1e2925] text-white p-8 rounded-xl flex flex-col justify-between min-h-[380px] border border-outline-variant/10 shadow-lg relative group overflow-hidden"
            >
              <div>
                {/* Header Row */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-12 h-12 rounded-full bg-[#c4a66a] text-[#1e2925] flex items-center justify-center shadow-md">
                    {benefit.icon}
                  </div>
                  {/* Decorative Marker */}
                  <span className="text-white/40 text-xs font-label select-none tracking-widest font-bold">
                    #0{idx + 1}
                  </span>
                </div>

                <h3 className="font-headline text-xl font-bold mb-4 text-[#e0d8c3] leading-snug group-hover:text-white transition-colors">
                  {benefit.title}
                </h3>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA Button */}
        <ScrollReveal delay={400} className="inline-block mt-4">
          <a
            href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
            className="bg-[#1e2925] text-white hover:bg-primary px-12 py-5 rounded-full font-label text-[13px] font-bold tracking-[0.08em] uppercase transition-all shadow-xl hover:scale-105 active:scale-95 inline-block text-lg"
          >
            Shop Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
