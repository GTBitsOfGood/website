<script>
  import { page } from '$app/stores';
  import GetInvolvedBtn from './GetInvolvedBtn.svelte'
  import MenuIcon from './MenuIcon.svelte'
  import NavDropdown from './NavDropdown.svelte'

  export let segment
  export let scrolled = true
  let mobileNavToggled = false
  let currentPath

  $: currentPath = $page.url.pathname;

  // Close mobile nav on route change
  $: if ($page.url) {
    mobileNavToggled = false;
  }
</script>

<nav class:shadow={scrolled}>
  <ul class:mobileNavToggled>
    <div class="mobile-wrapper">
      <li>
        <a
          class:selected={segment === undefined || segment === '/' || currentPath === '/'}
          href="/">Home</a
        >
      </li>
      <li>
        <a class:selected={currentPath === '/about'} href="/about">About Us</a>
      </li>
      <li>
        <a class:selected={currentPath === '/about/roles'} href="/about/roles"
          >Roles</a
        >
      </li>
      <!-- In case we ever need a dropdown -->
      <!-- <NavDropdown href="about" mobile={mobileNavToggled} shadow={scrolled}>
        <span slot="label">About Us</span>
        <span slot="submenu" class="submenu">
          <li>
            <a href="about" class:selected={currentPath === '/about'}>About Us</a>
          </li>
          <li>
            <a href="about/roles" class:selected={currentPath === '/about/roles'}>Roles</a>
          </li>
        </span>
      </NavDropdown> -->
      <li>
        <a class:selected={currentPath === '/projects'} href="/projects">Projects</a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://bitsofgood.substack.com/"
        >
          Blog
        </a>
      </li>
      <li>
        <a class:selected={currentPath === '/contact'} href="/contact">Contact Us</a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://donorbox.org/bits-of-good"
        >
          Donate
        </a>
      </li>
      <li class="get-involved-btn">
        <GetInvolvedBtn
          hide={(!scrolled && currentPath === '/') || currentPath === '/join'}
        />
      </li>
    </div>
  </ul>
  <div class="mobile-content">
    <GetInvolvedBtn small />
    <button
      class="mobile-dropdown-toggle"
      on:click={() => (mobileNavToggled = !mobileNavToggled)}
    >
      <MenuIcon menuToggled={mobileNavToggled} />
    </button>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    height: var(--nav-height);
    font-size: 18px;
    background: var(--backing-pink-pronounced);
    transition: box-shadow 0.2s;
    z-index: 5;
  }

  .shadow {
    box-shadow: var(--shadow);
  }

  ul {
    display: inherit;
    align-items: inherit;
    flex: 1;
    height: 100%;
    max-width: var(--content-max-width);
    margin: auto;
    padding: 0 3rem;
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 6rem;
    color: var(--text-color);
    border-color: var(--text-color);
    height: 100%;
  }

  li.get-involved-btn {
    margin-left: auto;
    margin-right: 0;
  }

  a {
    color: inherit;
  }

  a:hover,
  a:active,
  .selected {
    color: var(--primary);
    border-color: var(--primary);
  }

  .mobile-content {
    display: none;
    align-items: inherit;
    padding: 0 2rem;
    flex: 1;
  }

  .mobile-dropdown-toggle {
    margin-left: auto;
    background: none;
  }

  .submenu > li {
    margin: 0;
    padding: 1rem;
  }

  .mobile-wrapper {
    display: inherit;
    align-items: inherit;
    flex: 1;
    height: 100%;
  }

  @media (max-width: 800px) {
    :root {
      --nav-height: 5rem;
    }
    .mobile-content {
      display: inherit;
    }
    ul {
      position: fixed;
      top: var(--nav-height);
      left: 0;
      right: 0;
      height: 0; /* hide until mobile nav toggled */
      overflow: hidden;
      background: var(--backing-pink);
      transition:
        height 0.3s,
        opacity 0.4s;
      opacity: 0;
      z-index: -1;
      padding: 0;
    }

    .mobile-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      overflow-y: auto;
      width: 100%;
      padding: 6rem;
    }

    ul.mobileNavToggled {
      height: calc(100vh - var(--nav-height));
      opacity: 1;
    }

    a {
      font-size: 3rem;
      padding: 3rem;
      justify-content: space-between;
    }

    li {
      width: 100%;
      margin: 0;
      padding: 2rem;
      height: auto;
      border-bottom: 2px solid var(--backing-pink-pronounced);
    }

    li.get-involved-btn {
      display: none;
    }

    .submenu > li,
    .submenu > li > a {
      border: 0;
      font-size: 2rem;
      padding: 0.5rem;
    }
  }
</style>
