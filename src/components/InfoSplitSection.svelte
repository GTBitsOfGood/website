<style>
  section {
    display: flex;
    position: relative;
    flex-wrap: wrap-reverse;
    min-height: 60rem;
    margin: 0 auto;
    margin-bottom: 10rem;
    max-width: 130rem;
  }
  .left {
    flex: 1;
  }
  .right {
    flex: 1.2;
  }
  .left,
  .right {
    width: 100%;
    flex-basis: 40rem;
    margin: 3rem;
  }
  @media (max-width: 500px) {
    .left,
    .right {
      margin: 2rem;
    }
  }
</style>

<section>
  <slot />
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</section>
