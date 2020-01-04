<script>
  import Heading from '../components/join/Heading.svelte'
  import Footer from '../components/join/Footer.svelte'

  import openRoles from '@contentful-entries/openRole'
  import content from '@contentful-entry/joinPage'
  import { removeWrapperPTag } from '../contentHelpers'

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<style>
  :global(p) {
    font-weight: 300;
  }

  div.jump-to-section-links {
    display: none;
    margin-bottom: 60px;
  }

  div.jump-to-section-links button {
    font-size: 18px;
    padding: 20px 30px;
    margin: 15px;
  }

  div.jump-to-section-links button.students {
    color: white;
    background: var(--primary-red);
  }

  div.jump-to-section-links button.nonprofits {
    color: #333;
    background: var(--primary-yellow);
  }

  section.content-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  section.content-container :global(p) {
    font-size: 18px;
    margin: 40px 0;
    line-height: 1.8em;
  }

  section.content {
    margin: 30px;
    flex: 1;
    flex-basis: 350px;
  }

  section.content h2 {
    font-size: 48px;
    padding-bottom: 5px;
    display: inline-block;
  }

  section.content h3 {
    font-size: 32px;
    margin-top: 70px;
    margin-bottom: 15px;
  }

  section#students h2 {
    border-bottom: 4px solid var(--primary-red);
  }

  section#nonprofits h2 {
    border-bottom: 4px solid var(--primary-yellow);
  }

  section.content-container p.tagline {
    font-weight: 500;
    margin-top: 25px;
  }

  a.open-role,
  a.open-role:hover {
    color: #333;
  }

  a.open-role {
    display: block;
    margin: 40px 0;
  }

  a.open-role div.role-name {
    display: flex;
    align-items: center;
  }

  a.open-role h4 {
    font-family: 'Interstate';
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }

  a.open-role p {
    margin: 8px 0;
  }

  a.open-role img.arrow-icon {
    width: 30px;
    height: auto;
    margin-left: 10px;
    transition: margin-left 0.2s;
  }

  a.open-role:hover img.arrow-icon {
    margin-left: 15px;
  }

  a.nonprofit-cta {
    display: inline-block;
    margin-top: 30px;
    font-size: 18px;
    background: var(--primary-yellow);
    padding: 15px 40px;
    border-radius: 10px;
    color: #333;
    transition-property: box-shadow, transform;
    transition-duration: 0.2s;
  }
  a.nonprofit-cta:hover {
    color: #333;
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
  }

  @media (min-width: 960px) {
    section#students {
      margin-right: 60px;
    }

    section#nonprofits {
      margin-left: 60px;
    }
  }

  @media (max-width: 819px) {
    div.jump-to-section-links {
      display: flex;
      justify-content: center;
    }
    section.content h2 {
      font-size: 42px;
      display: table;
      margin: auto;
    }
    p.tagline {
      text-align: center;
    }
    a.nonprofit-cta {
      display: table;
      margin: auto;
    }
  }
</style>

<Heading />
<div class="jump-to-section-links">
  <button class="students" on:click={() => scrollToSection('students')}>
    For Students
  </button>
  <button class="nonprofits" on:click={() => scrollToSection('nonprofits')}>
    For Nonprofits
  </button>
</div>
<section class="content-container">
  <section class="content" id="students">
    <h2>Students</h2>
    <p class="tagline">
      {@html removeWrapperPTag(content.studentTagline)}
    </p>
    <h3>Open roles</h3>
    {#each openRoles as openRole}
      <a class="open-role" href={openRole.applicationUrl}>
        <div class="role-name">
          <h4>{openRole.name}</h4>
          <img class="arrow-icon" src="/icons/arrow-right-dark.svg" alt="" />
        </div>
        <p>{openRole.description}</p>
      </a>
    {/each}
  </section>
  <section class="content" id="nonprofits">
    <h2>Nonprofits</h2>
    <p class="tagline">
      {@html removeWrapperPTag(content.nonprofitTagline)}
    </p>
    {@html content.nonprofitSection}
    <a class="nonprofit-cta" href={content.nonprofitCtaUrl}>
      {content.nonprofitCta}
    </a>
  </section>
</section>
<Footer />
