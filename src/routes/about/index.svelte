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

<a href="/about/roles" style="display: none">
  placeholder for new roles section
</a>

<svelte:head>
  <title>About Us</title>
</svelte:head>
