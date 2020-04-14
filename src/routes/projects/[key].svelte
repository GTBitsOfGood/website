<script context="module">
  export async function preload({ params }) {
    const { key } = params

    const res = await this.fetch(`projects/${key}.json`)
    if (!res.ok) {
      this.error(res.status, res.statusText)
      return
    }

    const content = await res.json()
    return { content }
  }
</script>

<script>
  import Header from '../../components/projects/Header'
  import ProjectDetails from '../../components/projects/ProjectDetails'
  import Reflections from '../../components/projects/Reflections'
  export let content
  // content = JSON.stringify(content, undefined, 4)
</script>

<style>
  .projects-container {
    --content-max-width: 800px;
  }
</style>

<Header {content} />
<div class="projects-container">
  <Reflections {...content} />
  <ProjectDetails {content} />
</div>
