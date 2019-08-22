<script>
  import InfoCard from '../components/InfoCard/index.svelte'
  import content from '@contentful-entries/project'
  import { toHtml, mapFields } from 'contentful-utils'

  const projects = mapFields(content, 'thumbnail')
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
</style>

<section>
  <h2>Projects</h2>
  {#each projects as { heading, description, developmentStatus, link, img }}
    <InfoCard
      {heading}
      {link}
      {img}
      descriptionHTML={toHtml(description)}
      label={developmentStatus} />
  {/each}
</section>
