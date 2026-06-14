import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { Award, Briefcase, Calendar, ChevronRight, CheckCircle2, Video } from "lucide-react";
import { SKILLS, EXPERIENCES } from "../data";

// Custom individual progress bar containing scroll-in triggers
interface ProgressBarProps {
  key?: string;
  name: string;
  percentage: number;
  level: string;
}

function ProgressBar({ name, percentage, level }: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        setWidth(percentage);
      }, 100);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="space-y-2 select-none">
      <div className="flex justify-between items-baseline font-mono">
        <span className="text-white text-sm font-bold uppercase tracking-wider">{name}</span>
        <div className="flex gap-2 items-center text-xs text-neutral-400">
          <span className="text-[10px] uppercase text-brand tracking-widest">[{level}]</span>
          <span className="text-brand font-extrabold text-sm tabular-nums">{percentage}%</span>
        </div>
      </div>
      
      {/* ProgressBar track */}
      <div className="w-full h-[5px] bg-neutral-900 overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full bg-brand rounded-none transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsAndTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="specs-skills"
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background ambient lighting glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-70" />

      {/* Structural layout vertical grids */}
      <div className="absolute top-0 bottom-0 left-[30%] w-[1px] bg-neutral-800/60 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 left-[70%] w-[1px] bg-neutral-800/60 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Two-column layout: Left Skills, Right Professional Career Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column Section 6 - SKILLS (Animated Progress Bars) */}
          <div className="col-span-1 lg:col-span-5 space-y-12">
            <div>
              <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
                // BENCHMARKING
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase">
                TIMELINE SPECS
              </h2>
              <div className="h-[2px] w-12 bg-brand mt-4" />
            </div>

            <p className="font-sans text-neutral-400 text-xs sm:text-sm font-light leading-relaxed max-w-md">
              Highly calibrated capabilities across raw rendering formats, stylistic pacing structures, VFX templates, and smart tracking optimizations.
            </p>

            <div className="space-y-6 pt-4">
              {SKILLS.map((skill) => (
                <ProgressBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  level={skill.level}
                />
              ))}
            </div>

            {/* Diagnostic system info badge */}
            <div id="skills-spec-badge" className="p-4 bg-neutral-950 border border-neutral-900 font-mono text-[9px] text-neutral-500 uppercase tracking-widest space-y-2">
              <div className="text-brand font-bold">[ POST-PRODUCTION METRICS VERIFICATION ]</div>
              <div>• Render Pipeline: HW Acceleration / GPU Enabled</div>
              <div>• Target FPS output: 24 / 30 / 60 True Hertz</div>
              <div>• Latency Sync: 0ms Match Frame Compliant</div>
            </div>
          </div>

          {/* Right Column Section 7 - EXPERIENCE (Timeline Design) */}
          <div className="col-span-1 lg:col-span-7 space-y-12">
            <div>
              <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
                // ENGAGEMENTS
              </span>
              <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase">
                CAREER CHRONOLOGY
              </h2>
              <div className="h-[2px] w-12 bg-brand mt-4" />
            </div>

            {/* Timeline element tree structure */}
            <div className="space-y-10 relative pl-6 sm:pl-8 before:absolute before:top-1.5 before:bottom-1.5 before:left-[1px] before:w-[2px] before:bg-neutral-800">
              {EXPERIENCES.map((exp, idx) => (
                <motion.div
                  key={idx}
                  id={`timeline-card-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="relative space-y-4"
                >
                  {/* Glowing active center anchor node indicator */}
                  <div className="absolute -left-[31px] sm:-left-[39px] w-[14px] h-[14px] bg-[#050505] border-2 border-brand rounded-full z-10 flex items-center justify-center">
                    <div className="w-[4px] h-[4px] bg-brand rounded-full" />
                  </div>

                  {/* Header metadata details */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-900 pb-3">
                    <div>
                      <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide">
                        {exp.role}
                      </h3>
                      <div className="text-brand font-mono text-xs uppercase tracking-widest mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="font-mono text-[10px] text-neutral-400 bg-neutral-950 px-3 py-1 border border-neutral-900 flex items-center gap-1.5 w-fit rounded-none">
                      <Calendar className="w-3 h-3 text-brand" />
                      <span>{exp.period.toUpperCase()}</span>
                    </div>
                  </div>

                  {/* General overview paragraph */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    {exp.highlights.map((hlt, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand shrink-0 mt-0.5" />
                        <span className="font-sans text-xs text-neutral-300 font-light leading-tight">
                          {hlt}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
