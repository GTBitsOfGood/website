<script>
  export let imgSrc = ''
  export let imgAlt = ''
  export let header = ''
  export let body = ''

  export let label = ''

  const labels = ['In Development', 'In Early Design', 'Near finish line']
  $: validLabel = labels.includes(label) ? label : ''
</script>

<style>
  .container {
    background: white;
    box-shadow: var(--shadow);
    border-radius: 1rem;
    display: inline-block;
    max-width: 32rem;
    min-width: 27rem;
    flex: 1;
    margin: 2rem;
  }
  .img-container {
    height: 27rem;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: inherit;
    background: grey;
    overflow: hidden;
  }
  .img-container > img {
    height: 100%;
    width: auto;
  }
  h3,
  p {
    padding: 0 2rem;
  }
</style>

<div class="container">
  <div class="img-container">
    <img src={imgSrc} alt={imgAlt} />
  </div>
  <h3>{header}</h3>
  <p>{body}</p>
  {#if validLabel}
    <small>{validLabel}</small>
  {/if}
</div>
