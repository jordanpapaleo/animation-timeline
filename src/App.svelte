<script>
  import { beforeUpdate, onMount } from 'svelte'
  import Animations from './Animations.svelte'
  import Seconds from './Seconds.svelte'
  import Switch from './components/Switch.svelte'
  import Select from './components/Select.svelte'
  import animationDataHash from './data/animation-specs'

  let darkMode

  function handleDarkMode(e) {
    localStorage.darkMode = e.target.checked
    document.querySelector('body').classList.toggle('dark-mode')
  }

  const allAnimations = Object.values(animationDataHash)
  let activeAnimationSpec = allAnimations[0]

  function handleDataChange(e) {
    activeAnimationSpec = animationDataHash[e.target.value]
  }

  beforeUpdate(() => {
    darkMode = localStorage.darkMode === 'true'
    if (!darkMode) document.querySelector('body').classList.remove('dark-mode')
  })
</script>

<div id="wrapper">
  <header>
    <h1>{activeAnimationSpec.name}</h1>
    <Select
      bind:value={activeAnimationSpec.id}
      on:change={handleDataChange}
      options={allAnimations.map((animation) => ({
        label: animation.name,
        value: animation.id,
      }))}
    />
    <Switch bind:checked={darkMode} on:change={handleDarkMode} />
  </header>

  <Animations
    specs={activeAnimationSpec.animations}
    totalTime={activeAnimationSpec.totalTime}
  />

  <footer id="timescale">
    <Seconds milliseconds={activeAnimationSpec.totalTime} />
  </footer>
</div>

<style>
  * {
    box-sizing: border-box
  }

  header {
    display: flex;
  }

  h1 {
    flex: 1;
  }
  #wrapper {
    display: grid;
    grid-gap: var(--gridGap);
    grid-template-rows: 50px auto 50px;
  }

  #timescale {
    border-top: 1px solid var(--border-color);
    border-left: 1px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    transition: border-color var(--transition-duration);
  }
</style>
