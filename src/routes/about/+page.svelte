<script>
  import Roles from '$lib/components/about-us/RolesSection.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import Mission from '$lib/components/about-us/MissionSection.svelte'
  import Slogan from '$lib/components/about-us/Slogan.svelte'
  import Milestones from '$lib/components/about-us/MilestonesSection.svelte'

  import headerContent from '@contentful-entry/aboutUsHeader'
</script>

<PageHeader ctaScrollToId="mission-section" {...headerContent} />
<Mission id="mission-section" />
<Slogan />
<Milestones />
<Roles />

<svelte:head>
  <title>About Us</title>
</svelte:head>
