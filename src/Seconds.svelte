<script>
  export let milliseconds
</script>

<div id="seconds" style="--columns:{Math.ceil(milliseconds / 1000)}">
  {#each Array(Math.ceil(milliseconds / 1000)) as _, i}
    <div class="second-block"><span>{i * 1000}ms</span></div>
  {/each}
</div>

<style>
  #seconds {
    display: grid;
    grid-template-columns: repeat(var(--columns), 1fr);
  }
  .second-block {
    border-left: 1px solid var(--border-color);
    transition: border-color var(--transition-duration);
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
