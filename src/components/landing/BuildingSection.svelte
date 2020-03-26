<script>
  import { InfoSplitSection, DottedAccent } from '../'
  import content from '@contentful-entry/missionSection/building-section'

  export let parallaxOffset = 0
</script>

<style>
  .artwork {
    position: relative;
    max-width: 60rem;
  }
  .artwork-front {
    --offset: 0;
    transform: translateY(var(--offset));
    position: absolute;
    right: 30%;
    top: -10%;
    width: auto;
    height: 80%;
  }
  .artwork-back {
    width: 100%;
  }
  .text-container {
    position: relative;
  }
</style>

<InfoSplitSection>
  <div slot="left" class="text-container">
    <h2>{content.heading}</h2>
    <p>{content.description.inlineHtml}</p>
    <DottedAccent top="10%" left="-5rem" width="m" height="l" />
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
