<script>
  export let name = ''
  export let briefDescription = {}
  export let headerScreenshot = {}
  export let themeColor = ''
</script>

<style>
  section {
    max-width: 100%;
  }
  .container {
    display: flex;
    min-height: 600px;
    justify-content: space-between;
    max-width: var(--content-max-width);
    margin: auto;
    width: 100%;
  }
  h1 {
    color: white;
  }
  p {
    font-size: var(--body-xl);
    color: white;
  }

  .description-container {
    align-self: center;
    margin: 1em;
    margin-bottom: 3em;
    max-width: 500px;
    padding-left: 2em;
  }
  img {
    align-self: flex-end;
    max-width: 600px;
    width: 100%;
  }

  .img-container {
    display: flex;
    align-self: flex-end;
  }
  @media (max-width: 900px) {
    .container {
      flex-direction: column;
    }
    .description-container {
      justify-content: flex-start;
      padding: 1em;
      margin: 0;
    }
    .img-container {
      align-self: center;
    }
  }
</style>

<section style="background-color: {themeColor}">
  <div class="container">
    <div class="description-container">
      <h1>{name}</h1>
      <p>{briefDescription}</p>
    </div>
    <div class="img-container">
      <img src={headerScreenshot.src} alt={headerScreenshot.alt} />
    </div>
  </div>
</section>
