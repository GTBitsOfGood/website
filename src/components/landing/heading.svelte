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
  p {
    font-size: 4.2rem;
    color: var(--text-color);
    line-height: 1.3em;
    margin: 4.8rem 0;
  }
  p > strong {
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

<SplitSection leftMargin={false}>
  <div class="big-logo-container" slot="left">
    <DottedAccent top="8rem" left="65%" width="m" color="red" />
    <DottedAccent top="65%" left="-10%" width="l" height="m" color="yellow" />
  </div>
  <div class="text-container" slot="right">
    <DottedAccent top="25vh" left="60%" width="l" height="m" />
    <img src="images/bog-logo.svg" alt="Bits of Good logo" />
    <p>
      Changing lives
      <strong>one bit at a time.</strong>
    </p>
    <GetInvolvedBtn large />
  </div>
  <AnimatedLogo />
</SplitSection>
