<script>
  import { SplitSection, GetInvolvedBtn, DottedAccent } from '../'
  import AnimatedLogo from './AnimatedLogo.svelte'
</script>

<style>
  .big-logo-container {
    height: 78vw;
    width: auto;
    min-width: 50rem;
    min-height: 90rem;
    position: relative;
    overflow: hidden;
  }
  h2 {
    font-size: 4rem;
    font-family: inherit;
    color: var(--text-color);
    line-height: 1.3em;
    margin: 4.8rem 0;
  }
  h2 > strong {
    display: block;
  }
  .text-container {
    margin-left: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 80vh;
  }
  .text-container > img {
    width: 100%;
    max-width: 60rem;
  }
</style>

<SplitSection leftMargin={false} style="margin-bottom: -4rem;">
  <div class="big-logo-container" slot="left">
    <DottedAccent top="8rem" left="65%" width="m" color="red" />
    <DottedAccent top="65%" left="-10%" width="l" height="m" color="yellow" />
  </div>
  <div class="text-container" role="banner" slot="right">
    <DottedAccent top="25vh" left="60%" width="l" height="m" />
    <img src="images/bog-logo.svg" alt="Bits of Good logo" />
    <h2>
      Changing lives
      <strong>one bit at a time.</strong>
    </h2>
    <GetInvolvedBtn large />
  </div>
  <AnimatedLogo />
</SplitSection>
