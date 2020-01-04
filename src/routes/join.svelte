<script>
  import Heading from '../components/join/Heading.svelte'
  import openRoles from '@contentful-entries/openRole'
  import content from '@contentful-entry/joinPage'
  import { removeWrapperPTag } from '../contentHelpers'
  console.log(openRoles, content)
</script>

<style>
  section.content {
    padding: 30px;
  }

  a.open-role,
  a.open-role:hover {
    color: #333;
  }

  a.open-role {
    display: block;
    margin-bottom: 40px;
  }

  a.open-role div.role-name {
    display: flex;
    align-items: center;
  }

  a.open-role h4 {
    font-size: 20px;
    margin: 0;
  }

  a.open-role img.arrow-icon {
    width: 24px;
    height: 24px;
    margin-left: 10px;
    transition: margin-left 0.2s;
  }

  a.open-role:hover img.arrow-icon {
    margin-left: 15px;
  }
</style>

<Heading />
<section class="content">
  <section id="students">
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
  <section id="nonprofits">
    <h2>Nonprofits</h2>
    <p class="tagline">
      {@html removeWrapperPTag(content.nonprofitTagline)}
    </p>
    {@html content.nonprofitSection}
  </section>
</section>
