import { nanoid } from "nanoid"
import { technologies } from "~/lib/features/technology/data"

const projects: IProject[] = [
  {
    id: nanoid(),
    name: 'LinkedIn',
    description: '',
    image: '/images/linkedin.png',
    github: '',
    url: 'https://elpandev.github.io/nuxt_linkedin/',
    technologies: [
      technologies.nuxt,
    ]
  },
  {
    id: nanoid(),
    name: 'Smart Contracts',
    description: '',
    image: '/images/smart_contracts.png',
    github: '',
    url: 'https://www.dce.todo.legal/',
    technologies: [
      technologies.nuxt
    ]
  },
  {
    id: nanoid(),
    name: 'Scholar',
    description: '',
    image: '/images/scholar.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.elpandev.scholar',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'Tabla Periódica',
    description: '',
    image: '/images/periodic_table.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.elpandev.periodic_table_quiz',
    technologies: [
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'HourWork',
    description: '',
    image: '/images/hourwork.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.elpandev.hourwork',
    technologies: [
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'Sinappsis',
    description: '',
    image: '/images/sinappsis.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.ELPANDEV.sinappsis',
    technologies: [
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'Walia',
    description: '',
    image: '/images/walia.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.elpandev.walia',
    technologies: [
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'Xide SC',
    description: '',
    image: '/images/xide_sc.png',
    github: '',
    url: 'https://xide.academy/',
    technologies: [
      technologies.nuxt,
      technologies.node,
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'Anato',
    description: '',
    image: '/images/anato.webp',
    github: '',
    url: 'https://play.google.com/store/apps/details?id=com.ElPaN.MegaQuizDeAnatomiaHumana',
    technologies: [
      technologies.flutter,
    ]
  },
  {
    id: nanoid(),
    name: 'Learning Bride Academy',
    description: '',
    image: '/images/learning_bridge_academy.png',
    github: '',
    url: 'https://learningbridge.academy',
    technologies: [
      technologies.nuxt,
      technologies.node,
      technologies.flutter,
    ]
  },
]

export default projects
