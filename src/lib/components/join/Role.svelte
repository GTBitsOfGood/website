<script>
  export let learnMoreHash = ''
  export let applyLink = ''
  export let name = ''
  export let briefDescription = ''
  export let open = false
</script>

<style>
  div.container,
  div.container:hover {
    color: #333;
  }

  div.container {
    display: block;
    margin: 40px 0;
  }

  div.container h4 {
    margin: 0;
  }

  div.container p {
    margin: 8px 0;
    margin-bottom: 20px;
  }

  a {
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 10px;
    font-weight: normal;
    display: inline-block;

    transition-property: transform, box-shadow, background-color, color;
    transition-duration: 0.2s;
  }
  a:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
  }
  a.btn-filled {
    background: var(--primary-red);
  }
  a.btn-hollow {
    box-sizing: border-box;
    background: white;
    box-shadow: inset 0px 0px 0px 2px var(--primary-red);
  }

  a.btn-filled,
  a.btn-filled:hover {
    color: white;
  }
  a.btn-hollow {
    color: black;
  }
  a.btn-hollow:hover {
    box-shadow: inset 0px 0px 0px 2px var(--primary-red), var(--shadow-hover);
    background-color: var(--primary-red);
    color: white;
  }
</style>

<div class="container">
  <h4>{name}</h4>
  <p>{briefDescription}</p>
  <div class="links">
    {#if open}
      <a class="btn-filled" target="_blank" href={applyLink}>Apply</a>
    {/if}
    <a class="btn-hollow" href={`/about/roles?role=${name}#${learnMoreHash}`}>
      Learn more
    </a>
  </div>
</div>
