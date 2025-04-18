<script>
  import { onMount } from 'svelte'
  import timeline from '@contentful-entries/recruitmentTimeline'
  import FlagIcon from '$lib/components/about-us/MilestoneFlagIcon.svelte'
  import ArrowIcon from '$lib/components/ArrowIcon.svelte'

  let currentIndex = 0
  $: next = currentIndex === timeline.length - 1 ? 0 : currentIndex + 1
  $: prev = currentIndex === 0 ? timeline.length - 1 : currentIndex - 1

  // Normalize any "YYYY-MM-DD" or "MM-DD" to "MM-DD"
  function getMMDD(dateStr) {
    const parts = dateStr.split('-')
    return parts.length === 3
      ? `${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`
      : dateStr
  }

  // Today's month/day as "MM-DD"
  function getTodayMMDD() {
    const d = new Date()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    return `${m}-${day}`
  }

  // Pick the first upcoming (or wrap to 0)
  function updateIndexForDate() {
    const today = getTodayMMDD()
    const idx = timeline.findIndex((item) => getMMDD(item.dateNumeric) >= today)
    currentIndex = idx !== -1 ? idx : 0
  }

  onMount(() => {
    // initial pick
    updateIndexForDate()

    // schedule daily re-check at midnight
    const now = new Date()
    const nextMidnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0,
      0,
      0,
      0
    )
    const msUntilMidnight = nextMidnight - now

    setTimeout(function tick() {
      updateIndexForDate()
      // then every 24h thereafter
      setTimeout(tick, 24 * 60 * 60 * 1000)
    }, msUntilMidnight)
  })
</script>

<div class="overflow-container">
  <section>
    <div class="heading-center">
      <h2>Student Application Timeline</h2>
    </div>
    <div
      class="scroll-container"
      style="--offset-index: {currentIndex}; --milestone-count: {timeline.length};"
    >
      {#each timeline as { heading, description, time }, index}
        <div
          class="milestone"
          class:position-low={index % 4 === 1}
          class:position-high={index % 4 === 3}
          class:selected={currentIndex === index}
        >
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
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  @media (min-width: 800px) {
    h2 {
      margin-bottom: 80px;
    }
  }
  h2 {
    /* margin-bottom: 80px; */
    text-align: center;
  }
  section {
    padding-left: 3rem;
    padding-right: 3rem;
    width: 100%;
    max-width: none;
    margin: 0;
    padding-bottom: 5rem;
  }
  .overflow-container {
    overflow: hidden;
    margin-bottom: 100px;
  }
  .scroll-container {
    --offset-index: 0;
    --milestone-width: 30rem;
    display: flex;
    height: 50rem;
    max-height: calc(100vh - var(--nav-height));
    overflow-x: visible;
    position: relative;
    /* left: calc(-1 * var(--milestone-width) * var(--offset-index)); */
    left: calc(50% - (var(--milestone-width) * var(--offset-index)) - (var(--milestone-width)/2));
    transition: left 0.3s;
    /* margin-top: 5rem; */
  }
  .scroll-container::before {
    content: '';
    position: absolute;
    left: calc(var(--milestone-width) / 2);
    /* top: 10%; */
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
    z-index: 1;
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
    /* box-shadow: var(--shadow-hover); */
    max-width: 240px;
    padding: 1rem 2rem 1rem 2rem;
    transition-property: box-shadow, transform, background-color;
    transition-duration: 0.3s;
  }
  .selected .milestone-content {
    background-color: var(--backing-pink);
    width: 100%;
    max-width: max-content;
    box-shadow: var(--shadow-hover);
    align-self: center;
    border-radius: 1rem;
    padding: 2rem;
    transform: scale(1.1);
  }
  h3 {
    font-size: var(--body-xl);
    text-align: center;
  }
  h4 {
    text-align: center;
    color: white;
    display: flex;
    font-size: var(--body-large);
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
  .time-banner {
    font-family: var(--header-font);
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
  .heading-center {
    display: flex;
    justify-content: center;
    width: 100%;
  }
</style>
