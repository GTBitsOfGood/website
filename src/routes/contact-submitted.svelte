<style>
  .container {
    background: linear-gradient(var(--backing-pink-pronounced), white);
    width: 100%;
    padding: 3rem;
  }
  section {
    display: flex;
    min-height: 100%;
    align-items: center;
    max-width: var(--content-max-width);
  }
  img {
    max-height: 500px;
    margin-left: -5rem;
  }
  .text-container {
    flex: 1;
  }
  p {
    font-weight: 400;
    color: #333;
    margin-left: 0.5rem;
  }
  .subtext {
    font-size: 24px;
  }
  .newsletter-link {
    margin-top: 3rem;
    display: inline-block;
    border-radius: 1rem;
    font-weight: inherit;
    letter-spacing: inherit;
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
    }
  }
</style>

<div class="container">
  <section>
    <div class="text-container">
      <h1>Thanks for reaching out!</h1>
      <p class="subtext">We will get back to you very soon.</p>
      <p>
        For now, stay updated on everything BoG with our
        <strong>newsletter!</strong>
      </p>
      <a
        class="newsletter-link"
        href="https://bitsofgood.us16.list-manage.com/subscribe/post?u=45c4fe0ca061b2ce62e43e72f&amp;id=0901f33185">
        Get the newsletter 🚀
      </a>
    </div>
    <img src="images/person-flying-right.svg" alt="" />
  </section>
</div>
