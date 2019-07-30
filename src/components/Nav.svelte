<script>
  export let segment
</script>

<style>
  nav {
    height: var(--nav-height);
    font-size: 18px;
    background: var(--backing-pink-pronounced);
  }

  ul {
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 140rem;
    margin: auto;
    padding: 0 3rem;
  }

  li {
    display: block;
    margin-right: 8rem;
  }

  li:last-of-type {
    margin-left: auto;
    margin-right: 0;
  }

  a {
    color: var(--text-color);
  }

  a:hover,
  a:active {
    color: var(--primary);
  }

  .selected {
    color: var(--primary);
  }
</style>

<nav>
  <ul>
    <li>
      <a class:selected={segment === undefined} href=".">Home</a>
    </li>
    <li>
      <a class:selected={segment === 'about-us'} href="about-us">About Us</a>
    </li>
    <li>
      <a class:selected={segment === 'projects'} href="projects">Projects</a>
    </li>
    <li>
      <a class:selected={segment === 'contact-us'} href="contact-us">
        Contact Us
      </a>
    </li>
  </ul>
</nav>
