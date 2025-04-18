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
  p {
    text-align: center;
  }

  p {
    font-family: var(--header-font);
    font-size: var(--body-xl);
    margin: 30px auto 20px auto;
    padding: 0px 20px;
    max-width: 950px;
    font-weight: normal;
  }
</style>

<h2>Roles</h2>
<p>
  Bits of Good is home to engineers and artists. We believe in empowering the
  non-profits and democratizing technology for social good.
</p>
<section>
  {#each roleDepartments as roleDepartment}
    <Role {...roleDepartment} />
  {/each}
</section>
