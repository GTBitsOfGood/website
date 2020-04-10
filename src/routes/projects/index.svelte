<script>
  import InfoCard from '../../components/InfoCard/index.svelte'
  import projects from '@contentful-entries/project'
  import Details from './details.svelte'
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
      descriptionHTML={description.inlineHtml}
      label={developmentStatus} />
  {/each}
  <Details />
</section>

<svelte:head>
  <title>Our Projects</title>
</svelte:head>
