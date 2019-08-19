<script>
  import InfoCard from '../InfoCard/index.svelte'
  const exampleRoles = [
    {
      header: 'Developer',
      body: 'Someone who writes good code!',
      imgSrc: '',
      imgAlt: '',
    },
    {
      header: 'Designer',
      body: 'Person who makes nice mockups!',
      imgSrc: '',
      imgAlt: '',
    },
    {
      header: 'Product Manager',
      body: 'Human who manages the products!',
      imgSrc: '',
      imgAlt: '',
    },
  ]
</script>

<style>
  .roles-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    width: 100%;
    margin: 2rem;
  }
</style>

<section class="roles-section">
  <h2>Roles</h2>
  {#each exampleRoles as role}
    <InfoCard {...role} />
  {/each}
</section>
