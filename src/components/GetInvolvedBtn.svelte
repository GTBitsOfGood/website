<script>
  export let large = false
</script>

<style>
  a {
    background: var(--primary);
    padding: 0.4em 1em;
    border-radius: 1rem;
    letter-spacing: 0;
    text-decoration: none;
    font-weight: 700;
    color: white;
    display: inline;
    text-align: center;
  }
  .large {
    font-size: 3.2rem;
  }
</style>

<a class={large && 'large'} href="join">Get Involved</a>
