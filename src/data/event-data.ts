import { v4 as uuidv4 } from 'uuid';

export type EventDataType = {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  prizePool: string;
  prize: number |string;
  time: string;
  location: string;
  contact: string;
  lastDate: string;
  registrationLink: string;
  eventDate: string;
  type: 'techlavya' | 'esport';
}


export const TechlavyaEventData: EventDataType[] = [
  {
    id: uuidv4(),
    title: 'HACKATHON',
    image: '/events/HACKATHON.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 10K',
    prize: "Upto 10000",
    time: '10:00 AM onwards - morning; Judgement & Presentation: 10:00 AM - 1:00 PM',
    location: 'CSE',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/hackathons/hack-vengers-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645547',
    eventDate: '14th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CODETHON',
    image: '/events/CODETHON.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 8K',
    prize: "Upto 8000",
    time: '11:00 AM - 2:00 PM',
    location: 'CSE',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/gravity-algogems-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1647291',
    eventDate: '13th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'AUTOCAD',
    image: '/events/AUTOCAD.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 6K',
    prize: "Upto 6000",
    time: '11:00 AM - 2:00 PM',
    location: 'CAD Lab',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/cad-builder-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645388',
    eventDate: '13th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'ROBORUSH',
    image: '/events/ROBO RUSH.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 8K',
    prize: "Upto 8000",
    time: '7:30 PM - 9:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/robo-rush-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645405',
    eventDate: '14th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'PROJECT EXHIBITION',
    image: '/events/ACADEXPO.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: "TBA",
    time: '10:00 AM - 1:00 PM',
    location: 'Civil',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/acadexpo-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645493',
    eventDate: '14th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CIRCUIT DESIGN',
    image: '/events/CIRCUIT DESIGN.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 3K',
    prize: "Upto 3000",
    time: '2:00 PM - 5:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/circuit-design-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645509',
    eventDate: '13th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TECH QUIZ',
    image: '/events/BRAIN BUSTER.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 6K',
    prize: "Upto 6000",
    time: '6:30 PM - 7:30 PM',
    location: 'CSE Seminar',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/brain-buster-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645515',
    eventDate: '13th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TYPING TEST',
    image: '/events/TYPING TEST.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 3K',
    prize: "Upto 3000",
    time: '10:00 AM - 12:00 PM',
    location: 'CAD Lab',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/typing-test-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645525',
    eventDate: '14th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TREASURE HUNT',
    image: '/events/TREASURE HUNT.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: "TBA",
    time: '4:00 PM - 6:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/treasure-hunt-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646050',
    eventDate: '14th May 2026',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: "Line Follow Robot",
    image: '/events/LINE FOLLOWER ROBOT.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Upto 6K',
    prize: "Upto 6000",
    time: '5:00 PM - 6:30 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/line-follower-robot-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646042',
    eventDate: '13th May 2026',
    type: 'techlavya'
  }
]

export const EsportsEventData: EventDataType[] = [
  {
    id: uuidv4(),
    title: 'FREE FIRE MAX',
    image: '/events/Free Fire.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '5:00 PM - 6:30 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/free-fire-max-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646065',
    eventDate: '13th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'BGMI',
    image: '/events/BGMI.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '5:00 PM - 6:30 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/p/bgmi-crimson-circle-conquest-rkmgec-2k26-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-puruli-1647307',
    eventDate: '13th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'eFootball',
    image: '/events/e FOOTBALL.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '8:15 PM - 9:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/e-football-mobile-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646072',
    eventDate: '13th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Mini Militia',
    image: '/events/MINI MILITIA.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '5:00 PM - 6:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/mini-militia-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646080',
    eventDate: '14th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Valorant (PC)',
    image: '/events/VALORANT.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '7:30 PM - 8:15 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/valorant-pc-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646083',
    eventDate: '13th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'FIFA (PC)',
    image: '/events/FIFA.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/fifa-pc-edition-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1647262',
    eventDate: 'Yet to be announced',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Asphalt 9',
    image: '/events/ASPHALT.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '7:00 PM - 8:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/asphalt-9-legends-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646090',
    eventDate: '14th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Clash of Clans',
    image: '/events/COC.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '6:00 PM - 7:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/competitions/clash-of-clans-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646093',
    eventDate: '14th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Chess',
    image: '/events/CHESS.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '2:00 PM - 4:00 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/chess-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646096',
    eventDate: '14th May 2026',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: "Rubik's Cube",
    image: '/events/RUBIK RUMBLE.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Championship Merchandise',
    prize: "TBA",
    time: '7:30 PM - 8:30 PM',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: '4th May',
    registrationLink: 'https://unstop.com/events/rubik-rumble-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646097',
    eventDate: '13th May 2026',
    type: 'esport'
  }
]


type CulturalEventDataType = {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  prizePool: string;
  time: string;
  location: string;
  contact: string;
  lastDate: string;
  registrationLink: string;
}


export const CulturalEventData: CulturalEventDataType[] = [
  {
    id: uuidv4(),
    title: 'Rocking Twilight',
    image: '/events/cultural-event/twilight.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: ''
  },
  {
    id: uuidv4(),
    title: 'Velvet Souls',
    image: '/events/cultural-event/octaves.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: ''
  },
  {
    id: uuidv4(),
    title: 'Highway',
    image: '/events/cultural-event/highway.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: ''
  }
]