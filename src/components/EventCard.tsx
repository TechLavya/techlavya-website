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

  const rotateX = useSpring(useTransform(mouseY, [0, 420], [8, -8]), { stiffness: 80, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [0, 340], [-8, 8]), { stiffness: 80, damping: 20 });

  // Spotlight gradient following the mouse
  const background = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(213, 206, 163, 0.12), transparent 80%)`
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: duration / 20, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative w-full max-w-[340px] h-[450px] mx-auto hover-target"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full rounded-3xl border border-accent/20 bg-secondary-bg p-[1px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
      >
        {/* Dynamic Spotlight Layer */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ background }} />

        {/* The Main Visual Container */}
        <div className="relative w-full h-full rounded-[23px] overflow-hidden bg-background">

          {/* Background Image with Kinetic Zoom */}
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1, filter: isHovered ? "blur(3px) brightness(0.6)" : "blur(0px) brightness(0.85)" }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image src={image} alt={title} fill className="object-cover" />
          </motion.div>

          {/* Decorative Corner Brackets */}
          <div className="absolute inset-4 border border-accent/10 pointer-events-none z-20">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/30" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/30" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
          </div>

          {/* Floating UI Elements */}
          <div className="absolute top-6 left-6 z-30">
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              className="flex items-center gap-2 px-3 py-1 bg-background/50 border border-primary/30 rounded-full backdrop-blur-md"
            >
              <Target className="w-3 h-3 text-primary animate-pulse" />
              <span className="text-[10px] font-kodeMono text-primary tracking-[0.2em]">TARGET_LOCKED</span>
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
                  <h2 className="text-2xl font-bold text-highlight font-orbitron tracking-wider leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">{title}</h2>
                  <p className="text-xs text-accent/70 font-kodeMono mt-2 mb-4 tracking-widest">REG_ID: {eventId}</p>
                  <Button
                    onClick={() => setFlippedCardId(eventId)}
                    className="w-full bg-primary/10 border border-primary/40 text-primary hover:bg-primary/20 backdrop-blur-md font-spaceGrotesk tracking-[0.2em] transition-all hover:shadow-[0_0_15px_rgba(184,92,56,0.5)]"
                  >
                    <Terminal className="w-4 h-4 mr-2" />
                    Enter Protocol
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                  className="w-full bg-background/80 absolute inset-0 p-8 backdrop-blur-xl flex flex-col justify-center border-t border-accent/20"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-highlight font-orbitron">MISSION_BRIEF</h3>
                      <p className="text-[10px] uppercase tracking-widest text-accent/70 font-kodeMono mt-1">OBJ: {title}</p>
                    </div>
                    <button onClick={() => setFlippedCardId(null)} className="text-muted-foreground hover:text-highlight transition-colors p-1">
                      <Zap className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4 text-sm text-foreground font-inter mb-8">
                    <p className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-primary" />
                      <span className="font-light tracking-wide">Status: <span className="font-bold text-green-500">Active</span></span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-accent" />
                      <span className="font-light tracking-wide">Prize Pool: <span className="font-bold text-accent">₹{eventData.prize.toLocaleString()}</span></span>
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Link href={registrationLink} target="_blank" className="flex-1">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-spaceGrotesk tracking-widest shadow-[0_0_20px_rgba(184,92,56,0.3)]">
                        Register Now
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon" className="border-accent/30 bg-secondary-bg hover:bg-accent/20 hover:text-accent">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Background Decorative "Code" */}
          <div className="absolute top-0 right-4 h-full pointer-events-none opacity-20 z-10">
            <p className="[writing-mode:vertical-rl] text-[8px] font-kodeMono text-accent/50 tracking-[1em] uppercase">
              system.integrity.check() // status: stable // node: {eventId.slice(0, 8)}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;