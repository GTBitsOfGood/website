<script>
  import { fade } from 'svelte/transition'
  import { backOut } from 'svelte/easing'

  export let images = []

  let alternateImage = false
  let firstImageIndex = 0
  let secondImageIndex = 1

  const setFirstImage = () => {
    firstImageIndex = (firstImageIndex + 2) % images.length
  }

  const setSecondImage = () => {
    secondImageIndex = (secondImageIndex + 2) % images.length
  }

  setInterval(() => {
    alternateImage = !alternateImage
  }, 5000)

  const bounceIn = (node, { duration }) => {
    return {
      duration,
      css: t => {
        const eased = backOut(t)
        return `
          transform: scale(${eased * 0.4 + 0.6});
          transform-origin: 25% 50%;
          opacity: ${eased};
        `
      },
    }
  }
</script>

<style>
  svg {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 1100px) {
    svg {
      opacity: 0.6;
    }
  }
</style>

<svg
  width="1440"
  height="1300"
  viewBox="0 0 1440 1300"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  {#if !alternateImage}
    <image
      in:bounceIn={{ duration: 800 }}
      out:fade={{ duration: 600 }}
      on:outroend={setFirstImage}
      width="900"
      height="890"
      xlink:href={images[firstImageIndex].src} />
  {/if}
  {#if alternateImage}
    <image
      in:bounceIn={{ duration: 800 }}
      out:fade={{ duration: 600 }}
      on:outroend={setSecondImage}
      width="900"
      height="890"
      xlink:href={images[secondImageIndex].src} />
  {/if}
  <rect
    y="0.384155"
    width="711.975"
    height="1272.3"
    fill="url(#paint0_linear)" />
  <defs>
    <linearGradient
      id="paint0_linear"
      x1="657.168"
      y1="48.5534"
      x2="55.7796"
      y2="1208.1"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#FF2847" stop-opacity="0.7" />
      <stop offset="0.541454" stop-color="#FE924E" />
      <stop offset="1" stop-color="#FFBE4D" />
    </linearGradient>
  </defs>
  <path
    d="M1439.5 0H0V974.736C114.556 944.305 317.769 828.929 394.016
    743.402C470.485 657.625 524.624 538.013 524.624 408.871C524.624 335.96
    491.742 240.793 394.016 240.793C394.016 240.793 262.712 240.793 262.712
    369.973V151.507C262.712 151.507 316.814 106.525 394.033 105.267C471.253
    104.01 552.13 126.478 608.237 210.232C608.237 210.232 665.693 281.794
    673.707 405.672C681.721 529.55 649.325 706.285 524.624 883.028C464.169
    968.711 305.285 1126.2 0 1299.43V1300H1439.5V0Z"
    fill="url(#backing-gradient)" />
  <path
    d="M521.287 366.324C524.395 426.026 458.384 496.246 393.427 496.245C358.403
    496.245 324.814 482.557 300.049 458.192C275.283 433.827 261.37 400.782
    261.369 366.324C261.372 361.742 261.618 357.162 262.107 352.605L261.369
    0H137.632V345.076C137.632 416.296 161.629 486.245 208.74 540.32C262.072
    601.532 340.948 647.318 483.164 602.346C483.164 602.346 538.443 485.594
    521.287 366.324Z"
    fill="#FEF2EA" />
  <defs>
    <linearGradient
      id="backing-gradient"
      x1="1439"
      y1="-5.17919e-05"
      x2="1280.5"
      y2="1044"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="var(--backing-pink-pronounced)" />
      <stop offset="1" stop-color="var(--backing-pink)" />
    </linearGradient>
  </defs>
</svg>
