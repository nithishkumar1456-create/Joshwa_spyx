import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Play, MessageSquare, Volume2, VolumeX, ChevronDown } from "lucide-react";
import { PORTFOLIO_USER } from "../data";

interface HeroProps {
  unmutedState: boolean;
  onToggleSound: () => void;
}

export default function Hero({ unmutedState, onToggleSound }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Scroll parallax effects for full viewport height container
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);
  const opacityParallax = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Apply mutable status
    video.muted = !unmutedState;
    if (unmutedState) {
      video.volume = 0.55;
    }

    // Modern browsers need a strict replay/play invocation if muted matches configuration
    const triggerPlay = async () => {
      try {
        await video.play();
        setIsVideoPlaying(true);
      } catch (e) {
        console.warn("Autoplay blocked or video failure:", e);
        setIsVideoPlaying(false);
      }
    };

    triggerPlay();
  }, [unmutedState]);

  const handleScrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center bg-[#050505] overflow-hidden select-none"
    >
      {/* Background Cinematic Video/Banner Container */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ y: yParallax, opacity: opacityParallax }}
      >
        <div className="absolute inset-0 bg-[#050505]/35 z-10" />
        {/* Soft atmospheric radial gradient on top of video to focus centers and darken borders */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_90%)] z-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-15 h-40 bottom-0" />

        {!videoError ? (
          <video
            ref={videoRef}
            src={PORTFOLIO_USER.heroVideoUrl}
            loop
            muted={!unmutedState}
            playsInline
            autoPlay
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover scale-105"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1600&auto=format&fit=crop"
            alt="Video Editing Workspace"
            className="w-full h-full object-cover"
          />
        )}
      </motion.div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center">
        {/* Top Tagline Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 flex flex-wrap gap-2 items-center justify-center"
        >
          <span className="font-mono text-[10px] text-brand tracking-[0.25em] uppercase px-3 py-1 bg-brand/10 border border-brand/20">
            {PORTFOLIO_USER.title.toUpperCase()}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse-slowHidden hidden sm:block bg-brand" />
          <span className="hidden sm:inline font-mono text-[9px] text-neutral-400 tracking-widest uppercase">
            EST. 2024 / BANGALORE
          </span>
        </motion.div>

        {/* Main Header Display Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] mb-8 uppercase max-w-4xl"
        >
          Transforming <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand via-white to-neutral-400">
            Raw Footage
          </span>{" "}
          Into <br />
          Cinematic Stories
        </motion.h1>

        {/* Cinematic Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg tracking-normal max-w-2xl mb-12 font-light leading-relaxed"
        >
          {PORTFOLIO_USER.bio}
        </motion.p>

        {/* Hero Interactive CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
        >
          <button
            id="hero-view-showreel-btn"
            onClick={() => handleScrollToSection("#featured-showreel")}
            className="interactive-hover w-full sm:w-auto px-8 py-4 bg-brand text-[#050505] font-display font-extrabold text-xs tracking-widest uppercase rounded-none glow-btn-hover cursor-none flex items-center justify-center gap-2.5"
          >
            <Play className="w-4 h-4 fill-[#050505] stroke-none" />
            View Showreel
          </button>
          
          <button
            id="hero-contact-btn"
            onClick={() => handleScrollToSection("#contact")}
            className="interactive-hover w-full sm:w-auto px-8 py-4 border border-white hover:border-brand text-white hover:text-brand transition-colors font-display font-extrabold text-xs tracking-widest uppercase rounded-none cursor-none flex items-center justify-center gap-2.5 bg-[#050505]/40 backdrop-blur-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Left/Bottom Float Sound Monitor indicator overlay */}
      <div className="absolute bottom-12 left-12 z-20 hidden lg:flex items-center gap-3">
        <button
          id="hero-ambient-sound-indicator-btn"
          onClick={onToggleSound}
          className="interactive-hover text-brand flex items-center gap-2.5 uppercase font-mono text-[10px] tracking-widest cursor-none bg-[#0c0c0c]/85 py-2 px-4.5 border border-neutral-900"
        >
          {unmutedState ? (
            <>
              <Volume2 className="w-4 h-4 animate-pulse text-brand" />
              <span>SOUND ON</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-neutral-500" />
              <span className="text-neutral-500">SOUND MUTED</span>
            </>
          )}
        </button>
        {unmutedState && (
          <div className="flex items-end gap-[3px] h-3">
            <span className="w-[2px] h-2 bg-brand visualizer-bar" />
            <span className="w-[2px] h-3 bg-brand visualizer-bar" />
            <span className="w-[2px] h-1 bg-brand visualizer-bar" />
            <span className="w-[2px] h-2.5 bg-brand visualizer-bar" />
          </div>
        )}
      </div>

      {/* Scroll Down Guide Anchor indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 z-20 hidden md:flex flex-col items-center gap-2 cursor-pointer font-mono text-[9px] text-neutral-500 tracking-[0.25em]"
        onClick={() => handleScrollToSection("#about")}
      >
        <span>SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-neutral-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
