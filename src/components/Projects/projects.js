import { images } from "../../assets/images";

const projectsData = [
  {
    id: 1 , 
    title: 'Netflix Clone' , 
    src: images.netflix, 
    technologies: ['NextJs', 'TailwindCSS', 'TypeScript'],
    url: 'https://netflix-clone-nextjs-dun.vercel.app/',
    code: 'https://github.com/alexisdlr/netflix-clone-nextjs'
  },
  {
    id: 2 , 
    title: 'Browser Images', 
    technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
    src: images.browser, 
    url: 'https://images-browser.vercel.app/',
    code: 'https://github.com/alexisdlr/Images-Browser'
  
  },
  {
    id: 3 , 
    title: 'Bookmark Landing Page', 
    technologies: ['ReactJs', 'Sass'],
    src: images.book, 
    url: 'https://bookmark-landing-page-two.vercel.app/',
    code: 'https://github.com/alexisdlr/Bookmark-landing-page'
  },
  {
    id: 4 , 
    title: 'Weather API', 
    technologies: ['API', 'HTML', 'JavaScript'],
    src: images.weather, 
    url: 'https://weather-finder-silk.vercel.app/',
    code: 'https://github.com/alexisdlr/WEATHER-FINDER'
  },
    {
      id: 5 , 
      title: 'Space Tourism Website', 
      technologies: ['HTML', 'SASS', 'javaScript'],
      src: images.space, 
      url: 'https://space-tourism-website-delta.vercel.app/',
      code: 'https://github.com/alexisdlr/Space-Tourism-Website'
    }

]
export default projectsData