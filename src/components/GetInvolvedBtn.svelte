<script>
  import content from '@contentful-entry/cta'

  export let large = false
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

<a class={large ? 'large' : ''} href="join">{content.text}</a>
