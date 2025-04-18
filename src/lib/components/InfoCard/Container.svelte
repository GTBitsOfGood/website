<script>
  export let link = ''
</script>

<style>
  a,
  div {
    font-weight: normal;
    position: relative;
    background: white;
    box-shadow: var(--shadow);
    border-radius: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 32rem;
    min-width: 27rem;
    flex: 1;
    margin: 3rem;
  }

  a {
    transition: transform 0.2s, box-shadow 0.2s;
  }
  a :global(img) {
    transition: opacity 0.2s;
    opacity: 0.8;
  }
  a,
  a:hover {
    color: initial;
  }
  a:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-hover);
  }
  a:hover :global(img) {
    opacity: 1;
  }
  .arrow {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 4rem;
    height: 4rem;
    z-index: 1;
  }
</style>

{#if link}
  <a href={link}>
    <img class="arrow" src="/icons/arrow-right.svg" alt="" />
    <slot />
  </a>
{:else}
  <div>
    <slot />
  </div>
{/if}
