<script>
  import content from '@contentful-entry/contactUs'
  import methods from '@contentful-entries/contactMethod'
  import Method from '../components/contact/Method.svelte'

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
      'methods form'
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
  .methods {
    grid-area: methods;
  }
  .methods h2 {
    margin-top: 0;
  }
  img {
    grid-area: image;
    justify-self: left;
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

  @media (max-width: 820px) {
    section {
      grid-template-columns: 1fr;
      grid-template-areas:
        'image'
        'heading'
        'methods'
        'form'
        'address';
    }
    
  }
</style>

<section>
  <img src={content.artwork.src} alt={content.artwork.alt} />
  <h1>{content.heading}</h1>
  <div class="methods">
    <h2>{content.subheading}</h2>
    {#each methods as {text}}
      <Method {text} />
    {/each}
  </div>
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
    id="form"
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
