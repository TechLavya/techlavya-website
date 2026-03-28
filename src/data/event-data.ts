import { v4 as uuidv4 } from 'uuid';

export type EventDataType = {
  id: string;
  title: string;
  image: string;
  buttonText: string;
  prizePool: string;
  prize: number;
  time: string;
  location: string;
  contact: string;
  lastDate: string;
  registrationLink: string;
  type: 'techlavya' | 'esport';
}


export const TechlavyaEventData: EventDataType[] = [
  {
    id: uuidv4(),
    title: 'HACKATHON',
    image: '/events/tech-event/Hackvengers_Web_Picsay_Riyan.png',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 1000,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/hackathons/hack-vengers-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645547',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CODETHON',
    image: '/events/tech-event/0-Gravity_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/gravity-algogems-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1647291',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'AUTOCAD',
    image: '/events/tech-event/Cad_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/cad-builder-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645388',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'ROBORUSH',
    image: '/events/tech-event/Roborush_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/robo-rush-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645405',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'PROJECT EXHIBITION',
    image: '/events/tech-event/Acadexpo_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/acadexpo-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645493',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CIRCUIT DESIGN',
    image: '/events/tech-event/Circuit_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/circuit-design-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645509',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TECH QUIZ',
    image: '/events/tech-event/Brainbuster_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/brain-buster-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645515',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TYPING TEST',
    image: '/events/tech-event/Typing_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/typing-test-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1645525',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TREASURE HUNT',
    image: '/events/tech-event/Treasure_Hunt_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/treasure-hunt-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646050',
    type: 'techlavya'
  }
]

export const EsportsEventData: EventDataType[] = [
  {
    id: uuidv4(),
    title: 'FREE FIRE MAX',
    image: '/events/esports-event/Freefire_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/free-fire-max-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646065',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'BGMI',
    image: '/events/esports-event/Bgmi_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/p/bgmi-crimson-circle-conquest-rkmgec-2k26-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-puruli-1647307',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'eFootball',
    image: '/events/esports-event/Efootball_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/e-football-mobile-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646072',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Mini Militia',
    image: '/events/esports-event/Minimilitia_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/mini-militia-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646080',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Valorant (PC)',
    image: '/events/esports-event/Valorant_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/valorant-pc-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646083',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'FIFA (PC)',
    image: '/events/esports-event/Fifa_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/fifa-pc-edition-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1647262',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Asphalt 9',
    image: '/events/esports-event/Asphalt_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/asphalt-9-legends-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646090',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Clash of Clans',
    image: '/events/esports-event/Clash_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/clash-of-clans-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646093',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Chess',
    image: '/events/esports-event/Chess_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/chess-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646096',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: "Rubik's Cube",
    image: '/events/esports-event/Rubik_web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/events/rubik-rumble-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646097',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: "Line Follow Robot",
    image: '/events/esports-event/Line_Follow_Robot_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    prize: 0,
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/competitions/line-follower-robot-techlavya-ignite-2026-ramkrishna-mahato-government-engineering-college-purulia-1646042',
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