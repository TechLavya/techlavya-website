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
      { title: "0-Gravity (10am-1pm)", type: "tech" },
      { title: "CadBuilder (10am-1pm)", type: "tech" },
      { title: "Chess (2pm-3pm)", type: "esports" },
      { title: "Asphalt (4pm-6pm)", type: "esports" },
      { title: "BGMI (7pm-9pm)", type: "esports" },
    ],
  },
  {
    title: "Day 2",
    events: [
      { title: "SchoolEvent (8am-4pm)", type: "tech" },
      { title: "Seminar (10am-12pm)", type: "tech" },
      { title: "Acadexpo (2pm-4pm)", type: "tech" },
      { title: "FIFA(PC) (3pm-5pm)", type: "esports" },
      { title: "FREEFIREMAX (6pm-9pm)", type: "esports" },
      { title: "Brainbuster (5pm-7pm)", type: "tech" },
    ],
  },

];
