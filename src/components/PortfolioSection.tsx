import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X, ExternalLink, Tag, Briefcase, Clock, FileVideo, Volume2, VolumeX, ArrowLeft, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "../data";

interface PortfolioSectionProps {
  // no props needed
}

export default function PortfolioSection({}: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'automotive' | 'corporate' | 'fandom' | 'events'>('automotive');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Reset to muted when opening a new project
  useEffect(() => {
    if (selectedProject) {
      setIsMuted(true);
    }
  }, [selectedProject]);

  // Sync mute state on selectedProject lightbox video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, selectedProject]);

  // Sync native video player mute/unmute events with our custom control state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVolumeChange = () => {
      setIsMuted(video.muted);
    };

    video.addEventListener("volumechange", handleVolumeChange);
    return () => {
      video.removeEventListener("volumechange", handleVolumeChange);
    };
  }, [selectedProject]);

  const filters = [
    { key: 'automotive' as const, label: 'Automotive' },
    { key: 'corporate' as const, label: 'Corporate' },
    { key: 'fandom' as const, label: 'Fandom edit' },
    { key: 'events' as const, label: 'Events' },
  ];

  const filteredProjects = PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Visual coordinates grids */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-80" />
      <div className="absolute top-[20%] left-0 w-48 h-[1px] bg-brand/35 pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-48 h-[1px] bg-brand/35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-900 pb-10">
          <div>
            <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
              // RECENT ARCHIVE
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase">
              SELECTED WORKS
            </h2>
          </div>

          {/* Filter Bar Controls */}
          <div className="flex flex-wrap gap-2.5">
            {filters.map((filter) => (
              <button
                key={filter.key}
                id={`filter-btn-${filter.key}`}
                onClick={() => setActiveFilter(filter.key)}
                className={`interactive-hover px-4 py-2 text-[11px] font-mono tracking-widest uppercase transition-all duration-300 rounded-none cursor-none ${
                  activeFilter === filter.key
                    ? "bg-brand text-[#050505] font-bold"
                    : "bg-neutral-950 text-neutral-400 border border-neutral-900 hover:border-neutral-700 hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Dynamic Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            id="portfolio-grid"
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  id={`portfolio-card-${project.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-[#0c0c0c] border border-neutral-900 overflow-hidden cursor-none hover:border-brand-muted transition-colors flex flex-col max-w-[280px] mx-auto md:max-w-none w-full"
                >
                  {/* Image display thumbnail framework */}
                  <div
                    className="relative aspect-[9/16] overflow-hidden bg-neutral-900 cursor-none video-hover-trigger mb-4"
                    onClick={() => setSelectedProject(project)}
                  >
                    <video
                      src={project.videoUrl}
                      poster={project.thumbnail}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Hover visual block mask */}
                    <div className="absolute inset-0 bg-[#050505]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-brand flex items-center justify-center glow-btn-hover"
                      >
                        <Play className="w-4 h-4 text-black fill-black ml-0.5 stroke-none" />
                      </motion.div>
                    </div>

                    {/* Play duration sticker tag */}
                    <div className="absolute bottom-3 right-3 z-15 font-mono text-[9px] text-white bg-[#050505]/85 py-0.5 px-2 tracking-wider">
                      {project.duration}
                    </div>

                    {/* Small tag icon sticker */}
                    <div className="absolute top-3 left-3 z-15 font-mono text-[9px] text-brand bg-black/80 border border-brand/20 py-0.5 px-2 tracking-wider uppercase">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Info summary card details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display font-bold text-lg text-white uppercase mb-2 tracking-wide group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>

                    <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span key={tIdx} className="font-mono text-[9px] text-neutral-500 bg-[#050505] px-2 py-0.5">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      id={`btn-view-project-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="interactive-hover mt-auto inline-flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-brand uppercase cursor-none border border-neutral-900 group-hover:border-brand-muted bg-neutral-950 px-4 py-2.5 justify-center hover:bg-brand hover:text-black transition-all"
                    >
                      <span>View Project</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-neutral-900 bg-neutral-950/40">
            <span className="font-mono text-xs text-neutral-500 tracking-widest block mb-2 uppercase">
              // NO VEHICLE FOOTAGE OR DIRECT CUTS CURRENTLY STAGED
            </span>
            <p className="font-sans text-xs text-neutral-400 font-light max-w-md mx-auto">
              Automotive showreels and edits are being updated. Check back soon or request a custom archive.
            </p>
          </div>
        )}



        {/* Project video/details immersion viewing modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              id="portfolio-lightbox-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050505]/95 backdrop-blur-md overflow-y-auto"
            >
              <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-neutral-900 overflow-hidden my-8 cursor-none">
                
                {/* Header controls bar */}
                <div className="p-4 border-b border-neutral-950 flex justify-between items-center bg-[#070707]">
                  <div className="flex items-center gap-2">
                    <FileVideo className="w-4 h-4 text-brand" />
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                      VERTICAL TIMELINE / PLAYBACK MODE
                    </span>
                  </div>
                  <button
                    id="lightbox-close-btn"
                    onClick={() => setSelectedProject(null)}
                    className="interactive-hover px-4 py-1.5 flex items-center gap-2 text-neutral-400 hover:text-white hover:bg-neutral-900 bg-neutral-950 border border-neutral-800 rounded font-mono text-[11px] tracking-widest uppercase cursor-none transition-all duration-300"
                    title="Go Back"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-brand" />
                    <span>Go Back</span>
                  </button>
                </div>

                {/* Split layout: Left column is the vertical video player, right column is the specs metadata */}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-[#090909]">
                  
                  {/* Left Column: Vertical player frame mock */}
                  <div className="md:col-span-5 bg-[#040404] p-6 lg:p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-neutral-900 lg:min-h-[500px]">
                    <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[310px] bg-black group/player rounded-xl border border-neutral-800/80 shadow-2xl overflow-hidden">
                      <iframe
                        src={selectedProject.videoUrl.replace(".sd.mp4", "") ? selectedProject.videoUrl : ""}
                        className="w-full h-full object-cover hidden" // Just placeholder tags
                      />
                      {/* High precision real vertical video asset tag */}
                      <video
                        ref={videoRef}
                        src={selectedProject.videoUrl}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />

                      {/* Floating high contrast sound badge */}
                      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
                        {!isMuted && (
                          <div className="flex items-end gap-[2px] h-4 bg-black/75 px-2 py-1 rounded border border-neutral-800">
                            <span className="w-[1.5px] bg-brand animate-pulse h-2.5" />
                            <span className="w-[1.5px] bg-brand animate-pulse h-4" style={{ animationDelay: "0.2s" }} />
                            <span className="w-[1.5px] bg-brand animate-pulse h-1.5" style={{ animationDelay: "0.4s" }} />
                          </div>
                        )}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsMuted(!isMuted);
                          }}
                          className="p-2 sm:p-2.5 rounded-full bg-black/85 border border-neutral-800 hover:border-brand text-white hover:text-brand transition-all flex items-center justify-center cursor-none focus:outline-none focus:ring-1 focus:ring-brand shadow-xl"
                          title={isMuted ? "Unmute video edit" : "Mute video edit"}
                        >
                          {!isMuted ? (
                            <Volume2 className="w-4 h-4 text-brand" />
                          ) : (
                            <VolumeX className="w-4 h-4 text-neutral-400" />
                          )}
                        </button>
                      </div>

                      {/* Prompt badge helper for ease of unmute */}
                      {isMuted && (
                        <div className="absolute bottom-12 left-4 z-30 pointer-events-none hidden sm:flex items-center gap-2 bg-black/85 px-3 py-1.5 border border-neutral-800 font-mono text-[9px] text-[#39ff14] tracking-wider uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                          <span>Muted. Click speaker to hear</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Descriptions & parameters details sheet */}
                  <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-8">
                    <div>
                      <span className="font-mono text-[10px] text-brand tracking-widest uppercase block mb-1">
                        {selectedProject.categoryLabel}
                      </span>
                      <h2 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-4 leading-tight">
                        {selectedProject.title}
                      </h2>
                      <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag, tIdx) => (
                          <div key={tIdx} className="font-mono text-[10px] text-neutral-400 bg-neutral-950 border border-neutral-900 px-3 py-1 flex items-center gap-1.5 rounded-sm">
                            <Tag className="w-3 h-3 text-brand" />
                            <span>{tag.toUpperCase()}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-neutral-900 space-y-4 font-mono text-[11px] tracking-wide text-neutral-400">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-neutral-600 block uppercase text-[10px] mb-1">CLIENT REFERENCE</span>
                          <div className="flex items-center gap-2 text-white font-display font-bold uppercase text-xs">
                            <Briefcase className="w-3.5 h-3.5 text-brand" />
                            <span>{selectedProject.client}</span>
                          </div>
                        </div>

                        <div>
                          <span className="text-neutral-600 block uppercase text-[10px] mb-1">TIMELINE DURATION</span>
                          <div className="flex items-center gap-2 text-white text-xs">
                            <Clock className="w-3.5 h-3.5 text-brand" />
                            <span>{selectedProject.duration} SECS</span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-neutral-900 pt-4">
                        <span className="text-neutral-600 block uppercase text-[10px] mb-1">RESOLUTION SPECS</span>
                        <div className="text-brand font-bold text-xs">9:16 VERTICAL SOURCE (HD / READY 4K)</div>
                      </div>

                      <div className="pt-4">
                        <button
                          id="lightbox-back-btn-bottom"
                          onClick={() => setSelectedProject(null)}
                          className="interactive-hover w-full py-3 px-4 bg-brand hover:bg-white text-black font-semibold text-center tracking-widest uppercase transition-all duration-300 cursor-none flex items-center justify-center gap-2 border border-brand text-[11px]"
                        >
                          <ArrowLeft className="w-4 h-4" />
                          <span>Go Back To Portfolio</span>
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
