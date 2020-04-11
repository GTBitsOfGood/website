<script>
  export let name = ''
  export let briefDescription = ''
  export let mockupImage = {}
  export let detailsColor = '#4380FF'
</script>

<style>
  section {
    /* background-color: rgb(67, 128, 255); */
    background-color: #4380ff;
    display: flex;
    height: 600px;
    max-width: 100%;
  }
  h1 {
    font-size: 64px;
    font-family: 'Visby CF', sans-serif;
    color: white;
  }
  p {
    font-size: 24px;
    color: white;
  }

  .description-container {
    align-self: center;
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    margin: 1em;
  }
  img {
    width: 550px;
  }

  .img-container {
    display: flex;
    align-self: flex-end;
  }
  @media (max-width: 600px) {
    section {
      flex-direction: column;
    }
    .description-container {
      justify-content: flex-start;
      margin: 1em;
    }
    .img-container {
      background-color: #4380ff;
      align-self: center;
    }
  }
</style>

<section stlye="background-color:{detailsColor}">
  <div class="description-container">
    <h1>{name}</h1>
    <p>{briefDescription}</p>
  </div>
  <div class="img-container">
    <img src={mockupImage.src} alt={mockupImage.alt} />
  </div>

</section>
