<script>
  export let name = ''
  export let briefDescription = ''
  export let mockupImage = {}
  export let detailsColor = ''
</script>

<style>
  section {
    background-color: var(--detailsColor);
    display: flex;
  }
  h1 {
    font-size: 64px;
    font-family: 'Visby CF', sans-serif;
  }
  p {
    font-size: 24px;
  }
  .description-container {
    display: flex;
    flex-direction: column;
  }
</style>

<section stlye="--detailsColor:{detailsColor}">
  <div class="description-container">
    <h1>{name}</h1>
    <p>{briefDescription}</p>
  </div>
  <img src={mockupImage.src} alt={mockupImage.alt} />
</section>
