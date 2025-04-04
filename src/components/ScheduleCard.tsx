'use client'

import { Calendar } from "lucide-react";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EventItem } from "./EventItem";

interface ScheduleCardProps {
  events: { title: string; type: string }[];
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ events }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (events.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [events]);

  return (
    <div className="max-w-md relative overflow-hidden rounded-2xl border border-stone-700 bg-black/60 backdrop-blur-lg p-4 sm:p-6 md:p-10 h-auto shadow-xl shadow-indigo-500/20 group transition-all duration-300 hover:shadow-indigo-500/30">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-7 w-7 text-indigo-400" />
          <p className="text-lg min-[400]:text-xl md:text-3xl font-bold font-kodeMono text-indigo-300">Events</p>
        </div>

        <div className="text-neutral-300 mt-4 relative z-20">
          <ul className="list-none space-y-4 md:space-y-6">
            {events.map((event, index) => (
              <EventItem
                key={uuidv4()}
                title={event.title}
                type={event.type}
                isActive={index === activeIndex}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 z-0 transition-opacity duration-300 group-hover:opacity-70" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-0" />
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0" />
    </div>
  );
};
