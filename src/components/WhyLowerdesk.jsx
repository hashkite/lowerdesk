import ScrollReveal from './ScrollReveal';
import benefitsImg from '../assets/images/yogeek/why_lowerdesk_benefits.jpg';

export default function WhyLowerdesk() {
  return (
    <section
      id="why-lowerdesk"
      aria-labelledby="why-heading"
      className="py-20 lg:py-32 bg-background border-t border-b border-outline-variant/20"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column — Content */}
          <div className="lg:col-span-6 space-y-8">
            <ScrollReveal>
              <h2
                id="why-heading"
                className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold mb-8"
              >
                Why Lowerdesk?
              </h2>

              <div className="space-y-6 font-body text-base lg:text-lg leading-relaxed text-on-surface-variant">
                <p>
                  <strong className="text-on-surface font-headline font-bold">The Problem:</strong> Most desks force our bodies into prolonged static positions leading to poor posture, stiffness, circulation, and long-term musculoskeletal issues.
                </p>
                <p>
                  <strong className="text-primary font-headline font-bold">The Solution:</strong> Yogeek Pro is the only electric desk that supports floor-sitting to actively promote dynamic movement throughout the day - reducing stiffness and improving posture so you can move more and feel better.
                </p>
              </div>

              <div className="pt-8">
                <a
                  href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
                  className="bg-[#1e2925] text-white hover:bg-primary px-12 py-4.5 rounded-full font-label text-[13px] font-bold tracking-[0.08em] uppercase transition-all shadow-lg inline-block"
                >
                  Shop Now
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Benefits Illustration */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={150}>
              <div className="bg-white border border-outline-variant/30 rounded-2xl p-2 shadow-lg max-w-xl mx-auto overflow-hidden">
                <img
                  src={benefitsImg}
                  alt="Biological benefits: Say goodbye to stiffness, Hello to mobility & posture, and Move more, feel better"
                  className="w-full h-auto rounded-xl"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
