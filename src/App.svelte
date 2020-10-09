<script>
  // import Millisecond from './Millisecond.svelte'
  import Seconds from './Seconds.svelte'
  import Animations from './Animations.svelte'

  export let timing
  export let totaltime
</script>

<style>
  #wrapper {
    display: grid;
    grid-gap: var(--gridGap);
    grid-template-rows: auto 50px;
  }

  #timescale {
    border-top: 1px solid var(--bordercolor);
    border-left: 1px solid var(--bordercolor);
    border-right: 1px solid var(--bordercolor);
  }
</style>

<div id="wrapper">
  <Animations {timing} {totaltime} />

  <footer id="timescale">
    <!-- <Millisecond milliseconds={totaltime} /> -->
    <Seconds milliseconds={totaltime} />
  </footer>
</div>
