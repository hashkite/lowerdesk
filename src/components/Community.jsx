import ScrollReveal from './ScrollReveal';
import mumbaiImg from '../assets/images/yogeek/yogeek_desk.png';
import berlinImg from '../assets/images/yogeek/rohit_standing.png';
import blrImg from '../assets/images/yogeek/yogeek_desk_detail.png';
import sfImg from '../assets/images/yogeek/we_are_uppeal.png';

const workspaces = [
  {
    id: 'mumbai',
    location: 'MUMBAI, INDIA',
    title: "Aditya's High-Rise Sanctuary",
    image: mumbaiImg,
    alt: 'Minimalist home office workspace in a Mumbai apartment featuring a Yogeek at sunset',
    colSpan: 'md:col-span-8',
    height: 'h-[300px] md:h-[400px]',
  },
  {
    id: 'berlin',
    location: 'BERLIN, DE',
    title: 'Organic Flow Studio',
    image: berlinImg,
    alt: 'Bright plant-filled creative studio in Berlin with a Yogeek in bamboo finish',
    colSpan: 'md:col-span-4',
    height: 'h-[300px] md:h-[400px]',
  },
  {
    id: 'bengaluru',
    location: 'BENGALURU, INDIA',
    title: 'The Dev-Cave Precision',
    image: blrImg,
    alt: 'Close-up of keyboard, monitor, and clean desk setup with Yogeek timber edge',
    colSpan: 'md:col-span-4',
    height: 'h-[320px] md:h-[500px]',
  },
  {
    id: 'sf',
    location: 'SAN FRANCISCO, CA',
    title: 'Collective Momentum',
    image: sfImg,
    alt: 'A collaborative office space in SF featuring multiple Yogeek workstations',
    colSpan: 'md:col-span-8',
    height: 'h-[320px] md:h-[500px]',
  },
];

const testimonials = [
  {
    id: 'blr-dev',
    icon: 'location_on',
    text: '"In the chaos of Bengaluru traffic and long sprint cycles, my Yogeek is the one thing that keeps me grounded. The ability to shift from standing to floor-sitting during a deep-work block is revolutionary."',
    author: 'Karthik S.',
    title: 'Senior Architect, Bengaluru',
  },
  {
    id: 'pune-designer',
    icon: 'engineering',
    text: '"Engineered in Pune, for the world. As a product designer myself, I appreciate the absolute lack of wobble even at full height. It\'s a piece of kinetic art that actually works."',
    author: 'Meera K.',
    title: 'Industrial Designer, Pune',
  },
  {
    id: 'gurgaon-corporate',
    icon: 'speed',
    text: '"High-velocity output requires high-velocity movement. Yogeek isn\'t a furniture choice; it\'s a performance upgrade. Gurgaon\'s fast-paced corporate culture needs this biological edge."',
    author: 'Rohan D.',
    title: 'Venture Lead, Gurgaon',
  },
];

export default function Community() {
  return (
    <section id="community" aria-labelledby="community-heading" className="bg-surface overflow-hidden">
      {/* 1. Global Workspaces Bento Grid */}
      <div className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-surface-container-low max-w-[1440px] mx-auto">
        <ScrollReveal className="mb-16">
          <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-2 block">
            Lifestyle
          </span>
          <h2 id="community-heading" className="font-headline text-4xl lg:text-5xl text-on-surface mb-6 font-extrabold">
            Global Workspaces
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full mb-8"></div>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Verified workspaces from our global community. Precision engineering meets personal expression.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {workspaces.map((ws) => (
            <ScrollReveal
              key={ws.id}
              className={`${ws.colSpan} ${ws.height} group relative img-container`}
            >
              <img
                src={ws.image}
                alt={ws.alt}
                className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-100"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <span className="font-label text-[11px] font-bold tracking-wider text-primary-fixed uppercase block mb-1">
                  {ws.location}
                </span>
                <p className="font-headline text-xl text-white font-bold leading-tight">
                  {ws.title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* 2. The Yogi Connection */}
      <div className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
                The Yogi Connection
              </span>
              <h3 className="font-headline text-4xl lg:text-5xl text-on-surface mb-8 leading-tight font-extrabold">
                Biological Freedom at <span className="text-primary italic">49cm</span>.
              </h3>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-5 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary" aria-hidden="true">
                    <span className="material-symbols-outlined text-3xl">accessibility_new</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-1">Hip Mobility</h4>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">
                      Low-profile mode allows for floor-seated 'Seiza' or 'Cross-legged' positions, maintaining active hip rotation throughout the workday.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary" aria-hidden="true">
                    <span className="material-symbols-outlined text-3xl">self_improvement</span>
                  </div>
                  <div>
                    <h4 className="font-headline text-xl font-bold text-on-surface mb-1">Pelvic Alignment</h4>
                    <p className="font-body text-base text-on-surface-variant leading-relaxed">
                      By bringing the workspace down to the biological floor level, we eliminate the psoas-shortening trap of traditional seating.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#specs"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-label text-[13px] font-bold tracking-[0.08em] uppercase hover:bg-primary hover:text-white transition-all inline-block"
              >
                Explore Ergonomics
              </a>
            </ScrollReveal>
          </div>

          <div className="md:col-span-6 md:col-start-8">
            <ScrollReveal className="relative py-12">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-2" aria-hidden="true" />
              <div className="relative img-container h-[350px] sm:h-[450px] md:h-[550px] border border-outline-variant/30">
                <img
                  src={mumbaiImg}
                  alt="A person practicing mindfulness and working at a Yogeek set to its 49cm floor height."
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 left-4 md:-left-8 bg-surface-container-lowest p-6 rounded-lg border border-outline-variant/50 max-w-[280px] md:max-w-xs shadow-xl">
                <p className="font-body text-sm text-on-surface italic leading-relaxed">
                  "The 49cm mode changed how I conceptualize my 'office'. My lower back has never felt more alive."
                </p>
                <p className="font-label text-[11px] font-bold tracking-wider text-primary mt-4 uppercase">
                  — ANANYA R., YOGA INSTRUCTOR
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 3. Community Voices Testimonials */}
      <div className="py-20 lg:py-32 px-6 md:px-12 lg:px-20 bg-surface-container-lowest max-w-[1440px] mx-auto border-t border-outline-variant/20">
        <ScrollReveal className="text-center mb-16 max-w-2xl mx-auto">
          <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-4 block">
            Community Voice
          </span>
          <h3 className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold">
            Voice of the Collective
          </h3>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <ScrollReveal
              key={t.id}
              delay={idx * 100}
              className="bg-surface-container-low p-8 lg:p-10 rounded-lg border border-outline-variant/30 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 text-primary" aria-hidden="true">
                  <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {t.icon}
                  </span>
                </div>
                <p className="font-body text-base lg:text-lg text-on-surface mb-8 leading-relaxed italic">
                  {t.text}
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center text-primary" aria-hidden="true">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <p className="font-label text-[13px] font-bold tracking-wider text-on-surface">
                    {t.author}
                  </p>
                  <p className="text-xs text-on-surface-variant font-medium mt-0.5">
                    {t.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
