<script>
  let scrolledBottom = false
  let gameOpen = false

  const onScroll = (event) => {
    let { target, currentTarget: window } = event
    let { documentElement, body } = target
    let scrollY = body.scrollTop || documentElement.scrollTop

    let height = body.scrollHeight || documentElement.scrollHeight
    let fromBottom = height - (scrollY + window.innerHeight)
    scrolledBottom = fromBottom <= 0

    console.log(scrolledBottom)
  }

  const onClickBitbo = () => {
    gameOpen = true
  }

  const onClickCloseGame = () => {
    gameOpen = false
  }
</script>

<svelte:window on:scroll={onScroll} />

<svg
  id="bitbo"
  class:visible={scrolledBottom && !gameOpen}
  width="240"
  height="240"
  viewBox="0 0 240 240"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:click={onClickBitbo}
>
  <rect
    width="240"
    height="240"
    transform="matrix(-1 0 0 1 240 0)"
    fill="#FFBE4D"
  />
  <ellipse
    cx="19.066"
    cy="17.4081"
    rx="19.066"
    ry="17.4081"
    transform="matrix(-1 0 0 1 199.762 97.5337)"
    fill="#2D285C"
  />
  <ellipse
    cx="18.2371"
    cy="17.4081"
    rx="18.2371"
    ry="17.4081"
    transform="matrix(-1 0 0 1 80.3926 97.8833)"
    fill="#2D285C"
  />
  <path
    d="M136.795 124.231C136.795 124.231 132.374 129.205 122.426 129.205C112.479 129.205 108.61 124.231 108.61 124.231"
    stroke="#FE5854"
    stroke-width="8.28958"
    stroke-linecap="round"
  />
</svg>

{#if gameOpen}
  <div id="game-container">
    <iframe
      title="game"
      id="game"
      src="https://onbrand-bitbo.netlify.app/"
      frameBorder="0"
    />
  </div>

  <svg
    id="close-game"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
    on:click={onClickCloseGame}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M6 18 18 6M6 6l12 12"
    />
  </svg>
{/if}

<style>
  #bitbo {
    position: fixed;
    left: 0;
    bottom: 0;
    translate: -8rem 8rem;

    width: 7.5rem;
    height: 7.5rem;
    rotate: 45deg;

    transition: translate 0.2s;

    cursor: pointer;

    filter: drop-shadow(0 0 1px rgb(0 0 0 / 0.4));
  }

  #bitbo.visible {
    translate: -1.5rem 1.5rem;
  }

  #bitbo.visible:hover {
    translate: -1rem 1rem;
  }

  #game-container {
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;

    padding: 2rem;

    width: 100dvw;
    height: 100dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    backdrop-filter: blur(10px);
  }

  #game {
    height: 100%;
    max-width: 100%;
    aspect-ratio: 9 / 16;
    box-shadow: var(--shadow);

    border-radius: 2rem;
  }

  #close-game {
    z-index: 110;
    position: fixed;
    right: 1rem;
    top: 1rem;

    width: 5rem;
    height: 5rem;

    cursor: pointer;

    filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.4));
  }

  @media (max-width: 600px) {
    #bitbo.visible {
      translate: -1rem 1rem;
    }

    #game-container {
      padding: 0rem;
    }

    #game {
      height: 100%;
      width: 100%;
      aspect-ratio: unset;
      border-radius: 0;
    }
  }
</style>
