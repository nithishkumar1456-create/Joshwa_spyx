import { motion } from "motion/react";
import { Video, Sparkles, Volume2, ArrowUpRight, Check } from "lucide-react";
import { SERVICES } from "../data";

export default function ServicesSection() {
  const iconMap: Record<string, any> = {
    Video: Video,
    Sparkles: Sparkles,
    Volume2: Volume2,
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand/12 blur-[120px] pointer-events-none opacity-80" />

      {/* Decorative vertical coordinates overlay lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-neutral-950 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-neutral-950 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-20">
          <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
            // SPECIALIZATION LIST
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
            POST-PRODUCTION CAPABILITIES
          </h2>
          <div className="h-[2px] w-20 bg-brand mt-4" />
        </div>

        {/* Premium interactive service card grids */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = iconMap[srv.icon] || Video;
            return (
              <motion.div
                key={srv.id}
                id={`services-card-${srv.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  const event = new CustomEvent("booking-triggered", {
                    detail: { serviceTitle: srv.title }
                  });
                  window.dispatchEvent(event);
                }}
                className="group relative p-6 sm:p-10 bg-neutral-950 border border-neutral-900 rounded-none overflow-hidden transition-all duration-300 hover:border-brand-muted cursor-none hover:bg-[#0c0c0c] active:scale-[0.98]"
              >
                {/* Diagonal grid lines back overlay */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Aesthetic Number tracker */}
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 font-mono text-xs sm:text-sm text-neutral-800 font-black group-hover:text-brand/40 transition-colors">
                  0{idx + 1}
                </div>

                {/* Animated graphic icons wrapper */}
                <div className="mb-4 sm:mb-8 p-3 sm:p-4 bg-[#0a0a0a] border border-neutral-900 group-hover:border-brand/40 rounded-none w-fit group-hover:text-black group-hover:bg-brand transition-all duration-300">
                  <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-brand group-hover:text-black transition-colors" />
                </div>

                <h3 className="font-display font-bold text-lg sm:text-2xl text-white uppercase mb-2 sm:mb-4 tracking-wide">
                  {srv.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 sm:mb-8">
                  {srv.description}
                </p>

                {/* Core sub features included inside the service */}
                <div className="space-y-2 sm:space-y-3.5 border-t border-neutral-900/60 pt-4 sm:pt-6">
                  {srv.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-1.5 sm:gap-2.5">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-brand/60" />
                      <span className="font-mono text-[10px] sm:text-[11px] text-neutral-400 tracking-wide uppercase">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Corner link accent visualizer */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <span className="font-mono text-[9px] text-brand uppercase tracking-wider">Book Workflow</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Footer Quote */}
        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-neutral-500 tracking-widest uppercase">
            [ ALL STAGES OF FOOTAGE EDITING ARE CUSTOMIZEABLE ACCORDING TO YOUR TARGET PREFERENCES ]
          </p>
        </div>

      </div>
    </section>
  );
}
