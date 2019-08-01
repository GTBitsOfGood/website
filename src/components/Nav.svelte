<script>
  import GetInvolvedBtn from './GetInvolvedBtn.svelte'
  import MenuIcon from './MenuIcon.svelte'

  let menuToggled = false

  export let segment
  export let scrolled = true
</script>

<style>
  nav {
    position: relative;
    height: var(--nav-height);
    font-size: 18px;
    background: var(--backing-pink-pronounced);
    transition: box-shadow 0.2s;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  .shadow {
    box-shadow: var(--shadow);
  }

  ul {
    display: inherit;
    align-items: inherit;
    flex: 1;
    height: 100%;
    max-width: 140rem;
    margin: auto;
    padding: 0 3rem;
  }

  li {
    display: block;
    margin-right: 6rem;
    color: var(--text-color);
  }

  li.align-right {
    margin-left: auto;
    margin-right: 0;
    color: var(--primary);
  }

  a {
    color: inherit;
  }

  li.align-right > a {
    margin-left: 4rem;
  }

  a:hover,
  a:active {
    color: var(--primary);
  }

  ul:not(.menu-toggled) > li.align-right > a:hover,
  ul:not(.menu-toggled) > li.align-right > a:active {
    color: var(--primary-yellow);
  }

  .mobile-content {
    display: none;
    align-items: inherit;
    padding: 0 2rem;
    flex: 1;
  }

  .mobile-dropdown-toggle {
    display: none;
    margin-left: auto;
    background: none;
  }

  @media (max-width: 45rem) {
    :root {
      --nav-height: 5rem;
    }
    .mobile-content {
      display: inherit;
    }
    .mobile-dropdown-toggle {
      display: initial;
    }
    ul {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--backing-pink);
      transition: height 0.3s, opacity 0.4s;
      opacity: 0;
      z-index: -1;
    }
    ul.menuToggled {
      height: 100vh;
      opacity: 1;
    }
    a {
      font-size: 2rem;
      margin: 1rem;
    }
    li,
    li.align-right {
      margin: 2rem;
    }
    li.align-right > a {
      color: var(--text-color);
    }
    li.align-right > a:hover,
    li.align-right > a:active {
      color: var(--primary);
    }
  }

  .selected {
    color: var(--primary);
  }
</style>

<nav class:shadow={scrolled}>
  <ul class:menuToggled on:click={() => (menuToggled = !menuToggled)}>
    <li>
      <a class:selected={segment === undefined} href=".">Home</a>
    </li>
    <li>
      <a class:selected={segment === 'about-us'} href="about-us">About Us</a>
    </li>
    <li>
      <a class:selected={segment === 'projects'} href="projects">Projects</a>
    </li>
    <li class="align-right">
      <GetInvolvedBtn
        hide={menuToggled || (!scrolled && segment === undefined)} />
      <a class:selected={segment === 'contact-us'} href="contact-us">
        Contact Us
      </a>
    </li>
  </ul>
  <div class="mobile-content">
    <GetInvolvedBtn small />
    <button
      class="mobile-dropdown-toggle"
      on:click={() => (menuToggled = !menuToggled)}>
      <MenuIcon {menuToggled} />
    </button>
  </div>
</nav>
