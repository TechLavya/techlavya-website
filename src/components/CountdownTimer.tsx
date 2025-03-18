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
      className={`rounded-md border border-white/10 bg-black/30 backdrop-blur-md shadow-lg text-white ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`border-b border-white/10 p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`p-4 bg-transparent ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CalendarCardProps {
  title: string;
  value: number;
  color: string; // e.g., "bg-red-500/60"
  previousValue?: number;
}

function CalendarCard({ title, value, color, previousValue }: CalendarCardProps) {
  // Animation state to track if number is changing
  const [animating, setAnimating] = useState(false);
  
  // Detect changes to trigger animations
  useEffect(() => {
    if (previousValue !== undefined && previousValue !== value) {
      setAnimating(true);
      const timer = setTimeout(() => setAnimating(false), 600); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [value, previousValue]);

  return (
    <div className="flex flex-col items-center">
      <Card className="relative overflow-visible min-w-20 sm:min-w-24 md:min-w-32 w-full">
        {/* Top binding strip with partial opacity */}
        <div className={`absolute -top-3 left-0 right-0 h-4 sm:h-5 ${color} rounded-t-md flex justify-center items-center`}>
          <div className="flex gap-3 sm:gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 rounded-full bg-white/70" />
            ))}
          </div>
        </div>

        {/* Header strip with the same color */}
        <CardHeader className={`text-center py-2 sm:py-3 rounded-t-lg font-bold ${color} text-sm sm:text-base md:text-lg`}>
          {title}
        </CardHeader>

        {/* Main content (number) */}
        <CardContent className="flex items-center justify-center p-3 sm:p-5 md:p-6">
          {/* Applying animation class when value changes */}
          <span 
            className={`text-2xl sm:text-3xl md:text-5xl font-bold tabular-nums transition-all duration-600 
              ${animating ? 'animate-pulse scale-110' : ''}`}
          >
            {value.toString().padStart(2, "0")}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CountdownTimer() {
  // Use the date from the separate data file
  const [targetDate] = useState(countdownTargetDate);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // Store previous values to detect changes for animations
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

      // Calculate remaining days, hours, minutes, seconds
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

      // Store previous values before updating
      setPreviousTimeLeft(timeLeft);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate, timeLeft]);

  // Render the timer with four CalendarCards in a single line
  return (
    <div className="mt-12 flex flex-col items-center justify-center px-3 sm:px-6 py-8 bg-transparent rounded-xl">
      {/* 
        Single line layout with larger size
        - Increased overall container size
        - Added more space between components
      */}
      <div className="flex justify-between w-full max-w-5xl overflow-x-auto px-2 py-4">
        <div className="flex-1 px-1 sm:px-2">
          <CalendarCard 
            title="DAYS" 
            value={timeLeft.days} 
            color="bg-red-500/60" 
            previousValue={previousTimeLeft.days}
          />
        </div>
        <div className="flex-1 px-1 sm:px-2">
          <CalendarCard 
            title="HOURS" 
            value={timeLeft.hours} 
            color="bg-blue-500/60" 
            previousValue={previousTimeLeft.hours}
          />
        </div>
        <div className="flex-1 px-1 sm:px-2">
          <CalendarCard 
            title="MINUTES" 
            value={timeLeft.minutes} 
            color="bg-yellow-500/60" 
            previousValue={previousTimeLeft.minutes}
          />
        </div>
        <div className="flex-1 px-1 sm:px-2">
          <CalendarCard 
            title="SECONDS" 
            value={timeLeft.seconds} 
            color="bg-green-500/60" 
            previousValue={previousTimeLeft.seconds}
          />
        </div>
      </div>
    </div>
  );
}