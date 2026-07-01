import ScrollReveal from './ScrollReveal';

export default function CallToAction() {
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="py-vignette-padding relative overflow-hidden bg-white"
    >
      {/* Background Radial Gradient */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background: 'radial-gradient(circle at center, rgba(79, 70, 229, 0.1), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <ScrollReveal className="max-w-4xl mx-auto px-margin-mobile text-center">
        <h2
          id="cta-heading"
          className="font-display text-display-lg mb-8 text-on-surface"
        >
          Invest where it counts. You spend a third of your life at your desk.
        </h2>
        <p className="text-body-lg mb-12 text-on-surface-variant">
          Join 12,000+ professionals who have transformed their work-life balance with
          Lowerdesk. Your health is the ultimate investment.
        </p>

        {/* Pricing */}
        <div
          className="bg-indigo-50 p-1 rounded-xl inline-flex mb-12 border border-indigo-100"
          aria-label="Pricing: Original price Rs. 89,990, discounted price Rs. 45,990"
        >
          <div className="px-8 py-3 font-bold text-on-surface-variant">
            <s aria-label="Original price">Rs. 89,990</s>
          </div>
          <div className="px-8 py-3 bg-primary text-on-primary rounded-lg font-bold shadow-lg shadow-primary/20">
            Rs. 37,999.00
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="bg-primary text-on-primary px-12 py-6 rounded-lg font-headline text-label-md hover:bg-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30 inline-block"
            aria-label="Claim your 55 percent discount on Lowerdesk now"
          >
            Claim Your 55% Discount
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex justify-center gap-10 grayscale opacity-80">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface" aria-hidden="true">
              local_shipping
            </span>
            <span className="text-caption text-on-surface">Free Pan-India Shipping</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-on-surface" aria-hidden="true">
              verified
            </span>
            <span className="text-caption text-on-surface">3-Year Gold Warranty</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
