<script>
  export let reflection = ''
  export let quotes = []
  export let groupPhoto = {}
</script>

<style>
  h3 {
    margin-top: 5px;
  }
  p.description {
    margin-bottom: 60px;
  }

  .quote-container {
    margin: auto;
    margin-bottom: 60px;
    max-width: 800px;
    display: flex;
    align-items: flex-start;
  }
  .quote-container p {
    margin: 0;
  }
  .quote-container img {
    flex: 1;
    border-radius: 100%;
  }
  img {
    margin-right: 40px;
  }

  .group-wrapper {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top: 40px;
    align-items: center;
  }

  .group-wrapper img {
    height: 350px;
    margin-right: 30px;
  }

  .group-wrapper p {
    max-width: 325px;
  }

  .quote {
    font-weight: bold;
    font-family: var(--header-font);
    color: #333;
  }

  @media (max-width: 800px) {
    .group-wrapper p {
      display: none;
    }
    .group-wrapper img {
      width: 100%;
      height: auto;
    }
  }
</style>

<section>
  <h2>Our Team</h2>
  <h3>Reflection 💬</h3>
  <p class="description">
    {@html reflection.inlineHtml}
  </p>
  {#each quotes as quote}
    <div class="quote-container">
      <img height="60" width="60" src={quote.image.src} alt={quote.image.alt} />
      <p class="quote">
        {@html `"${quote.body.inlineHtml}"`}
      </p>
    </div>
  {/each}
  {#if groupPhoto}
    <div class="group-wrapper">
      <img height="250" src={groupPhoto.src} alt={groupPhoto.alt} />
      <p class="quote large">"{groupPhoto.alt}"</p>
    </div>
  {/if}
</section>
