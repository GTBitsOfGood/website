<script>
  export let content
  let keyFeatures = content.keyFeatures
  let userFlow = content.userFlow
</script>

<style>
  .container {
    margin-top: 5em;
    display: flex;
    max-width: 1400px;
    width: 100%;
    flex-direction: column;
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
    font-size: 30px;
  }
  h3 {
    margin-top: 1.5em;
    margin-bottom: 0;
    font-size: var(--header-3-desktop);
  }
  p {
    font-size: var(--body-large);
  }
  .img-container {
    display: flex;
    justify-content: center;
    max-height: 350px;
    width: 100%;
    margin: auto;
  }
  img {
    height: auto;
    max-width: 100%;
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 18px;
    }
    p {
      font-size: inherit;
    }
  }
</style>

{#if keyFeatures.length > 0}
  <div class="container">
    <h2>Our Solution</h2>
    <h1>Key Features</h1>
    {#each keyFeatures as feature}
      <h3>{feature.header}</h3>
      <p>{feature.body.inlineHtml}</p>
      <div class="img-container">
        <img src={feature.image.src} alt={feature.image.alt} />
      </div>
    {/each}
  </div>
{/if}
{#if userFlow.header !== undefined}
  <div class="container">
    <h3>{userFlow.header}</h3>
    <p>{userFlow.body.inlineHtml}</p>
    <div class="img-container">
      <img src={userFlow.image.src} alt={userFlow.image.alt} />
    </div>
  </div>
{/if}
