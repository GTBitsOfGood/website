<script>
  import Nav from '$lib/components/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { page } from '$app/stores';

  let scrolled = false
  let segment = $page.url.pathname;

  const onScroll = ({ target: { documentElement, body } }) => {
    if (body.scrollTop > 0 || documentElement.scrollTop > 0) {
      scrolled = true
    } else {
      scrolled = false
    }
  }
</script>

<style>
  main {
    margin: 0 auto;
    margin-top: var(--nav-height, 7rem);
    box-sizing: border-box;
  }
</style>

<Nav {segment} {scrolled} />
<main>
  <slot />
</main>
<Footer noTopMargin={segment === '/join'} />

<svelte:window on:scroll={onScroll} />
