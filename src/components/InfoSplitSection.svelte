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
    margin: 0 12rem;
  }
  section.reverseWrap {
    flex-wrap: wrap-reverse;
  }
  .left,
  .right {
    flex: 1;
    min-width: 40rem;
  }
  .left {
    margin-right: 6rem;
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
