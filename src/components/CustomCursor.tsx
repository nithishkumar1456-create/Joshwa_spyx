import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if touch device
    const checkViewport = () => {
      setIsMobile(
        window.matchMedia("(max-width: 768px)").matches || 
        ("ontouchstart" in window) || 
        navigator.maxTouchPoints > 0
      );
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if hovering over buttons, links or custom clickable elements
      const isInteractive = 
        target.closest("button") || 
        target.closest("a") || 
        target.closest("[role='button']") || 
        target.classList.contains("interactive-hover");

      if (isInteractive) {
        setIsHovered(true);
        
        // Custom text for video hovers
        const hoverVideo = target.closest(".video-hover-trigger");
        if (hoverVideo) {
          setCursorText("PLAY");
        } else {
          setCursorText("");
        }
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHoverStart);

    // Dynamic global cursor hide style class
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      @media (min-width: 769px) {
        body, button, a, [role='button'], input, textarea {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHoverStart);
      styleEl.remove();
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand/80 pointer-events-none z-50 mix-blend-difference flex items-center justify-center"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? (cursorText ? "64px" : "48px") : "32px",
          height: isHovered ? (cursorText ? "64px" : "48px") : "32px",
          backgroundColor: isHovered && cursorText ? "rgba(56, 189, 248, 0.9)" : "transparent",
          borderColor: isHovered ? "rgba(56, 189, 248, 1)" : "rgba(56, 189, 248, 0.6)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] text-black font-extrabold tracking-widest uppercase">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Active Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-brand pointer-events-none z-50 mix-blend-difference"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 0 : 1
        }}
      />
    </>
  );
}
