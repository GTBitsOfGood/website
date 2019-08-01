<script>
  export let large = false
  export let hide = false
</script>

<style>
  a {
    background-color: var(--primary);
    padding: 0.6em 1.5em;
    border-radius: 0.5em;
    letter-spacing: 0;
    text-decoration: none;
    font-weight: 700;
    color: white;
    display: inline;
    text-align: center;
    transition-property: box-shadow, background-color, opacity;
    transition-duration: 0.3s;
  }
  a:hover {
    box-shadow: var(--shadow);
    background-color: var(--primary-yellow);
  }
  .large {
    font-size: 2.4rem;
    padding: 0.6em 2.5em;
  }
  .hide {
    opacity: 0;
  }
</style>

<a class:large class:hide href="join">Get Involved</a>
