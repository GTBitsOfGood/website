<script>
  import content from '@contentful-entry/slogan'
  import { GetInvolvedBtn, DottedAccent } from '../'
  import BigLogo from './BigLogo.svelte'
</script>

<style>
  .banner {
    display: flex;
    margin-bottom: -15rem;
  }
  .big-logo-accents {
    flex: 1;
    height: 78vw;
    width: auto;
    min-width: 50rem;
    min-height: 90rem;
    position: relative;
    overflow: hidden;
  }
  h2 {
    font-size: 40px;
    font-family: inherit;
    color: var(--text-color);
    line-height: 1.3em;
    margin: 4.8rem 0;
  }
  h2 > strong {
    display: block;
  }
  .text-container {
    flex: 1;
    margin: 0 12rem;
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

  @media (max-width: 1100px) {
    .big-logo-accents {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .text-container {
      margin: 3rem;
    }
    h2 {
      font-size: 30px;
    }
  }
</style>

<div class="banner" role="banner">
  <BigLogo />
  <div class="big-logo-accents">
    <DottedAccent top="8rem" left="65%" width="m" color="red" />
    <DottedAccent top="65%" left="-10%" width="l" height="m" color="yellow" />
  </div>
  <div class="text-container" role="banner">
    <DottedAccent top="25vh" left="60%" width="l" height="m" />
    <img src="images/bog-logo.svg" alt="Bits of Good logo" />
    <h2>
      {content.line1}
      <strong>{content.line2}</strong>
    </h2>
    <GetInvolvedBtn large />
  </div>
</div>
