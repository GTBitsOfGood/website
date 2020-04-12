<script>
  import content from '@contentful-entry/homeHeader'
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

  h1 {
    margin: 0;
    width: 100%;
    max-width: 60rem;
  }
  h1 > img {
    width: 100%;
  }

  h2 {
    font-size: 40px;
    font-weight: normal;
    font-family: inherit;
    color: var(--text-color);
    line-height: 1.3em;
    margin-top: 3.5rem;
    margin-bottom: 4.8rem;
  }
  h2 > strong {
    display: block;
  }

  .text-container {
    flex: 1;
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 80vh;
    min-height: 700px;
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 1100px) {
    .big-logo-accents {
      display: none;
    }
    .text-container {
      margin-top: 50px;
    }
    .banner {
      margin-bottom: 50px;
    }
  }
  @media (max-width: 600px) {
    .text-container {
      padding: 3rem;
    }
    .banner {
      margin-bottom: 0;
    }
    h2 {
      font-size: 30px;
    }
  }
</style>

<div class="banner" role="banner">
  <BigLogo images={content.imageCarousel} />
  <div class="big-logo-accents">
    <DottedAccent top="8rem" left="65%" width="m" color="red" />
    <DottedAccent top="65%" left="-10%" width="l" height="m" color="yellow" />
  </div>
  <div class="text-container">
    <DottedAccent top="25vh" left="60%" width="l" height="m" />
    <h1>
      <img src={content.logo.src} alt={content.logo.alt} />
      </h1>
    <h2>
      {content.slogan.line1}
      <strong>{content.slogan.line2}</strong>
    </h2>
    <GetInvolvedBtn large />
  </div>
</div>
