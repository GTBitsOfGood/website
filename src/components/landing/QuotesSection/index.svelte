<script>
  import SwooshGraphicFront from './SwooshGraphicFront.svelte'
  import SwooshGraphicBack from './SwooshGraphicBack.svelte'
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
    max-width: 120rem;
    width: 100%;
    height: 50rem;
    margin: 0 auto 25rem auto;
    box-shadow: 0px 1rem 2rem rgba(0, 0, 0, 0.1);
    background: #fff9e1;
    border-radius: 3rem;
  }
</style>

<section>
  <div class="quote-container" />
  <div class="swoosh-container">
    <SwooshGraphicBack />
    <SwooshGraphicFront />
  </div>
</section>
