<script>
  import content from '@contentful-entries/milestone'
  import FlagIcon from './MilestoneFlagIcon'
  import { toHtml, mapFields } from 'contentful-utils'

  const milestones = mapFields(content)
  let currentIndex = 0
</script>

<style>
  .scroll-container {
    --offset-index: 0;
    --milestone-width: 32rem;
    display: flex;
    height: 50rem;
    max-height: calc(100vh - var(--nav-height));
    overflow-x: visible;
    position: relative;
    left: calc(-1 * var(--milestone-width) * var(--offset-index));
    transition: left 0.3s;
    padding: 2rem;
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
  .milestone-content.selected {
    width: 100%;
    box-shadow: var(--shadow-hover);
    border-radius: 1rem;
    z-index: 1;
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
    flex-direction: column-reverse;
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
</style>

<section>
  <h2>Milestones</h2>
  <button on:click={() => currentIndex++}>Next</button>
  <div
    class="scroll-container"
    style="--offset-index: {currentIndex}; --milestone-count: {milestones.length};">
    {#each milestones as { heading, description, time }, index}
      <div
        class="milestone"
        class:position-low={index % 4 === 1}
        class:position-high={index % 4 === 3}>
        <div class="milestone-content" class:selected={currentIndex === index}>
          <h4 class:yellow={index % 4 === 0} class:red={index % 4 === 2}>
            <span class="time-banner">{time}</span>
            <FlagIcon />
          </h4>
          <h3>{heading}</h3>
          {#if currentIndex === index}
            <p>
              {@html toHtml(description)}
            </p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</section>
