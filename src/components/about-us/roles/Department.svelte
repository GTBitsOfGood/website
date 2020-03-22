<script>
  import RoleDropdown from './RoleDropdown.svelte'

  export let name = ''
  export let description = ''
  export let hash = ''
  export let roles = []
</script>

<style>
  h2 {
    font-size: 48px;
    margin-bottom: 30px;
  }
</style>

<section>
  <h2>{name}</h2>
  <p>
    {@html description.inlineHtml}
  </p>
  {#each roles as { fields }}
    <RoleDropdown {...fields} />
  {/each}
</section>
