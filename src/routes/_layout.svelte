<script>
  import Nav from '../components/Nav.svelte'

  export let segment
</script>

<style>
  .parallax-container {
    height: 95vh;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 2px;
  }
  main {
    position: relative;
    background-color: white;
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
