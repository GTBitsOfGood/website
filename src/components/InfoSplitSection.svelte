<style>
  section {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    min-height: 60rem;
    margin: 0 auto;
    margin-bottom: 10rem;
    padding: 0 6rem;
    max-width: 130rem;
  }
  .left {
    flex: 1;
    margin-right: 6rem;
  }
  .right {
    flex: 1.2;
  }
  .left,
  .right {
    min-width: 40rem;
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
