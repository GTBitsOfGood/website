<script>
  import Nav from '../components/Nav.svelte'

  export let segment

  let scrolled = false

  const onScroll = ({ target: { documentElement } }) => {
    if (documentElement.scrollTop > 0) {
      scrolled = true
    } else {
      scrolled = false
    }
  }
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    margin-top: var(--nav-height, 7rem);
    box-sizing: border-box;
    overflow-x: hidden;
  }
</style>

<Nav {segment} {scrolled} />
<main>
  <slot />
</main>

<svelte:window on:scroll={onScroll} />
