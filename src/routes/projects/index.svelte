<script>
  import PageHeader from '../../components/PageHeader'
  import ProjectSection from '../../components/projects/index/ProjectSection'

  import headerContent from '@contentful-entry/projectLanding'
</script>

<PageHeader {...headerContent} />
<ProjectSection />

<svelte:head>
  <title>Our Projects</title>
</svelte:head>
