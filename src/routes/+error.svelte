<script>
  import { page } from '$app/state';
  let status;
</script>

<style>
  h1,
  p {
    margin: 0 auto;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<h1>{page.error.message}</h1>