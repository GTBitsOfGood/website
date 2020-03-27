<script>
  import RoleDropdown from './RoleDropdown.svelte'

  export let name = ''
  export let description = ''
  export let hash = ''
  export let image = ''
  export let roles = []
  export let rightAlign = false
</script>

<style>
  section {
    display: flex;
    align-items: flex-start;
    padding: 30px;
    margin-bottom: 100px;
  }
  section.rightAlign {
    flex-direction: row-reverse;
  }
  div.image-container {
    width: 300px;
    height: 400px;
    max-width: 100%;
    margin-top: 100px;
    margin-right: 100px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1100px) {
    section {
      flex-direction: column;
    }
  }
  section.rightAlign div.image-container {
    margin-left: 100px;
    margin-right: 0;
  }
  img {
    width: auto;
    height: 100%;
  }
  div.content-container {
    flex: 1;
  }
  h2 {
    font-size: 48px;
    margin-bottom: 30px;
  }
  p.description {
    font-family: 'Visby CF Medium';
    font-size: 22px;
    color: #333;
  }
</style>

<section class:rightAlign>
  <div class="image-container">
    <img src={image.src} alt={image.alt} />
  </div>
  <div class="content-container">
    <h2>{name}</h2>
    <p class="description">
      {@html description.inlineHtml}
    </p>
    {#each roles as role}
      <RoleDropdown {...role} />
    {/each}
  </div>
</section>
