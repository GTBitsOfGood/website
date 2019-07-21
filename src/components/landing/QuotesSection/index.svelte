<script>
  import SwooshGraphic from './SwooshGraphic.svelte'
  import DottedAccent from '../../DottedAccent.svelte'

  const quotes = [
    {
      author: 'James, hype man',
      pictureURL: 'quote-img-1.jpg',
      quote:
        'Bits of Good is freaking amazing and I love it so much! The community especially.',
    },
    {
      author: 'Huan, aesthetic master',
      pictureURL: 'quote-img-2.jpg',
      quote:
        'This club is a home away from home. Met some amazing people here and am hyped for fall!',
    },
  ]
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
  }
  .quote-container {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    padding: 0 8rem;
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
    position: relative;
    cursor: pointer;
    margin-right: -20rem;
    margin-left: -15rem;
    z-index: 1;
    background: none;
    padding: 0;
    height: 20rem;
    width: 20rem;
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
    width: 50%;
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
    font-size: 40px;
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
</style>

<section>
  <div class="quote-container">
    <figure class="text-container">
      <blockquote>{curr.quote}</blockquote>
      <figcaption>{curr.author}</figcaption>
    </figure>
    <img src="/example-data/{curr.pictureURL}" alt={curr.author} />
    <button
      class="next-quote-btn"
      on:click={() => (quoteIndex = nextQuoteIndex)}>
      <img src="/example-data/{next.pictureURL}" alt={next.author} />
    </button>
    <DottedAccent
      height="l"
      width="xl"
      color="#F1E8C7"
      right="10%"
      top="8rem"
      opaque
      parallax={false} />
  </div>
  <SwooshGraphic />
</section>
