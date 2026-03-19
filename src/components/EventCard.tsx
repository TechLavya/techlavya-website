"use client";

import { EventDataType } from "@/data/event-data";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import {  ShieldCheck,  Share2,  Cpu, ChevronRight, X } from "lucide-react";

type Props = {
  eventId: string;
  duration: number;
  eventData: EventDataType;
  flippedCardId: string | null;
  setFlippedCardId: React.Dispatch<React.SetStateAction<string | null>>;
};

const EventCard: React.FC<Props> = ({ eventId, duration, eventData, flippedCardId, setFlippedCardId }) => {
  const { image, registrationLink, title, prize } = eventData;
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Constants for better maintenance
  const isFlipped = flippedCardId === eventId;

  // Advanced Parallax & Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: duration / 20 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1200px" }}
      className="relative w-full max-w-[360px] h-[480px] mx-auto group"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full duration-200"
      >
        {/* --- OUTER GLOW (The "Aura") --- */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* --- MAIN CARD BODY --- */}
        <div className="relative w-full h-full bg-[#0a0a0c] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl">
          
          {/* Grain Overlay for Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          {/* BACKGROUND IMAGE LAYER */}
          <div className="absolute inset-0 z-0">
            <motion.div
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? "brightness(0.4) blur(2px)" : "brightness(0.7) blur(0px)" 
              }}
              className="relative h-full w-full"
            >
              <Image src={image} alt={title} fill className="object-cover" priority />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
          </div>

          {/* TOP UI: BADGE */}
          <div className="absolute top-5 left-5 z-20">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/10 rounded-full backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/80 uppercase">Sector_0{duration}</span>
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
            <AnimatePresence mode="wait">
              {!isFlipped ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <p className="text-primary text-[10px] font-mono tracking-[0.3em] font-bold uppercase">Event Brief</p>
                    <h2 className="text-3xl font-black text-white leading-[1.1] tracking-tight">{title}</h2>
                  </div>

                  <Button
                    onClick={() => setFlippedCardId(eventId)}
                    className="group/btn relative w-full overflow-hidden rounded-xl bg-white text-black hover:bg-white/90 transition-all py-6"
                  >
                    <span className="relative z-10 flex items-center font-bold tracking-tight">
                      ACCESS DATA <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-black/90 backdrop-blur-2xl p-8 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                      <Cpu className="text-primary w-5 h-5" />
                    </div>
                    <button 
                      onClick={() => setFlippedCardId(null)}
                      className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <X className="w-5 h-5 text-white/50" />
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-white/40 text-[10px] font-mono tracking-[.3em] uppercase mb-2">Specifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-white/60 text-sm italic">Prize Pool</span>
                          <span className="text-primary font-bold">₹{prize.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center justify-between border-b border-white/5 pb-2">
                          <span className="text-white/60 text-sm italic">Integrity</span>
                          <span className="text-green-500 font-bold flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> VERIFIED
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-5 gap-2">
                       <Link href={registrationLink} target="_blank" className="col-span-4">
                          <Button className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-6 rounded-xl shadow-lg shadow-primary/20">
                            INITIALIZE PROTOCOL
                          </Button>
                       </Link>
                       <Button variant="outline" className="h-full border-white/10 bg-white/5 hover:bg-white/10 rounded-xl">
                          <Share2 className="w-4 h-4 text-white" />
                       </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* DECORATIVE SIDE BAR */}
          <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;