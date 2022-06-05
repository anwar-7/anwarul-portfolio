import project1 from './Assets/Projects/project1.PNG';
import project2 from './Assets/Projects/project2.PNG';
import project3 from './Assets/Projects/project3.PNG';

export const PROJECTS = [
  {
    image: project1,
    name: 'Gtech',
    technologyUsed:
      'React.js, HTML, CSS, Node.js, Express.js, MongoDB, Firebase.',
    description:
      'Warehouse Management website including add or remove items. Users can view own added items. Login And registration are secured.',
    url: 'https://inventory-management-a11-1b6ab.web.app/',
  },
  {
    image: project2,
    name: 'DigitalCamera',
    technologyUsed: 'React.js, HTML, CSS, Firebase.',
    description:
      'Personal Photographer service provider app. User can books service from different price category. For booking any service user need to login.',
    url: 'https://digital-camera.netlify.app/',
  },
  {
    image: project3,
    name: 'Select One',
    technologyUsed: 'React.js, HTML, CSS, Bootstrap.',
    description:
      "It has a random selector that can select one product from four products. There has some products, the user can select 4 products, and ‘choose 1 for me' button will randomly select 1 product for the user.",
    url: 'https://select-one.netlify.app/',
  },
];

export const SKILLS = [
  { name: 'ReactJs', initialRating: 3 },
  // { name: 'React-Native', initialRating: 4 },
  { name: 'JavaScript', initialRating: 3 },
  // { name: 'Redux', initialRating: 4 },
  // { name: 'Shopify/Reactjs', initialRating: 4 },
  { name: 'Nodejs', initialRating: 3 },
  { name: 'Expressjs', initialRating: 3 },
  { name: 'MongoDB', initialRating: 3 },
  // { name: 'Koajs', initialRating: 3 },
  { name: 'Html', initialRating: 4 },
  { name: 'CSS', initialRating: 4 },
  // { name: 'Unit-Testing(Jest)', initialRating: 3 },
  // { name: 'TypeScript', initialRating: 4 },
  // { name: 'Graphql', initialRating: 4 },
  // { name: 'Apollo', initialRating: 4 },
  // { name: 'AntD | ReactStrap | Material UI', initialRating: 4 },
  // { name: 'Shopify Polaris', initialRating: 4 },
  { name: 'Git', initialRating: 3 },
];

export const TOOLS = [
  'Visual Studio Code',
  'Git',
  'Chrome DevTools',
  'Npm (Node Package Manager)',
  'Heroku',
  'Firebase',
  'Netlify',
];
