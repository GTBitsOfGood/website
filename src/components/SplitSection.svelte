<script>
  export let leftMargin = true
  export let rightMargin = true
  export let style = ''
</script>

<style>
  section {
    display: flex;
    position: relative;
    margin-bottom: 4rem;
  }
  section > * {
    flex: 1;
    position: relative;
  }
  .left-margin {
    margin-left: 12rem;
  }
  .right-margin {
    margin-right: 12rem;
  }
</style>

<section {style}>
  <slot />
  <div class:left-margin={leftMargin}>
    <slot name="left" />
  </div>
  <div class:right-margin={rightMargin}>
    <slot name="right" />
  </div>
</section>
