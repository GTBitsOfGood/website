<script>
  export let href = ''
</script>

<style>
  a,
  div {
    background: white;
    box-shadow: var(--shadow);
    border-radius: 1rem;
    position: relative;
    display: inline-block;
    max-width: 32rem;
    min-width: 27rem;
    flex: 1;
    margin: 2rem;
  }

  a {
    font-weight: 500;
    transition: transform 0.2s, box-shadow 0.2s;
  }
  a,
  a:hover {
    color: initial;
  }
  a:hover {
    transform: scale(1.1);
    box-shadow: var(--shadow-hover);
  }
</style>

{#if href}
  <a {href}>
    <slot />
  </a>
{:else}
  <div>
    <slot />
  </div>
{/if}
