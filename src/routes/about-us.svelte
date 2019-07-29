<script>
  import { InfoCard } from '../components'
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
    max-width: var(--content-max-width);
    margin: auto;
  }
  h2 {
    width: 100%;
    margin: 0 2rem;
    font-size: 60px;
  }
</style>

<section class="roles-section">
  <h2>Roles</h2>
  {#each exampleRoles as { header, body, imgSrc, imgAlt }}
    <InfoCard {header} {body} {imgSrc} {imgAlt} />
  {/each}
</section>
