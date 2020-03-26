<script>
  import content from '@contentful-entry/contactUs'
  import { removeWrapperPTag } from '../contentHelpers'
</script>

<style>
  section {
    display: grid;
    font-size: 18px;
    padding: 3rem;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 5rem;
    grid-template-areas:
      'heading heading'
      'info-text form'
      'image form'
      'address form';
  }

  p {
    font-size: inherit;
    margin: 0;
    margin-bottom: 2rem;
    color: #333;
  }

  h1 {
    grid-area: 'heading';
    margin-top: 3rem;
    margin-bottom: 0;
  }
  h2 {
    font-size: 24px;
  }
  .info-text {
    grid-area: info-text;
  }
  img {
    grid-area: image;
    justify-self: center;
    max-width: 450px;
  }
  .address {
    grid-area: address;
  }
  .address a,
  .address a:hover {
    color: initial;
    font-weight: normal;
    transition: text-decoration 0.2s;
  }
  .address a:hover {
    text-decoration: underline;
  }
  form {
    grid-area: form;
  }
  label {
    display: block;
    margin-bottom: 1.5rem;
  }
  input,
  textarea {
    display: block;
    width: 100%;
    margin-bottom: 4rem;
    padding-bottom: 1rem;
  }

  textarea {
    resize: none;
    min-height: 5em;
    transition: min-height 0.2s;
  }
  textarea:focus {
    min-height: 10em;
  }
  button {
    font-size: inherit;
    background: var(--primary-red);
    padding: 1.5rem 3rem;
    color: white;
    border-radius: 1rem;
    transition-property: box-shadow, transform;
    transition-duration: 0.2s;
  }
  button:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-5px);
  }

  @media (max-width: 800px) {
    section {
      grid-template-columns: 1fr;
      grid-template-areas:
        'image'
        'heading'
        'info-text'
        'form'
        'address';
    }
  }
</style>

<section>
  <img src={content.artwork.src} alt={content.artwork.alt} />
  <h1>{content.heading}</h1>
  <p class="info-text">
    {@html content.infoText.inlineHtml}
  </p>
  <div class="address">
    <h2>{content.addressHeading}</h2>
    <p>
      <a href={content.addressUrl}>
        {content.addressLine1}
        <br />
        {content.addressLine2}
      </a>
    </p>
  </div>
  <form
    method="POST"
    name="contact"
    data-netlify="true"
    action="/contact-submitted">
    <input type="hidden" name="form-name" value="contact" />
    <label for="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder={content.namePlaceholder}
      required />
    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      placeholder={content.emailPlaceholder}
      required />
    <label for="message">Message</label>
    <textarea
      id="message"
      name="message"
      placeholder={content.messagePlaceholder}
      required />
    <button type="submit">{content.formSubmissionButton}</button>
    <!--Ignore this element. Included so the /contact-submitted page is generated when crawling the website.-->
    <a style="display: none" href="/contact-submitted">_</a>
  </form>
</section>

<svelte:head>
  <title>Contact Us</title>
</svelte:head>
