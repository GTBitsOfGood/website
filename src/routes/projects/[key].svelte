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
  import NonprofitSection from '../../components/projects/NonprofitSection'
  import AboutProject from '../../components/projects/AboutProject'
  import VideoPlayer from '../../components/projects/VideoPlayer'
  import KeyFeatures from '../../components/projects/KeyFeatures'
  import Reflections from '../../components/projects/Reflections'
  import ProductScope from '../../components/projects/ProductScope'
  export let content
</script>

<style>
  .projects-container {
    --content-max-width: 1000px;
  }
  .projects-container :global(section) {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .projects-container :global(h4) {
    margin-top: 40px;
    margin-bottom: 0;
    font-family: var(--header-font);
    font-size: var(--header-3-desktop);
  }
  .projects-container :global(h2) {
    font-weight: normal;
    font-size: 30px;
  }
  @media (max-width: 600px) {
    .projects-container :global(section) {
      padding-left: 20px;
      padding-right: 20px;
    }
    .projects-container :global(h2) {
      font-size: 18px;
    }
    .projects-container :global(h4) {
      margin-top: 20px;
      font-size: var(--body-xl);
    }
  }
</style>

<Header {content} />
<div class="projects-container">
  <AboutProject {...content} />
  <NonprofitSection {...content} />
  <VideoPlayer {...content} />
  <ProductScope {...content} />
  <KeyFeatures {...content} />
  <Reflections {...content} />
</div>

<svelte:head>
  <title>{content.name}</title>
</svelte:head>
