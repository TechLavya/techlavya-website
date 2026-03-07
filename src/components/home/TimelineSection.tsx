import { timelineData } from "@/data/timelineData";
import React from "react";
import { ScheduleCard } from "../ScheduleCard";

const TimelineSection: React.FC = () => {
  const events = timelineData[0]?.events || [];

  return (
    <div id="schedule" className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Headline centered between counter and calendar */}
      <div className="flex items-center justify-center py-24 md:py-32">
        <h1 className="text-3xl md:text-5xl font-bold font-digital text-amber-400 tracking-[0.2em] uppercase drop-shadow-[0_0_20px_rgba(200,160,40,0.4)] text-center">
          Events Schedule
        </h1>
      </div>
      <ScheduleCard events={events} />
    </div>
  );
};

export default TimelineSection;
