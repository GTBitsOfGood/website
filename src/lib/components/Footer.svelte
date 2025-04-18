<script>
  import content from '@contentful-entry/footer'

  export let noTopMargin = false

  $: if (!(content.hack4impactLink && content.hack4impactLink.image && content.hack4impactLink.image.src)) {
    console.log('Footer: Missing hack4impactLink image or its src');
  }
  
  $: if (!(content.bitsOfGoodHomeLink && content.bitsOfGoodHomeLink.image && content.bitsOfGoodHomeLink.image.src)) {
    console.log('Footer: Missing bitsOfGoodHomeLink image or its src');
  }

  $: if (!(content.ctaHeader)) {
    console.log('Footer: Missing ctaHeader');
  }

  $: if (!(content.cta && content.cta.url)) {
    console.log('Footer: Missing cta url');
  }

  $: if (!(content.cta && content.cta.text)) {
    console.log('Footer: Missing cta text');
  }

  $: if (!(content.hack4impactLink && content.hack4impactLink.url)) {
    console.log('Footer: Missing hack4impactLink url');
  }

  $: if (!(content.hack4impactLink && content.hack4impactLink.image && content.hack4impactLink.image.alt)) {
    console.log('Footer: Missing hack4impactLink image alt text');
  }

  $: if (!(content.bitsOfGoodHomeLink && content.bitsOfGoodHomeLink.url)) {
    console.log('Footer: Missing bitsOfGoodHomeLink url');
  }

  $: if (!(content.bitsOfGoodHomeLink && content.bitsOfGoodHomeLink.image && content.bitsOfGoodHomeLink.image.alt)) {
    console.log('Footer: Missing bitsOfGoodHomeLink image alt text');
  }

  const columns = Object.keys(content)
    .map(key => /^linksColumn([0-9]+)$/.exec(key))
    .filter(match => match)
    .map(([_, columnNum]) => columnNum)
    .sort((x, y) => parseInt(x) - parseInt(y))
    .map(columnNum => ({
      title: content[`titleColumn${columnNum}`],
      links: content[`linksColumn${columnNum}`],
    }))
</script>

<style>
  footer {
    margin-top: 75px;
    max-width: 100vw;
    padding: 50px 30px;
    margin-top: 75px;
    background-color: #fafafc;
  }

  footer.noTopMargin {
    margin-top: 0;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    margin: 50px auto;
    justify-content: space-between;
  }

  p {
    font-size: 24px;
    padding: 0;
    margin: 0;
  }

  h3 {
    font-size: 42px;
    padding: 0;
    margin: 0;
  }

  h3.column-header {
    font-size: inherit;
    font-family: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    font-size: 18px;
  }

  li,
  h3.column-header {
    margin-bottom: 20px;
  }

  a {
    color: inherit;
    font-weight: inherit;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }

  .footer-bottom {
    display: flex;
    flex-flow: row wrap-reverse;
    margin: 0 auto;
    padding-top: 10px;
    max-width: var(--content-max-width);
    align-items: center;
    justify-content: space-between;
    border-top: 2px solid #727474;
  }

  .footer-container {
    display: flex;
    align-items: center;
  }

  .footer-bottom img {
    margin: 10px;
    max-width: 100%;
  }

  .cta-container {
    max-width: 400px;
    margin-bottom: 35px;
  }

  .link-container {
    width: 100%;
    max-width: 560px;
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }

  .footer-cta {
    margin-top: 18px;
    color: var(--primary-red);
  }

  @media (max-width: 600px) {
    footer {
      padding: 30px 30px;
    }

    h3 {
      font-size: 32px;
    }

    p {
      font-size: 26px;
    }

    .footer-container {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

<footer id="footer" class:noTopMargin>

  <section>
    <div class="cta-container">
      {#if content.ctaHeader}
        <h3>{content.ctaHeader}</h3>
      {/if}
      {#if content.cta && content.cta.url && content.cta.text}
        <p class="footer-cta">
          <a href={content.cta.url}>{content.cta.text}</a>
        </p>
      {/if}
    </div>

    <div class="link-container">
      {#each columns as column}
        <ul>
          {#if column.title}
            <h3 class="column-header">{column.title}</h3>
          {/if}
          {#if column.links && Array.isArray(column.links)}
            {#each column.links as link}
              {#if link && link.url && link.text}
                <li>
                  <a href={link.url}>{link.text}</a>
                </li>
              {/if}
            {/each}
          {/if}
        </ul>
      {/each}
    </div>
  </section>

  <div class="footer-bottom">
    {#if content.hack4impactLink && content.hack4impactLink.url && content.hack4impactLink.image && content.hack4impactLink.image.src && content.hack4impactLink.image.alt}
      <a href={content.hack4impactLink.url}>
        <img
          src={content.hack4impactLink.image.src}
          alt={content.hack4impactLink.image.alt} />
      </a>
    {/if}
    <div class="footer-container">
      <a href="https://www.netlify.com">
        <img
          src="https://www.netlify.com/img/global/badges/netlify-dark.svg"
          alt="Deploys by Netlify" />
      </a>
      {#if content.bitsOfGoodHomeLink && content.bitsOfGoodHomeLink.url && content.bitsOfGoodHomeLink.image && content.bitsOfGoodHomeLink.image.src && content.bitsOfGoodHomeLink.image.alt}
        <a href={content.bitsOfGoodHomeLink.url}>
          <img
            src={content.bitsOfGoodHomeLink.image.src}
            alt={content.bitsOfGoodHomeLink.image.alt} />
        </a>
      {/if}
    </div>
  </div>
</footer>
