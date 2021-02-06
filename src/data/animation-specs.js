function getTotalDuration(animations) {
  let totalTime = 0

  animations.forEach((spec) => {
    const specTime = spec.delay + spec.duration

    if (specTime > totalTime) {
      totalTime = Math.ceil(specTime / 1000) * 1000
    }
  })

  return totalTime
}

const fullScreenToCatalog = () => {
  const animations = [
    {
      name: 'FS text opacity',
      delay: 0,
      duration: 1333,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0',
    },
    {
      name: 'FS matte clip',
      delay: 1000,
      duration: 1667,
      easing: '0.8, 0, 0.6, 1',
      notes: 'Clip -2700dp',
    },
    {
      name: 'FS image pos',
      delay: 1000,
      duration: 1667,
      easing: '0.8, 0, 0.6, 1',
      notes: 'Y -1350',
    },
    {
      name: 'Last catalog card pos',
      delay: 667,
      duration: 2367,
      easing: '0.1, 0, 0.4, 1',
      notes: 'Y 1200dp',
    },
    {
      name: 'Last catalog card opacity',
      delay: 1500,
      duration: 1167,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.25 -> 1',
    },
    {
      name: 'Element scrimm',
      delay: 1333,
      duration: 1833,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.75 -> 0',
    },
    {
      name: 'Column 5 opacity',
      delay: 1700,
      duration: 1667,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.1 -> 1',
    },
    {
      name: 'Column 4 opacity',
      delay: 1867,
      duration: 1667,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.1 -> 1',
    },
    {
      name: 'Column 3 opacity',
      delay: 2033,
      duration: 1667,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.1 -> 1',
    },
    {
      name: 'Column 2 opacity',
      delay: 2200,
      duration: 1667,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.1 -> 1',
    },
    {
      name: 'Column 1 opacity',
      delay: 2367,
      duration: 1667,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.1 -> 1',
    },
    {
      name: 'Element BG scrimm',
      delay: 2033,
      duration: 3000,
      easing: '0.33, 0, 0.67, 1',
      notes: '0.75 -> 0',
    },
  ]

  return {
    animations: animations.reverse(),
    id: 'fullScreenToCatalog',
    name: 'Full Screen to catalog',
    totalTime: getTotalDuration(animations),
  }
}

const startToCatalog = () => {
  const animations = [
    {
      name: 'fade in',
      delay: 500,
      duration: 2000,
      easing: '',
      notes: 'Opacity 1 -> 0',
    },
    {
      name: 'store name',
      delay: 1500,
      duration: 1333,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'text cta',
      delay: 1833,
      duration: 1333,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'title header y pos',
      delay: 1500 + 0,
      duration: 1800,
      easing: '',
      notes: 'y pos -200px',
    },
    {
      name: 'title header opacity',
      delay: 1500 + 333,
      duration: 1467,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'title chevron opacity',
      delay: 1500 + 1000,
      duration: 1800,
      easing: '',
      notes: 'y pos 150px',
    },
    {
      name: 'title chevron y pos',
      delay: 1500 + 1000,
      duration: 1167,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
  ]

  // function getCards(cardCount = 3, timingDelay = 2000) {
  //   const cardDelay = Math.round(1000 / 3)

  //   const cardTimings = new Array(cardCount).fill('').map((_, i) => {
  //     const delay = timingDelay + cardDelay * (i + 1)

  //     return [
  //       {
  //         name: `card ${i + 1} image element scale`,
  //         delay: delay + 0,
  //         duration: 1333,
  // easing: '',
  //         notes: `scale 0.8 -> 1`,
  //       },
  //       {
  //         name: `card ${i + 1} matte element scale`,
  //         delay: delay + 133,
  //         duration: 1333,
  // easing: '',
  //         notes: `scale 0 -> 1`,
  //       },
  //     ]
  //   })

  //   return cardTimings.flat(1)
  // }

  return {
    animations: animations.reverse(),
    id: 'startToCatalog',
    name: 'Start to catalog',
    totalTime: 7000,
  }
}

const catalogToFullScreen = () => {
  const animations = [
    {
      name: 'FS matte clip',
      delay: 833,
      duration: 2000,
      easing: '0.2, 0, 0.2, 1',
      notes: 'Y -2700dp',
    },
    {
      name: 'FS image pos',
      delay: 833,
      duration: 2000,
      easing: '0.2, 0, 0.2, 1',
      notes: 'Clip -1350dp',
    },
    {
      name: 'Catalog card pos',
      delay: 467,
      duration: 2367,
      easing: '0.6, 0, 0.9, 1',
      notes: 'Y 1200dp',
    },
    {
      name: 'Catalog card vis',
      delay: 833,
      duration: 1167,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0.25',
    },
    {
      name: 'Element Scrimm',
      delay: 0,
      duration: 2833,
      easing: '0.33, 0, 0.67, 1',
      notes: '0 -> 1',
    },
    {
      name: 'Column 2',
      delay: 333,
      duration: 1000,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0.25',
    },
    {
      name: 'Column 3',
      delay: 167,
      duration: 1000,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0.25',
    },
    {
      name: 'Column 5',
      delay: 0,
      duration: 1000,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0.25',
    },
    {
      name: 'BG Scrimm',
      delay: 0,
      duration: 2833,
      easing: '0.2, 0, 0.3, 1',
      notes: '0 -> 0.75',
    },
  ]

  return {
    animations: animations.reverse(),
    id: 'catalogToFullScreen',
    name: 'Catalog to full screen',
    totalTime: getTotalDuration(animations),
  }
}

export default {
  catalogToFullScreen: catalogToFullScreen(),
  fullScreenToCatalog: fullScreenToCatalog(),
  startToCatalog: startToCatalog(),
}
