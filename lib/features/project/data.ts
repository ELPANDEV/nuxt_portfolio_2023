import { nanoid } from "nanoid"
import { technologies } from "~/lib/features/technology/data"

const projects: IProject[] = [
  {
    id: nanoid(),
    name: 'Project 1',
    description: 'Project 1',
    image: 'https://picsum.photos/400/600',
    github: '',
    url: '',
    technologies: [
      technologies.laravel
    ]
  },
  {
    id: nanoid(),
    name: 'Project 2',
    description: 'Project 1',
    image: 'https://picsum.photos/480/640',
    github: '',
    url: '',
    technologies: [
      technologies.laravel
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
      technologies.node,
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
      technologies.node,
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
      technologies.node,
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
      technologies.node,
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
      technologies.node,
    ]
  },
]

export default projects
