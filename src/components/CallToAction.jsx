import ScrollReveal from './ScrollReveal';
import ctaBg from '../assets/images/yogeek/yogeek_desk.png';

export default function CallToAction() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-20 lg:py-32 relative overflow-hidden bg-white"
    >
      {/* Background Image with blur overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaBg}
          alt="A sleek, modern workstation featuring the Yogeek Pro in a warm, natural home office."
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" aria-hidden="true" />
      </div>

      <ScrollReveal className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-white opacity-90 mb-4 block">
          Secure Your Unit
        </span>
        <h2
          id="cta-heading"
          className="font-display text-[clamp(32px,6vw,56px)] leading-[1.2] mb-8 text-white font-extrabold"
        >
          Invest in Your Longevity.
        </h2>
        <p className="text-body-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join over 12,000 high-performers who have traded standard ergonomics for biological alignment. Start your 30-day risk-free trial.
        </p>

        {/* Pricing */}
        <div
          className="bg-white/10 backdrop-blur-md p-1.5 rounded-full inline-flex items-center mb-12 border border-white/20 shadow-xl"
          aria-label="Pricing: Original price Rs. 89,990, discounted price Rs. 37,999"
        >
          <div className="px-8 py-3 font-bold text-white/80">
            <s aria-label="Original price">Rs. 89,990</s>
          </div>
          <div className="px-8 py-3 bg-primary text-white rounded-full font-bold shadow-lg shadow-primary/20">
            Rs. 37,999.00
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="https://fittrock.com/products/yogeek-sit-to-stand-adjustable-desk"
            className="bg-primary text-white px-12 py-5 rounded-full font-label text-[13px] font-bold tracking-[0.08em] uppercase hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 inline-block text-lg"
            aria-label="Buy Yogeek Pro now"
          >
            Buy Yogeek Pro
          </a>
          <a
            href="#reviews"
            className="border-2 border-white text-white px-12 py-4.5 rounded-full font-label text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-white/10 transition-all inline-block text-lg"
            aria-label="Compare models"
          >
            Compare Models
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex justify-center gap-10 text-white/90">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white" aria-hidden="true">
              local_shipping
            </span>
            <span className="text-caption font-bold tracking-wider uppercase">Free Pan-India Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-white" aria-hidden="true">
              verified
            </span>
            <span className="text-caption font-bold tracking-wider uppercase">3-Year Gold Warranty</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
