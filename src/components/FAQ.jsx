import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const faqs = [
  {
    question: 'What makes Yogeek Pro different from a standard standing desk?',
    answer:
      "Traditional standing desks stop descending at around 65cm. Yogeek Pro is the only electric standing desk engineered to go all the way down to 49cm. This allows you to work in natural, restorative floor-sitting postures (like cross-legged, seiza, or squatting) alongside standard chair sitting and standing states.",
  },
  {
    question: 'Does the desk wobble when extended to its maximum standing height?',
    answer:
      'No. The frame is constructed from carbon-enriched, cold-rolled steel with tapered columns that widen at the base. Every joint is laser-welded within a 0.01mm tolerance, ensuring a rigid unibody foundation with zero lateral wobble even at its peak height of 120.5cm.',
  },
  {
    question: 'How are the wooden tabletops seasoned for India’s climate?',
    answer:
      "Traditional solid wood surfaces tend to warp due to humidity changes. To prevent this, our FSC-certified bamboo and teak table tops undergo a proprietary 14-day gradual desiccation process. This seasons the wood to resist expansion and contraction, guaranteeing structural stability across India's extreme seasonal shifts.",
  },
  {
    question: 'How loud is the desk when transitioning between sitting and standing?',
    answer:
      'We use synchronized, industrial-grade dual motors that run below 35dB—meaning the desk transitions in near-silence. The movement is smooth and fluid, preserving your concentration and workspace peace.',
  },
  {
    question: 'What are the shipping, warranty, and trial terms?',
    answer:
      'We provide free, fully insured shipping across India. Your desk is protected by a comprehensive 3-Year Gold Warranty. Additionally, we support a 30-day risk-free trial, allowing you to test the biological benefits of floor-to-standing movement in your own space.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 lg:py-32 bg-surface-container-lowest">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <ScrollReveal className="text-center mb-16">
          <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
            Common Inquiries
          </span>
          <h2 id="faq-heading" className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                delay={index * 50}
                className="border-b border-outline-variant/30 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-5 text-left font-headline text-lg lg:text-xl font-bold text-on-surface hover:text-primary transition-colors focus:outline-none focus:text-primary group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-btn-${index}`}
                >
                  <span>{faq.question}</span>
                  <span
                    className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-transform duration-300 ml-4 shrink-0"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-btn-${index}`}
                  className="transition-all duration-300 overflow-hidden"
                  style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="font-body text-base text-on-surface-variant leading-relaxed pb-6">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
