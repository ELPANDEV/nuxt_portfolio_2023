export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  components: ['lib/presentation/components'],
  imports: {
    dirs: [
      'lib/shared/helpers',
      'lib/shared/methods',
      'lib/shared/store',
    ]
  },
  dir: {
    pages: 'lib/presentation/pages',
    layouts:  'lib/presentation/layouts',
  },
  css: [
    '~/assets/scss/main.scss'
  ]
})
