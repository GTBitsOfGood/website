<script>
  import GetInvolvedBtn from './GetInvolvedBtn.svelte'
  import MenuIcon from './MenuIcon.svelte'

  let mobileNavToggled = false

  export let segment
  export let scrolled = true
</script>

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
    max-width: 140rem;
    margin: auto;
    padding: 0 3rem;
  }

  li {
    display: block;
    margin-right: 6rem;
    color: var(--text-color);
  }

  li:last-of-type {
    margin-right: 0;
  }

  li.get-involved-btn {
    margin-left: auto;
    margin-right: 4rem;
  }

  a {
    color: inherit;
  }

  a:hover,
  a:active {
    color: var(--primary);
  }

  a.contact-us {
    color: var(--primary);
  }

  a.contact-us:hover,
  a.contact-us:active {
    color: var(--primary-yellow);
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

  @media (max-width: 48rem) {
    :root {
      --nav-height: 5rem;
    }
    .mobile-content {
      display: inherit;
    }
    ul {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 0; /* hide until mobile nav toggled */
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: var(--backing-pink);
      transition: height 0.3s, opacity 0.4s;
      opacity: 0;
      z-index: -1;
    }

    ul.mobileNavToggled {
      height: 100vh;
      opacity: 1;
    }

    a {
      font-size: 3rem;
      padding: 3rem;
    }

    li {
      margin: 0;
      padding: 2rem;
    }

    a.contact-us {
      color: inherit;
    }

    a.contact-us:hover,
    a.contact-us:active {
      color: var(--primary);
    }

    li.get-involved-btn {
      display: none;
    }
  }

  .selected {
    color: var(--primary);
  }
</style>

<nav class:shadow={scrolled}>
  <ul
    class:mobileNavToggled
    on:click={() => {
      if (mobileNavToggled) mobileNavToggled = false
    }}>
    <li>
      <a class:selected={segment === undefined} href=".">Home</a>
    </li>
    <li>
      <a class:selected={segment === 'about-us'} href="about-us">About Us</a>
    </li>
    <li>
      <a class:selected={segment === 'projects'} href="projects">Projects</a>
    </li>
    <li class="get-involved-btn">
      <GetInvolvedBtn hide={!scrolled && segment === undefined} />
    </li>
    <li>
      <a
        class:selected={segment === 'contact-us'}
        class="contact-us"
        href="https://www.facebook.com/GTBitsOfGood">
        Contact Us
      </a>
    </li>
  </ul>
  <div class="mobile-content">
    <GetInvolvedBtn small />
    <button
      class="mobile-dropdown-toggle"
      on:click={() => (mobileNavToggled = !mobileNavToggled)}>
      <MenuIcon menuToggled={mobileNavToggled} />
    </button>
  </div>
</nav>
