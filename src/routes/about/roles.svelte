<script>
  import departments from '@contentful-entries/roleDepartment'
  import Department from '../../components/about-us/roles/Department'
</script>

<h1>Roles</h1>
<p>Make it happen with us.</p>
{#each departments as department, index}
  <Department rightAlign={index % 2 === 1} {...department} />
{/each}

<svelte:head>
  <title>Our Roles</title>
</svelte:head>
