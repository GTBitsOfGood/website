<script>
  import SwooshGraphic from './SwooshGraphic.svelte'

  let quote =
    'Bits of good is freaking amazing and I love it so much! The community especially.'
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
  .quote-container::after {
    content: '';
    background-image: url('/icons/quote-symbol.svg');
    background-size: 7rem 7rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 7rem;
    left: 10rem;
    right: 0;
    bottom: 0;
  }

  p {
    font-weight: 400;
    font-size: 40px;
    letter-spacing: 0.05em;
    width: 50%;
  }
</style>

<section>
  <div class="quote-container">
    <p>{quote}</p>
  </div>
  <div class="swoosh-container">
    <SwooshGraphic />
  </div>
</section>
