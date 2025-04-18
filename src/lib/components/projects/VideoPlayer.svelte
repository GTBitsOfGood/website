<script>
  export let themeColor = ''
  export let videoUrl = ''
</script>

<style>
  section {
    display: flex;
    justify-content: center;
    padding: 100px 0;
    overflow: hidden;
    position: relative;
  }
  iframe {
    max-width: 100%;
    z-index: 1;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  }
  img {
    position: absolute;
  }
  img.left {
    top: -65px;
    left: 0;
  }
  img.right {
    right: 0;
    bottom: -65px;
  }
  @media (max-width: 600px) {
    iframe {
      height: 300px;
    }
  }
</style>

{#if videoUrl}
  <div class="container" style="background: {themeColor}">
    <section>
      <img class="left" src="/images/geometric-pattern.svg" alt="" />
      <iframe
        title="YouTube player"
        width="700"
        height="450"
        src={videoUrl}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture"
        allowfullscreen />
      <img class="right" src="/images/geometric-pattern.svg" alt="" />
    </section>
  </div>
{/if}
