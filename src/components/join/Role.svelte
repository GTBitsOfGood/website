<script>
  export let learnMoreHash = ''
  export let applyLink = ''
  export let title = ''
  export let description = ''
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
    font-family: 'Interstate';
    font-weight: bold;
    font-size: 22px;
    margin: 0;
  }

  div.container p {
    margin: 8px 0;
  }
</style>

<div class="container">
  <h4>{title}</h4>
  <p>{description}</p>
</div>
