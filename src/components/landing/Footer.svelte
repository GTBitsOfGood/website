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

    .right {
      justify-content: flex-start;
      flex-basis: 20rem;
    }
  }

  @media (max-width: 500px) {
    footer {
      padding: 30px 3rem;
    }

    h3 {
      font-size: 32px;
    }

    p {
      font-size: 20px;
    }

    ul {
      margin-bottom: 25px;
    }

    .right {
      display: flex;
      flex-direction: column;
    }
  }

</style>

<footer>
  
  <section>
    <div class="left">
      <h3>Have a problem? We're here to help.</h3>
      <p class="footer_cta">Let's talk</p>
    </div>

    <div class="right">
      <ul>
        <li class="bold_link">General</li>
        <li>Our Work</li>
        <li>About Us</li>
        <li>Open Roles</li>
      </ul>

      <ul>
        <li class="bold_link">Get Involved</li>
        <li>Students</li>
        <li>Non-profits</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li class="bold_link">Social Media</li>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Github</li>
      </ul>
    </div>
  </section>

  <hr class="divider">

  <div class="footer-bottom">
  <img 
    src="images/h4i-logo.svg"
    class="footer-img"
    >
  <img 
    src="images/bog-logo-footer.svg"
    class="footer-img"
    >
  </div>
</footer>