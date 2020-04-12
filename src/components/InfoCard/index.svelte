<script>
  import Container from './Container.svelte'

  export let heading = ''
  export let descriptionHTML = ''
  export let img = {
    src: '',
    alt: '',
  }

  export let label = ''
  export let link = ''
  export let linkText = 'Learn more'

  const labels = [
    {
      label: 'In Design',
      color: '#FFEECE',
    },
    {
      label: 'In Development',
      color: '#FFB374',
    },
    {
      label: 'Delivered',
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
  h3 {
    margin: 0;
  }

  h3,
  .content {
    padding: 0 2rem;
  }
  h3 {
    font-size: var(--body-xl);
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

<Container {link}>
  <div class="img-container">
    <img src={img.src} alt={img.alt} />
  </div>
  <h3>{heading}</h3>
  <p class="content">
    {@html descriptionHTML}
  </p>
  {#if validLabel}
    <small style={`background-color: ${validLabel.color}`}>
      {validLabel.label}
    </small>
  {/if}
</Container>
