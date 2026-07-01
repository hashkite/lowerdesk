import ScrollReveal from './ScrollReveal';
import heroImage from '../assets/images/hero.jpg';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/30 to-transparent"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <ScrollReveal>
          <h1
            id="hero-title"
            className="font-display text-display-lg md:text-display-xl mb-6 leading-tight"
          >
            The Only Desk That{' '}
            <span className="text-primary">Adapts</span> To Your Lifestyle
          </h1>
          <p className="font-body text-body-lg text-on-surface-variant mb-10 max-w-xl">
            Work on the floor, on a chair, or standing—all with one premium electric desk.
            Engineered for total freedom of movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-lg font-headline text-label-md hover:bg-indigo-700 transition-all shadow-xl shadow-primary/25 hover:scale-105 active:scale-95"
              aria-label="Pre-order Lowerdesk now at 55 percent off"
            >
              Pre-order Now — 55% Off
            </a>
            <button
              className="flex items-center justify-center gap-2 border border-outline px-10 py-5 rounded-lg font-label text-label-md hover:bg-indigo-50 hover:border-primary transition-all"
              aria-label="Watch the film about Lowerdesk design"
            >
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                play_circle
              </span>
              Watch the Film
            </button>
          </div>

          {/* Featured In */}
          <div className="mt-12 flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-label text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
              Featured in
            </span>
            <ul className="flex gap-8" aria-label="Featured publications">
              <li className="font-bold tracking-tighter text-xl text-on-surface">WIRED</li>
              <li className="font-bold tracking-tighter text-xl text-on-surface">DWELL</li>
              <li className="font-bold tracking-tighter text-xl text-on-surface">FORBES</li>
            </ul>
          </div>
        </ScrollReveal>

        {/* Right Content — Product Image */}
        <ScrollReveal delay={200} className="relative">
          {/* Decorative Glow */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10"
            aria-hidden="true"
          />

          <div className="rounded-xl overflow-hidden product-shadow border border-white/40">
            <img
              src={heroImage}
              alt="Lifestyle photography of a woman working at a Lowerdesk desk in a modern home office setting"
              className="w-full object-cover aspect-[4/5] lg:aspect-square"
              width="600"
              height="600"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Floating Height Monitor */}
          <div
            className="absolute bottom-10 -left-10 glass p-6 rounded-xl shadow-2xl max-w-xs hidden md:block border-indigo-100/50"
            aria-label="Live desk height monitoring display showing 49.2 centimeters in floor-sit mode"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-3 h-3 bg-indigo-500 rounded-full" aria-hidden="true">
                <span className="sr-only">Active</span>
              </div>
              <span className="text-label-md font-label text-primary">Live Precision Monitoring</span>
            </div>
            <div className="font-mono text-4xl font-bold tracking-tighter text-on-surface">
              49.2<span className="text-sm">cm</span>
            </div>
            <p className="text-caption font-caption text-secondary mt-1">
              Current height: Floor-sit mode active.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
