<script>
  import departments from '@contentful-entries/roleDepartment'
  import Department from '../../components/about-us/roles/Department'
</script>

<h1>Roles</h1>
<p>Make it happen with us.</p>

{#each departments as department}
  <Department {...department} />
{/each}
