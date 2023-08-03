import { nanoid } from "nanoid"

interface ITechnologies {
  laravel:  ITechnology
  vue:      ITechnology
  nuxt:     ITechnology
  flutter:  ITechnology
  node:     ITechnology
  js:       ITechnology
  ts:       ITechnology
  html:     ITechnology
  css:      ITechnology
  scss:     ITechnology
  dart:     ITechnology
  php:      ITechnology
  firebase: ITechnology
  mysql:    ITechnology
}

export const technologies: ITechnologies = {
  laravel:  { id: nanoid(), name: 'Laravel' },
  vue:      { id: nanoid(), name: 'Vue', },
  nuxt:     { id: nanoid(), name: 'Nuxt', },
  flutter:  { id: nanoid(), name: 'Flutter' },
  node:     { id: nanoid(), name: 'Node', },
  js:       { id: nanoid(), name: 'Javascript', },
  ts:       { id: nanoid(), name: 'Typescript', },
  html:     { id: nanoid(), name: 'HTML', },
  css:      { id: nanoid(), name: 'CSS', },
  scss:     { id: nanoid(), name: 'SCSS', },
  dart:     { id: nanoid(), name: 'Dart', },
  php:      { id: nanoid(), name: 'PHP', },
  firebase: { id: nanoid(), name: 'Firebase', },
  mysql:    { id: nanoid(), name: 'MySQL', },
}


