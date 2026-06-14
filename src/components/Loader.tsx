import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Film, Play } from "lucide-react";

interface LoaderProps {
  onComplete: (unmuteRequired: boolean) => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [fps, setFps] = useState(24);
  const [readyToEnter, setReadyToEnter] = useState(false);

  useEffect(() => {
    // Increment loading progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setReadyToEnter(true);
          return 100;
        }

        // Speed up near the end
        const increment = prev > 75 ? Math.floor(Math.random() * 8) + 4 : Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    // Dynamic FPS flicker just for cosmetic high-tech effect
    const fpsInterval = setInterval(() => {
      setFps(() => (Math.random() > 0.7 ? (Math.random() > 0.5 ? 23.976 : 24) : 24));
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(fpsInterval);
    };
  }, []);

  const handleEnter = (unmute: boolean) => {
    onComplete(unmute);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] p-6 text-white overflow-hidden select-none"
      >
        {/* Cinematic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />

        {/* Video Editor Viewport Margins */}
        <div className="absolute inset-8 border border-neutral-900 pointer-events-none opacity-40">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand" />
        </div>

        {/* Top bar tech specs */}
        <div className="absolute top-12 left-12 right-12 flex justify-between font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>REC [PR_PRO_PROXIES]</span>
          </div>
          <div>LUT: J_CINEMATIC_V4</div>
          <div className="hidden sm:block">TIMECODE: {new Date().toISOString().slice(11, 19)}:00</div>
        </div>

        {/* Core Loading Circle */}
        <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 p-5 bg-neutral-950 rounded-full border border-neutral-800"
          >
            <Film className="w-10 h-10 text-brand" />
          </motion.div>

          {/* Rendering sequence details */}
          <div className="font-mono mb-2">
            <span className="text-neutral-500 font-medium text-xs tracking-wider uppercase">Project Queue Status</span>
          </div>

          <h2 className="font-display font-bold text-lg tracking-tight mb-6">
            RENDERING JOSHWA V. PORTFOLIO
          </h2>

          {/* Progress bar container */}
          <div className="w-full h-[3px] bg-neutral-900 rounded-full overflow-hidden mb-4 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-brand"
              style={{ width: `${progress}%` }}
              layoutId="loadBar"
            />
          </div>

          {/* Interactive loading logs */}
          <div className="flex justify-between w-full font-mono text-[11px] text-neutral-400 mb-8">
            <div>
              {progress < 30 && "Spooling Timeline..."}
              {progress >= 30 && progress < 60 && "Grading Lumetri Shadows..."}
              {progress >= 60 && progress < 85 && "Synchronizing Dual-Lavalier..."}
              {progress >= 85 && progress < 100 && "Exporting 4K Showreel..."}
              {progress === 100 && "Renderer Complete!"}
            </div>
            <div className="text-brand font-bold tabular-nums">
              {progress}%
            </div>
          </div>

          {/* Enter buttons */}
          <div className="h-28 flex flex-col justify-center items-center w-full">
            {readyToEnter ? (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-3 w-full justify-center"
              >
                <button
                  id="btn-loader-sound"
                  onClick={() => handleEnter(true)}
                  className="interactive-hover px-6 py-3 bg-brand text-black font-display font-bold text-sm rounded-none tracking-wider uppercase inline-flex items-center justify-center gap-2 glow-btn-hover cursor-none transition-shadow"
                >
                  <Play className="w-4 h-4 fill-black stroke-black" />
                  Enter Experience
                </button>
                <button
                  id="btn-loader-silent"
                  onClick={() => handleEnter(false)}
                  className="interactive-hover px-5 py-3 border border-neutral-800 hover:border-neutral-500 text-neutral-400 hover:text-white font-display font-medium text-xs rounded-none tracking-wider uppercase cursor-none transition-colors"
                >
                  Mute Autoplay
                </button>
              </motion.div>
            ) : (
              <p className="font-mono text-neutral-500 text-[10px] uppercase tracking-widest animate-pulse">
                Analyzing high-fidelity sequence buffers...
              </p>
            )}
          </div>
        </div>

        {/* Bottom bar tech specs */}
        <div className="absolute bottom-12 left-12 right-12 flex justify-between font-mono text-[10px] text-neutral-500 tracking-widest uppercase">
          <div>ASPECT: 16:9 [CINEMATIC]</div>
          <div>FPS: {fps} HZ</div>
          <div className="flex items-center gap-1">
            <Play className="w-2.5 h-2.5 fill-brand stroke-none" />
            <span>STEREO / 48KHZ</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
