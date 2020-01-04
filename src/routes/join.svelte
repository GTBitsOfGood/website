<script>
  import openRoles from '@contentful-entries/openRole'
  import content from '@contentful-entry/joinPage'
  console.log(openRoles, content)
</script>

<style>
  section.heading {
    position: relative;
    background: linear-gradient(
      130deg,
      var(--primary-red) 24.55%,
      var(--primary-yellow) 85.2%
    );
    max-width: 100%;
  }

  hgroup {
    margin: auto;
    padding: 50px 0;
    text-align: center;
    letter-spacing: 0.2em;
  }
  hgroup h1 {
    font-size: 72px;
    color: white;
  }
  hgroup h2 {
    font-size: 24px;
    text-transform: uppercase;
  }

  p {
    font-weight: 300;
  }

  svg.bottom-swoosh-overlay {
    width: 100%;
    height: 20vw;
    max-height: 300px;
    margin-bottom: -10px;
  }

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

<section class="heading">
  <hgroup>
    <h1>Join Us!</h1>
    <h2>Spring 2020</h2>
  </hgroup>

  <svg
    class="bottom-swoosh-overlay"
    width="1440"
    height="255"
    viewBox="0 0 1440 255"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1440 255H0V0C77.5 109.112 392 214.819 714 101.388C864 48.5474 1245
      6.87843 1440 128V255Z"
      fill="white" />
  </svg>
</section>

<section class="content">
  <section id="students">
    <h2>Students</h2>
    <p>{content.studentTagline}</p>
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
</section>
