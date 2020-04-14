<script>
  import PageHeader from '../../components/PageHeader'
  import Project from '../../components/projects/index/Project'

  import content from '@contentful-entry/projectLanding'
</script>

<style>
  section {
    padding: 30px;
  }

  .projects-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 340px);
    column-gap: 60px;
    row-gap: 100px;
    justify-content: start;
    align-items: stretch;
  }

  @media (max-width: 800px) {
    section {
      padding: 20px;
    }
    .projects-container {
      justify-content: center;
    }

    h2 {
      text-align: center;
    }
  }
</style>

<PageHeader {...content} />
<section>
  <h2>Current Projects</h2>
  <div class="projects-container">
    {#each content.projects as { name, briefDescription, key, thumbnail }}
      <Project
        {name}
        link={'/projects/' + key}
        image={thumbnail}
        {briefDescription} />
    {/each}
  </div>
</section>

<svelte:head>
  <title>Our Projects</title>
</svelte:head>
