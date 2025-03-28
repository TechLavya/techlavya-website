import { v4 as uuidv4 } from 'uuid';

export type EventDataType = {
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
  type: 'techlavya' | 'esport';
}


export const TechlavyaEventData: EventDataType[] = [
  {
    id: uuidv4(),
    title: 'HACKATHON',
    image: '/events/tech-event/Hackvengers_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CODETHON',
    image: '/events/tech-event/0-Gravity_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'AUTOCAD',
    image: '/events/tech-event/Cad_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'ROBORUSH',
    image: '/events/tech-event/Roborush_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/o/A9EHUry?lb=cDOdwZXp&utm_medium=Share&utm_source=shortUrl',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'PROJECT EXHIBITION',
    image: '/events/tech-event/Acadexpo_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/o/WULgwDh?lb=cDOdwZXp&utm_medium=Share&utm_source=shortUrl',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'CIRCUIT DESIGN',
    image: '/events/tech-event/Circuit_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/o/XjsU4T5?lb=cDOdwZXp&utm_medium=Share&utm_source=shortUrl',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TECH QUIZ',
    image: '/events/tech-event/Brainbuster_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'techlavya'
  },
  {
    id: uuidv4(),
    title: 'TYPING TEST',
    image: '/events/tech-event/Typing_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: 'https://unstop.com/o/QhmyDCc?lb=cDOdwZXp&utm_medium=Share&utm_source=shortUrl',
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
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'BGMI',
    image: '/events/esports-event/Bgmi_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'eFootball',
    image: '/events/esports-event/Efootball_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Mini Militia',
    image: '/events/esports-event/Minimilitia_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Valorant (PC)',
    image: '/events/esports-event/Valorant_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'FIFA (PC)',
    image: '/events/esports-event/Fifa_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Asphalt 9',
    image: '/events/esports-event/Asphalt_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Clash of Clans',
    image: '/events/esports-event/Clash_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: 'Chess',
    image: '/events/esports-event/Chess_Web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
  {
    id: uuidv4(),
    title: "Rubik's Cube",
    image: '/events/esports-event/Rubik_web_Picsay_Riyan.webp',
    buttonText: 'Tap in Register',
    prizePool: 'Yet to be announced',
    time: 'Yet to be announced',
    location: 'Yet to be announced',
    contact: 'Yet to be announced',
    lastDate: 'Yet to be announced',
    registrationLink: '',
    type: 'esport'
  },
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