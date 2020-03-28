<script>
  import content from '@contentful-entry/footer'

  const linkColumns = Object.keys(content).reduce((columns, contentKey) => {
    const regexp = /([A-Za-z]*)Column([0-9]*)/g
    const columnKey = regexp.exec(contentKey) // ex. matches Contentful key "linksColumn1"
    if (columnKey) {
      const [_, key, index] = columnKey
      columns[index - 1] = {
        ...columns[index - 1],
        [key]: content[contentKey],
      }
    }
    return columns
  }, [])
</script>

<style>
  footer {
    max-width: 100vw;
    padding: 50px 30px;
    background-color: #fafafc;
    margin-top: 50px;
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
    padding-top: 20px;
    max-width: var(--content-max-width);
    justify-content: space-between;
    border-top: 2px solid #727474;
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
  }
</style>

<footer id="footer">

  <section>
    <div class="cta-container">
      <h3>{content.ctaHeader}</h3>
      <p class="footer-cta">
        <a href={content.cta.url}>{content.cta.text}</a>
      </p>
    </div>

    <div class="link-container">
      {#each linkColumns as column}
        <ul>
          <h3 class="column-header">{column.title}</h3>
          {#each column.links as link}
            <li>
              <a href={link.url}>{link.text}</a>
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </section>

  <div class="footer-bottom">
    <a href={content.hack4impactLink.url}>
      <img
        src={content.hack4impactLink.image.src}
        alt={content.hack4impactLink.image.alt} />
    </a>
    <a href={content.bitsOfGoodHomeLink.url}>
      <img
        src={content.bitsOfGoodHomeLink.image.src}
        alt={content.bitsOfGoodHomeLink.image.alt} />
    </a>
  </div>
</footer>
