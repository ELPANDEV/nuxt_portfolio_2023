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
    image: 'https://picsum.photos/440/630',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'Sinappsis',
    description: '',
    image: 'https://picsum.photos/500/680',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'Scholar',
    description: '',
    image: 'https://picsum.photos/420/640',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'Tabla Periódica',
    description: '',
    image: 'https://picsum.photos/540/720',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'HourWork',
    description: '',
    image: 'https://picsum.photos/480/480',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
  {
    id: nanoid(),
    name: 'Anato',
    description: '',
    image: 'https://picsum.photos/512/512',
    github: '',
    url: '',
    technologies: [
      technologies.flutter,
      technologies.node,
    ]
  },
]

export default projects
