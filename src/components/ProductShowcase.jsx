import ScrollReveal from './ScrollReveal';
import floorCushionImg from '../assets/images/yogeek/rohit_floor_cushion.png';
import chairImg from '../assets/images/yogeek/rohit_chair.png';

export default function ProductShowcase() {
  return (
    <section
      id="design"
      aria-labelledby="versatility-heading"
      className="bg-surface-container-lowest py-20 lg:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-primary font-label text-[13px] font-bold tracking-[0.08em] uppercase mb-4 block">
              Grounded Versatility
            </span>
            <h2
              id="versatility-heading"
              className="font-headline text-4xl lg:text-5xl text-on-surface leading-tight"
            >
              Your State.<br />
              <span className="text-on-surface-variant font-light">Evolved daily.</span>
            </h2>
          </div>
          <div className="text-right">
            <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
              LIVE INVENTORY: 42 UNITS REMAINING
            </span>
          </div>
        </ScrollReveal>

        {/* Two-Column Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Floor Sitting Card */}
          <ScrollReveal as="article" className="organic-card p-8 md:p-12 flex flex-col justify-between min-h-[450px] group transition-all duration-500 hover:shadow-2xl cursor-pointer bg-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-0 group-hover:opacity-15 transition-all duration-500 pointer-events-none">
              <img
                src={floorCushionImg}
                alt="Floor cushion and Yogeek floor sitting position detail"
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-12">
                <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary">
                  Current Focus
                </span>
                <span className="font-headline text-2xl text-primary font-bold">24.02</span>
              </div>
              <h3 className="font-headline text-3xl mb-6 text-on-surface">Floor Sitting</h3>
              <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed">
                Reclaiming ancestral posture. The 49cm mode allows for deep hip opening and pelvic alignment while staying productive.
              </p>
            </div>

            <div className="relative z-10">
              <div className="editorial-line-soft my-8"></div>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="font-label text-[11px] uppercase tracking-wider text-outline">
                    Target Elevation
                  </span>
                  <div className="font-headline text-xl text-on-surface font-bold">49.0 CM</div>
                </div>
                <a
                  href="#specs"
                  className="bg-primary/5 text-primary px-8 py-3 rounded-lg font-label text-[13px] font-bold tracking-[0.08em] uppercase group-hover:bg-primary group-hover:text-white transition-all"
                >
                  View Details
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Chair Mode Card */}
          <ScrollReveal as="article" delay={100} className="organic-card p-8 md:p-12 flex flex-col justify-between min-h-[450px] group transition-all duration-500 hover:shadow-2xl cursor-pointer bg-white relative overflow-hidden">
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-0 group-hover:opacity-15 transition-all duration-500 pointer-events-none">
              <img
                src={chairImg}
                alt="Workspace chair and Yogeek standard elevation detail"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-12">
                <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-on-surface-variant">
                  Active Flow
                </span>
                <span className="font-headline text-2xl text-on-surface-variant font-bold">06.03</span>
              </div>
              <h3 className="font-headline text-3xl mb-6 text-on-surface">Focus Chair</h3>
              <p className="font-body text-base text-on-surface-variant max-w-sm leading-relaxed">
                Standard ergonomic alignment. Seamlessly transition between traditional seated work and restorative biological movement.
              </p>
            </div>

            <div className="relative z-10">
              <div className="editorial-line-soft my-8"></div>
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <span className="font-label text-[11px] uppercase tracking-wider text-outline">
                    Target Elevation
                  </span>
                  <div className="font-headline text-xl text-on-surface-variant font-bold">72.0 CM</div>
                </div>
                <a
                  href="#specs"
                  className="bg-primary/5 text-primary px-8 py-3 rounded-lg font-label text-[13px] font-bold tracking-[0.08em] uppercase group-hover:bg-primary group-hover:text-white transition-all"
                >
                  View Details
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
