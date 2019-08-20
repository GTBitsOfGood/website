<script>
  import content from '@contentful-entries/missionSection'
  import { toHtml, toImg } from 'contentful-utils'

  export let id = ''

  const missionCards = content.map(card => ({
    ...card.fields,
    img: toImg(card.fields, 'aboutUsImage'),
  }))
</script>

<style>
  h2 {
    text-align: center;
    grid-column: 1 / -1;
  }
  section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
    justify-items: center;
    column-gap: 10rem;
    row-gap: 5rem;
    padding: 3rem;

    display: -ms-grid;
    -ms-grid-columns: minmax(38rem, 1fr) minmax(38rem, 1fr);
  }

  /* IE support */
  @media (max-width: 50rem) {
    section {
      -ms-grid-columns: 1fr;
    }
  }

  .mission-card {
    max-width: 50rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    text-align: center;
    color: var(--primary-yellow);
  }
  img {
    width: 20rem;
  }
  .mission-card > :global(p) {
    margin: 0;
    text-align: justify;
    font-size: 24px;
  }
</style>

<section {id}>
  <h2>Our Mission</h2>
  {#each missionCards as { heading, description, img }}
    <div class="mission-card">
      <img src={img.src} alt={img.alt} />
      <h3>{heading}</h3>
      {@html toHtml(description)}
    </div>
  {/each}
</section>
