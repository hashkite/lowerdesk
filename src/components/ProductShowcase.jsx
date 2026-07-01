import ScrollReveal from './ScrollReveal';
import floorImage from '../assets/images/floor-sitting.png';
import controlImage from '../assets/images/control-panel.jpg';

export default function ProductShowcase() {
  return (
    <section
      id="design"
      aria-labelledby="versatility-heading"
      className="py-vignette-padding bg-surface-container-low"
    >
      {/* Section Header */}
      <ScrollReveal className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop text-center mb-20">
        <span className="text-primary font-label text-label-md uppercase tracking-[0.2em] mb-4 block">
          Groundbreaking Versatility
        </span>
        <h2
          id="versatility-heading"
          className="font-display text-display-lg mb-6"
        >
          Ergonomic desk designed for biological movement
        </h2>
        <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Traditional standing desks stop at chair height. Lowerdesk goes further, descending
          to 49cm to enable the most natural human posture: floor sitting.
        </p>
      </ScrollReveal>

      {/* Two-Column Cards */}
      <ScrollReveal className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-gutter">
        <article className="group overflow-hidden rounded-xl bg-white product-shadow border border-indigo-50">
          <div className="p-10">
            <h3 className="font-headline text-headline-lg mb-2 text-on-surface">
              Floor-Sitting Mode
            </h3>
            <p className="font-body text-body-md text-on-surface-variant">
              Unlocks hip mobility and improves digestion. Experience the desk from a new
              perspective.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={floorImage}
              alt="Lowerdesk desk in ultra-low floor sitting mode with ergonomic cushion for comfortable ground-based working"
              className="w-full hover:scale-105 transition-transform duration-700"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
        </article>

        <article className="group overflow-hidden rounded-xl bg-white product-shadow relative mt-0 md:mt-24 border border-indigo-50">
          <div className="p-10">
            <h3 className="font-headline text-headline-lg mb-2 text-on-surface">
              Precision Height Control
            </h3>
            <p className="font-body text-body-md text-on-surface-variant">
              The smart control panel features 4 memory presets and an integrated sedentary
              alarm.
            </p>
          </div>
          <div className="overflow-hidden">
            <img
              src={controlImage}
              alt="Close-up of the Lowerdesk smart control panel on a premium wood tabletop showing digital height readout"
              className="w-full hover:scale-105 transition-transform duration-700"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
}
