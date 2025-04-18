<script>
  import Roles from '../../components/about-us/RolesSection'
  import PageHeader from '../../components/PageHeader'
  import Mission from '../../components/about-us/MissionSection'
  import Slogan from '../../components/about-us/Slogan'
  import Milestones from '../../components/about-us/MilestonesSection'

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
