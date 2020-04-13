<script>
  export let content
  let reflection = content.reflection
  let quotes = content.quotes
  let groupPhoto = content.groupPhoto
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
  p {
    margin-top: 1.5em;
  }
  .quotes-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 90%;
  }
  .quote-container {
    max-width: 90%;
    display: flex;
    /* justify-content: flex-end; */
    /* align-items: center; */
  }
  .img-container {
    display: flex;
    align-self: flex-start;
    margin: auto;
  }
  img {
    margin-right: 3em;
  }
  .quote-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .group-wrapper {
    max-width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
    align-items: center;
    margin-top: 2em;
  }

  .group-wrapper img {
    max-height: 250px;
    max-width: 100%;
    margin: 1em;
  }

  .group-wrapper p {
    font-size: var(--body-large);
    margin-left: 30px;
    max-width: 300px;
  }

  .quote {
    font-weight: 700;
    font-family: var(--header-font);
    color: black;
  }


  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
    .group-wrapper p {
      display: none;
    }
  }
</style>

{#if reflection !== undefined}
  <div class="container">
    <h2>Our Team</h2>
    <h1>Reflection 💬</h1>
    <p>{@html reflection.inlineHtml}</p>
    <div class="quote-wrapper">
      <div class="quotes-container">
        {#each quotes as quote}
          <div class="quote-container">
            <div class="img-container">
              <img src={quote.image.src} alt={quote.image.alt} />
            </div>
            <p class='quote'>
              {@html quote.body.inlineHtml}"
            </p>
          </div>
        {/each}
      </div>
    </div>
    <div class="group-wrapper">
      <img src={groupPhoto.src} alt={groupPhoto.alt} />
      <p class='quote large'>
        "{groupPhoto.alt}"
      </p>
    </div>
  </div>
{/if}
