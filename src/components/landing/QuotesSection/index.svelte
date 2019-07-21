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
  .swoosh-container {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: flex-end;
  }
  .quote-container {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10rem;
    max-width: 120rem;
    width: 100%;
    height: 60rem;
    margin: 0 auto 25rem auto;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.1);
    background: #fff9e1;
    border-radius: 3rem;
  }

  .text-container {
    width: 50%;
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
    /* quote dash SVG */
    content: url('data:image/svg+xml,\
    <svg width="46" height="30" viewBox="0 0 46 30" fill="none" xmlns="http://www.w3.org/2000/svg">\
      <rect width="46" height="2" y="20" fill="#514B33"/>\
    </svg>\
    ');
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
  <div class="swoosh-container">
    <SwooshGraphic />
  </div>
</section>
