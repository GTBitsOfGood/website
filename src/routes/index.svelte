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
  import { getPage } from 'content-loader'

  export const preload = async (page, session) => ({
    content: await getPage('home'),
  })
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
