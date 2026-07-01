import ScrollReveal from './ScrollReveal';
import frameDetailImg from '../assets/images/yogeek/we_are_uppeal.png';
import ctrlPanelImg from '../assets/images/yogeek/yogeek_desk_detail.png';

const features = [
  {
    id: 'dual-motor',
    icon: 'precision_manufacturing',
    title: 'Dual-Motor Synchronization',
    description: 'Intelligent controllers ensure both legs rise in perfect micro-alignment, within 0.1mm tolerance.',
  },
  {
    id: 'whisper-quiet',
    icon: 'shutter_speed',
    title: 'Whisper-Quiet Action',
    description: 'Decibel levels below 45dB. Performance that moves silently, preserving your concentration.',
  },
  {
    id: 'honest-materials',
    icon: 'workspace_premium',
    title: 'Honest Materials',
    description: 'Sustainable solid teak and bamboo meet cold-rolled architectural steel for a lifetime of service.',
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      aria-labelledby="tech-heading"
      className="bg-surface-container py-20 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Column — Visual Stack */}
          <ScrollReveal className="relative">
            <div className="bg-white rounded-xl overflow-hidden shadow-2xl border border-outline-variant">
              <img
                src={frameDetailImg}
                alt="Engineering detail: Under-desk carbon steel framework and telescopic lift columns"
                className="w-full h-auto object-cover object-center"
                loading="lazy"
              />
            </div>
            
            {/* Technical Overlay Badge */}
            <div className="absolute -top-8 -right-8 bg-white/95 backdrop-blur p-6 rounded-xl shadow-2xl border border-primary/10 hidden md:block">
              <div className="font-headline text-3xl text-primary font-bold">3200N</div>
              <div className="font-label text-[11px] uppercase tracking-wider text-on-surface-variant font-bold">
                Lifting Capacity
              </div>
            </div>

            {/* Smart Controller Detail Popout */}
            <div className="absolute -bottom-10 left-10 w-48 h-48 bg-white rounded-xl shadow-xl border border-outline-variant overflow-hidden hidden lg:block group">
              <img
                src={ctrlPanelImg}
                alt="Smart OLED control panel close-up on solid timber desktop"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-primary/95 text-[10px] text-white px-2 py-0.5 rounded font-label font-bold tracking-wider">
                SMART CTRL
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column — Engineering details */}
          <div className="pl-0 lg:pl-12">
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-6 block">
                Surgical Engineering
              </span>
              <h2
                id="tech-heading"
                className="font-headline text-4xl lg:text-5xl mb-12 text-on-surface leading-tight font-extrabold"
              >
                Precision in Motion.
              </h2>

              <div className="space-y-10">
                {features.map((feature) => (
                  <div key={feature.id} className="flex gap-8 group">
                    <div
                      className="bg-primary/10 p-4 rounded-xl h-fit group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-4xl">
                        {feature.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-headline text-xl font-bold mb-3 text-on-surface">
                        {feature.title}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
