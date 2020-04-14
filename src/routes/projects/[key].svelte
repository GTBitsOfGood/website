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
  import KeyFeatures from '../../components/projects/KeyFeatures'
  import Reflections from '../../components/projects/Reflections'
  import ProductScope from '../../components/projects/ProductScope'
  import AboutProject from '../../components/projects/AboutProject'
  export let content
</script>

<style>
  .projects-container {
    padding: 30px;
    --content-max-width: 1000px;
  }
  .projects-container :global(section) {
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
    .projects-container {
      padding: 20px;
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
<<<<<<< HEAD
  <ProductScope {...content} />
=======
  <AboutProject {...content} />
>>>>>>> c95d131c403b1b16ac5d8fe944377e134641853a
  <KeyFeatures {...content} />
  <Reflections {...content} />
</div>
