<script>
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
  }

  h3 {
    font-size: 18px;
  }
</style>

<section>
  <div class="dropdown-banner">
    <button on:click={() => (open = !open)}>
      <!-- icon here -->
      <h3>{name}</h3>
    </button>
    {#if applyLink}
      <a href={applyLink}>Apply Now</a>
    {/if}

  </div>
  {#if open}
    <div>
      {@html description.html}
    </div>
  {/if}
</section>
