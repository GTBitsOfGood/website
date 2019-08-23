<script>
  import milestones from '@contentful-entries/milestone'
  import FlagIcon from './MilestoneFlagIcon'
  import ArrowIcon from '../ArrowIcon'

  let currentIndex = 0

  $: next = currentIndex === milestones.length - 1 ? 0 : currentIndex + 1
  $: prev = currentIndex === 0 ? milestones.length - 1 : currentIndex - 1
</script>

<style>
  section {
    padding: 3rem;
    padding-bottom: 5rem;
  }
  .scroll-container {
    --offset-index: 0;
    --milestone-width: 30rem;
    display: flex;
    height: 50rem;
    max-height: calc(100vh - var(--nav-height));
    overflow-x: visible;
    position: relative;
    left: calc(-1 * var(--milestone-width) * var(--offset-index));
    transition: left 0.3s;
    margin-top: 5rem;
  }
  .scroll-container::before {
    content: '';
    z-index: -1;
    position: absolute;
    left: calc(var(--milestone-width) / 2);
    top: 10%;
    height: 80%;
    width: calc(var(--milestone-width) * (var(--milestone-count) - 1));
    background: url('/images/milestone-dotted-line.svg');
    background-size: 128rem 100%;
    background-repeat: repeat-x;
  }
  .milestone {
    flex: 1;
    min-width: var(--milestone-width);
    max-width: 100%;
    align-self: center;

    display: flex;
    justify-content: center;
  }
  .milestone.selected,
  .milestone.position-low.selected {
    align-self: flex-start;
  }
  .milestone.position-low {
    align-self: flex-end;
  }
  .milestone.position-high {
    align-self: flex-start;
  }
  .milestone-content {
    background-color: var(--backing-pink);
    width: 50%;
    transition-property: box-shadow, transform;
    transition-duration: 0.3s;
  }
  .selected .milestone-content {
    width: 100%;
    box-shadow: var(--shadow-hover);
    align-self: center;
    border-radius: 1rem;
    padding: 2rem;
    transform: scale(1.1);
  }
  h3 {
    font-size: var(--small-header-size);
    text-align: center;
  }
  h4 {
    text-align: center;
    color: white;
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
  }
  .time-banner {
    padding: 0.5rem 1rem;
    background-color: var(--primary);
  }
  h4.yellow > .time-banner {
    background-color: var(--primary-yellow);
  }
  h4.red > .time-banner {
    background-color: var(--primary-red);
  }
  h4.yellow > :global(svg) {
    fill: var(--primary-yellow);
  }
  h4.red > :global(svg) {
    fill: var(--primary-red);
  }
  .heading-container {
    display: flex;
    justify-content: center;
  }
  button :global(svg) {
    width: 50px;
    height: 50px;
  }
</style>

<section>
  <h2>Milestones</h2>
  <div
    class="scroll-container"
    style="--offset-index: {currentIndex}; --milestone-count: {milestones.length};">
    {#each milestones as { heading, description, time }, index}
      <div
        class="milestone"
        class:position-low={index % 4 === 1}
        class:position-high={index % 4 === 3}
        class:selected={currentIndex === index}>
        <div class="milestone-content">
          <div class="heading-container">
            {#if currentIndex === index}
              <button on:click={() => (currentIndex = prev)}>
                <ArrowIcon orientation="left" fill="var(--text-color)" />
              </button>
            {/if}
            <h4 class:yellow={index % 4 === 0} class:red={index % 4 === 2}>
              <FlagIcon />
              <span class="time-banner">{time}</span>
            </h4>
            {#if currentIndex === index}
              <button on:click={() => (currentIndex = next)}>
                <ArrowIcon fill="var(--text-color)" />
              </button>
            {/if}
          </div>
          <h3>{heading}</h3>
          {#if currentIndex === index}
            <p>
              {@html description}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
