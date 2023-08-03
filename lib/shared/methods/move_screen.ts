export const move_screen = (id: string) => {
  const element = document.getElementById(id) as HTMLElement
  const top     = element.offsetTop

  console.log(top)

  window.scrollTo({ behavior: 'smooth', top: top - 76 })
}
