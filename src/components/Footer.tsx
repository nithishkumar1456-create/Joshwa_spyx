import { motion } from "motion/react";
import { Youtube, Instagram, Linkedin, ArrowUp, Zap, Film } from "lucide-react";
import { PORTFOLIO_USER } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="portfolio-footer" className="relative w-full bg-[#050505] border-t border-neutral-900 py-12 md:py-16 select-none overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 left-1/4 w-[1px] h-20 bg-gradient-to-b from-brand/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[1px] h-20 bg-gradient-to-b from-brand/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        
        {/* Left Side Logo copyright branding */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-neutral-950 border border-neutral-900">
            <Film className="w-5 h-5 text-brand" />
          </div>
          <div>
            <div className="font-display font-black text-sm text-white tracking-widest uppercase">
              JOSHWA V.
            </div>
            <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest mt-0.5">
              © {currentYear} Joshwa V Portfolio. All rights reserved.
            </p>
          </div>
        </div>

        {/* Center Section: dynamic status telemetry */}
        <div className="hidden lg:flex items-center gap-8 font-mono text-[9px] text-neutral-500 tracking-[0.25em] uppercase">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            <span>AVAILABLE FOR COMMISSIONS</span>
          </div>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-brand" />
            <span>4K DIGITAL MASTERING SYSTEM</span>
          </div>
        </div>

        {/* Right Side Social platforms lists */}
        <div className="flex items-center gap-4">
          
          <a
            id="footer-social-instagram"
            href={PORTFOLIO_USER.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover p-2.5 bg-neutral-950 border border-neutral-900 hover:border-brand text-neutral-400 hover:text-brand transition-all rounded-none cursor-none"
            title="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <a
            id="footer-social-youtube"
            href={PORTFOLIO_USER.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover p-2.5 bg-neutral-950 border border-neutral-900 hover:border-brand text-neutral-400 hover:text-brand transition-all rounded-none cursor-none"
            title="YouTube Channel"
          >
            <Youtube className="w-4 h-4" />
          </a>

          <a
            id="footer-social-linkedin"
            href={PORTFOLIO_USER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover p-2.5 bg-neutral-950 border border-neutral-900 hover:border-brand text-neutral-400 hover:text-brand transition-all rounded-none cursor-none"
            title="LinkedIn Corporate Connection"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Styled text link for Behance */}
          <a
            id="footer-social-behance"
            href={PORTFOLIO_USER.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-hover p-2 px-3 bg-neutral-950 border border-neutral-900 hover:border-brand text-neutral-400 hover:text-brand font-mono text-[10px] tracking-wider uppercase rounded-none cursor-none flex items-center gap-1"
            title="Behance Showcase Portfolio"
          >
            <span className="font-extrabold text-[11px]">Bē</span>
          </a>

          {/* Scroll design to top float anchor trigger */}
          <button
            id="footer-scroll-top-btn"
            onClick={handleScrollToTop}
            className="interactive-hover p-2.5 bg-brand text-black hover:bg-white transition-all rounded-none cursor-none ml-4"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

      </div>
    </footer>
  );
}
