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
  export let content
  // content = JSON.stringify(content, undefined, 4)
</script>

<style>
  :global(.project-container) {
    display: flex;
    justify-content: center;
    max-width: 80%;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 3em;
  }
</style>

<Header {content} />
<div class="project-container">
  <ProjectDetails {content} />
</div>

<!-- <pre>{JSON.stringify(content, undefined, 4)}</pre> -->
