<script>
  import {
    Heading,
    ConnectingSection,
    BuildingSection,
    QuotesSection,
  } from '../components/landing'

  export let content
</script>

<script context="module">
  import contentful from '../contentful'

  export async function preload(page, session) {
    const entry = await contentful.getEntry('0cf4su0gjz7QBxbj2pnFE')

    return {
      content: entry.fields,
    }
  }
</script>

<Heading
  tagline={content.tagline}
  callToAction={content.callToAction}
/>
<ConnectingSection />
<QuotesSection />
<BuildingSection />

<svelte:head>
  <title>{content.pageTitle}</title>
</svelte:head>
