<script>
  import InfoCard from '../InfoCard'
  import roleCards from '@contentful-entries/roleCard'
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
  }
  h2 {
    width: 100%;
    margin: 2rem;
  }
  .backing {
    background: var(--backing-panel);
    padding-bottom: 5rem;
  }
</style>

<div class="backing">
  <section>
    <h2>Roles</h2>
    {#each roleCards as { heading, description, thumbnail }}
      <InfoCard {heading} img={thumbnail} descriptionHTML={description} />
    {/each}
  </section>
</div>
