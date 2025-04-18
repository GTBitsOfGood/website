<script>
  import content from '@contentful-entry/cta'

  export let large = false
  export let small = false
  export let hide = false
</script>

<style>
  a {
    background-color: var(--primary);
    padding: 1rem 2rem;
    border-radius: 0.5em;
    letter-spacing: 0;
    text-decoration: none;
    font-weight: bold;
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
    padding: 1.3rem 3.5rem;
  }
  .small {
    font-size: 1.5rem;
    padding: 0.4rem 1.2rem;
  }
  .hide {
    opacity: 0;
  }
</style>

<a class:large class:small class:hide href="join">{content.text}</a>
