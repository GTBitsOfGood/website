<script>
  import roleDepartments from '@contentful-entries/roleDepartment'
  import Role from './Role.svelte'
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }

  h2,
  h3 {
    text-align: center;
  }

  h3 {
    margin: 30px auto 20px auto;
    padding: 0px 20px;
    line-height: 1.6em;
    max-width: 950px;
    font-size: 25px;
    font-weight: normal;
  }
</style>

<h2>Roles</h2>
<h3>
  Bits of Good is home to engineers and artists. We believe in empowering the
  non-profits and democratizing technology for social good.
</h3>
<section>
  {#each roleDepartments as roleDepartment}
    <Role {...roleDepartment} />
  {/each}
</section>
