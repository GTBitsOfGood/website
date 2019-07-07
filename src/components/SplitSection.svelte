<script>
  export let leftMargin = true
  export let rightMargin = true
</script>

<style>
  section {
    display: flex;
  }
  section > * {
    flex: 1;
  }
  .left-margin {
    margin-left: 12rem;
  }
  .right-margin {
    margin-right: 12rem;
  }
</style>

<section>
  <div class={leftMargin && 'left-margin'}>
    <slot name="left" />
  </div>
  <div class={rightMargin && 'right-margin'}>
    <slot name="right" />
  </div>
</section>
