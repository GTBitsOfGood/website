<script>
  export let width = 's'
  export let height = 's'

  export let top = 'initial'
  export let right = 'initial'
  export let bottom = 'initial'
  export let left = 'initial'

  export let color = 'orange'

  export let opaque = false

  const sizes = {
    s: '18rem',
    m: '24rem',
    l: '30rem',
    xl: '36rem',
  }

  const colors = {
    red: 'primary-red',
    yellow: 'primary-yellow',
    orange: 'primary',
  }

  $: colorString = colors[color] ? `var(--${colors[color]})` : color
</script>

<style>
  .dotted-accent {
    --color: var(--primary);
    position: absolute;
    background: radial-gradient(var(--color) 25%, transparent 25%);
    background-repeat: repeat;
    background-size: 3rem 3rem;
    opacity: 0.1;
  }
  .opaque {
    opacity: 1;
  }
</style>

<div
  class="dotted-accent"
  class:opaque
  style="height: {sizes[height]}; width: {sizes[width]}; top: {top}; right: {right};
  bottom: {bottom}; left: {left}; --color: {colorString}" />
