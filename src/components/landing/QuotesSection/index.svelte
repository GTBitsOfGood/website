<script>
  import SwooshGraphic from './SwooshGraphic.svelte'

  let quote =
    'Bits of good is freaking amazing and I love it so much! The community especially.'
  let quoteAuthor = 'James, hype man'
</script>

<style>
  section {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 3rem;
    min-height: 100rem;
  }
  .quote-container {
    position: relative;
    display: flex;
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

  .text-container {
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
      <blockquote>{quote}</blockquote>
      <figcaption>{quoteAuthor}</figcaption>
    </figure>
  </div>
  <SwooshGraphic />
</section>
