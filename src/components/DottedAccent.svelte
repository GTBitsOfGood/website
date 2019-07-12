<script>
  export let width = 's'
  export let height = 's'

  export let left = 0
  export let top = 0

  export let color = 'orange'

  const sizes = {
    s: '18rem',
    m: '24rem',
    l: '30rem',
  }

  const colors = {
    red: 'primary-red',
    yellow: 'primary-yellow',
    orange: 'primary',
  }
</script>

<style>
  div {
    --color: var(--primary);
    background: radial-gradient(var(--color) 25%, transparent 25%);
    background-repeat: repeat;
    background-size: 3rem 3rem;
    position: absolute;
    opacity: 0.1;
    transform: translateZ(-1.5px);
  }
</style>

<div
  style="height: {sizes[height]}; width: {sizes[width]}; top: {top}; left: {left};
  --color: var(--{colors[color]})" />
