"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

interface LoaderProps {
  finishLoading: () => void;
}

const Loader = ({ finishLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Interactive Parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 1500);
          setTimeout(finishLoading, 3000);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ 
            scale: 2, 
            opacity: 0, 
            filter: "brightness(5) blur(50px)",
          }}
          transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080705] overflow-hidden select-none"
        >
          {/* 1. DYNAMIC NEBULA BACKGROUND */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#452a07_0%,transparent_50%)]" />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20"
            />
          </div>

          {/* 2. THE CORE (Interactive Tilt) */}
          <motion.div
            style={{ 
              rotateX: -mousePos.y, 
              rotateY: mousePos.x,
              perspective: "1000px"
            }}
            className="relative flex items-center justify-center transition-transform duration-200 ease-out"
          >
            {/* Accretion Disk Rings */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{ duration: 20 / (i + 1), repeat: Infinity, ease: "linear" }}
                className="absolute border border-[#d97706]/20 rounded-[40%] blur-[0.5px]"
                style={{ 
                  width: 200 + i * 60, 
                  height: 200 + i * 60,
                  borderWidth: '1px',
                  borderTopColor: i === 3 ? '#d97706' : 'transparent',
                }}
              />
            ))}

            {/* The Central Singularity */}
            <div className="relative w-32 h-32 rounded-full bg-black shadow-[0_0_60px_rgba(217,119,6,0.4)] flex items-center justify-center border border-[#8b5e1a]/40">
                {/* Internal Pulsing Light */}
                <motion.div 
                    animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-2 rounded-full bg-[#d97706]/10 blur-xl"
                />
                <span className="text-2xl font-black text-[#d97706] drop-shadow-[0_0_10px_#d97706]">
                    {progress}%
                </span>
            </div>

            {/* "Floating" Crisp UI Markers */}
            <div className="absolute -top-32 -left-32 text-[#8b5e1a] font-mono text-[8px] tracking-widest opacity-60">
                REC_DATA: 00{progress} <br/>
                SIGNAL_STRENGTH: NOMINAL
            </div>
          </motion.div>

          {/* 3. THE "OSCILLOSCOPE" WAVEFORM (Bottom) */}
          <div className="absolute bottom-20 w-full px-20">
            <div className="flex justify-between items-end mb-4 font-mono">
                <div className="text-[#8b5e1a] text-[10px] uppercase">Frequency Analysis</div>
                <div className="text-[#d97706] text-[8px] animate-pulse">● LIVE_FEED</div>
            </div>
            <div className="h-12 w-full flex items-center justify-center gap-[2px]">
                {[...Array(40)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ 
                            height: [10, Math.random() * 40 + 10, 10],
                            backgroundColor: progress > (i * 2.5) ? "#d97706" : "#2a1e12"
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                        className="w-[3px] rounded-full shadow-[0_0_5px_#d97706]/20"
                    />
                ))}
            </div>
          </div>

          {/* 4. CRITICAL ERROR GLITCH (Horror Elements) */}
          <motion.div 
            animate={{ 
                x: [0, -2, 2, 0],
                opacity: [0, 0.1, 0]
            }}
            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 4 }}
            className="absolute inset-0 bg-[#d97706]/5 pointer-events-none"
          />
          
          <div className="absolute top-10 right-10 flex flex-col items-end opacity-40 font-mono text-[9px] text-[#8b5e1a]">
            <span>VOID_LATENCY: 4ms</span>
            <span>CORE_TEMP: STABLE</span>
          </div>

          {/* Grain & Scanline Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;