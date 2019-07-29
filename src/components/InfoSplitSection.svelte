<style>
  section {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap-reverse;
    min-height: 60rem;
    margin: 0 auto;
    max-width: 130rem;
  }
  .left {
    max-width: 50rem;
  }
  .left,
  .right {
    flex: 1;
    width: 100%;
    flex-basis: 40rem;
    margin: 3rem;
  }
  section :global(p) {
    font-size: 26px;
  }
  section :global(h2) {
    font-size: 72px;
  }
  @media (max-width: 500px) {
    .left,
    .right {
      margin: 2rem;
    }
    section :global(p) {
      font-size: 20px;
    }
    section :global(h2) {
      font-size: 48px;
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
