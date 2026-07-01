import ScrollReveal from './ScrollReveal';
import modeFloor from '../assets/images/mode-floor.jpg';
import modeChair from '../assets/images/mode-chair.jpg';
import modeStanding from '../assets/images/mode-standing.jpg';

const modes = [
  {
    id: 'floor-sit',
    number: '01',
    title: 'Floor Sit',
    description: 'Boosts circulation and stretches hips naturally. Perfect for deep focus sessions.',
    image: modeFloor,
    alt: 'Man working in floor sitting position at Lowerdesk',
    delay: 0,
  },
  {
    id: 'classic-chair',
    number: '02',
    title: 'Classic Chair',
    description: 'Seamlessly transitions to traditional ergonomic chair heights for standard workflow.',
    image: modeChair,
    alt: 'User in a traditional chair sitting position at Lowerdesk',
    delay: 100,
  },
  {
    id: 'standing',
    number: '03',
    title: 'Standing',
    description: 'Reach heights up to 120cm. Reduces fatigue and keeps your energy levels high.',
    image: modeStanding,
    alt: 'Person standing at Lowerdesk electric standing desk adjusted to full height',
    delay: 200,
  },
];

export default function WorkingModes() {
  return (
    <section
      aria-labelledby="modes-heading"
      className="py-vignette-padding"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop">
        <h2 id="modes-heading" className="sr-only">
          Three Working Modes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modes.map((mode) => (
            <ScrollReveal
              key={mode.id}
              delay={mode.delay}
              as="article"
              className="md:col-span-1 bg-surface-container-high rounded-xl overflow-hidden group border border-indigo-100/30"
            >
              <img
                src={mode.image}
                alt={mode.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                width="400"
                height="256"
                loading="lazy"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-primary text-on-primary text-[10px] px-2 py-1 rounded uppercase font-bold">
                    Mode {mode.number}
                  </span>
                  <h3 className="font-bold text-lg text-on-surface">{mode.title}</h3>
                </div>
                <p className="text-on-surface-variant text-body-md">{mode.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
