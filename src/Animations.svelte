<script>
export let specs
export let totalTime
let width
console.log('totalTime', totalTime)


function getTranslation(t) {
  const ratio = t.delay / totalTime
  return `translateX(${ratio * width}px)`
}

function getWidth(t) {
  const ratio = t.duration / totalTime
  return `${ratio * width}px`
}
</script>

<main id="animations" bind:clientWidth={width}>
  <ol>
    {#each specs as spec}
      <li>
        <div class="animation-block" style="
          transform: {getTranslation(spec)};
          width: {getWidth(spec)};
        ">
          {spec.name}<br />
          <small>
            {#if spec.notes}
              <em>{spec.notes}</em>
              <span style="padding-right: 7px; padding-left: 7px;">|</span>
            {/if}
            {#if spec.duration}
              <span class="dls">
                <strong>dur:</strong> {spec.duration}
              </span>
            {/if}
            {#if spec.delay}
              <span class="dls">
                <strong>del:</strong> {spec.delay}
              </span>
            {/if}
            {#if spec.easing}
              <span class="dls">
                <strong>ease:</strong> ({spec.easing})
              </span>
            {/if}
          </small>
        </div>
      </li>
    {/each}
  </ol>
</main>


<style>
  .dls {
    margin-right: 5px;
  }
  #animations {
    box-sizing: border-box;
    border: 1px solid var(--border-color);
    transition: border-color var(--transition-duration);
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
    background-color: var(--primary);
    color: var(--white);
    border-radius: 10px;
    box-sizing: border-box;
    font-size: 0.75rem;
    padding: 10px;
  }
</style>
