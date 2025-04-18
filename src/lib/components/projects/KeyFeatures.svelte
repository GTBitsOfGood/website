<script>
  export let keyFeatures = []
  export let userFlow = null
</script>

<style>
  p {
    margin-bottom: 30px;
  }
  img {
    display: block;
    height: 500px;
    margin: auto;
    max-width: 100%;
  }

  @media (max-width: 1000px) {
    img {
      width: 100%;
      height: auto;
    }
  }
</style>

<section>
  <h2>Our Solution</h2>
  <h3>Key Features</h3>
  {#each keyFeatures as feature}
    <h4>{feature.header}</h4>
    <p>
      {@html feature.body.inlineHtml}
    </p>
    {#if feature.image && feature.image.src}
      <img height="500" src={feature.image.src} alt={feature.image.alt} />
    {/if}
  {/each}
  {#if userFlow != null}
    <h4>User Flow 🌊</h4>
    <p>
      {@html userFlow.body.inlineHtml}
    </p>
    <div class="img-container">
      {#if userFlow.image && userFlow.image.src}
        <img src={userFlow.image.src} alt={userFlow.image.alt} />
      {/if}
    </div>
  {/if}
</section>
