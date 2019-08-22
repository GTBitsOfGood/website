<script>
  import InfoCard from '../components/InfoCard/index.svelte'
  import projects from '@contentful-entries/project'
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
  {#each projects as { heading, description, developmentStatus, link, thumbnail }}
    <InfoCard
      {heading}
      {link}
      img={thumbnail}
      descriptionHTML={description}
      label={developmentStatus} />
  {/each}
</section>
