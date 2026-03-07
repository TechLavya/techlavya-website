'use client'

import React, { useMemo } from "react";
import { X, MapPin, Clock, Zap, Gamepad2, Music } from "lucide-react";

interface Event {
  date: number;
  title: string;
  type: "tech" | "esports" | "cultural";
  month: number;
  startTime?: string;
  endTime?: string;
  description?: string;
  venue?: string;
}

interface EventDetailsModalProps {
  date: number;
  month: number;
  year: number;
  events: Event[];
  onClose: () => void;
}

const FESTIVAL_LABELS: Record<string, string> = {
  "29-3": "DAY 0",
  "30-3": "DAY 1",
  "1-4": "DAY 2",
  "2-4": "DAY 3",
};

const typeConfig = {
  tech: {
    bg: "bg-yellow-500/10",
    border: "border-yellow-600/40",
    glow: "shadow-yellow-500/20",
    text: "text-yellow-300",
    accent: "text-yellow-400",
    dot: "bg-yellow-400",
    line: "from-yellow-400/80",
    badge: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
    icon: Zap,
    label: "TECH",
  },
  esports: {
    bg: "bg-amber-500/10",
    border: "border-amber-600/40",
    glow: "shadow-amber-500/20",
    text: "text-amber-300",
    accent: "text-amber-400",
    dot: "bg-amber-400",
    line: "from-amber-400/80",
    badge: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    icon: Gamepad2,
    label: "ESPORTS",
  },
  cultural: {
    bg: "bg-amber-600/10",
    border: "border-amber-500/40",
    glow: "shadow-amber-600/20",
    text: "text-amber-200",
    accent: "text-amber-300",
    dot: "bg-amber-300",
    line: "from-amber-300/80",
    badge: "bg-amber-600/20 text-amber-200 border-amber-400/40",
    icon: Music,
    label: "CULTURAL",
  },
};

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 || 12;
  return `${hr}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function getDurationMinutes(start: string, end: string): number {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  return (eh * 60 + em) - (sh * 60 + sm);
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  date,
  month,
  year,
  events,
  onClose,
}) => {
  const dayEvents = useMemo(() => {
    return events
      .filter((e) => e.date === date && e.month === month)
      .sort((a, b) => {
        if (!a.startTime || !b.startTime) return 0;
        return a.startTime.localeCompare(b.startTime);
      });
  }, [events, date, month]);

  const dateStr = new Date(year, month, date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const festivalLabel = FESTIVAL_LABELS[`${date}-${month}`] || "";

  const timeRange = useMemo(() => {
    const withTimes = dayEvents.filter(e => e.startTime && e.endTime);
    if (withTimes.length === 0) return { start: "09:00", end: "22:00" };
    const starts = withTimes.map(e => e.startTime!);
    const ends = withTimes.map(e => e.endTime!);
    const earliest = starts.sort()[0];
    const latest = ends.sort().reverse()[0];
    return { start: earliest, end: latest };
  }, [dayEvents]);

  return (
    <div
      className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-3 md:p-6 overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient border wrapper */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-600 via-amber-500 to-yellow-700 p-[1.5px] pointer-events-none">
          <div className="w-full h-full rounded-2xl bg-slate-950" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col max-h-[92vh] overflow-hidden rounded-2xl">
          {/* Header */}
          <div className="px-5 pt-5 pb-4 border-b border-amber-500/20">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1.5">
                  {festivalLabel && (
                    <span className="px-3 py-1 text-[11px] font-bold font-digital tracking-widest bg-gradient-to-r from-yellow-600 to-amber-500 text-black rounded-full">
                      {festivalLabel}
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-500/30 rounded-full font-digital">
                    {dayEvents.length} EVENTS
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white font-digital tracking-wide">
                  {dateStr}
                </h2>
                <p className="text-xs text-slate-400 mt-1 font-digital">
                  {dayEvents.filter(e => e.startTime).length > 0
                    ? `${formatTime(timeRange.start)} — ${formatTime(timeRange.end)}`
                    : "All day events"}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 group"
              >
                <X className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>

          {/* Timeline Body */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(180,130,20,0.3) transparent' }}>
            {dayEvents.length > 0 ? (
              <div className="relative">
                {/* Central timeline line */}
                <div className="absolute left-[72px] md:left-[88px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-yellow-500/50 via-amber-500/50 to-yellow-700/50" />

                {/* Events */}
                <div className="space-y-1">
                  {dayEvents.map((event, index) => {
                    const config = typeConfig[event.type];
                    const Icon = config.icon;
                    const duration = event.startTime && event.endTime
                      ? getDurationMinutes(event.startTime, event.endTime)
                      : 60;
                    const minH = duration >= 120 ? "min-h-[120px]" : duration >= 90 ? "min-h-[100px]" : "min-h-[80px]";

                    return (
                      <div
                        key={index}
                        className="relative flex items-stretch gap-3 md:gap-4 group"
                      >
                        {/* Time column */}
                        <div className="flex-shrink-0 w-[60px] md:w-[76px] flex flex-col items-end justify-start pt-3">
                          {event.startTime ? (
                            <>
                              <span className="text-[11px] md:text-xs font-bold text-white font-digital leading-none">
                                {formatTime(event.startTime)}
                              </span>
                              <span className="text-[9px] md:text-[10px] text-slate-500 font-digital mt-0.5">
                                {formatTime(event.endTime || event.startTime)}
                              </span>
                              <span className="text-[8px] text-slate-600 font-digital mt-0.5">
                                {duration >= 60 ? `${Math.floor(duration / 60)}h${duration % 60 ? ` ${duration % 60}m` : ""}` : `${duration}m`}
                              </span>
                            </>
                          ) : (
                            <span className="text-[10px] text-slate-500 font-digital">ALL DAY</span>
                          )}
                        </div>

                        {/* Timeline dot */}
                        <div className="relative flex-shrink-0 w-3 flex flex-col items-center pt-[14px]">
                          <div className={`w-3 h-3 rounded-full ${config.dot} ring-2 ring-slate-950 z-10`} />
                          <div className={`w-[1px] flex-1 bg-gradient-to-b ${config.line} to-transparent mt-1 opacity-40`} />
                        </div>

                        {/* Event card */}
                        <div className={`flex-1 ${config.bg} ${config.border} border rounded-xl p-3 md:p-4 ${minH} transition-all duration-300 hover:shadow-lg ${config.glow} group-hover:border-opacity-70 group-hover:scale-[1.01] mb-2`}>
                          {/* Top row: badge + icon */}
                          <div className="flex items-center justify-between mb-2">
                            <span className={`${config.badge} text-[9px] md:text-[10px] px-2 py-0.5 rounded-full border font-bold font-digital tracking-wider`}>
                              {config.label}
                            </span>
                            <Icon className={`w-4 h-4 ${config.accent} opacity-60`} />
                          </div>

                          {/* Title */}
                          <h3 className={`text-sm md:text-base font-bold ${config.text} mb-1.5 leading-tight`}>
                            {event.title}
                          </h3>

                          {/* Description */}
                          {event.description && (
                            <p className="text-[11px] md:text-xs text-slate-400 leading-relaxed mb-2 line-clamp-2">
                              {event.description}
                            </p>
                          )}

                          {/* Bottom row: venue + time */}
                          <div className="flex items-center gap-3 flex-wrap">
                            {event.venue && (
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-500" />
                                <span className="text-[10px] text-slate-500 font-digital">{event.venue}</span>
                              </div>
                            )}
                            {event.startTime && event.endTime && (
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-500" />
                                <span className="text-[10px] text-slate-500 font-digital">
                                  {formatTime(event.startTime)} – {formatTime(event.endTime)}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-slate-600" />
                </div>
                <p className="text-slate-500 text-sm font-digital">No events scheduled for this day</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 border-t border-amber-500/20 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {(["tech", "esports", "cultural"] as const).map((type) => {
                const config = typeConfig[type];
                const count = dayEvents.filter(e => e.type === type).length;
                if (count === 0) return null;
                return (
                  <div key={type} className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${config.dot}`} />
                    <span className={`text-[10px] font-digital font-bold ${config.text}`}>
                      {config.label} ({count})
                    </span>
                  </div>
                );
              })}
            </div>
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-digital font-bold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-200"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
