<script>
  export let timing;
  export let totaltime;

  import Millisecond from './Millisecond.svelte'
  import Seconds from './Seconds.svelte'
  import Animations from './Animations.svelte'
</script>

<div id="wrapper">
  <Animations timing={timing} totaltime={totaltime} />

  <footer id="timescale">
    <!-- <Millisecond milliseconds={totaltime} /> -->
    <Seconds milliseconds={totaltime} />
  </footer>
</div>

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
