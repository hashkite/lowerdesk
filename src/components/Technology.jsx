import ScrollReveal from './ScrollReveal';
import motorImage from '../assets/images/motor.jpg';
import certsImage from '../assets/images/certifications.jpg';

const features = [
  {
    id: 'height-range',
    icon: 'straighten',
    title: '49cm – 120cm Range',
    description: "A custom-tuned motor system provides the industry's widest vertical travel range.",
  },
  {
    id: 'speed',
    icon: 'shutter_speed',
    title: '32mm/s Silent Transition',
    description: 'Ultra-quiet glide tech ensures you stay focused while the workspace evolves around you.',
  },
  {
    id: 'capacity',
    icon: 'precision_manufacturing',
    title: '100kg Lift Capacity',
    description: 'Industrial grade SPCC steel frame handles multi-monitor setups with ease.',
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      aria-labelledby="tech-heading"
      className="py-vignette-padding bg-indigo-950 text-white overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left — Text Content */}
        <ScrollReveal>
          <h2
            id="tech-heading"
            className="font-display text-display-lg mb-8"
          >
            Electric standing desk engineering that moves with intent
          </h2>

          <div className="space-y-12">
            {features.map((feature) => (
              <div key={feature.id} className="flex gap-6">
                <div
                  className="w-12 h-12 rounded-full border border-indigo-400/20 flex items-center justify-center shrink-0 bg-indigo-900"
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-indigo-400">
                    {feature.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-indigo-200/70">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Right — Image Grid */}
        <ScrollReveal className="grid grid-cols-2 gap-4">
          <img
            src={motorImage}
            alt="Detailed view of the desk lifting mechanism and high-quality motor assembly"
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 border border-indigo-400/10"
            width="300"
            height="400"
            loading="lazy"
          />
          <img
            src={certsImage}
            alt="Warranty and quality certification badges for Lowerdesk desk components"
            className="rounded-xl grayscale hover:grayscale-0 transition-all duration-500 mt-12 border border-indigo-400/10"
            width="300"
            height="400"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
