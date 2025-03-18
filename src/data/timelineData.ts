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
      { title: "Hackvengers ( 9am - 9pm )", type: "tech" },
      { title: "Cad Builder ( 10am - 1pm )", type: "tech" },
      { title: "Chess ( 2pm - 3pm )", type: "esports" },
      { title: "Asphalt ( 4pm - 6pm )", type: "esports" },
      { title: "BGMI ( 7pm - 9pm )", type: "esports" },
    ],
  },
  {
    title: "Day 2",
    events: [
      { title: "School Event ( 8am - 4pm )", type: "tech" },
      { title: "Seminar ( 10am - 12pm )", type: "tech" },
      { title: "Acadexpo ( 2pm - 4pm )", type: "tech" },
      { title: "FIFA (PC) ( 3pm - 5pm )", type: "esports" },
      { title: "FREE FIRE MAX ( 6pm - 9pm )", type: "esports" },
      { title: "Brainbuster ( 5pm - 7pm )", type: "tech" },
    ],
  },
  {
    title: "Day 3",
    events: [
      { title: "0-Gravity ( 10am - 1pm )", type: "tech" },
      { title: "Circuit Design ( 1pm - 4pm )", type: "tech" },
      { title: "eFootball ( 5pm - 9pm )", type: "esports" },
      { title: "Rubik's Cube ( 2pm - 3pm )", type: "esports" },
      { title: "Valorant (PC) ( 4pm - 6pm )", type: "esports" },
    ],
  },
  {
    title: "Day 4",
    events: [
      { title: "Roborush ( 11am - 4pm )", type: "tech" },
      { title: "Typing Test ( 12pm - 2pm )", type: "tech" },
      { title: "Clash of Clans ( 2pm - 4pm )", type: "esports" },
      { title: "Mini Militia ( 4pm - 5:30pm )", type: "esports" },
    ],
  },
];
