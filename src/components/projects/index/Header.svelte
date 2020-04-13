<script>
  import HeaderSwoosh from './HeaderSwoosh'

  const content = {
      heading: 'Our Projects',
      description: {
          html: 'We are a student-led organization at'
          + ' Georgia Tech that develops apps for non-profits'
          + ' in Atlanta and promotes social good.'
      }
  }
</script>

<style>
  section {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 750px;
    overflow: hidden;
  }
  .content-container {
    margin: 5rem auto;
    width: 100%;
    max-width: 120rem;
    display: flex;
    justify-content: space-between;
  }
  .text-container {
    padding: 3rem;
    max-width: 65rem;
  }
  .text-container {
    color: white;
  }
  .text-container > :global(p) {
    font-size: var(--body-xl);
    color: black;
  }

  h1 {
    color: white;
    margin-bottom: 0;
  }

  p {
    line-height: 1.75;
  }

  img {
    align-self: flex-end;
    height: 40rem;
    margin: 0 5rem 5rem 0;
  }
  @media (max-width: 940px) {
    .content-container {
      margin-top: 0;
      flex-direction: column;
    }
    .text-container > :global(p) {
      font-size: var(--body-xl);
    }
    img {
      height: 35rem;
      margin-bottom: 0;
    }
  }

  
</style>

<section>
  <HeaderSwoosh />
  <div class="content-container">
    <div class="text-container">
      <h1>{content.heading}</h1>
      <p>{@html content.description.html}</p>
    </div>
    <img
      src="/images/projects-index.svg"
      alt="person gesturing to content" />
  </div>
</section>
