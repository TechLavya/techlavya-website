interface Event {
  title: string;
  type: "tech" | "esports" | "cultural";
}

interface TimelineEntry {
  title: string;
  events: Event[];
}

export const timelineData: TimelineEntry[] = [
  {
    title: "Day 1",
    events: [
      { title: "Hackvengers", type: "tech" },
      { title: "0-Gravity", type: "tech" },
      { title: "FREE FIRE MAX", type: "esports" },
      { title: "BGMI", type: "esports" },
      { title: "Rubik's Cube", type: "esports" },

    ],
  },
  {
    title: "Day 2",
    events: [
      { title: "Cad Builder", type: "tech" },
      { title: "Roborush", type: "tech" },
      { title: "eFootball", type: "esports" },
      { title: "Mini Militia", type: "esports" },
    ],
  },
  {
    title: "Day 3",
    events: [
      { title: "Acadexpo", type: "tech" },
      { title: "Circuit Design", type: "tech" },
      { title: "Valorant (PC)", type: "esports" },
      { title: "FIFA (PC)", type: "esports" },
    ],
  },
  {
    title: "Day 4",
    events: [
      { title: "Brainbuster", type: "tech" },
      { title: "Typing", type: "tech" },
      { title: "Clash of Clans", type: "esports" },
      { title: "Chess", type: "esports" },
    ],
  },
];
