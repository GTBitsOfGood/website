<script>
  import RightArrowIcon from 'svelte-icons/io/IoIosArrowForward'
  import { fly } from 'svelte/transition'

  export let name = ''
  export let description = ''
  export let applicationOpen = false
  export let applyLink = ''
  export let open = false
</script>

<style>
  .icon {
    transition: transform 0.2s;
    margin-right: 20px;
    padding-top: 5px;
  }
  .icon :global(svg) {
    height: 24px;
    width: auto;
  }
  .open {
    transform: rotate(0.25turn);
  }

  .dropdown-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  .dropdown-banner button {
    padding: 10px 0;
    flex: 1;
    text-align: left;
    display: flex;
    align-items: center;
  }

  .dropdown-banner button .icon,
  .dropdown-banner button h3 {
    vertical-align: middle;
    display: inline-block;
  }

  .description {
    margin-bottom: 50px;
  }

  .description :global(p) {
    color: #333;
  }

  h3 {
    font-size: 18px;
  }

  a.apply-link {
    padding: 5px 20px;
    border: 1px solid var(--primary-red);
    font-family: var(--header-font);
    font-weight: normal;
    color: #333;
    transition-property: background-color, color;
    transition-duration: 0.2s;
  }
  a.apply-link:hover {
    background-color: var(--primary-red);
    color: white;
  }
</style>

<section>
  <div class="dropdown-banner">
    <button on:click={() => (open = !open)}>
      <div class="icon" class:open>
        <RightArrowIcon />
      </div>
      <h3>{name}</h3>
    </button>
    {#if applicationOpen}
      <a class="apply-link" href={applyLink}>Apply Now</a>
    {/if}

  </div>
  {#if open}
    <div class="description" transition:fly={{ y: -20, duration: 200 }}>
      {@html description.html}
    </div>
  {/if}
</section>
