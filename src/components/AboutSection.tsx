import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Film, Sparkles, Award, User, Layers, Scissors, Volume2, VolumeX } from "lucide-react";
import { PORTFOLIO_USER } from "../data";

// Animated Counter component inside About for smooth viewport trigger
interface CounterProps {
  value: string;
  duration?: number;
}

function AnimatedCounter({ value, duration = 1.5 }: CounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const numericPart = parseInt(value, 10);
  const isPlus = value.endsWith("+");

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setDisplayValue(Math.floor(progress * numericPart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, numericPart, duration]);

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-brand tracking-tight tabular-nums">
      {displayValue}
      {isPlus ? "+" : ""}
    </span>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const verticalRef = useRef<HTMLVideoElement>(null);
  const [isVerticalMuted, setIsVerticalMuted] = useState(true);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleVerticalMuted = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (verticalRef.current) {
      verticalRef.current.muted = !verticalRef.current.muted;
      setIsVerticalMuted(verticalRef.current.muted);
    }
  };

  const stats = [
    { value: "50+", label: "Projects Completed", desc: "Reels, YouTube, Promos", icon: Film },
    { value: "20+", label: "Happy Clients", desc: "Worldwide creators & brands", icon: User },
    { value: "1+", label: "Years Experience", desc: "Non-stop raw editing hustle", icon: Award }
  ];

  const tools = [
    { name: "Adobe Premiere Pro", desc: "Primary timeline workspace", logo: "Premiere" },
    { name: "Adobe After Effects", desc: "Glitches, templates, tracking", logo: "After Effects" },
    { name: "CapCut Pro", desc: "Fast-pacing mobile/vertical reels", logo: "CapCut" },
    { name: "DaVinci Resolve", desc: "Industry-standard color grading", logo: "DaVinci" }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background flare gradient blur for high-end aesthetic */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/12 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[400px] h-[400px] bg-brand/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
              // REVELATION
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
              CREATIVE VISION
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-mono text-xs text-neutral-500 tracking-wider uppercase">
              [ PROFILE SPECIFICATIONS / JOSHWA V. ]
            </p>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Left Column - Large Premium Creative Portrait Video mockup */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[310px]">
              
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                onClick={toggleVerticalMuted}
                className="relative w-full aspect-[9/16] bg-[#0d0d0d] p-[10px] rounded-[42px] border-4 border-neutral-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] group cursor-none"
              >
                {/* Physical Side Buttons representation on the phone frame */}
                <div className="absolute top-20 -left-[14px] w-[4px] h-10 bg-neutral-700 rounded-r" />
                <div className="absolute top-34 -left-[14px] w-[4px] h-14 bg-neutral-700 rounded-r" />
                <div className="absolute top-52 -left-[14px] w-[4px] h-14 bg-neutral-700 rounded-r" />
                <div className="absolute top-28 -right-[14px] w-[4px] h-16 bg-neutral-700 rounded-l" />

                {/* Device Dynamic Notch Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
                  <span className="text-[6px] font-mono text-neutral-600 tracking-tighter">SPEAKER</span>
                </div>

                {/* Video screen view bounded inside the physical frame border */}
                <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-black z-20 flex flex-col justify-end">
                  
                  {/* Portrait Edit Video representation */}
                  <video
                    ref={verticalRef}
                    src="https://res.cloudinary.com/dt9egaeld/video/upload/v1780675355/lamboo_prob3_a2jque.mp4"
                    autoPlay
                    loop
                    muted={isVerticalMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark and premium vignette layers for high-end text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/25 pointer-events-none z-15" />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-15" />

                  {/* High visual contrast floating Sound Toggler Button */}
                  <div className="absolute top-6 right-5 z-25">
                    <button
                      type="button"
                      onClick={toggleVerticalMuted}
                      className="p-2 ml-auto rounded-full bg-black/80 hover:bg-brand hover:text-black border border-neutral-800 hover:border-brand text-white transition-all shadow-lg flex items-center justify-center cursor-none group/btn pointer-events-auto"
                    >
                      {!isVerticalMuted ? (
                        <Volume2 className="w-4 h-4 text-brand group-hover/btn:text-black" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-neutral-400 group-hover/btn:text-black" />
                      )}
                    </button>
                  </div>

                  {/* Dynamic portrait state floating badge */}
                  <div className="absolute top-6 left-5 z-20 font-mono text-[8px] text-brand bg-black/85 px-2.5 py-1 tracking-widest border border-neutral-900 uppercase">
                    PORTRAIT REEL
                  </div>

                  {/* Simulated Acoustic Wave Bars reacting when Sound is active */}
                  {!isVerticalMuted && (
                    <div className="absolute bottom-16 right-5 z-25 flex items-end gap-[2px] h-6">
                      <span className="w-0.5 bg-brand animate-pulse h-3" />
                      <span className="w-0.5 bg-brand animate-pulse h-5" style={{ animationDelay: "0.2s" }} />
                      <span className="w-0.5 bg-brand animate-pulse h-2" style={{ animationDelay: "0.4s" }} />
                      <span className="w-0.5 bg-brand animate-pulse h-4" style={{ animationDelay: "0.1s" }} />
                    </div>
                  )}

                  {/* Metadata overlays informing context */}
                  <div className="relative z-20 p-5 select-none pointer-events-none text-left">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39ff14] animate-ping" />
                      <p className="font-mono text-[9px] text-[#39ff14] tracking-widest uppercase">
                        ACTIVE STREAM
                      </p>
                    </div>

                    <h4 className="font-display font-black text-base text-white tracking-wide uppercase leading-tight">
                      MERCURY FLUIDS / LAMBO
                    </h4>

                    <p className="font-mono text-[9px] text-neutral-400 mt-2 uppercase flex items-center justify-between tracking-wider">
                      <span>PACING / SPEED RAMP</span>
                      <span className="text-brand">AUDIO: {isVerticalMuted ? "MUTED" : "LIVE"}</span>
                    </p>
                  </div>

                </div>

              </motion.div>

              {/* Float aesthetic corner crop markers representing editing viewport masks */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-brand pointer-events-none z-10" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-brand pointer-events-none z-10" />

            </div>

            {/* Prompt indicator badge below the device mockup */}
            <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-neutral-950 border border-neutral-900 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand" />
              </span>
              <span className="font-mono text-[8px] text-neutral-400 tracking-wider uppercase">
                Tap widget speaker to unmute audio beats
              </span>
            </div>

          </div>

          {/* Right Column - Text Bio and tools */}
          <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white uppercase tracking-wide mb-6 group/name cursor-none">
                Hi, I'm <span className="text-brand transition-all duration-300">
                  <span className="inline group-hover/name:hidden">Joshwa</span>
                  <span className="hidden group-hover/name:inline">spyx</span>
                </span>
              </h3>
              
              <p className="text-neutral-300 font-light text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Creative and detail-oriented Video Editor with hands-on experience crafting engaging visual content for creators, businesses and events. I prioritize pacing, storytelling rhythm, and sharp auditory design, elevating simple timelines into complete premium cinematic works of art.
              </p>

              {/* specialized suite software modules section */}
              <div className="mb-10">
                <h4 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
                  [ Specialized Software Platforms ]
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {tools.map((t, idx) => (
                    <div
                      key={t.name}
                      id={`about-tool-${idx}`}
                      className="p-4 bg-neutral-950 border border-neutral-900 flex flex-col justify-start hover:border-brand-muted transition-colors rounded-none group"
                    >
                      <div className="text-brand font-mono font-bold text-lg mb-1 group-hover:scale-105 transition-transform">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <div className="font-display text-xs font-bold text-white uppercase">
                        {t.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 gap-4 border-t border-neutral-900 pt-8 mt-4">
                {stats.map((stat, i) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={i} id={`about-stat-${i}`} className="flex flex-col">
                      <div className="flex items-baseline gap-1 mb-2">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <span className="font-display text-xs font-bold uppercase text-white tracking-wider mb-1">
                        {stat.label}
                      </span>
                      <span className="font-sans text-[11px] text-neutral-500">
                        {stat.desc}
                      </span>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
