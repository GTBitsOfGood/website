<script>
  import content from '@contentful-entry/aboutUsHeader'
  import HeaderSwoosh from './HeaderSwoosh'

  export let missionSectionId = ''

  const scrollToMissionSection = () => {
    const mission = document.getElementById(missionSectionId)
    if (mission) mission.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<style>
  section {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 750px;
  }
  .content-container {
    margin: 5rem auto;
    width: 100%;
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
  }
  .text-container {
    padding: 3rem;
    max-width: 90rem;
  }
  .text-container {
    color: white;
  }
  .text-container > :global(p) {
    font-size: 40px;
    color: white;
  }
  button {
    background: white;
    padding: 1.5rem 3rem;
    font-size: 24px;
    color: var(--primary-red);
    border-radius: 1rem;
    transition-property: box-shadow, transform;
    transition-duration: 0.2s;
  }
  button:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-5px);
  }
  img {
    align-self: flex-end;
    height: 40rem;
    margin-right: 5rem;
  }
  @media (max-width: 900px) {
    .text-container > :global(p) {
      font-size: 30px;
    }
  }
  @media (max-width: 650px) {
    .content-container {
      margin-top: 0;
      flex-direction: column;
    }
    .text-container > :global(p) {
      font-size: 24px;
    }
    img {
      height: 30rem;
    }
  }
</style>

<section>
  <HeaderSwoosh />
  <div class="content-container">
    <div class="text-container">
      <h1>{content.heading}</h1>
      {@html content.description}
      <button on:click={scrollToMissionSection}>{content.cta}</button>
    </div>
    <img
      src="/images/building-artwork-front.png"
      alt="person gesturing to content" />
  </div>
</section>
