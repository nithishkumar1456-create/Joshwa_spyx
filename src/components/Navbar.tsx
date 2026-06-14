import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Film, Volume2, VolumeX } from "lucide-react";
import { PORTFOLIO_USER } from "../data";

interface NavbarProps {
  unmutedState: boolean;
  onToggleSound: () => void;
  activeSection: string;
  onNavigate?: (href: string) => void;
}

export default function Navbar({ unmutedState, onToggleSound, activeSection, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-md border-b border-neutral-900 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="interactive-hover flex items-center gap-2 group cursor-none"
          >
            <Film className="w-5 h-5 text-brand group-hover:rotate-180 transition-transform duration-700 ease-out" />
            <span className="font-display font-black text-xl tracking-widest text-white group-hover:text-brand transition-all duration-300">
              <span className="inline group-hover:hidden">JOSHWA</span>
              <span className="hidden group-hover:inline">SPYX</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-neutral-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative interactive-hover py-2 transition-colors cursor-none ${
                    isActive ? "text-brand" : "hover:text-white"
                  }`}
                >
                  {link.name.toUpperCase()}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Audio toggle + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button
              id="nav-sound-toggle"
              onClick={onToggleSound}
              className="interactive-hover p-2 text-neutral-400 hover:text-brand transition-colors rounded-full bg-neutral-950 border border-neutral-900 flex items-center gap-2 px-3 cursor-none"
              title={unmutedState ? "Mute audio" : "Unmute audio"}
            >
              {unmutedState ? (
                <>
                  <div className="flex items-end gap-[2px] h-3 w-4">
                    <span className="w-[2px] bg-brand visualizer-bar" />
                    <span className="w-[2px] bg-brand visualizer-bar" />
                    <span className="w-[2px] bg-brand visualizer-bar" />
                    <span className="w-[2px] bg-brand visualizer-bar" />
                  </div>
                  <Volume2 className="w-3.5 h-3.5 text-brand" />
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="font-mono text-[9px] uppercase tracking-widest">Muted</span>
                </>
              )}
            </button>

            <a
              id="nav-cta-btn"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="interactive-hover px-4 py-2 border border-brand text-brand hover:bg-brand hover:text-[#050505] font-display font-bold text-xs tracking-widest uppercase transition-all duration-300 rounded-none cursor-none"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-4">
            {/* Quick sound toggle on mobile */}
            <button
              id="mobile-sound-toggle"
              onClick={onToggleSound}
              className="p-2 text-neutral-400 hover:text-brand bg-neutral-950 border border-neutral-900 rounded-full cursor-none"
            >
              {unmutedState ? <Volume2 className="w-4 h-4 text-brand" /> : <VolumeX className="w-4 h-4 text-neutral-500" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              id="nav-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white cursor-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[64px] left-0 w-full z-30 bg-[#0c0c0c] border-b border-neutral-900 md:hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-mono text-sm tracking-widest">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-3 border-b border-neutral-950 transition-colors uppercase cursor-none ${
                    activeSection === link.href.substring(1) ? "text-brand" : "text-neutral-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                id="mobile-link-cta"
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="py-4 mt-2 text-brand font-display font-medium text-center border border-brand bg-brand/5 cursor-none"
              >
                CONTACT ME
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
