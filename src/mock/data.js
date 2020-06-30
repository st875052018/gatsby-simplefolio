import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'PoKai Chang', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'This is my developer portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'PoKai Chang',
  subtitle: "I'm a computer science new grad",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I love learning new technologies, I want to make software more accessible for users and encourage people to engage with computers in a deeper way. ' +
    'My role as a developer and engineer is to empower the people who use my software to achieve their daily life and experience.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RoboCat',
    info: 'This projects was my first project using React.js and learn how to connect with APIs.',
    info2:
      '使用React.js建立的簡單網頁App，使用Robofriends上提供的API接收用戶資料，並將其製作成機器人小卡，並有搜尋功能。',
    url: 'https://st875052018.github.io/rebofriends/',
    repo: 'https://github.com/st875052018/rebofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Journal Scraping',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Android Email app',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'nba-stats-model',
    info: 'KNN inspired NBA Stats Fantasy Projection Model in Python with Pandas',
    info2: '',
    url: '',
    repo: 'https://github.com/st875052018/nba-stats-model', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send me an email',
  email: 'st875052007@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/pokai-chang/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/st875052018/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
