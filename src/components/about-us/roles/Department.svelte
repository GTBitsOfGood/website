<script>
  import RoleDropdown from './RoleDropdown.svelte'
  import recruitmentCycles from '@contentful-entries/recruitmentCycle'

  export let name = ''
  export let description = ''
  export let hash = ''
  export let image = ''
  export let roles = []
  export let rightAlign = false
  export let selectedRole = ''

  // check if role applications are open in the current recruitment cycle
  const activeCycle = recruitmentCycles.find(cycle => cycle.active)

  if (activeCycle && activeCycle.openRoles && activeCycle.openRoles.length) {
    roles = roles.map(role => {
      const applicationOpen = activeCycle.openRoles.find(
        openRole =>
          openRole.name === role.name && openRole.learnMoreHash === hash
      )
      return { ...role, applicationOpen }
    })
  }
</script>

<style>
  h2 {
    font-size: 48px;
    margin-bottom: 30px;
  }
  p.description {
    font-family: var(--header-font);
    font-size: 22px;
    color: #333;
  }
  section {
    max-width: 100%;
    margin-bottom: 50px;
  }
  section.rightAlign {
    background: var(--section-color-yellow);
  }
  .inner {
    display: flex;
    align-items: flex-start;
    margin-bottom: 100px;
    padding: 30px;
    padding-bottom: 100px;
    max-width: var(--content-max-width);
    margin: auto;
  }
  section.rightAlign .inner {
    flex-direction: row-reverse;
  }
  .content-container {
    position: relative;
    flex: 2;
  }
  .image-container {
    flex: 1;
    margin-right: 50px;
  }
  .image-container img {
    width: auto;
    height: 500px;
    max-width: 100%;
    padding-top: 100px;
    margin-right: 50px;
  }
  section.rightAlign .image-container {
    margin-left: 50px;
    margin-right: 0;
  }
  @media (max-width: 600px) {
    p.description {
      font-size: 18px;
    }
    .image-container img {
      height: 400px;
    }
  }
  @media (max-width: 1000px) {
    .inner,
    section.rightAlign .inner {
      flex-direction: column;
      align-items: stretch;
      padding: 0;
    }
    section.rightAlign {
      background: none;
    }
    .header-container {
      display: flex;
      justify-content: flex-end;
    }
    .image-container,
    section.rightAlign .image-container {
      margin-left: 0;
      margin-right: 0;
      display: flex;
      justify-content: center;
      background: var(--section-color-yellow);
    }
    .content-container {
      padding: 20px;
    }
    .content-container h2 {
      position: absolute;
      transform: rotate(0.25turn);
      transform-origin: top right;
      width: 400px;
    }
  }
</style>

<section class:rightAlign id={hash}>
  <div class="inner">
    <div class="image-container">
      <img src={image.src} alt={image.alt} />
    </div>
    <div class="content-container">
      <div class="header-container">
        <h2>{name}</h2>
      </div>
      <p class="description">
        {@html description.inlineHtml}
      </p>
      {#each roles as role}
        <RoleDropdown {...role} open={selectedRole === role.name} />
      {/each}
    </div>
  </div>
</section>
