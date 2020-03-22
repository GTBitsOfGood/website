<script>
  import content from '@contentful-entry/joinPage'
  import { removeWrapperPTag } from '../../contentHelpers'
</script>

<style>
  section {
    position: relative;
    margin: 80px auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section svg.squares-icon {
    margin-bottom: 30px;
  }
  section :global(p) {
    font-size: 18px;
    line-height: 1.8em;
    text-align: center;
    max-width: 500px;
  }

  a.newsletter {
    margin: 15px 0;
    border-radius: 10px;
    font-weight: normal;
    letter-spacing: inherit;
    color: #333;
    font-size: 18px;
    padding: 10px 20px;
    border: 2px solid var(--primary-red);
    transition-property: transform, background-color, color, box-shadow;
    transition-duration: 0.2s;
  }
  a.newsletter:hover {
    transform: translateY(-10px);
    background-color: var(--primary-red);
    color: white;
    box-shadow: var(--shadow-hover);
  }

  img.backing-image-left {
    display: none;
    position: absolute;
    left: 50px;
    bottom: -150px;
    height: 150px;
    width: auto;
    z-index: -1;
  }

  img.backing-image-right {
    display: none;
    position: absolute;
    right: 0;
    bottom: -115px;
    width: 150px;
    height: auto;
  }

  svg.bottom-swoosh {
    margin-bottom: -10px;
    width: 100%;
    height: 20vw;
    max-height: 300px;
  }

  @media (max-width: 819px) {
    img.backing-image-left,
    img.backing-image-right {
      display: initial;
    }
  }
</style>

<section>
  <svg
    class="squares-icon"
    width="50"
    height="60"
    viewBox="0 0 50 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <rect
      x="1.80618"
      y="31.5"
      width="25.8926"
      height="25.8926"
      transform="rotate(4 1.80618 31.5)"
      fill="#FF8988" />
    <rect
      x="33.9332"
      y="0.21582"
      width="17.4544"
      height="17.4544"
      transform="rotate(23 33.9332 0.21582)"
      fill="#FFB55E" />
  </svg>
  {@html content.footerText.html}
  <a class="newsletter" href={content.newsletterUrl}>{content.newsletterCta}</a>

  <img
    class="backing-image-left"
    src={content.headingImageLeft.src}
    alt={content.headingImageLeft.alt} />
  <img
    class="backing-image-right"
    src={content.headingImageRight.src}
    alt={content.headingImageRight.alt} />
</section>

<svg
  class="bottom-swoosh"
  width="1440"
  height="274"
  viewBox="0 0 1440 274"
  fill="var(--primary)"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M-1 274H1439.5V22C1298.5 -19.5 994 1.5 710 66.5C554.26 102.145 197.066
    111.732 -1 1.5V274Z"
    fill="url(#paint0_linear)" />
  <defs>
    <linearGradient
      id="paint0_linear"
      x1="1447.51"
      y1="412.181"
      x2="-12.067"
      y2="302.711"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF8A89" />
      <stop offset="1" stop-color="#FEC96C" />
    </linearGradient>
  </defs>
</svg>
