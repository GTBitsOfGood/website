<script>
  export let menuToggled = false
</script>

<style>
  .container {
    font-size: 16px;
    height: 1.2em;
    width: 1.63em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .stripe-top,
  .stripe-middle,
  .stripe-bottom {
    border-bottom: 0.1em solid var(--primary);
    transition: transform 0.2s, opacity 0.2s;
  }
  .stripe-top {
    transform-origin: top right;
  }
  .stripe-bottom {
    transform-origin: bottom right;
  }
  .menuToggled .stripe-top {
    transform: rotate(-45deg);
  }
  .menuToggled .stripe-bottom {
    transform: rotate(45deg);
  }
  .menuToggled .stripe-middle {
    opacity: 0;
  }
</style>

<div class="container" class:menuToggled>
  <div class="stripe-top" />
  <div class="stripe-middle" />
  <div class="stripe-bottom" />
</div>
