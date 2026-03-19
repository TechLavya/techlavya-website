"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on device width < 768px
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    let lastTime = 0;
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const now = Date.now();
      if (now - lastTime > 40) { // spawn particle every 40ms
        setParticles((prev) => [
          ...prev.slice(-15), // keep max 15 particles
          { id: now + Math.random(), x: e.clientX, y: e.clientY }
        ]);
        lastTime = now;
      }
    };

    const handleMouseOver = (e) => {
      // Check if target is clickable
      const target = e.target;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") || 
        target.closest(".hover-target") || 
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // auto cleanup particles
  useEffect(() => {
    if (particles.length === 0 || isMobile) return;
    const interval = setInterval(() => {
       setParticles(prev => prev.length > 0 ? prev.slice(1) : []);
    }, 50);
    return () => clearInterval(interval);
  }, [particles, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Container to prevent z-index issues and avoid interference with interactions */}
      <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0.6, scale: 1 }}
              animate={{ opacity: 0, scale: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 rounded-full bg-accent"
              style={{ left: p.x - 3, top: p.y - 3 }}
            />
          ))}
        </AnimatePresence>
        
        {/* Inner dot */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]"
          animate={{
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            scale: isClicking ? 0.5 : isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 800, damping: 28, mass: 0.1 }}
        />
        
        {/* Outer Ring */}
        <motion.div
          className="absolute w-10 h-10 border border-highlight rounded-full"
          animate={{
            x: mousePosition.x - 20,
            y: mousePosition.y - 20,
            scale: isClicking ? 0.8 : isHovering ? 1.6 : 1,
            backgroundColor: isHovering ? "rgba(213,206,163,0.15)" : "transparent",
            borderColor: isHovering ? "rgba(213,206,163,0.5)" : "var(--highlight)",
          }}
          transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
        />
      </div>
    </>
  );
}
