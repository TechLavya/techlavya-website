"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EventDetailsModal } from "./EventDetailsModal";

// --- Types & Constants ---
interface CalendarEvent {
  date: number;
  month: number;
  title: string;
  type: "tech" | "esports" | "holiday";
  startTime?: string;
  endTime?: string;
  description?: string;
  venue?: string;
}

interface CalendarViewProps {
  month: number;
  year: number;
  events: CalendarEvent[];
  allEvents?: CalendarEvent[];
}

const FESTIVAL_DATES = [
  { date: 29, month: 3, label: "PHASE 0" },
  { date: 30, month: 3, label: "PHASE 1" },
  { date: 1, month: 4, label: "PHASE 2" },
  { date: 2, month: 4, label: "PHASE 3" },
];

export const CalendarView: React.FC<CalendarViewProps> = ({
  month,
  year,
  events,
  allEvents = events,
}) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  // --- Grid Logic ---
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push({ date: i, month: 3 });
    // Assuming month 3 is April, and the fest bleeds into May (month 4)
    days.push({ date: 1, month: 4 }, { date: 2, month: 4 });
    while (days.length % 7 !== 0) days.push(null);
    return days;
  }, [firstDay, daysInMonth]);

  // --- Styling Helpers ---
  const getEventStyles = (type: string) => {
    const styles = {
      tech: { color: "text-cyan-400", hex: "#22d3ee", glow: "drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" },
      esports: { color: "text-purple-400", hex: "#c084fc", glow: "drop-shadow-[0_0_8px_rgba(192,132,252,0.6)]" },
      holiday: { color: "text-amber-300", hex: "#fcd34d", glow: "drop-shadow-[0_0_8px_rgba(252,211,77,0.6)]" },
    };
    return styles[type as keyof typeof styles] || { color: "text-white", hex: "#ffffff", glow: "" };
  };

  // --- Motion Variants ---
  const gridVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.04 } },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -45 },
    show: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", bounce: 0.4 } },
  };

  return (
    <section className="relative w-full py-12 px-4 md:px-6 lg:px-8 bg-[#020202] overflow-hidden min-h-[850px] flex items-center font-sans">
      
      {/* 1. Deep Space / Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full opacity-60" />
        {/* Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* 2. Command Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 border-b border-white/10 pb-6"
        >
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
              <span className="w-2 h-2 bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]" />
              <span className="text-[10px] font-kodeMono tracking-[0.4em] text-primary uppercase border border-primary/30 px-2 py-0.5 rounded-[2px] bg-primary/10">
                Data Node Matrix
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-orbitron font-black text-white tracking-tighter uppercase leading-none">
              Network <span className="text-transparent stroke-text italic">Uplink</span>
            </h2>
          </div>
          
          {/* Legend / Stats */}
          <div className="flex gap-6 items-center border border-white/10 bg-black/40 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl">
            {['tech', 'esports', 'holiday'].map(type => {
              const styles = getEventStyles(type);
              return (
                <div key={type} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: styles.hex, boxShadow: `0 0 10px ${styles.hex}` }} />
                  <span className="text-[10px] md:text-xs font-kodeMono uppercase tracking-widest text-white/60">
                    {type}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. The Node Matrix (Creative Calendar Grid) */}
        <div className="relative w-full bg-black/20 backdrop-blur-xl border border-white/5 rounded-3xl p-4 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Horizontal Connection Lines behind nodes */}
          <div className="absolute inset-0 top-[80px] bottom-[20px] hidden md:flex flex-col justify-around pointer-events-none opacity-20 px-10">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent dashed-line" />
            ))}
          </div>

          {/* Days Header */}
          <div className="grid grid-cols-7 mb-8 md:mb-12 relative z-10">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center flex flex-col items-center gap-2">
                <span className="text-[10px] md:text-xs font-kodeMono tracking-[0.2em] text-white/40 uppercase">{day}</span>
                <div className="w-1 h-1 bg-white/20 rounded-full" />
              </div>
            ))}
          </div>

          {/* Nodes */}
          <motion.div 
            variants={gridVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-7 gap-y-8 md:gap-y-12 place-items-center relative z-10"
          >
            {calendarDays.map((dayObj, idx) => {
              const isFestival = dayObj && FESTIVAL_DATES.some(d => d.date === dayObj.date && d.month === dayObj.month);
              const festivalInfo = dayObj ? FESTIVAL_DATES.find(d => d.date === dayObj.date && d.month === dayObj.month) : null;
              const event = dayObj ? events.find(e => e.date === dayObj.date && e.month === dayObj.month) : null;
              const eStyles = event ? getEventStyles(event.type) : null;

              // Empty Node Slot
              if (!dayObj) {
                return (
                  <div key={idx} className="w-8 h-8 flex items-center justify-center opacity-10">
                    <span className="text-white/50 text-xs">+</span>
                  </div>
                );
              }

              // Standard Node vs Festival Node
              return (
                <motion.div
                  variants={nodeVariants}
                  key={idx}
                  onClick={() => {
                    if (isFestival) {
                      setSelectedDate(dayObj.date);
                      setSelectedMonth(dayObj.month);
                    }
                  }}
                  className={`relative flex flex-col items-center justify-center group/node
                    ${isFestival ? 'cursor-pointer z-30' : 'z-10'}
                  `}
                >
                  {/* Festival specific heavily animated rings */}
                  {isFestival && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Radar Ping */}
                      <div className="absolute w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-full border border-primary/40 animate-radar-spin" />
                      <div className="absolute w-[60px] h-[60px] md:w-[90px] md:h-[90px] rounded-full border border-primary/20 animate-radar-spin-reverse" />
                      {/* Connecting beam to previous/next day */}
                      <div className="absolute w-[200%] h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent top-1/2 -translate-y-1/2 -z-10 animate-pulse hidden md:block" />
                    </div>
                  )}

                  {/* The Core Shape (Circle for normal, Hex/Octagon for Festival) */}
                  <div className={`relative flex items-center justify-center transition-all duration-500
                    ${isFestival 
                      ? 'w-14 h-14 md:w-20 md:h-20 bg-black border-2 border-primary/80 shadow-[0_0_30px_rgba(184,92,56,0.3)] group-hover/node:scale-110 group-hover/node:bg-primary/10 rounded-lg rotate-45 group-hover/node:rotate-90' 
                      : 'w-10 h-10 md:w-14 md:h-14 bg-white/[0.03] border border-white/10 rounded-full group-hover/node:border-white/30 group-hover/node:bg-white/10'
                    }
                  `}>
                    {/* Reverse rotation for text to stay straight on festival days */}
                    <span className={`font-spaceGrotesk leading-none transition-colors duration-300
                      ${isFestival ? 'text-2xl md:text-4xl text-white font-bold drop-shadow-[0_0_10px_#fff] -rotate-45 group-hover/node:-rotate-90' : 'text-lg md:text-xl text-white/50 group-hover/node:text-white font-light'}
                    `}>
                      {String(dayObj.date).padStart(2, '0')}
                    </span>

                    {/* Event Dot Indicator (Normal Days) */}
                    {event && !isFestival && eStyles && (
                      <div 
                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-black animate-pulse"
                        style={{ backgroundColor: eStyles.hex, boxShadow: `0 0 10px ${eStyles.hex}` }}
                      />
                    )}
                  </div>

                  {/* External Labels / Floating Info */}
                  <div className="absolute top-[110%] w-[120px] text-center flex flex-col items-center gap-1">
                    
                    {/* Festival Prompts */}
                    {isFestival && (
                      <>
                        <span className="text-[10px] md:text-xs font-kodeMono font-bold text-primary tracking-widest uppercase drop-shadow-[0_0_5px_var(--primary)] whitespace-nowrap">
                          {festivalInfo?.label}
                        </span>
                        {/* The highly requested INSISTENT CLICK animation */}
                        <div className="mt-1 flex items-center gap-1.5 px-2 py-0.5 rounded-[4px] border border-primary/50 bg-primary/10 backdrop-blur-md opacity-80 group-hover/node:opacity-100 group-hover/node:bg-primary/30 group-hover/node:scale-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(184,92,56,0.2)]">
                          <svg className="w-2.5 h-2.5 text-primary animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                          </svg>
                          <span className="text-[8px] md:text-[9px] font-kodeMono text-white tracking-[0.1em] uppercase whitespace-nowrap">
                            Engage
                          </span>
                        </div>
                      </>
                    )}

                    {/* Normal Event Prompts */}
                    {event && !isFestival && eStyles && (
                      <span className={`text-[8px] md:text-[9px] font-kodeMono uppercase font-semibold truncate w-full ${eStyles.color} ${eStyles.glow}`}>
                        {event.title}
                      </span>
                    )}
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.15);
        }
        .dashed-line {
          background-image: linear-gradient(to right, rgba(255,255,255,0.2) 50%, transparent 50%);
          background-size: 10px 1px;
          background-repeat: repeat-x;
        }
        @keyframes radar-spin {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 0.5; border-color: var(--primary); }
          100% { transform: scale(0.8) rotate(360deg); opacity: 0; }
        }
        @keyframes radar-spin-reverse {
          0% { transform: scale(1.1) rotate(360deg); opacity: 0; }
          50% { transform: scale(0.9) rotate(180deg); opacity: 0.3; }
          100% { transform: scale(1.1) rotate(0deg); opacity: 0; }
        }
        .animate-radar-spin {
          animation: radar-spin 4s linear infinite;
        }
        .animate-radar-spin-reverse {
          animation: radar-spin-reverse 3.5s linear infinite;
        }
      `}</style>

      {/* Modal Integration */}
      <AnimatePresence>
        {selectedDate !== null && selectedMonth !== null && (
          <EventDetailsModal
            date={selectedDate}
            month={selectedMonth}
            year={year}
            events={allEvents}
            onClose={() => {
              setSelectedDate(null);
              setSelectedMonth(null);
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
};