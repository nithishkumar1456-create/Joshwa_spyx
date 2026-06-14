import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Volume2, VolumeX, RefreshCw, Maximize, Film } from "lucide-react";
import { FEATURED_SHOWREEL } from "../data";

interface ShowreelSectionProps {
  unmutedState: boolean;
  onToggleSound: () => void;
}

export default function ShowreelSection({ unmutedState, onToggleSound }: ShowreelSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Control sound synchronization
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.muted = !unmutedState;
      if (unmutedState) {
        video.volume = 0.7;
      }
    } else {
      video.muted = true;
    }
  }, [unmutedState, isPlaying]);

  const handlePlayToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.warn("Autoplay block or playback issue:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress || 0);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  };

  // Auto-play preview as a looping thumbnail when not actively playing with audio
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
    } else {
      video.loop = false;
    }
  }, [isPlaying]);

  return (
    <section
      id="featured-showreel"
      className="relative w-full py-24 sm:py-32 bg-[#050505] overflow-hidden"
    >
      {/* Background ambient flare and visual indicators */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-brand/10 blur-[130px] rounded-full pointer-events-none opacity-70" />
      <div className="absolute top-[10%] left-10 w-[1px] h-32 bg-brand/45 pointer-events-none hidden md:block" />
      <div className="absolute bottom-[10%] right-10 w-[1px] h-32 bg-brand/45 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="font-mono text-xs text-brand tracking-[0.2em] uppercase block mb-3">
            // MAIN COMPILATION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase max-w-4xl mx-auto">
            FEATURED FILM SHOWREEL
          </h2>
          <p className="font-sans text-neutral-400 text-sm max-w-xl mx-auto mt-6 font-light">
            {FEATURED_SHOWREEL.description}
          </p>
        </div>

        {/* Cinematic Showreel Showcase Viewport Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handlePlayToggle}
            className="video-hover-trigger relative w-full aspect-video bg-[#090909] overflow-hidden border border-neutral-900 group cursor-none"
          >
            {/* Visual scanline overlay elements for screen textures */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 opacity-30 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-full h-[1px] bg-brand/50 animate-scanline pointer-events-none z-15 opacity-20" />

            {/* Custom Timecode counter badge */}
            <div className="absolute top-6 left-6 z-25 font-mono text-[9px] text-brand bg-[#050505]/80 px-2 py-1 tracking-wider border border-neutral-900 flex items-center gap-1.5 rounded-none pointer-events-none">
              <span className={`w-1.5 h-1.5 rounded-full bg-red-500 ${isPlaying ? "animate-pulse" : ""}`} />
              <span>{isPlaying ? "PLAYING [LIVE]" : "PAUSED [STANDBY]"}</span>
            </div>

             {/* Cinematic video tag */}
            <video
              ref={videoRef}
              src={FEATURED_SHOWREEL.videoUrl}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleVideoEnded}
              autoPlay
              loop={true}
              muted={!isPlaying || !unmutedState}
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
            />

            {/* Centered Large Play Button Animation widget */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <motion.div
                animate={{
                  scale: isHovered && !isPlaying ? 1.15 : 1,
                  opacity: isPlaying ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand flex items-center justify-center glow-btn-hover group-hover:scale-110"
              >
                <Play className="w-6 h-6 sm:w-8 h-8 text-black fill-black ml-1 stroke-none" />
              </motion.div>
            </div>

            {/* Video duration label */}
            <div className={`absolute bottom-6 right-6 z-20 font-mono text-[10px] text-white bg-[#050505]/75 border border-neutral-900 px-2.5 py-1 tracking-widest transition-opacity duration-300 pointer-events-none ${isPlaying ? "opacity-0" : "opacity-100"}`}>
              ASPECT 2.39:1
            </div>

            {/* Hover overlay prompts */}
            <AnimatePresence>
              {isHovered && !isPlaying && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-6 left-6 z-20 font-mono text-[10px] text-brand tracking-widest uppercase bg-[#050505]/80 px-3 py-1.5 border border-neutral-900 pointer-events-none"
                >
                  Click to play showreel with audio
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>

          {/* Interactive Player Control interface below showcase */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-3 border-b border-neutral-900 px-2">
            
            {/* Quick Action Buttons */}
            <div className="flex items-center gap-4">
              <button
                id="showreel-bottom-play-btn"
                onClick={handlePlayToggle}
                className="font-mono text-xs text-white hover:text-brand transition-colors flex items-center gap-1.5 uppercase cursor-none"
              >
                <span>{isPlaying ? "[ PAUSE ]" : "[ PLAY ]"}</span>
              </button>

              <button
                id="showreel-bottom-sound-btn"
                onClick={onToggleSound}
                className="font-mono text-xs text-white hover:text-brand transition-colors flex items-center gap-1.5 uppercase cursor-none"
              >
                {unmutedState ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-brand" />
                    <span>[ VOL: DEFAULT ]</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                    <span>[ VOL: MUTED ]</span>
                  </>
                )}
              </button>
            </div>

            {/* Interactive Timeline Progress wire */}
            <div className="flex-1 max-w-sm h-[2px] bg-neutral-900 relative rounded-full overflow-hidden mx-4 hidden sm:block">
              <div
                className="absolute top-0 left-0 h-full bg-brand transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Right Screen Control */}
            <div className="flex items-center gap-6 justify-between sm:justify-start">
              <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                RAW TIMELINE: PR_COMP_DRAFT
              </span>
              <button
                id="showreel-fullscreen-btn"
                onClick={handleFullScreen}
                className="p-1 text-neutral-400 hover:text-brand transition-colors cursor-none"
                title="Fullscreen showreel"
              >
                <Maximize className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* YouTube Link Block */}
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-3 px-2 pt-4 border-t border-neutral-950">
            <span className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase">
              // PRODUCTION SHOWREEL RE-ROUTE
            </span>
            <a
              href="https://www.youtube.com/watch?v=R1yLkoUblk0"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-hover inline-flex items-center gap-2 font-mono text-[10px] text-brand hover:underline hover:text-white tracking-widest uppercase transition-all cursor-none"
            >
              <Film className="w-3.5 h-3.5" />
              <span>[ VIEW ORIGINAL ON YOUTUBE ]</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
