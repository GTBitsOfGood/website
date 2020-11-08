<script>
  import content from '@contentful-entry/joinPage'
</script>

<style>
  section {
    position: relative;
    background: linear-gradient(
      130deg,
      var(--primary-red) 24.55%,
      var(--primary-yellow) 85.2%
    );
    max-width: 100%;
    overflow: hidden;
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

  svg.mobile-vectors {
    display: none;
  }

  @media (max-width: 1400px) {
    img.backing-image-right {
      right: -100px;
    }
    hgroup {
      padding-bottom: 50px;
    }
  }

  @media (max-width: 1000px) {
    img.backing-image-left,
    img.backing-image-right {
      display: none;
    }
    svg.mobile-vectors {
      display: initial;
      position: absolute;
      height: auto;
      width: 22vw;
    }

    svg.mobile-vectors.left {
      top: 20%;
      left: 0;
    }

    svg.mobile-vectors.right {
      top: 30%;
      right: 0;
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

  @media (max-width: 700px) {
    hgroup h1 {
      font-size: 48px;
    }

    hgroup h2 {
      font-size: 20px;
    }
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

<section>
  <hgroup>
    <h1>Join Us!</h1>
    <h2>Spring 2021</h2>
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
    class="mobile-vectors left"
    width="106"
    height="57"
    viewBox="0 0 106 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M105.111 42C90.697 52.221 52.9751 67.113 17.3976 44.913C13.0031 43.0221
      2.14003 40.3749 -6.1567 44.913C-8.26604 45.884 -13.1878 47.2434 -16.0003
      44.913"
      stroke="#FFD528" />
    <rect
      x="44.7041"
      width="25.012"
      height="25.012"
      transform="rotate(81 44.7041 0)"
      fill="#FFAE79" />
  </svg>

  <svg
    class="mobile-vectors right"
    width="101"
    height="67"
    viewBox="0 0 101 67"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.622681 30.6667C15.0365 40.8878 52.7585 55.7798 88.336
      33.5797C92.7304 31.6888 103.593 29.0416 111.89 33.5797C114 34.5507 118.921
      35.9101 121.734 33.5797"
      stroke="#FFD528" />
    <rect
      x="40.1143"
      y="0.188232"
      width="15.9734"
      height="15.9734"
      transform="rotate(4 40.1143 0.188232)"
      fill="#FF8988" />
    <rect
      x="71.2296"
      y="52.7039"
      width="10.629"
      height="10.629"
      transform="rotate(23 71.2296 52.7039)"
      fill="#FFB55E" />
  </svg>

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
