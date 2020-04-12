<script>
  import missionCards from '@contentful-entries/missionSection'

  export let id = ''
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
  .mission-card p {
    margin: 0;
    font-size: var(--body-xl);
  }
</style>

<section {id}>
  <h2>Our Mission</h2>
  {#each missionCards as { heading, description, aboutUsImage }}
    <div class="mission-card">
      <img src={aboutUsImage.src} alt={aboutUsImage.alt} />
      <h3>{heading}</h3>
      <p>
      {@html description.inlineHtml}
      </p>
    </div>
  {/each}
</section>
