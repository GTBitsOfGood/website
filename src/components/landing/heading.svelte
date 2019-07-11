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
  .big-logo-container svg {
    z-index: 1;
    width: 100%;
    height: auto;
    min-width: 50rem;
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
    <DottedAccent top="65%" left="-30%" width="l" height="m" color="yellow" />
    <!-- <svg
      width="700"
      height="1350"
      viewBox="0 0 665 1300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M514.764 408.871C514.764 538.013 460.625 657.625 384.156
        743.402C307.687 829.179 103.51 944.978 -10.8594 975V1300C295.079 1126.54
        454.244 968.805 514.764 883.028C639.466 706.285 671.861 529.55 663.848
        405.672C655.834 281.794 598.378 210.232 598.378 210.232C542.271 126.478
        461.394 104.01 384.174 105.267C306.954 106.525 252.853 151.507 252.853
        151.507V369.973C252.853 240.793 384.156 240.793 384.156 240.793C481.883
        240.793 514.764 335.96 514.764 408.871Z"
        fill="url(#paint0_linear)" />
      <path
        d="M511.428 366.324C514.536 426.026 448.525 496.246 383.568
        496.245C348.544 496.245 314.955 482.557 290.189 458.192C265.424 433.827
        251.51 400.782 251.51 366.324C251.512 361.742 251.759 357.162 252.247
        352.605L251.51 0H127.772V345.076C127.772 416.296 151.77 486.245 198.881
        540.32C252.213 601.532 331.088 647.318 473.305 602.346C473.305 602.346
        528.583 485.594 511.428 366.324Z"
        fill="#FEF2EA" />
      <path
        d="M340.21 784.478C247.284 873.591 52.8563 960.639 -11
        980.812V940.783C133.487 912.191 283.819 824.984 340.21 784.478Z"
        fill="url(#paint1_linear)" />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="479.5"
          y1="220.161"
          x2="200.724"
          y2="999.304"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="var(--primary-red)" />
          <stop offset="1" stop-color="var(--primary-yellow)" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="-9.57039"
          y1="960.798"
          x2="340.21"
          y2="806.399"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#EAB95D" />
          <stop offset="1" stop-color="#E3A564" />
        </linearGradient>
      </defs>
    </svg> -->
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
