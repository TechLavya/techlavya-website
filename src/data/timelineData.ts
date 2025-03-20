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
    title: "Day1",
    events: [
      { title: "Hackvengers (9am-9pm)", type: "tech" },
      { title: "CadBuilder (10am-1pm)", type: "tech" },
      { title: "Chess (2pm-3pm)", type: "esports" },
      { title: "Asphalt (4pm-6pm)", type: "esports" },
      { title: "BGMI (7pm-9pm)", type: "esports" },
    ],
  },
  {
    title: "Day2",
    events: [
      { title: "SchoolEvent (8am-4pm)", type: "tech" },
      { title: "Seminar (10am-12pm)", type: "tech" },
      { title: "Acadexpo (2pm-4pm)", type: "tech" },
      { title: "FIFA(PC) (3pm-5pm)", type: "esports" },
      { title: "FREEFIREMAX (6pm-9pm)", type: "esports" },
      { title: "Brainbuster (5pm-7pm)", type: "tech" },
    ],
  },
  {
    title: "Day3",
    events: [
      { title: "0-Gravity (10am-1pm)", type: "tech" },
      { title: "CircuitDesign (1pm-4pm)", type: "tech" },
      { title: "eFootball (5pm-9pm)", type: "esports" },
      { title: "Rubik'sCube (2pm-3pm)", type: "esports" },
      { title: "Valorant(PC) (4pm-6pm)", type: "esports" },
    ],
  },
  {
    title: "Day4",
    events: [
      { title: "Roborush (11am-4pm)", type: "tech" },
      { title: "TypingTest (12pm-2pm)", type: "tech" },
      { title: "ClashofClans (2pm-4pm)", type: "esports" },
      { title: "MiniMilitia (4pm-5:30pm)", type: "esports" },
    ],
  },
];
