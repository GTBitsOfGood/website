<script>
  import PageHeader from '../../components/PageHeader'
  import Project from '../../components/projects/index/Project'

  import content from '@contentful-entry/projectLanding'

  const currSemester = content.currentSemester
  const currProjects = []
  const pastProjects = []
  for (const project of content.projects) {
    if (project.semester === currSemester) {
      currProjects.push(project)
    } else {
      pastProjects.push(project)
    }
  }
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

  .projects-container + h2 {
    margin-top: 1.2em;
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
    {#each currProjects as { name, briefDescription, key, thumbnail }}
      <Project
        {name}
        link={'/projects/' + key}
        image={thumbnail}
        {briefDescription} />
    {/each}
  </div>
  <h2>Past Projects</h2>
  <div class="projects-container">
    {#each pastProjects as { name, briefDescription, key, thumbnail }}
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
