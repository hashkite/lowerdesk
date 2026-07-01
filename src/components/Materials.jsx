import ScrollReveal from './ScrollReveal';
import bambooImg from '../assets/images/yogeek/bamboo.png';
import steelImg from '../assets/images/yogeek/image_7_2.png';
import frameRetractedImg from '../assets/images/yogeek/uppeal_4_leg.png';

export default function Materials() {
  return (
    <section
      id="specs"
      aria-labelledby="specs-heading"
      className="py-20 lg:py-32 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column — Text and Small Previews */}
          <div>
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-6 block">
                Sustainably Sourced
              </span>
              <h2
                id="specs-heading"
                className="font-headline text-4xl lg:text-5xl mb-8 text-on-surface leading-tight font-extrabold"
              >
                Material Excellence.
              </h2>
              <p className="font-body text-lg text-on-surface-variant mb-12 leading-relaxed">
                We use FSC-certified bamboo and sustainable teak, treated with natural oils to preserve the wood's breathability and tactile warmth.
              </p>
            </ScrollReveal>

            {/* Asymmetric Image Previews */}
            <div className="grid grid-cols-2 gap-8">
              <ScrollReveal delay={100} className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    src={bambooImg}
                    alt="Close-up of premium vertical grain laminated bamboo desk surface"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <span className="font-label text-[11px] uppercase tracking-wider text-outline font-bold block text-center">
                  Vertical Bamboo
                </span>
              </ScrollReveal>

              <ScrollReveal delay={200} className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden border border-outline-variant">
                  <img
                    src={steelImg}
                    alt="Precision laser welded joints on cold-rolled steel desk framework"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <span className="font-label text-[11px] uppercase tracking-wider text-outline font-bold block text-center">
                  Architectural Steel
                </span>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column — Large Product Visual */}
          <ScrollReveal delay={300} className="bg-white p-2 rounded-2xl shadow-xl border border-outline-variant">
            <img
              src={frameRetractedImg}
              alt="Yogeek fully retracted desk frame and solid timber configuration"
              className="w-full h-auto rounded-xl"
              loading="lazy"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
