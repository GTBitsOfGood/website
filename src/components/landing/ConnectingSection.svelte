<script>
  import InfoSplitSection from '../InfoSplitSection.svelte'
  import content from '@contentful-entry/missionSection/connecting-section'

  export let parallaxOffset = 0
</script>

<style>
  a {
    font-size: 24px;
  }
  .artwork {
    position: relative;
    max-width: 60rem;
  }
  .artwork-front {
    --offset: 0;
    transform: translateY(var(--offset));
    position: absolute;
    right: 10%;
    top: 0;
    width: auto;
    height: 60%;
  }
  .artwork-back {
    margin-top: 30%;
    width: 100%;
  }
</style>

<InfoSplitSection>
  <div slot="left" class="text-container">
    <h2>{content.heading}</h2>
    <p>{content.description.inlineHtml}</p>
    <a href="about">More about our mission</a>
  </div>
  <div class="artwork" slot="right">
    <img
      src={content.landingImage.src}
      alt={content.landingImage.alt}
      style={`--offset: ${parallaxOffset}px`}
      class="artwork-front" />
    <img src={content.landingImageBacking.src} alt="" class="artwork-back" />
  </div>
</InfoSplitSection>
