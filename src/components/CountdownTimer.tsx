"use client";

import { countdownTargetDate } from "@/data/countDown";
import { useState, useEffect } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-md border border-white/20 bg-black/40 backdrop-blur-lg shadow-lg text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

// Simplify by removing the CardHeader and CardContent separate components
// and integrating them directly into the CalendarCard component

interface CalendarCardProps {
  title: string;
  value: number;
  color: string;
  previousValue?: number;
}

function CalendarCard({ title, value, color, previousValue }: CalendarCardProps) {
  const [animating, setAnimating] = useState(false);
  
  useEffect(() => {
    if (previousValue !== undefined && previousValue !== value) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [value, previousValue]);

  return (
    <div className="flex flex-col items-center">
      <Card className="relative overflow-visible min-w-18 sm:min-w-20 md:min-w-24 w-full transform hover:scale-105 transition-transform duration-300">
        {/* Integrated header - no separate component */}
        <div className={`text-center py-2 rounded-t-lg font-semibold ${color} text-xs sm:text-sm tracking-wider border-b border-white/10`}>
          {title}
        </div>

        {/* Integrated content - no separate component */}
        <div className="flex items-center justify-center p-2 sm:p-3">
          <span 
            className={`text-xl sm:text-2xl md:text-3xl font-bold tabular-nums transition-all duration-500 
              ${animating ? 'animate-pulse scale-110' : ''}`}
          >
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </Card>
    </div>
  );
}

export default function CountdownTimer() {
  const [targetDate] = useState(countdownTargetDate);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  const [previousTimeLeft, setPreviousTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(intervalId);
        setPreviousTimeLeft(timeLeft);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
      );

      setPreviousTimeLeft(timeLeft);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, timeLeft]);

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-transparent rounded-lg">
      <div className="flex gap-3 w-full max-w-lg">
        <div className="flex-1">
          <CalendarCard 
            title="DAYS" 
            value={timeLeft.days} 
            color="bg-red-500/70" 
            previousValue={previousTimeLeft.days}
          />
        </div>
        <div className="flex items-center justify-center text-white/70 text-lg font-light">:</div>
        <div className="flex-1">
          <CalendarCard 
            title="HRS" 
            value={timeLeft.hours} 
            color="bg-blue-500/70" 
            previousValue={previousTimeLeft.hours}
          />
        </div>
        <div className="flex items-center justify-center text-white/70 text-lg font-light">:</div>
        <div className="flex-1">
          <CalendarCard 
            title="MIN" 
            value={timeLeft.minutes} 
            color="bg-yellow-500/70" 
            previousValue={previousTimeLeft.minutes}
          />
        </div>
        <div className="flex items-center justify-center text-white/70 text-lg font-light">:</div>
        <div className="flex-1">
          <CalendarCard 
            title="SEC" 
            value={timeLeft.seconds} 
            color="bg-green-500/70" 
            previousValue={previousTimeLeft.seconds}
          />
        </div>
      </div>
    </div>
  );
}