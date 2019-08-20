<script>
  import InfoCard from '../InfoCard'
  import content from '@contentful-entries/roleCard'
  import { toHtml, mapFields } from 'contentful-utils'

  const roleCards = mapFields(content, 'thumbnail')
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    width: 100%;
    margin: 2rem;
  }
  .backing {
    background: var(--backing-panel);
  }
</style>

<div class="backing">
  <section>
    <h2>Roles</h2>
    {#each roleCards as { heading, description, img }}
      <InfoCard {heading} {img} descriptionHTML={toHtml(description)} />
    {/each}
  </section>
</div>
