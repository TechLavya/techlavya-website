"use client";

import { EventDataType } from "@/data/event-data";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Terminal, ShieldCheck, Zap, Share2, Target } from "lucide-react";

type Props = {
  eventId: string;
  duration: number;
  eventData: EventDataType;
};

const EventCard: React.FC<Props> = ({ eventId, duration, eventData }) => {
  const { image, registrationLink, title } = eventData;
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Advanced Mouse Tracking for "Spotlight" and Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const rotateX = useSpring(useTransform(mouseY, [0, 420], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, 340], [-10, 10]), { stiffness: 100, damping: 30 });

  // Spotlight gradient following the mouse
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(6, 182, 212, 0.15), transparent 80%)`
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: duration / 20, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsActive(false); }}
      className="group relative w-full max-w-[340px] h-[450px] mx-auto cursor-none"
    >
      {/* Custom Tech Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500 rounded-full z-[100] pointer-events-none hidden md:flex items-center justify-center"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
      </motion.div>

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-3xl border border-white/10 bg-[#050507] p-[1px] overflow-hidden"
      >
        {/* Dynamic Spotlight Layer */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ background }} />

        {/* The Main Visual Container */}
        <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-[#0a0a0c]">

          {/* Background Image with Kinetic Zoom */}
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1, filter: isHovered ? "blur(4px) brightness(0.4)" : "blur(0px) brightness(0.7)" }}
            className="absolute inset-0"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>

          {/* Decorative Corner Brackets */}
          <div className="absolute inset-4 border border-white/5 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500" />
          </div>

          {/* Floating UI Elements */}
          <div className="absolute top-8 left-8 z-30">
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
              className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-md"
            >
              <Target className="w-3 h-3 text-cyan-400" />
              <span className="text-[10px] font-kodeMono text-cyan-400 tracking-[0.2em]">LOCKED_ON</span>
            </motion.div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-40 flex flex-col justify-end p-8">
            <AnimatePresence>
              {!isActive ? (
                <motion.div
                  key="front"
                  exit={{ opacity: 0, y: 20 }}
                  className="space-y-4"
                >
                  <h3 className="text-3xl font-black text-white leading-none tracking-tighter">
                    {title.split(" ").map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>

                  <button
                    onClick={() => setIsActive(true)}
                    className="flex items-center gap-4 group/btn"
                  >
                    <div className="w-12 h-12 rounded-full border border-cyan-500 flex items-center justify-center group-hover/btn:bg-cyan-500 transition-all duration-500">
                      <Zap className="w-5 h-5 text-cyan-400 group-hover/btn:text-black" />
                    </div>
                    <span className="font-kodeMono text-xs text-white/50 tracking-widest group-hover/btn:text-cyan-400">ACCESS_CORE</span>
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col justify-center space-y-6 pt-12"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400">
                      <Terminal className="w-4 h-4" />
                      <span className="text-[10px] font-kodeMono">ENCRYPTED_DATA_STREAM</span>
                    </div>
                    <p className="text-sm text-white/70 font-light leading-relaxed">
                      Initialize secure handshake for <span className="text-cyan-400 font-bold">{title}</span>.
                      Slots are allocated via neural-priority.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border border-white/5 bg-white/5 rounded-xl">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 mb-1" />
                      <span className="block text-[8px] text-white/30 uppercase">Validation</span>
                      <span className="text-[10px] text-white font-kodeMono">VERIFIED</span>
                    </div>
                    <div className="p-3 border border-white/5 bg-white/5 rounded-xl">
                      <Share2 className="w-4 h-4 text-cyan-400 mb-1" />
                      <span className="block text-[8px] text-white/30 uppercase">Protocol</span>
                      <span className="text-[10px] text-white font-kodeMono">P2P_LINK</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-xl h-12 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                      <Link href={registrationLink || "#"}>INITIALIZE UPLINK</Link>
                    </Button>
                    <button
                      onClick={() => setIsActive(false)}
                      className="w-full text-center text-[10px] font-kodeMono text-white/30 hover:text-white uppercase tracking-tighter"
                    >
                      ← ABORT_CONNECTION
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Background Decorative "Code" */}
          <div className="absolute top-0 right-4 h-full pointer-events-none opacity-20 z-10">
            <p className="[writing-mode:vertical-rl] text-[8px] font-kodeMono text-cyan-500 tracking-[1em] uppercase">
              system.integrity.check() // status: stable // priority: high // node: {eventId.slice(0, 8)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;