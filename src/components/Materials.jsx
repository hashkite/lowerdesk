import ScrollReveal from './ScrollReveal';
import assemblyImage from '../assets/images/assembly.png';
import woodImage from '../assets/images/wood-grain.jpg';

const features = [
  'Cold-rolled SPCC Carbon Steel Frame',
  'Anti-Collision Sensing Technology',
  'Eco-Friendly Formaldehyde-Free Materials',
];

export default function Materials() {
  return (
    <section
      id="specs"
      aria-labelledby="specs-heading"
      className="py-vignette-padding"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left — Image */}
          <ScrollReveal className="lg:w-1/2">
            <div className="relative">
              <img
                src={assemblyImage}
                alt="Lowerdesk desk assembly showing precision-engineered parts and solid wood top"
                className="rounded-xl product-shadow w-full"
                width="600"
                height="500"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 glass p-8 rounded-xl shadow-xl border border-indigo-100">
                <div className="text-primary font-mono font-bold text-3xl mb-1">25mm</div>
                <div className="text-caption font-caption uppercase tracking-[0.2em] text-on-surface-variant">
                  Solid Tabletop
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text */}
          <ScrollReveal delay={200} className="lg:w-1/2">
            <h2
              id="specs-heading"
              className="font-display text-display-lg mb-6"
            >
              Premium materials without compromise
            </h2>
            <p className="font-body text-body-lg text-on-surface-variant mb-8">
              We don't use particle board. Every Lowerdesk tabletop is cut from 25mm
              high-density premium engineered wood with an anti-scratch, anti-bacterial
              finish.
            </p>
            <ul className="space-y-4" role="list">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-indigo-600" aria-hidden="true">
                    check_circle
                  </span>
                  <span className="font-body text-body-md text-on-surface">{feature}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
