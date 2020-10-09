import App from './App.svelte'

const startToCatalog = [
  {
    name: 'fade in',
    delay: 500,
    duration: 2000,
    notes: `Opacity 1 -> 0 | delay: ${500}, dur ${2000}`,
  },
  {
    name: 'store name',
    delay: 1500,
    duration: 1333,
    notes: `Opacity 0 -> 1 | delay: ${1500}, dur ${1333}`,
  },
  {
    name: 'text cta',
    delay: 1833,
    duration: 1333,
    notes: `Opacity 0 -> 1 | delay: ${1833}, dur ${1333}`,
  },
  {
    name: 'title header y pos',
    delay: 1500 + 0,
    duration: 1800,
    notes: `y pos -200px | delay: ${1500 + 0}, dur ${1800}`,
  },
  {
    name: 'title header opacity',
    delay: 1500 + 333,
    duration: 1467,
    notes: `Opacity 0 -> 1 | delay: ${1500 + 333}, dur ${1467}`,
  },
  {
    name: 'title chevron opacity',
    delay: 1500 + 1000,
    duration: 1800,
    notes: `y pos 150px | delay: ${1500 + 1000}, dur ${1800}`,
  },
  {
    name: 'title chevron y pos',
    delay: 1500 + 1000,
    duration: 1167,
    notes: `Opacity 0 -> 1 | delay: ${1500 + 1000}, dur ${1167}`,
  },
]

function getCards(cardCount = 3, timingDelay = 2000) {
  const cardDelay = Math.round(1000 / 3)

  const cardTimings = new Array(cardCount).fill('').map((_, i) => {
    const delay = timingDelay + cardDelay * (i + 1)

    return [
      {
        name: `card ${i + 1} image element scale`,
        delay: delay + 0,
        duration: 1333,
        notes: `scale 0.8 -> 1 | delay: ${delay + 0}, dur ${1333}`,
      },
      {
        name: `card ${i + 1} matte element scale`,
        delay: delay + 133,
        duration: 1333,
        notes: `scale 0 -> 1 | delay: ${delay + 133}, dur ${1333}`,
      },
    ]
  })

  return cardTimings.flat(1)
}

const app = new App({
  target: document.body,
  props: {
    totaltime: 7000,
    timing: startToCatalog.concat(getCards(3)),
  },
})

export default app
