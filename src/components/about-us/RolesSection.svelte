<script>
  import roleDepartments from '@contentful-entries/roleDepartment'
  import Role from './Role.svelte'
</script>

<style>
  .backing {
    background: var(--backing-panel);
    padding-bottom: 5rem;
    overflow: hidden;
  }

  section {
    margin-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  h2, h3 {
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

<div class="backing">
  <h2>Roles</h2>
  <h3>Bits of Good is home to engineers and artists. We believe in empowering the non-profits and democratizing technology for social good.</h3>
  <section>
    {#each roleDepartments as roleDepartment}
      <Role {...roleDepartment}/>
    {/each}
  </section>
</div>
