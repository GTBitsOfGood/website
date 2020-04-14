<script>
  export let themeColor = '#333'
  export let aboutScreenshot = {}
  export let description = {}
  export let aboutFigmaLink = ''
  export let aboutGithubLink = ''
  export let aboutLiveSiteLink = ''
</script>

<style>
  section h2 {
    color: var(--theme-color);
    font-size: var(--header-1-desktop);
    font-weight: bold;
    background: linear-gradient(90deg, var(--theme-color), var(--black));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .image-container {
    background: var(--theme-color);
    max-height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-bottom: 40px;
  }

  .image-container img {
    width: 100%;
    min-width: 400px;
  }

  .content-container {
    display: flex;
  }

  .content-container p {
    flex: 1;
    font-size: var(--body-large);
    margin-right: 30px;
  }

  .link-container {
    width: 250px;
  }

  a {
    font-family: var(--header-font);
    font-size: var(--body-xl);
    display: flex;
    align-items: center;
    margin: 20px 0;
  }

  a,
  a:visited {
    color: var(--black);
  }

  a img {
    height: 30px;
    flex-basis: 100px;
    transition: transform 0.2s;
  }

  a:hover {
    color: var(--primary);
  }

  a:hover img {
    transform: scale(1.2);
  }

  @media (max-width: 800px) {
    section h2 {
      text-align: center;
      font-size: var(--header-1-mobile);
    }
    .content-container {
      display: block;
    }
    .link-container {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
    .content-container p {
      margin-right: 0;
      font-size: initial;
    }
    a {
      margin-left: 30px;
    }
    a span {
      display: none;
    }
  }
</style>

<section style="--theme-color: {themeColor}">
  <h2>About Project</h2>
  <div class="image-container">
    <img src={aboutScreenshot.src} alt={aboutScreenshot.alt} />
  </div>
  <div class="content-container">
    <p>
      {@html description.inlineHtml}
    </p>
    {#if aboutFigmaLink || aboutGithubLink || aboutLiveSiteLink}
      <div class="link-container">
        {#if aboutFigmaLink}
          <a target="_blank" href={aboutFigmaLink}>
            <img src="/icons/figma.svg" alt="" />
            <span>Mockups</span>
          </a>
        {/if}
        {#if aboutGithubLink}
          <a target="_blank" href={aboutGithubLink}>
            <img src="/icons/github.svg" alt="" />
            <span>Code repo</span>
          </a>
        {/if}
        {#if aboutLiveSiteLink}
          <a target="_blank" href={aboutLiveSiteLink}>
            <img src="/icons/link.svg" alt="" />
            <span>Live site</span>
          </a>
        {/if}
      </div>
    {/if}
  </div>
</section>
