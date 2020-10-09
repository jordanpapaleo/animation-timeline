<script>
  export let milliseconds
  const seconds = Math.ceil(milliseconds / 1000)
</script>

<style>
  #seconds {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
  .second-block {
    border-left: 1px solid var(--bordercolor);
    display: flex;
    flex-direction: column;
    height: 30px;
    justify-content: flex-end;
    padding-left: 5px;
  }
  .second-block:first-child {
    border: none;
  }
</style>

<div id="seconds" style="--columns:{seconds}">
  {#each Array(seconds) as _, i}
    <div class="second-block"><span>{i * 1000}ms</span></div>
  {/each}
</div>
