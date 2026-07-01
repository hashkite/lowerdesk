import ScrollReveal from './ScrollReveal';
import heroBg from '../assets/images/yogeek/hero_yogeek.png';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-10"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={heroBg}
          alt="Yogeek life: Woman floor-sitting at a sustainable teak desk in a sunlit studio."
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left column */}
        <div className="md:col-span-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true"></span>
              <span className="font-label text-[10px] text-primary uppercase tracking-widest font-bold">
                Live Inventory: Few Units Remaining
              </span>
            </div>
            <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
              The Scientific Pivot
            </span>
            <h1
              id="hero-title"
              className="font-display text-[clamp(40px,7vw,72px)] leading-[1.1] mb-8 text-on-surface font-extrabold"
            >
              Work in Flow.<br />
              <span className="text-primary italic">Align with Nature.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl text-on-surface-variant max-w-xl mb-12 leading-relaxed">
              Experience the only performance desk designed to mirror natural human movement. From restorative floor positions to active standing states.
            </p>

            <div className="flex flex-wrap items-center gap-8">
              <a
                href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
                className="inline-flex bg-primary text-white px-10 py-4 font-label text-[13px] font-bold tracking-[0.08em] uppercase rounded-lg hover:shadow-xl hover:bg-[#3d664a] transition-all"
                aria-label="Buy Yogeek Pro now"
              >
                Buy Yogeek Pro
              </a>
              <a
                href="#video-showcase"
                className="flex items-center gap-3 group cursor-pointer transition-all focus-visible:outline-none"
                aria-label="Watch the science of biological alignment"
              >
                <span className="material-symbols-outlined text-primary scale-125" aria-hidden="true">
                  play_circle
                </span>
                <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-on-surface border-b border-transparent group-hover:border-primary transition-all pb-0.5">
                  Watch the Science
                </span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right column */}
        <div className="md:col-span-4 hidden md:block text-right">
          <ScrollReveal delay={200}>
            <div className="border-l-2 border-primary/20 pl-8 space-y-6 text-left">
              <div>
                <span className="text-primary font-label text-[13px] font-bold tracking-[0.08em] uppercase block mb-1">
                  Global Ecosystem
                </span>
                <p className="text-2xl font-headline font-bold text-on-surface leading-tight">
                  v2.0 Performance Unit
                </p>
              </div>
              <p className="text-on-surface-variant font-body text-base">
                Crafted in Pune, MH
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Decorative Glow */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
