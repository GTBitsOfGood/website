<script>
  import content from '@contentful-entry/joinPage'
</script>

<style>
  section.heading {
    position: relative;
    background: linear-gradient(
      130deg,
      var(--primary-red) 24.55%,
      var(--primary-yellow) 85.2%
    );
    max-width: 100%;
  }

  img.backing-image-left {
    position: absolute;
    bottom: 0;
    left: 10%;
  }

  img.backing-image-right {
    position: absolute;
    bottom: 150px;
    right: 0;
  }

  @media (max-width: 1400px) {
    img.backing-image-right {
      right: -100px;
    }
    hgroup {
      padding-bottom: 50px;
    }
  }

  hgroup {
    margin: auto;
    padding-top: 50px;
    text-align: center;
    letter-spacing: 0.2em;
  }
  hgroup h1 {
    font-size: 72px;
    color: white;
  }
  hgroup h2 {
    font-size: 24px;
    text-transform: uppercase;
  }

  :global(p) {
    font-weight: 300;
  }

  svg.bottom-swoosh-overlay {
    position: relative;
    width: 100%;
    height: 20vw;
    max-height: 300px;
    margin-bottom: -10px;
    z-index: 1;
  }
</style>

<section class="heading">
  <hgroup>
    <h1>Join Us!</h1>
    <h2>Spring 2020</h2>
  </hgroup>

  <img
    class="backing-image-left"
    src={content.headingImageLeft.src}
    alt={content.headingImageLeft.alt} />
  <img
    class="backing-image-right"
    src={content.headingImageRight.src}
    alt={content.headingImageRight.alt} />

  <svg
    class="bottom-swoosh-overlay"
    width="1440"
    height="255"
    viewBox="0 0 1440 255"
    fill="none"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1440 255H0V0C77.5 109.112 392 214.819 714 101.388C864 48.5474 1245
      6.87843 1440 128V255Z"
      fill="white" />
  </svg>
</section>
