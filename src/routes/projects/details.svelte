<script>
  import dummyData from '../../projectDummyData'
  import Header from '../../components/projects/Header.svelte'
  const { name, briefDescription, mockupImage, themeColor, ...data } = dummyData
</script>

<Header {name} {briefDescription} {mockupImage} {themeColor} />

<svelte:head>
  <title>{name}</title>
</svelte:head>
