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
  import Header from '$lib/components/projects/details/Header.svelte'
  import NonprofitSection from '$lib/components/projects/NonprofitSection.svelte'
  import AboutProject from '$lib/components/projects/AboutProject.svelte'
  import VideoPlayer from '$lib/components/projects/VideoPlayer.svelte'
  import KeyFeatures from '$lib/components/projects/KeyFeatures.svelte'
  import Reflections from '$lib/components/projects/Reflections.svelte'
  import ProductScope from '$lib/components/projects/ProductScope.svelte'
  import { onMount } from 'svelte'
  export let content

  let mounted = false
  onMount(() => (mounted = true))

  let scrollY = 0
</script>

<style>
  .progress-bar-container {
    background: #eee;
    top: var(--nav-height);
    position: sticky;
    z-index: 9;
    overflow: hidden;
  }
  .progress-bar {
    background: linear-gradient(
      90deg,
      var(--primary-red),
      var(--primary-yellow)
    );
    height: 10px;
  }
  .projects-container {
    position: relative;
    --content-max-width: 1000px;
  }
  .projects-container :global(section) {
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 80px;
    margin-bottom: 120px;
  }
  .projects-container :global(h4) {
    margin-top: 60px;
    margin-bottom: 0;
    font-family: var(--header-font);
    font-size: var(--header-3-desktop);
  }
  .projects-container :global(h2) {
    font-weight: normal;
    margin: 0;
    margin-bottom: 10px;
    font-size: 30px;
  }
  .projects-container :global(h3) {
    margin-top: 10px;
  }
  .projects-container :global(p) {
    font-size: var(--body-large);
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
    .projects-container :global(p) {
      font-size: var(--body);
    }
  }
</style>

<svelte:window bind:scrollY />

<Header {...content} />
<div class="projects-container">
  <div class="progress-bar-container">
    {#if mounted}
      <div
        class="progress-bar"
        style="width: {(scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%" />
    {/if}
  </div>
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
