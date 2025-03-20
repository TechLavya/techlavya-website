import { timelineData } from "@/data/timelineData";
import React from "react";
import { ScheduleCard } from "../ScheduleCard";
import dynamic from "next/dynamic";
const Timeline = dynamic(()=>import('@/components/ui/timeline'),{ssr:false})

const TimelineSection: React.FC = () => {
  const data = timelineData.map(({ title, events }) => ({
    title,
    content: <ScheduleCard events={events} />,
  })
  );

  return (
    <div id="schedule" className="w-full">
      <Timeline data={data} />
    </div>
  );
};  

export default TimelineSection;
