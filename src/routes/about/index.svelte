<script>
  import Roles from '../../components/about-us/RolesSection'
  import Header from '../../components/about-us/Header'
  import Mission from '../../components/about-us/MissionSection'
  import Slogan from '../../components/about-us/Slogan'
  import Milestones from '../../components/about-us/MilestonesSection'

  const missionSectionId = 'mission-section'
</script>

<Header {missionSectionId} />
<Mission id={missionSectionId} />
<Slogan />
<Roles />
<Milestones />

<svelte:head>
  <title>About Us</title>
</svelte:head>
