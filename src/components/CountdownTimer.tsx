"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { countdownTargetDate } from "@/data/countDown";
import { motion } from "motion/react"

const CountdownTimer: React.FC = () => {
  const [targetDate] = useState(countdownTargetDate)

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(intervalId)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(intervalId)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
      {/* Days Calendar */}
      <CalendarCard title="Days" value={timeLeft.days} color="bg-[#E71C23]" />

      {/* Hours Calendar */}
      <CalendarCard title="Hours" value={timeLeft.hours} color="bg-[#4834DF]" />

      {/* Hours Calendar */}
      <CalendarCard title="Minutes" value={timeLeft.minutes} color="bg-[#DFAF2B]" />

      {/* Seconds Calendar */}
      <CalendarCard title="Seconds" value={timeLeft.seconds} color="bg-[#43BE31]" />
    </div>
  )
}

export default CountdownTimer

const CalendarCard: React.FC<{ title: string; value: number; color: string }> = ({
  title,
  value,
  color,
}) => {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-20 md:w-[100px] shadow-lg relative overflow-visible">
        {/* Calendar top binding */}
        <div className={`absolute -top-2 left-0 right-0 h-4 ${color} rounded-t-md flex justify-center items-center`}>
          <div className="flex gap-2.5 md:gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/70" />
            ))}
          </div>
        </div>

        {/* Calendar header */}
        <CardHeader className={`${color} text-white text-xs md:text-sm font-semibold text-center py-2 rounded-t-lg`}>{title}</CardHeader>

        {/* Calendar content with smooth animation */}
        <CardContent className="w-full flex items-center justify-center p-3 text-white bg-[#2C3335]">
          <motion.span
            key={value}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="text-3xl md:text-4xl font-bold tabular-nums"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </CardContent>
        {/* Calendar page curl effect */}
        <div className="absolute bottom-0 right-0 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-transparent to-[#47535E] rounded-tl-md" />
      </Card>
    </div>
  );
};
