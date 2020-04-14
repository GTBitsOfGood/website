<script>
  export let heading = ''
  export let description = {}
  export let cta = ''
  export let ctaScrollToId = ''
  export let image = {}

  const scrollTo = () => {
    const element = document.getElementById(ctaScrollToId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }
</script>

<style>
  svg {
    width: 100%;
    min-width: 1440px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  section {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 100%;
    height: 750px;
    overflow: hidden;
  }
  .content-container {
    margin: 5rem auto;
    width: 100%;
    max-width: var(--content-max-width);
    display: flex;
    justify-content: space-between;
  }
  .text-container {
    padding: 3rem;
    max-width: 80rem;
  }
  .text-container {
    color: white;
  }
  .text-container p {
    font-family: var(--header-font);
    font-size: var(--header-3-desktop);
    color: white;
  }
  button {
    background: white;
    padding: 1.5rem 3rem;
    margin: 1rem 0;
    font-size: var(--body-xl);
    color: var(--primary-red);
    border-radius: 1rem;
    transition-property: box-shadow, transform;
    transition-duration: 0.2s;
  }
  button:hover {
    box-shadow: var(--shadow-hover);
    transform: translateY(-5px);
  }
  img {
    align-self: flex-end;
    height: 40rem;
    margin-right: 5rem;
  }
  @media (max-width: 1000px) {
    .content-container {
      margin-top: 0;
      flex-direction: column;
    }
    .text-container p {
      font-size: var(--body-xl);
    }
    img {
      height: 35rem;
    }
  }
</style>

<section>
  <svg
    width="1440"
    height="700"
    viewBox="0 0 1440 832"
    fill="var(--primary)"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1442 0H0V709.5C77.5 868.5 397.5 874.793 719.5 709.5C869.5 632.5 1247
      477.5 1442 654V0Z"
      fill="url(#header-swoosh)" />
    <defs>
      <linearGradient
        id="header-swoosh"
        x1="-0.499977"
        y1="123"
        x2="1441.5"
        y2="189.5"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#FF795B" />
        <stop offset="1" stop-color="#FEE76C" />
      </linearGradient>
    </defs>
  </svg>
  <div class="content-container">
    <div class="text-container">
      <h1>{heading}</h1>
      <p>
        {@html description.inlineHtml}
      </p>
      {#if cta && ctaScrollToId}
        <button on:click={scrollTo}>{cta}</button>
      {/if}
    </div>
    <img src={image.src} alt={image.alt} />
  </div>
</section>
