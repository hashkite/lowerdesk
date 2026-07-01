import ScrollReveal from './ScrollReveal';
import spineImg from '../assets/images/yogeek/stright_posture_of_yogic_desk.png';
import woodSurfaceImg from '../assets/images/yogeek/rohit_standing.png';

export default function WorkingModes() {
  return (
    <section aria-labelledby="trilogy-heading" className="py-20 lg:py-32">
      <h2 id="trilogy-heading" className="sr-only">
        Yogeek Biological Trilogy
      </h2>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* State I: Grounded */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="md:col-span-5 order-2 md:order-1">
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-6 block">
                State I: Grounded
              </span>
              <h3 className="font-headline text-4xl lg:text-5xl mb-8 text-on-surface leading-tight font-extrabold">
                The 49cm<br />
                Revolution.
              </h3>
              <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
                Modern ergonomics neglected the floor for centuries. Yogeek reclaims this space, allowing you to work in positions that naturally restore joint mobility.
              </p>
              <div className="flex items-center gap-16">
                <div>
                  <div className="font-display text-4xl lg:text-5xl text-on-surface font-bold">120°</div>
                  <div className="font-label text-[11px] uppercase tracking-wider text-outline">
                    Hip Extension
                  </div>
                </div>
                <div>
                  <div className="font-display text-4xl lg:text-5xl text-primary font-bold">0</div>
                  <div className="font-label text-[11px] uppercase tracking-wider text-outline">
                    Back Fatigue
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <ScrollReveal delay={100}>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  src={spineImg}
                  alt="Biological movement focus showing spinal alignment and angle vectors"
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* State II: Peak Focus */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl border border-outline-variant">
                <img
                  src={woodSurfaceImg}
                  alt="Elevated standing state on Yogeek showing rigid dual lift columns and solid teak tabletop"
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5 pl-0 md:pl-12">
            <ScrollReveal delay={100}>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-6 block">
                State II: Peak Focus
              </span>
              <h3 className="font-headline text-4xl lg:text-5xl mb-8 text-on-surface leading-tight font-extrabold">
                Elevated<br />
                Performance.
              </h3>
              <p className="font-body text-lg text-on-surface-variant mb-10 leading-relaxed">
                At its peak of 120cm, Yogeek provides a rock-solid platform. Engineered for zero lateral wobble, preserving your deepest flow states.
              </p>
              <a
                href="#specs"
                className="bg-on-surface text-background px-10 py-4 font-label text-[13px] font-bold tracking-[0.08em] uppercase rounded-lg hover:bg-primary hover:text-white transition-all shadow-lg inline-block"
              >
                View Tech Specs
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
