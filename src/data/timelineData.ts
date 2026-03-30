interface Event {
  date: number;
  month: number;
  title: string;
  type: "tech" | "esports" | "holiday";
  startTime?: string;
  endTime?: string;
  description?: string;
  venue?: string;
}

interface TimelineEntry {
  title: string;
  events: Event[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "May 2026",
    events: [
      // Day 1 - May 13, 2026
      { date: 13, month: 4, title: "Inauguration Ceremony", startTime: "09:00", endTime: "11:00", type: "holiday", description: "Festival opening ceremony.", venue: "Main Auditorium" },
      { date: 13, month: 4, title: "Codethon", startTime: "11:00", endTime: "14:00", type: "tech", description: "Competitive coding challenge.", venue: "CS Lab Block" },
      { date: 13, month: 4, title: "AutoCAD (ME, CE)", startTime: "11:00", endTime: "14:00", type: "tech", description: "AutoCAD design challenge for Mechanical and Civil branches.", venue: "Mech/Civil Lab" },
      { date: 13, month: 4, title: "Circuit Design", startTime: "14:00", endTime: "17:00", type: "tech", description: "Circuit design and implementation round.", venue: "Electronics Lab" },
      { date: 13, month: 4, title: "Line Follower Robot", startTime: "17:00", endTime: "18:30", type: "tech", description: "Autonomous robot line tracking competition.", venue: "Robotics Lab" },
      { date: 13, month: 4, title: "BGMI", startTime: "17:00", endTime: "18:30", type: "esports", description: "Mobile gaming battle arena.", venue: "Esports Arena" },
      { date: 13, month: 4, title: "Free Fire", startTime: "17:00", endTime: "18:30", type: "esports", description: "Free Fire tournament matches.", venue: "Esports Arena" },
      { date: 13, month: 4, title: "Tech Quiz", startTime: "18:30", endTime: "19:30", type: "tech", description: "Technical quiz competition.", venue: "Seminar Hall A" },
      { date: 13, month: 4, title: "Rubik's Cube", startTime: "19:30", endTime: "20:30", type: "esports", description: "Speed cubing challenge.", venue: "Seminar Hall B" },
      { date: 13, month: 4, title: "Valorant", startTime: "19:30", endTime: "20:15", type: "esports", description: "Valorant tournament round.", venue: "Esports Arena" },
      { date: 13, month: 4, title: "eFootball", startTime: "20:15", endTime: "21:00", type: "esports", description: "eFootball match series.", venue: "Esports Arena" },

      // Day 2 - May 14, 2026
      { date: 14, month: 4, title: "Hackathon Begins", startTime: "10:00", type: "tech", description: "Hackathon kickoff and coding starts.", venue: "CS Lab Block" },
      { date: 14, month: 4, title: "Project Exhibition", startTime: "10:00", endTime: "13:00", type: "tech", description: "Project showcase and evaluation.", venue: "Exhibition Hall" },
      { date: 14, month: 4, title: "Typing Test", startTime: "10:00", endTime: "12:00", type: "tech", description: "Typing speed and accuracy competition.", venue: "CS Lab Block" },
      { date: 14, month: 4, title: "Chess", startTime: "14:00", endTime: "16:00", type: "esports", description: "Chess tournament rounds.", venue: "Seminar Hall B" },
      { date: 14, month: 4, title: "Treasure Hunt", startTime: "16:00", endTime: "18:00", type: "holiday", description: "Campus treasure hunt activity.", venue: "Campus Grounds" },
      { date: 14, month: 4, title: "Mini Militia", startTime: "17:00", endTime: "18:00", type: "esports", description: "Mini Militia tournament match.", venue: "Esports Arena" },
      { date: 14, month: 4, title: "Clash of Clans", startTime: "18:00", endTime: "19:00", type: "esports", description: "Clash of Clans tournament match.", venue: "Esports Arena" },
      { date: 14, month: 4, title: "Asphalt 9", startTime: "19:00", endTime: "20:00", type: "esports", description: "Asphalt 9 racing challenge.", venue: "Esports Arena" },
      { date: 14, month: 4, title: "Robo Rush", startTime: "19:30", endTime: "21:00", type: "tech", description: "Robo Rush competition rounds.", venue: "Robotics Lab" },

      // Day 3 - May 15, 2026
      { date: 15, month: 4, title: "Hackathon Ends (Morning)", startTime: "09:00", type: "tech", description: "Hackathon submission closes in the morning.", venue: "CS Lab Block" },
      { date: 15, month: 4, title: "Hackathon Judgement & Presentation", startTime: "10:00", endTime: "13:00", type: "tech", description: "Final judging and team presentations.", venue: "Main Auditorium" },
    ],
  },
];