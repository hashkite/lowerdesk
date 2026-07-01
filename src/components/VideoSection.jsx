import { useState, useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <section
      id="video-showcase"
      aria-labelledby="video-heading"
      className="py-20 lg:py-32 bg-surface-container-low"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column — Text info */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal>
              <span className="font-label text-[13px] font-bold tracking-[0.08em] uppercase text-primary mb-2 block">
                Kinetic Demonstration
              </span>
              <h2
                id="video-heading"
                className="font-headline text-4xl lg:text-5xl text-on-surface font-extrabold leading-tight"
              >
                Kinetic Freedom in Motion.
              </h2>
              <p className="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Watch the synchronized dual motors seamlessly transition from the restorative 49cm floor-sitting height up to 120cm for active standing focus. Near-silent, effortless, and engineered for a lifetime of movement.
              </p>
              <div className="pt-4 flex flex-wrap gap-6 items-center">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    volume_off
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider text-outline font-bold">
                    Whisper Silent Motor
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary" aria-hidden="true">
                    autorenew
                  </span>
                  <span className="font-label text-xs uppercase tracking-wider text-outline font-bold">
                    Smooth Transition
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column — Large Video Player */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={150}>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-white group">
                <video
                  ref={videoRef}
                  src="/yogeek-desk-video.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  playsInline
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  aria-label="Yogeek sit-to-stand adjustable desk motion demonstration"
                />

                {/* Custom Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={handlePlayToggle}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 focus:outline-none z-10"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform duration-300">
                      <span className="material-symbols-outlined text-4xl ml-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
