<script>
  export let learnMoreHash = ''
  export let applyLink = ''
  export let name = ''
  export let briefDescription = ''
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
  }
</style>

<div class="container">
  <h4>{name}</h4>
  <p>{briefDescription}</p>
</div>
