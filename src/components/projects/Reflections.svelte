<script>
  export let reflection = content.reflection
  export let quotes = content.quotes
  export let groupPhoto = content.groupPhoto
</script>

<style>
  h2 {
    margin: 0;
    font-size: 30px;
    font-weight: normal;
  }
  h3 {
    margin-top: 5px;
  }
  p.description {
    margin-bottom: 40px;
  }
  section {
    padding: 30px;
  }

  .quote-container {
    margin: auto;
    margin-bottom: 30px;
    max-width: 90%;
    display: flex;
    align-items: center;
  }
  .quote-container img {
    flex: 1;
    min-width: 50px;
  }
  img {
    margin-right: 40px;
  }

  .group-wrapper {
    max-width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-top: 30px;
  }

  .group-wrapper img {
    max-height: 250px;
    max-width: 100%;
    margin-right: 30px;
  }

  .group-wrapper p {
    font-size: var(--body-large);
    max-width: 300px;
  }

  .quote {
    font-weight: bold;
    font-family: var(--header-font);
    color: #333;
  }

  @media (max-width: 600px) {
    section {
      padding: 20px;
    }
    p {
      font-size: var(--body);
    }
    .group-wrapper p {
      display: none;
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
      <img src={quote.image.src} alt={quote.image.alt} />
      <p class="quote">
        {@html quote.body.inlineHtml}
      </p>
    </div>
  {/each}
  {#if groupPhoto}
    <div class="group-wrapper">
      <img src={groupPhoto.src} alt={groupPhoto.alt} />
      <p class="quote large">"{groupPhoto.alt}"</p>
    </div>
  {/if}
</section>
