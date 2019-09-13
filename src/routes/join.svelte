<script>
  import content from '@contentful-entry/getInvolvedSection'
  import DottedAccent from '../components/DottedAccent'
  const formLink =
    'https://forms.office.com/Pages/ResponsePage.aspx?id=u5ghSHuuJUuLem1_Mvqggz-M1H0_U3dBvpxXg720lXxURTQwMUFBTEdHT05TM05ZMFdQNUFTOFVGMS4u'
</script>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr 10rem;
    row-gap: 5rem;
    min-height: 70vh;
    align-items: center;
    padding-bottom: 5rem;
  }
  p {
    position: relative;
    white-space: pre-line;
    font-size: 34px;
    margin: 3rem;
  }
  h1,
  a {
    grid-column: 1 / -1;
  }
  img {
    justify-self: center;
  }
  a {
    justify-self: center;
    background-color: var(--primary);
    color: white;
    padding: 2rem 3rem;
    font-size: 24px;
    font-weight: bold;
    border-radius: 1rem;
    text-align: center;
    transition-property: background-color, transform;
    transition-duration: 0.2s;
  }
  a:hover {
    background-color: var(--primary-yellow);
    transform: translateY(-10px);
  }

  @media (max-width: 1000px) {
    img {
      width: 15rem;
    }
    p {
      font-size: 24px;
    }
  }

  @media (max-width: 700px) {
    section {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto;
    }
  }
</style>

<section>
  <h1>{content.heading}</h1>
  <img src={content.icon.src} alt={content.icon.alt} />
  <p>
    {@html content.description}
    <DottedAccent right="0rem" bottom="5rem" color="orange" width="l" />
  </p>
  <a target="_blank" href={formLink}>{content.cta}</a>
</section>
