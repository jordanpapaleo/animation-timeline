<script>
  export let milliseconds
  const seconds = Math.ceil(milliseconds / 1000)
</script>

<div id="milliseconds" style="--columns:{seconds}">
  {#each Array(seconds) as _, i}
    <div class="millesecond-block">
      <span>0000</span>
      <span>0100</span>
      <span>0200</span>
      <span>0300</span>
      <span>0400</span>
      <span>0500</span>
      <span>0600</span>
      <span>0700</span>
      <span>0800</span>
      <span>0900</span>
    </div>
  {/each}
</div>

<style>
  #milliseconds {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }

  .millesecond-block {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    font-size: 0.5rem;
    color: grey;
  }

  .millesecond-block span {
    border-left: 1px solid var(--border-color);
    transition: border-color var(--transition-duration);
    padding-left: 5px;
  }
</style>
