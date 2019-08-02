<script>
  import Nav from '../components/Nav.svelte'

  export let segment

  let scrolled = false

  const onScroll = ({ target }) => {
    if (target.scrollTop > 0) {
      scrolled = true
    } else {
      scrolled = false
    }
  }
</script>

<style>
  .parallax-container {
    height: calc(100vh - var(--nav-height));
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 20px;
    transform-style: preserve-3d;
    background: var(--backing-pink);
  }
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} {scrolled} />
<div class="parallax-container" on:scroll={onScroll}>
  <main>
    <slot />
  </main>
</div>
