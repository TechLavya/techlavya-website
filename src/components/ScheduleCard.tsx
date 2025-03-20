import { Calendar, Gamepad2, Sparkles, Zap } from "lucide-react";
import { v4 as uuidv4 } from 'uuid'
import React from "react";

interface ScheduleCardProps {
  events: { title: string; type: string }[];
}

export const ScheduleCard: React.FC<ScheduleCardProps> = ({ events }) => {
  return (
    <div className="max-w-sm relative overflow-hidden rounded-2xl border border-stone-700 bg-black/60 backdrop-blur-lg p-8 md:p-10 h-auto shadow-xl shadow-indigo-500/20 group transition-all duration-300 hover:shadow-indigo-500/40">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-7 w-7 text-indigo-400" />
          <p className="text-xl md:text-3xl font-bold font-kodeMono text-indigo-300">Events</p>
        </div>

        <div className="text-neutral-300 mt-4 relative z-20">
          <ul className="list-none space-y-4 md:space-y-6">
            {events.map((event) => (
              <EventItem key={uuidv4()} title={event.title} type={event.type} />
            ))}
          </ul>
        </div>
      </div>

      {/* Glass effect elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 z-0 transition-opacity duration-300 group-hover:opacity-70" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-0" />

      {/* Animated glow on hover */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0" />
    </div>
  );
};

const EventItem: React.FC<{ title: string; type: string }> = ({ title, type }) => {
  return (
    <li className="flex gap-3 items-center group/item transition-all duration-300 cursor-pointer">
      <div
        className="p-2 rounded-lg bg-stone-800/70 backdrop-blur-md text-indigo-400 transition-all duration-300 group-hover/item:bg-indigo-500/30 group-hover/item:text-indigo-300"
        aria-label={`Event type: ${type}`}
      >
        {getIconForEvent(type)}
      </div>
      <p className="text-indigo-200 text-sm sm:text-lg font-kodeMono tracking-wide group-hover/item:translate-x-2 transition-transform duration-300 ease-in-out">
        {title}
      </p>
    </li>
  );
};

const getIconForEvent = (type: string) => {
  return {
    tech: <Zap size={18} className=" h-4 w-4 text-red-400" />,
    esports: <Gamepad2 size={18} className="h-4 w-4 text-purple-400" />,
    cultural: <Sparkles size={18} className="h-4 w-4 text-yellow-400" />,
  }[type] || <Sparkles size={18} className="h-4 w-4 text-yellow-400" />;
};
