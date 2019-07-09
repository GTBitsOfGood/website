<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  .parallax-container {
    height: calc(100vh - var(--nav-height));
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 2px;
    transform-style: preserve-3d;
    background: linear-gradient(50deg, white, #faf6f2);
  }
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>

<Nav {segment} />
<div class="parallax-container">
  <main>
    <slot />
  </main>
</div>
