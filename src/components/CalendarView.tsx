"use client";

import React, { useMemo, useState } from "react";
import { EventDetailsModal } from "./EventDetailsModal";

interface CalendarEvent {
  date: number;
  month: number;
  title: string;
  type: "tech" | "esports" | "cultural";
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
  { date: 29, month: 3, label: "DAY 0" }, // April 29
  { date: 30, month: 3, label: "DAY 1" }, // April 30
  { date: 1, month: 4, label: "DAY 2" }, // May 1
  { date: 2, month: 4, label: "DAY 3" }, // May 2
];

export const CalendarView: React.FC<CalendarViewProps> = ({
  month,
  year,
  events,
  allEvents = events,
}) => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<number | null>(null);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const getEventForDate = (date: number, monthVal: number) => {
    return events.find(
      (event) => event.date === date && event.month === monthVal,
    );
  };

  const isFestivalDate = (date: number, monthVal: number) => {
    return FESTIVAL_DATES.some(
      (fd) => fd.date === date && fd.month === monthVal,
    );
  };

  const getFestivalLabel = (date: number, monthVal: number) => {
    const festival = FESTIVAL_DATES.find(
      (fd) => fd.date === date && fd.month === monthVal,
    );
    return festival?.label || "";
  };

  // Unique brownish-gold shades for each box based on date
  const getCellBg = (date: number) => {
    const palette = [
      "bg-[#3d2b1a]/70", // dark coffee
      "bg-[#4a3520]/70", // espresso
      "bg-[#5c3d1e]/60", // dark bronze
      "bg-[#4d3620]/65", // walnut
      "bg-[#3e2c15]/70", // dark oak
      "bg-[#5a4020]/60", // brown sugar
      "bg-[#3b2a16]/70", // cocoa
      "bg-[#52381c]/65", // saddle brown
      "bg-[#614a28]/55", // caramel
      "bg-[#4f3a22]/65", // chestnut
      "bg-[#3b2815]/70", // dark mocha
      "bg-[#584020]/60", // toffee
      "bg-[#4d3318]/65", // mahogany
      "bg-[#6a4e2a]/55", // bronze
      "bg-[#553c1f]/60", // hazelnut
    ];
    return palette[date % palette.length];
  };

  const getCellBorder = (date: number) => {
    const borders = [
      "border-amber-600/35",
      "border-yellow-700/35",
      "border-amber-600/30",
      "border-yellow-600/35",
      "border-amber-700/30",
      "border-yellow-700/30",
      "border-amber-600/35",
    ];
    return borders[date % borders.length];
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case "tech":
        return "bg-yellow-700/50 border-yellow-600/50";
      case "esports":
        return "bg-amber-800/45 border-amber-600/50";
      case "cultural":
        return "bg-yellow-800/40 border-yellow-700/45";
      default:
        return "bg-slate-800/30 border-slate-700/30";
    }
  };

  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }
    // Add April days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ date: i, month: 3 });
    }
    // Add May 1 and May 2
    days.push({ date: 1, month: 4 });
    days.push({ date: 2, month: 4 });
    while (days.length % 7 !== 0) {
      days.push(null);
    }
    return days;
  }, [firstDay, daysInMonth]);

  const numRows = Math.ceil(calendarDays.length / 7);

  // Generate intersection dots for the grid
  const gridDots = useMemo(() => {
    const dots: { left: string; top: string }[] = [];
    for (let row = 0; row <= numRows; row++) {
      for (let col = 0; col <= 7; col++) {
        dots.push({
          left: `${(col / 7) * 100}%`,
          top: `${(row / numRows) * 100}%`,
        });
      }
    }
    return dots;
  }, [numRows]);

  return (
    <>
      <div className="w-full flex items-center justify-center bg-black/80 backdrop-blur-lg px-4 md:px-8 lg:px-12 py-4 overflow-hidden">
        {/* Outer Glow Border Container */}
        <div className="relative w-full max-w-5xl h-[80vh] flex flex-col rounded-xl p-[2px] bg-gradient-to-br from-yellow-600 via-amber-500 to-yellow-700 shadow-[0_0_30px_rgba(180,130,20,0.4),0_0_60px_rgba(160,110,10,0.2)] mx-auto">
          {/* Inner Container */}
          <div className="flex flex-col bg-slate-950/95 rounded-[10px] p-3 md:p-4 h-full overflow-hidden">
            {/* Header */}
            <div className="text-center mb-2 w-full">
              <h2 className="text-xl md:text-2xl font-bold font-digital text-amber-300 mb-0.5 tracking-widest">
                April - May {year}
              </h2>
            </div>

            {/* Calendar Grid Container */}
            <div className="flex-1 flex flex-col w-full">
              {/* Days of Week Header */}
              <div className="grid grid-cols-7">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center text-[10px] md:text-xs font-bold font-digital text-amber-300 py-1.5 border-b border-amber-500/50"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="relative flex-1 min-h-0">
                {/* Circle dot connectors at grid intersections */}
                <div className="absolute inset-0 pointer-events-none z-20">
                  {gridDots.map((dot, i) => (
                    <div
                      key={i}
                      className="absolute w-[7px] h-[7px] rounded-full bg-amber-500 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: dot.left, top: dot.top }}
                    />
                  ))}
                </div>
                <div
                  className="grid grid-cols-7 h-full"
                  style={{ gridTemplateRows: `repeat(${numRows}, 1fr)` }}
                >
                  {calendarDays.map((dayObj, index) => {
                    const day = dayObj?.date;
                    const dayMonth = dayObj?.month;
                    const event =
                      day && dayMonth !== undefined
                        ? getEventForDate(day, dayMonth)
                        : null;
                    const isFestival =
                      day && dayMonth !== undefined
                        ? isFestivalDate(day, dayMonth)
                        : false;
                    const hasEvent = !!event;

                    return (
                      <div
                        key={index}
                        onClick={() => {
                          if (isFestival && day && dayMonth !== undefined) {
                            setSelectedDate(day);
                            setSelectedMonth(dayMonth);
                          }
                        }}
                        className={`flex items-center justify-center border text-center font-bold transition-all duration-300 w-full h-full ${
                          day === null
                            ? "bg-[#1e1710]/50 border-amber-900/20"
                            : isFestival
                              ? "bg-gradient-to-br from-amber-600/30 via-yellow-500/20 to-amber-700/25 border-2 border-amber-400/70 cursor-pointer hover:shadow-[0_0_20px_rgba(200,160,40,0.4)] hover:scale-[1.04] group relative overflow-hidden shadow-[0_0_12px_rgba(200,160,40,0.15)] ring-1 ring-amber-400/30"
                              : hasEvent
                                ? `${getEventColor(event?.type || "tech")} cursor-pointer hover:shadow-md hover:shadow-amber-800/20 hover:scale-[1.02]`
                                : `${getCellBg(day || 0)} ${getCellBorder(day || 0)}`
                        }`}
                      >
                        {isFestival && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-amber-500/5 to-transparent"></div>
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </>
                        )}
                        {day && (
                          <div className="w-full h-full flex flex-col items-center justify-center p-1 relative z-10 gap-1">
                            <span
                              className={`text-xl md:text-2xl font-bold font-digital tracking-wider leading-none ${
                                isFestival
                                  ? "text-amber-200 drop-shadow-[0_0_8px_rgba(245,200,60,0.5)]"
                                  : hasEvent
                                    ? "text-amber-400/80"
                                    : "text-amber-500/60"
                              }`}
                            >
                              {String(day).padStart(2, "0")}
                            </span>
                            {isFestival && dayMonth !== undefined && (
                              <span className="text-[10px] md:text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-2 py-0.5 rounded-sm border border-amber-300 font-bold text-center font-digital leading-tight whitespace-nowrap shadow-[0_0_10px_rgba(245,200,60,0.4)]">
                                {getFestivalLabel(day, dayMonth)}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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
    </>
  );
};
