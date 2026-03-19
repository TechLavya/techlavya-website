"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  finishLoading: () => void;
}

const AbstractLoader = ({ finishLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total duration ~2 seconds to keep it snappy.
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 200);
          setTimeout(finishLoading, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 15);
    return () => clearInterval(interval);
  }, [finishLoading]);

  // Prevent scrolling while loading
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden select-none"
        >
          {/* Abstract Geometric Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: 'linear-gradient(var(--highlight) 1px, transparent 1px), linear-gradient(90deg, var(--highlight) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              perspective: '1000px'
            }}
          >
            <motion.div 
               animate={{ rotateX: [60, 60], translateY: [0, 40] }} 
               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
               className="w-full h-full origin-top"
               style={{ 
                 backgroundImage: 'inherit', backgroundSize: 'inherit' 
               }}
            />
          </div>

          {/* Rotating Tech Mesh */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 border-[1px] border-accent/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-44 h-44 border-[2px] border-dashed border-primary/40 rounded-full"
            />
            
            {/* Energy Core */}
            <motion.div
              animate={{ 
                scale: [0.95, 1.05, 0.95],
                boxShadow: [
                  "0 0 20px rgba(213,206,163,0.1)",
                  "0 0 40px rgba(213,206,163,0.3)",
                  "0 0 20px rgba(213,206,163,0.1)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-24 h-24 bg-secondary-bg/80 backdrop-blur-md flex items-center justify-center border border-accent/30 rotate-45"
            >
              <div className="absolute inset-0 border border-primary/20 rotate-12" />
              <div className="absolute inset-0 border border-highlight/20 -rotate-12" />
              <div className="-rotate-45 text-highlight font-orbitron text-2xl font-bold tracking-widest z-10">
                {progress}%
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-20 flex flex-col items-center gap-3">
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-accent text-xs font-kodeMono uppercase tracking-[0.3em]"
            >
              Initializing Core
            </motion.div>
            <div className="w-56 h-[1px] bg-border relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${progress}%` }}
                 className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_var(--primary)]"
               />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AbstractLoader;
