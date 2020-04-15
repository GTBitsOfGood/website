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
    column-gap: 40px;
    grid-template-areas:
      'preheading thumbnail'
      'heading thumbnail'
      'description thumbnail';
    margin-top: 20px;
  }

  h2 {
    grid-area: preheading;
  }

  h3 {
    margin: 10px 0 0 0;
    grid-area: heading;
    display: flex;
    align-items: center;
  }

  h3 a,
  h3 a:visited {
    color: var(--black);
    margin-right: 20px;
  }

  h3 :global(svg) {
    width: 1em;
    height: 1em;
    transition: transform 0.2s;
  }

  h3:hover :global(svg) {
    transform: translateX(10px);
  }

  p {
    grid-area: description;
  }

  img {
    height: 300px;
    grid-area: thumbnail;
    justify-self: end;
    margin-bottom: 20px;
  }

  @media (max-width: 1000px) {
    img {
      margin-top: 20px;
      justify-self: start;
      width: 100%;
      height: auto;
    }

    section {
      grid-template-columns: 1fr;
      grid-template-areas:
        'preheading'
        'heading'
        'thumbnail'
        'description';
    }
  }
</style>

<section>
  <img height="300" src={thumbnail.src} alt={thumbnail.alt} />
  <h2>Our Client</h2>
  <h3>
    <a target="_blank" href={nonprofitLink.url}>{nonprofitLink.text}</a>
    <ArrowRight />
  </h3>
  <p>
    {@html nonprofitDescription.inlineHtml}
  </p>
</section>
