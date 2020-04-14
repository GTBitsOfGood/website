<script>
  export let reflection = ''
  export let quotes = []
  export let groupPhoto = {}
</script>

<style>
  p.description {
    margin-bottom: 60px;
  }

  .quote-container .img-container {
    margin-right: 40px;
    text-align: center;
  }

  .img-container p {
    color: var(--black);
    font-size: var(--body);
  }

  .img-container img {
    border-radius: 100%;
    margin-bottom: 15px;
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

  .quote-author {
    font-weight: bold;
    font-size: 16px;
  }

  img {
    flex: 1;
    margin-bottom: 0.8rem;
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
    font-weight: bold;
    max-width: 325px;
  }

  .quote {
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
      <div class="img-container">
        <img
          height="80"
          width="80"
          src={quote.image.src}
          alt={quote.image.alt} />
        <p class="quote-author">{quote.header}</p>
      </div>
      <p class="quote">
        {@html `"${quote.body.inlineHtml}"`}
      </p>
    </div>
  {/each}
  {#if groupPhoto.src}
    <div class="group-wrapper">
      <img height="250" src={groupPhoto.src} alt={groupPhoto.alt} />
      <p class="quote large">"{groupPhoto.alt}"</p>
    </div>
  {/if}
</section>
