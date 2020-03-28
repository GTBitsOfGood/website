<script>
  import {
    Heading,
    ConnectingSection,
    BuildingSection,
    QuotesSection
  } from '../components/landing'

  let scrollY = 0
</script>

<svelte:window bind:scrollY />
<Heading />
<ConnectingSection parallaxOffset={scrollY * -0.08 + 90} />
<QuotesSection />
<BuildingSection parallaxOffset={scrollY * -0.08 + 220} />

<svelte:head>
  <title>Bits of Good</title>
</svelte:head>
