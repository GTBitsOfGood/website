<script>
  export let leftMargin = true
  export let rightMargin = true
</script>

<style>
  section {
    display: flex;
    position: relative;
  }
  section > * {
    flex: 1;
  }
  .left-margin {
    margin-left: 12rem;
    position: relative;
  }
  .right-margin {
    margin-right: 12rem;
    position: relative;
  }
</style>

<section>
  <div class={leftMargin ? 'left-margin' : ''}>
    <slot name="left" />
  </div>
  <div class={rightMargin ? 'right-margin' : ''}>
    <slot name="right" />
  </div>
  <slot />
</section>
