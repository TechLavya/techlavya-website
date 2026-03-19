"use client";

import { EventDataType } from "@/data/event-data";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { Button } from "./ui/button";
import {
  ShieldCheck,
  Share2,
  Cpu,
  ChevronRight,
  X,
  CalendarClock,
  MapPin,
  Phone,
  Trophy,
  Clock3,
  Check,
} from "lucide-react";

type Props = {
  eventId: string;
  duration: number;
  eventData: EventDataType;
  flippedCardId: string | null;
  setFlippedCardId: React.Dispatch<React.SetStateAction<string | null>>;
};

const EventCard: React.FC<Props> = ({
  eventId,
  duration,
  eventData,
  flippedCardId,
  setFlippedCardId,
}) => {
  const {
    image,
    registrationLink,
    title,
    prize,
    prizePool,
    time,
    location,
    contact,
    lastDate,
    type,
  } = eventData;
  const [isHovered, setIsHovered] = useState(false);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const isFlipped = flippedCardId === eventId;

  // Mouse tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const tiltRotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12deg", "-12deg"],
  );
  const tiltRotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-12deg", "12deg"],
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const showValue = (value: string) => {
    return value.toLowerCase() === "yet to be announced" ? "TBA" : value;
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `TechLavya | ${title}`,
          text: `Register for ${title}`,
          url: registrationLink,
        });
        return;
      }

      await navigator.clipboard.writeText(registrationLink);
      setIsLinkCopied(true);
      setTimeout(() => setIsLinkCopied(false), 1800);
    } catch {
      // No-op: user cancelled share or browser restricted clipboard.
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1400px" }}
      className="relative w-full max-w-[360px] h-[480px] mx-auto"
    >
      {/* 3D ROTATION CONTAINER */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        <motion.div
          style={{
            rotateX: tiltRotateX,
            rotateY: tiltRotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-full h-full"
        >
          {/* ================= FRONT ================= */}
          <div className="absolute inset-0 backface-hidden">
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-[#3a2a1d] bg-[#1a120b] shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-600/20 to-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition" />

              {/* Image */}
              <motion.div
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  filter: isHovered
                    ? "brightness(0.5) blur(2px)"
                    : "brightness(0.7)",
                }}
                className="absolute inset-0"
              >
                <Image src={image} alt={title} fill className="object-cover" />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 p-8 space-y-4">
                <p className="text-amber-400 text-xs tracking-[0.3em] uppercase font-mono">
                  Event Brief
                </p>

                <h2 className="text-3xl font-black text-white leading-tight">
                  {title}
                </h2>

                <Button
                  onClick={() => setFlippedCardId(eventId)}
                  className="w-full h-16 rounded-2xl bg-[#f6c20a] hover:bg-[#ffcf1f] text-black text-lg font-extrabold tracking-[0.08em] shadow-[0_14px_32px_rgba(246,194,10,0.28)] hover:scale-[1.02] transition"
                >
                  REGISTER NOW
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* ================= BACK ================= */}
          <div className="absolute inset-0 rotate-y-180 backface-hidden">
            <div className="relative w-full h-full rounded-[2rem] bg-[#120c07] border border-[#3a2a1d] p-5 flex flex-col gap-3 overflow-hidden">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-400/10 blur-2xl" />
              <div className="absolute -left-16 bottom-20 h-40 w-40 rounded-full bg-yellow-500/5 blur-3xl" />

              {/* Top */}
              <div className="relative flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30">
                    <Cpu className="text-amber-400" />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
                      Intel
                    </p>
                    <p className="text-xs text-amber-300 font-semibold uppercase">
                      {type}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setFlippedCardId(null)}
                  className="p-1 rounded-md hover:bg-white/10 transition"
                >
                  <X className="text-white/60" />
                </button>
              </div>

              <div className="relative border border-amber-200/10 rounded-2xl bg-black/20 p-3 space-y-1.5">
                <p className="text-[10px] tracking-[0.3em] uppercase text-amber-300/80">
                  Deck Summary
                </p>
                <h3 className="text-lg leading-tight font-bold text-white">
                  {title}
                </h3>
                <p className="text-xs text-white/55">
                  Complete details are available. Use register to secure your
                  slot.
                </p>
              </div>

              {/* Info */}
              <div className="relative flex-1 min-h-0 flex flex-col gap-3">
                <div className="min-h-0 space-y-3 overflow-y-auto pr-1">
                  <div className="border border-white/10 rounded-2xl p-3 bg-white/[0.03]">
                    <h3 className="text-white/40 text-[10px] tracking-widest uppercase mb-2">
                      Specifications
                    </h3>

                    <div className="space-y-1.5 text-sm">
                      <div className="flex justify-between">
                        <span className="text-white/60 flex items-center gap-2">
                          <Trophy size={14} /> Prize
                        </span>
                        <span className="text-amber-400 font-bold">
                          ₹{prize.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-white/60">Status</span>
                        <span className="text-green-400 flex items-center gap-1">
                          <ShieldCheck size={14} /> Verified
                        </span>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-white/60">Prize Pool</span>
                        <span className="text-white/80 max-w-[55%] text-right truncate">
                          {showValue(prizePool)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                      <p className="text-white/45 mb-1 flex items-center gap-1">
                        <CalendarClock size={12} /> Last Date
                      </p>
                      <p className="text-white/90 truncate">
                        {showValue(lastDate)}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-2.5">
                      <p className="text-white/45 mb-1 flex items-center gap-1">
                        <Clock3 size={12} /> Time
                      </p>
                      <p className="text-white/90 truncate">
                        {showValue(time)}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs"></div>
                </div>

                <div className="grid mt-auto">
                  <Link
                    href={registrationLink}
                    target="_blank"
                    className="col-span-4"
                  >
                    <Button className="w-full py-6 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-bold hover:scale-[1.03] transition">
                      REGISTER
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EventCard;
