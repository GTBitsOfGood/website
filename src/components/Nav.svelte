<script>
  export let segment
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    height: var(--nav-height);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255, 62, 0);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">Home</a>
    </li>
    <li>
      <a class={segment === 'about-us' ? 'selected' : ''} href="about-us">
        About Us
      </a>
    </li>
    <li>
      <a class={segment === 'projects' ? 'selected' : ''} href="projects">
        Projects
      </a>
    </li>
    <li>
      <a class={segment === 'contact-us' ? 'selected' : ''} href="contact-us">
        Contact Us
      </a>
    </li>
  </ul>
</nav>
