<script>
  import Container from './Container.svelte'

  export let imgSrc = ''
  export let imgAlt = ''
  export let header = ''
  export let body = ''

  export let label = ''
  export let href = ''
  export let linkText = 'Learn more'

  const labels = [
    {
      label: 'In Early Design',
      color: '#FFEECE',
    },
    {
      label: 'In Development',
      color: '#FFB374',
    },
    {
      label: 'Near finish line',
      color: '#FF8988',
    },
  ]
  $: validLabel = labels.find(l => l.label === label)
</script>

<style>
  .img-container {
    height: 27rem;
    width: 100%;
    margin-bottom: 2rem;
    border-radius: inherit;
    background: #333;
    overflow: hidden;
  }
  .img-container > img {
    height: 100%;
    width: auto;
  }
  h3,
  p {
    padding: 0 2rem;
    margin: 1rem 0;
  }
  p {
    margin-bottom: 2rem;
  }
  small {
    font-size: 14px;
    padding: 0.7rem 2rem;
    border-radius: 3rem;
    margin: 3rem 2rem;
    margin-top: auto;
    width: auto;
  }
</style>

<Container {href}>
  <div class="img-container">
    <img src={imgSrc} alt={imgAlt} />
  </div>
  <h3>{header}</h3>
  <p>{body}</p>
  {#if validLabel}
    <small style={`background-color: ${validLabel.color}`}>
      {validLabel.label}
    </small>
  {/if}
</Container>
