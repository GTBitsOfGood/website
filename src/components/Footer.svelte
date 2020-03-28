<script>
  import content from '@contentful-entry/footer'
</script>

<style>
  
  footer {
    max-width: 100vw;
    padding: 50px 3rem;
    background-color: #FAFAFC;
  }

  section {
    display: flex;
    flex-flow: row wrap;
    margin: 50px auto;
    max-width: 124rem;
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

  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }

  li {
    display: block;
    font-size: 18px;
    margin-bottom: 2rem;
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
    max-width: 124rem;
    justify-content: space-between;
  }

  .left {
    flex: 1;
    max-width: 40rem;
    margin: 0 0;
    padding: 0 0;
  }

  .right {
    display: flex;
    flex-flow: row wrap;
    flex-basis: 50rem;
    justify-content: space-between;
    margin: 0 0;
    padding: 0 0;
  }

  .footer_cta {
    margin-top: 18px;
    color: #FB3552;
  }

  .bold_link {
    font-weight: bold;
  }

  .divider {
    margin: 20px auto;
    max-width: 124rem;
    color: #727474;
  }

  .footer-img {
    margin: 8px 0;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    footer {
      padding: 50px 3rem;
    }

    section {
      display: flex;
      flex-direction: column;
    }

    .left {
      margin-bottom: 35px;
    }

    ul {
      margin-right: 10rem;
      margin-bottom: 25px;
    }

    ul.last {
      margin-right: 0;
    }

    .right {
      justify-content: flex-start;
      flex-basis: 20rem;
    }
  }

  @media (max-width: 620px) {
    footer {
      padding: 30px 3rem;
    }

    h3 {
      font-size: 32px;
    }

    p {
      font-size: 26px;
    }

    ul, ul.last {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 25px;
    }

    li {
      text-align: center;
    }

    .right {
      display: flex;
      flex-direction: column;
    }
  }

</style>

<footer id="footer">
  
  <section>
    <div class="left">
      <h3>{content.heading}</h3>
      <p class="footer_cta">
        <a href="/contact">{content.cta}</a>
      </p>
    </div>

    <div class="right">
      {#each content.columns as column, i}
        <ul class:last="{i === content.columns.length - 1}">
          {#each column.links as link}
            <li class:bold_link={link.boldLink}>
              {#if link.url}
                <a href={link.url}>{link.text}</a>
              {:else}
                {link.text}
              {/if}
            </li>
          {/each}
        </ul>
      {/each}
    </div>
  </section>

  <hr class="divider">

  <div class="footer-bottom">
    {#each content.images as img}
      <a href={img.link}>
        <img src={img.image.src} alt={img.image.alt} class="footer-img">
      </a>
    {/each}
  </div>
</footer>
