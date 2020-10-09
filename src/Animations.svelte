<script>
  export let timing
  export let totaltime
  // 60 is left and right padding
  let bodyWidth = document.querySelector('body').offsetWidth - 60

  function getTranslation(t) {
    const ratio = t.delay / totaltime
    return `translateX(${ratio * bodyWidth}px)`
  }

  function getWidth(t) {
    const ratio = t.duration / totaltime
    return `${ratio * bodyWidth}px`
  }
</script>

<main id="animations">
  <ol>
    {#each timing as t}
      <li>
        <div
          class="animation-block"
          style="
            transform: {getTranslation(t)};
            width: {getWidth(t)};
          "
        >
          {t.name}
        </div>
      </li>
    {/each}
  </ol>
</main>


<style>
#animations {
  border: 1px solid var(--bordercolor);
}

ol {
  display: grid;
  grid-gap: var(--gridGap);
  grid-template-rows: repeat(auto, 1fr);
  list-style-type: none;
  padding-bottom: var(--gridGap);
  padding-top: var(--gridGap);
}

.animation-block {
  background-color: orange;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 0.75rem;
  padding: 10px;
}

</style>
