import { nanoid } from "nanoid"

interface ITechnologies {
  all:     ITechnology
  laravel: ITechnology
  vue:     ITechnology
  nuxt:    ITechnology
  flutter: ITechnology
  node:    ITechnology
}

export const technologies: ITechnologies = {
  all:     { id: nanoid(), name: 'Todo',    image: 'https://picsum.photos/64/64', },
  laravel: { id: nanoid(), name: 'Laravel', image: 'https://picsum.photos/64/64', },
  vue:     { id: nanoid(), name: 'Vue',     image: 'https://picsum.photos/64/64', },
  nuxt:    { id: nanoid(), name: 'Nuxt',    image: 'https://picsum.photos/64/64', },
  flutter: { id: nanoid(), name: 'Flutter', image: 'https://picsum.photos/64/64', },
  node:    { id: nanoid(), name: 'Node',    image: 'https://picsum.photos/64/64', },
}


