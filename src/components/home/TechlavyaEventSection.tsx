'use client'

import React, { useState } from "react";
import Container from "../Container";
import { TechlavyaEventData } from "@/data/event-data";
import dynamic from "next/dynamic";
const EventCard = dynamic(() => import('@/components/EventCard'), { ssr: false })


const TechlavyaEventSection: React.FC = () => {
     const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
     return (
          <Container id="techlavya" title="Techlavya Events" titleClassName="from-[#D4145A] to-[#FBB03B]">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mb-10">
                    {TechlavyaEventData.map((event, index) => (
                         <EventCard
                              key={event.id}
                              eventId={event.id}
                              duration={index}
                              eventData={event}
                              flippedCardId={flippedCardId}
                              setFlippedCardId={setFlippedCardId}
                         />
                    ))}
               </div>
          </Container>
     );
};

export default TechlavyaEventSection;
