import cloneDeep from 'lodash/cloneDeep'

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

const startToCatalog = (showDual) => {
  const textTitleOffset = 1500
  const animations = [
    {
      name: 'fade in',
      delay: 500,
      duration: 2000,
      easing: '0.33,0,0.67,1',
      notes: 'Opacity 1 -> 0',
    },
    {
      name: 'store name',
      delay: 1500,
      duration: 1333,
      easing: '0.33,0,0.67,1',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'text cta',
      delay: 1833,
      duration: 1333,
      easing: '0.33,0,0.67,1',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'title text header opacity',
      delay: textTitleOffset + 333,
      duration: 1467,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'title text header y pos',
      delay: textTitleOffset + 0,
      duration: 1800,
      easing: '',
      notes: 'y pos -200px',
    },
    {
      name: 'title text chevron opacity',
      delay: textTitleOffset + 1000,
      duration: 1167,
      easing: '',
      notes: 'y pos 150px',
    },
    {
      name: 'title text chevron y pos',
      delay: textTitleOffset,
      duration: 2167,
      easing: '',
      notes: 'Opacity 0 -> 1',
    },
    {
      name: 'Card 1',
      delay: 2000,
      duration: 1167,
      easing: '',
      notes: '',
    },
    {
      name: 'Card 2',
      delay: 2333,
      duration: 1167,
      easing: '',
      notes: '',
    },
    {
      name: 'Card 3',
      delay: 2667,
      duration: 1167,
      easing: '',
      notes: '',
    },
    {
      name: 'Card 4',
      delay: 3333,
      duration: 1167,
      easing: '',
      notes: '',
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
      name: 'Session reveal',
      delay: 833,
      duration: 2000,
      easing: '0.2, 0, 0.2, 1',
      notes: 'Y -2800dp',
    },
    {
      name: 'Session pos',
      delay: 833,
      duration: 2000,
      easing: '0.2, 0, 0.2, 1',
      notes: 'Clip -1350dp',
    },
    {
      name: 'Catalog card pos (col 1)',
      delay: 467,
      duration: 2367,
      easing: '0.6, 0, 0.9, 1',
      notes: 'Y 1200dp',
    },
    {
      name: 'Catalog card vis (col 1)',
      delay: 833,
      duration: 1167,
      easing: '0.33, 0, 0.67, 1',
      notes: '1 -> 0.25',
    },
    {
      name: 'Element Scrim',
      delay: 0,
      duration: 2833,
      easing: '0.33, 0, 0.67, 1',
      notes: '0 -> 1',
    },
    ...getCards(2),
    {
      name: 'BG Scrim',
      delay: 0,
      duration: 2833,
      easing: '0.2, 0, 0.3, 1',
      notes: '0 -> 0.75',
    },
  ]

  function getCards(columnCount) {
    const spacing = 167

    return new Array(columnCount - 1).fill('')
      .map((_, i) => ({
        delay: spacing * i,
        duration: 1000,
        easing: '0.33, 0, 0.67, 1',
        notes: '1 -> 0.25',
      }))
      .reverse()
      .map((timing, i) => ({
        ...timing,
        name: 'Column ' + (i + 2),
      }))
  }
  return {
    animations: animations,
    id: 'catalogToFullScreen',
    name: 'Catalog to full screen',
    totalTime: getTotalDuration(animations),
  }
}

const fullEndToEnd = (showDual) => {
  const catalogLocaleShow = 6000
  const catalogDlSwitch = 4500
  const fullScreenDlSwitch = 3000
  const fullScreenTextShowOffset = 10000

  const timingHash = [
    {
      name: 'Start -> Catalog',
      delay: 0,
      duration: 5133,
    },
    {
      name: 'Catalog Primary',
      duration: catalogLocaleShow,
    },
    {
      name: 'Catalog DL switch',
      duration: catalogDlSwitch,
      dual: true,
    },
    {
      name: 'Catalog Secondary',
      duration: catalogLocaleShow,
      dual: true,
    },
    {
      name: 'Catalog -> Session',
      duration: 3600,
    },
    {
      name: 'Session 1 Primary',
      duration: fullScreenTextShowOffset,
    },
    {
      name: 'Session 1 DL switch',
      duration: fullScreenDlSwitch,
      dual: true,
    },
    {
      name: 'Session 1 Secondary',
      duration: fullScreenTextShowOffset,
      dual: true,
    },
    {
      name: 'Session Change',
      duration: 3300,
    },
    {
      name: 'Session 2 Primary',
      duration: fullScreenTextShowOffset,
    },
    {
      name: 'Session 2 DL switch',
      duration: fullScreenDlSwitch,
      dual: true,
    },
    {
      name: 'Session 2 Secondary',
      duration: fullScreenTextShowOffset,
      dual: true,
    },
    {
      name: 'Session -> Catalog',
      duration: 5000,
    },
    {
      name: 'Catalog Primary',
      duration: catalogLocaleShow,
    },
    {
      name: 'Catalog DL switch',
      duration: catalogDlSwitch,
      dual: true,
    },
    {
      name: 'Catalog Secondary',
      duration: catalogLocaleShow,
      dual: true,
    },
    {
      name: 'Catalog -> End',
      duration: 2500,
    },
  ]

  const animations = cloneDeep(timingHash)

  animations.forEach((timing, i) => {
    if (i !== 0) {
      const prevDel = animations[i - 1].delay
      const prevDur = animations[i - 1].duration
      const currentDel = prevDel + prevDur
      console.log(timing.name, currentDel)
      timing.delay = currentDel
    } else {
      timing.delay = 0
    }
  })

  console.log(JSON.stringify(animations, null, 2))

  return {
    animations: animations,
    id: 'dualLocalComplete',
    name: 'Dual Locale E2E',
    totalTime: getTotalDuration(animations),
  }
}

export default {
  catalogToFullScreen: catalogToFullScreen(),
  dualLocalComplete: fullEndToEnd(true),
  singleLocalComplete: fullEndToEnd(),
  fullScreenToCatalog: fullScreenToCatalog(),
  startToCatalog: startToCatalog(),
}
