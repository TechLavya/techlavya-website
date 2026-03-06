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
  flippedCardId: string | null;
  setFlippedCardId: React.Dispatch<React.SetStateAction<string | null>>;
};

const EventCard: React.FC<Props> = ({ eventId, duration, eventData, flippedCardId, setFlippedCardId }) => {
  const { image, registrationLink, title } = eventData;
  const [isHovered, setIsHovered] = useState(false);

  // Advanced Mouse Tracking for "Spotlight" and Tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
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
      onMouseLeave={() => { setIsHovered(false); }}
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
              {flippedCardId !== eventId ? (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="w-full"
                >
                  <h2 className="text-2xl font-bold text-white font-orbitron tracking-wider leading-tight">{title}</h2>
                  <p className="text-sm text-cyan-200/70 font-kodeMono mt-1 mb-4">REG_ID: {eventId}</p>
                  <Button
                    onClick={() => setFlippedCardId(eventId)}
                    className="w-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 backdrop-blur-md"
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="w-full"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white font-orbitron">MISSION_BRIEF</h3>
                      <p className="text-xs text-cyan-200/70 font-kodeMono">OBJECTIVE: {title}</p>
                    </div>
                    <button onClick={() => setFlippedCardId(null)} className="text-white/50 hover:text-white transition-colors">
                      <Zap className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3 text-sm text-white/80 font-sans mb-6">
                    <p className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Status: <span className="font-bold text-green-400">Active</span></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" />
                      <span>Prize Pool: <span className="font-bold text-amber-400">₹{eventData.prize.toLocaleString()}</span></span>
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Link href={registrationLink} target="_blank" className="flex-1">
                      <Button className="w-full bg-cyan-500 text-black hover:bg-cyan-400 font-bold">
                        Register Now
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="border-white/20 bg-white/10 hover:bg-white/20">
                      <Share2 className="w-4 h-4" />
                    </Button>
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