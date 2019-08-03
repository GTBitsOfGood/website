<script>
  export let large = false
  export let label = 'Get Involved'
</script>

<style>
  a {
    background-color: var(--primary);
    padding: 0.6em 2.5em;
    border-radius: 1rem;
    letter-spacing: 0;
    text-decoration: none;
    font-weight: 700;
    color: white;
    display: inline;
    text-align: center;
    transition: box-shadow, background-color 0.3s;
  }
  a:hover {
    box-shadow: var(--shadow);
    background-color: var(--primary-yellow);
  }
  .large {
    font-size: 2.4rem;
  }
</style>

<a class={large ? 'large' : ''} href="join">{label}</a>
