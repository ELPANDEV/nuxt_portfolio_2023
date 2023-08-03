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
  all:     { id: nanoid(), name: 'Todo',   },
  laravel: { id: nanoid(), name: 'Laravel' },
  vue:     { id: nanoid(), name: 'Vue',    },
  nuxt:    { id: nanoid(), name: 'Nuxt',   },
  flutter: { id: nanoid(), name: 'Flutter' },
  node:    { id: nanoid(), name: 'Node',   },
}


