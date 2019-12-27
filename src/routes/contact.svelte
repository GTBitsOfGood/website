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

  h1 {
    grid-area: 'heading';
    margin-top: 2rem;
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
  .address a {
    color: initial;
    font-weight: initial;
    transition: text-decoration 0.2s;
  }
  .address a:hover {
    color: initial;
    font-weight: initial;
    text-decoration: underline;
  }
  form {
    grid-area: form;
  }
  p {
    font-weight: 400;
    font-size: inherit;
    margin: 0;
    margin-bottom: 2rem;
    color: #333;
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
    min-height: 15em;
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
  <img
    src="images/people-swirl.svg"
    alt="people looking at each other with laptops" />
  <h1>Contact Us</h1>
  <p class="info-text">
    Want to learn more about Bits of Good? Send us a message or email us at
    <a href="mailto:hello@bitsofgood.org">hello@bitsofgood.org</a>
  </p>
  <div class="address">
    <h2>Or find us in person!</h2>
    <p>
      <a href="https://g.page/thegaragetechsquare?share" target="_blank">
        The Garage at Tech Square
        <br />
        848 Spring St NW, Atlanta, GA 30308
      </a>
    </p>
  </div>
  <form method="POST" data-netlify="true">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="Johnny Dogooder" required />
    <label for="email">Email</label>
    <input type="text" id="email" placeholder="hello@nonprofit.org" required />
    <label for="Message">Message</label>
    <textarea id="message" placeholder="I had a question about..." required />
    <button type="submit">Message us!</button>
  </form>
</section>
