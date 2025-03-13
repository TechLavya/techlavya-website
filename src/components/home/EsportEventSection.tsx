'use client'

import React, { useState } from "react";
import { EsportsEventData } from "@/data/event-data";
import Container from "@/components/Container";
import dynamic from "next/dynamic";

const EventCard = dynamic(() => import('@/components/EventCard'), { ssr: false });

const EsportsEventSection: React.FC = () => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  return (
    <Container id="esports" title="Esport Events" titleClassName="from-[#ec008c] to-[#fc6767]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center mb-10">
        {EsportsEventData.map((event, index) => (
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

export default EsportsEventSection;
