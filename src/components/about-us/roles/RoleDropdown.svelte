<script>
  import DownArrowIcon from 'svelte-icons/io/IoIosArrowDown'
  import { fly } from 'svelte/transition'

  export let name = ''
  export let description = ''
  export let applicationOpen = false
  export let applyLink = ''

  let open = false
</script>

<style>
  div.dropdown-banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  div.dropdown-banner button {
    padding: 10px 0;
    flex: 1;
    text-align: left;
  }

  div.dropdown-banner button :global(svg),
  div.dropdown-banner button h3 {
    vertical-align: middle;
    display: inline-block;
  }

  div.dropdown-banner button :global(svg) {
    height: 24px;
    width: auto;
    margin-right: 20px;
  }

  div.description :global(p) {
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
  }
</style>

<section>
  <div class="dropdown-banner">
    <button on:click={() => (open = !open)}>
      <DownArrowIcon />
      <h3>{name}</h3>
    </button>
    {#if !applicationOpen}
      <a class="apply-link" href={applyLink}>Apply Now</a>
    {/if}

  </div>
  {#if open}
    <div class="description" transition:fly={{ y: -20, duration: 200 }}>
      {@html description.html}
    </div>
  {/if}
</section>
