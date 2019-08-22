<script>
  import SwooshGraphic from './SwooshGraphic.svelte'
  import DottedAccent from '../../DottedAccent.svelte'
  import content from '@contentful-entries/quote'
  import { mapFields, toHtml } from 'contentful-utils'

  const quotes = mapFields(content, 'authorImage')

  let quoteIndex = 0
  $: curr = quotes[quoteIndex]
  $: nextQuoteIndex = quoteIndex + 1 === quotes.length ? 0 : quoteIndex + 1
  $: next = quotes[nextQuoteIndex]
</script>

<style>
  section {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 3rem;
    min-height: 100rem;
    margin-bottom: 20rem;
    max-width: 100%;
  }
  .quote-container {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
    padding-bottom: 4rem;
    max-width: 120rem;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 25rem;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.1);
    background: #fff9e1;
    border-radius: 3rem;
  }

  img {
    border-radius: 100%;
  }
  .quote-container > img {
    z-index: 2;
    width: 35rem;
    height: 35rem;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.4);
  }
  .next-quote-btn {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    cursor: pointer;
    z-index: 1;
    background: none;
    padding: 0;
    height: 10rem;
    width: 10rem;
  }
  .next-quote-btn::after {
    content: url('/icons/arrow-right.svg');
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .next-quote-btn > img {
    height: inherit;
    width: inherit;
    opacity: 0.2;
  }

  .text-container {
    z-index: 1;
    flex: 1;
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
  .text-container::before {
    content: url('/icons/quote-symbol.svg');
    display: block;
    width: 7rem;
    height: 7rem;
  }
  blockquote,
  figcaption {
    font-weight: 400;
    letter-spacing: 0.05em;
  }
  blockquote {
    font-size: 24px;
    margin: 2.6rem 0;
  }
  figcaption {
    text-align: right;
    font-size: 24px;
  }
  figcaption::before {
    content: url('/icons/quote-dash.svg');
    margin-right: 2rem;
  }
  @media (max-width: 1100px) {
    .quote-container > img {
      width: 25rem;
      height: 25rem;
    }
  }
  @media (max-width: 900px) {
    .quote-container {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    .quote-container > img {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 10rem;
      height: 10rem;
    }
    .quote-container :global(.dotted-accent) {
      display: none;
    }
  }
  @media (max-width: 500px) {
    blockquote {
      font-size: 18px;
    }
  }
</style>

<section>
  <div class="quote-container">
    <figure class="text-container">
      <blockquote>
        {@html toHtml(curr.quote)}
      </blockquote>
      <figcaption>{curr.author}</figcaption>
    </figure>
    <img src={curr.img.src} alt={curr.img.alt} />
    <button
      class="next-quote-btn"
      on:click={() => (quoteIndex = nextQuoteIndex)}>
      <img src={next.img.src} alt={next.img.alt} />
    </button>
    <DottedAccent
      height="l"
      width="xl"
      color="#F1E8C7"
      right="10%"
      top="8rem"
      opaque />
  </div>
  <SwooshGraphic />
</section>
