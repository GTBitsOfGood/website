<script>
  import dummyData from '../../projectDummyData'
  import Header from '../../components/projects/Header.svelte'
  const {
    name,
    briefDescription,
    mockupImage,
    detailsColor,
    ...data
  } = dummyData
</script>

<Header {name} {briefDescription} {mockupImage} {detailsColor} />

<svelte:head>
  <title>{name}</title>
</svelte:head>
