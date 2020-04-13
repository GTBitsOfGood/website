<script>
  import projects from '@contentful-entries/project'
  import Project from './Project.svelte'
</script>

<style>

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: stretch;
  }

  h3 {
    color: #FE7354;
  }

  @media(max-width: 600px) {
    div {
      justify-content: center
    }

    h3 {
      margin-left: 25px;
    }
  }
</style>

<section>
  <h3>Current Projects</h3>
  <div>
    {#each projects as { heading, description, link, thumbnail }}
      <Project
        {heading}
        {link}
        image={thumbnail}
        description={description.inlineHtml}
      />
      {/each}
  </div>
</section>
