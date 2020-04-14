<script>
  import Heading from '../components/join/Heading.svelte'
  import Footer from '../components/join/Footer.svelte'
  import recruitmentCycles from '@contentful-entries/recruitmentCycle'
  import content from '@contentful-entry/joinPage'
  import Role from '../components/join/Role.svelte'

  const activeCycle = recruitmentCycles.find(cycle => cycle.active)

  const scrollToSection = sectionId => {
    const section = document.getElementById(sectionId)
    if (section) section.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<style>
  div.jump-to-section-links {
    display: none;
    margin-bottom: 60px;
  }

  div.jump-to-section-links button {
    font-size: 16px;
    padding: 15px 20px;
    margin: 15px;
    color: #333;
    border-radius: 10px;
  }

  div.jump-to-section-links button.students {
    border: 3px solid var(--primary-red);
  }

  div.jump-to-section-links button.nonprofits {
    border: 3px solid var(--primary-yellow);
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
    margin-bottom: 30px;
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

  section.content p.tagline {
    margin-top: 0px;
  }

  section.content .announcement-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  section.content .announcement-container p.announcement {
    text-align: center;
    margin: 0;
    padding: 10px 20px;
    border: 3px solid var(--primary-red);
    border-radius: 10px;
    font-size: 16px;
    color: var(--primary-red);
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
      margin-top: 0;
      margin-left: auto;
      margin-right: auto;
    }

    section.content .announcement-container {
      align-items: center;
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
    {#if activeCycle.announcement}
      <div class="announcement-container">
          <p class="announcement">
            {@html activeCycle.announcement.inlineHtml}
          </p>
      </div>
    {/if}
    <p class="tagline">
      {@html activeCycle.tagline.inlineHtml}
    </p>
    {#if activeCycle.openRoles}
      <h3>Open roles</h3>
      {#each activeCycle.openRoles as openRole}
        <Role {...openRole} open={true} />
      {/each}
    {/if}
    {#if activeCycle.futureRoles}
      <h3>Future roles</h3>
      {#each activeCycle.futureRoles as futureRole}
        <Role {...futureRole} />
      {/each}
    {/if}
  </section>
  <section class="content" id="nonprofits">
    <h2>Nonprofits</h2>
    <p class="tagline">
      {@html content.nonprofitTagline.inlineHtml}
    </p>
    {@html content.nonprofitSection.html}
    <a class="nonprofit-cta" href={content.nonprofitCtaUrl}>
      {content.nonprofitCta}
    </a>
  </section>
</section>
<Footer />

<svelte:head>
  <title>Join Us</title>
</svelte:head>
