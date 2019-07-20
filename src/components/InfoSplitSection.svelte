<script>
  export let leftMargin = true
  export let rightMargin = true
  export let reverseWrap = true
  export let style = ''
</script>

<style>
  section {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    height: 100vh;
    max-height: 100rem;
    margin-bottom: 4rem;
    margin: 0 auto;
    padding: 0 6rem;
    max-width: 130rem;
  }
  section.reverseWrap {
    flex-wrap: wrap-reverse;
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

<section {style} class:reverseWrap>
  <slot />
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</section>
