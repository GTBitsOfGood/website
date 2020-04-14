<script>
  export let keyFeatures = []
  export let userFlow = null
</script>

<style>
  h3 {
    margin: 0;
    margin-bottom: 20px;
  }
  p {
    font-size: var(--body-large);
  }
  .img-container {
    display: flex;
    justify-content: center;
    max-height: 350px;
    width: 100%;
    margin: 60px auto;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    p {
      font-size: inherit;
    }

    h4 {
      font-size: var(--header-3-mobile);
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
    <div class="img-container">
      <img src={feature.image.src} alt={feature.image.alt} />
    </div>
  {/each}
  {#if userFlow != null}
    <h4>User Flow 🌊</h4>
    <p>
      {@html userFlow.body.inlineHtml}
    </p>
    <div class="img-container">
      <img src={userFlow.image.src} alt={userFlow.image.alt} />
    </div>
  {/if}
</section>
