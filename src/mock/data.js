import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'PoKai Chang', // e.g: 'Name | Developer'
  lang: 'English, Chinese', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'PoKai Chang',
  subtitle: "I'm the new grad",
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Robofriends',
    info: 'This projects was my first project using React.js and learn how to connect with APIs.',
    info2:
      '使用React.js建立的簡單網頁App，使用Robofriends上提供的API接收用戶資料，並將其製作成機器人小卡，並有搜尋功能。',
    url: 'https://st875052018.github.io/rebofriends/',
    repo: 'https://github.com/st875052018/rebofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
