<script>
  import content from '@contentful-entry/contactUsSubmitted'
  import { removeWrapperPTag } from '../contentHelpers'
</script>

<style>
  .container {
    background: linear-gradient(var(--backing-pink-pronounced), white);
    width: 100%;
  }
  section {
    display: flex;
    min-height: 100%;
    padding: 3rem;
    align-items: center;
    max-width: var(--content-max-width);
  }
  img {
    width: 475px;
    margin-left: -5rem;
  }
  .text-container {
    flex: 1;
  }
  p {
    color: #333;
    margin-left: 0.5rem;
    font-size: 18px;
  }
  .subtext {
    font-size: 24px;
  }
  .newsletter-link {
    margin-top: 2rem;
    display: inline-block;
    border-radius: 1rem;
    letter-spacing: inherit;
    font-weight: normal;
    color: #333;
    font-size: 18px;
    padding: 1rem 2rem;
    border: 2px solid var(--primary-red);
    transition-property: background-color, color, drop-shadow, transform;
    transition-duration: 0.2s;
  }
  .newsletter-link:hover {
    background-color: var(--primary-red);
    color: white;
    box-shadow: var(--shadow-hover);
    transform: translateY(-5px);
  }
  @media (max-width: 900px) {
    section {
      flex-direction: column;
    }
    img {
      transform: scaleX(-1);
      width: 250px;
      align-self: flex-end;
      margin-top: 3rem;
    }
  }
</style>

<div class="container">
  <section>
    <div class="text-container">
      <h1>{content.heading}</h1>
      <p class="subtext">
        {@html content.subHeading.inlineHtml}
      </p>
      <p>
        {@html content.newsletterSubtext.inlineHtml}
      </p>
      <a class="newsletter-link" href={content.newsletterUrl}>
        {content.newsletterCta}
      </a>
    </div>
    <img src={content.artwork.src} alt={content.artwork.alt} />
  </section>
</div>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>
