<script>
  import ArrowRight from 'svelte-icons/io/IoIosArrowRoundForward'

  export let nonprofitLink = {}
  export let nonprofitDescription = {}
  export let thumbnail = {}
</script>

<style>
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'preheading thumbnail'
      'heading thumbnail'
      'description thumbnail';
    margin-top: 20px;
  }

  h2 {
    margin: 0;
    font-weight: normal;
    grid-area: preheading;
  }

  h3 {
    margin: 10px 0 0 0;
    grid-area: heading;
    display: flex;
  }

  h3 a,
  h3 a:visited {
    color: var(--black);
    margin-right: 20px;
  }

  h3 :global(svg) {
    width: 1em;
    transition: transform 0.2s;
  }

  h3:hover :global(svg) {
    transform: translateX(10px);
  }

  p {
    grid-area: description;
    font-size: var(--body-large);
  }

  img {
    width: 400px;
    grid-area: thumbnail;
    justify-self: right;
    align-self: center;
  }

  @media (max-width: 1000px) {
    h2,
    h3,
    img {
      justify-self: center;
    }

    img {
      margin-top: 20px;
    }

    section {
      grid-template-columns: 1fr;
      grid-template-areas:
        'preheading'
        'heading'
        'thumbnail'
        'description';
    }

    p {
      margin-top: 20px;
      font-size: initial;
    }
  }
</style>

<section>
  <img src={thumbnail.src} alt={thumbnail.alt} />
  <h2>Our Client</h2>
  <h3>
    <a href={nonprofitLink.url}>{nonprofitLink.text}</a>
    <ArrowRight />
  </h3>
  <p>
    {@html nonprofitDescription.inlineHtml}
  </p>
</section>
