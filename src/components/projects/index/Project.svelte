<script>
  export let heading = ''
  export let description = ''
  export let image = ''
  export let link = ''
</script>

<style>
  a.container {
    width: 350px;
    font-weight: unset;
    margin: 25px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
  }

  img {
    width: 350px;
    height: 250px;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 0px;
    font-size: var(--body-xl);
    font-weight: 500;
  }

  h3,
  a.container:hover h3 {
    color: black;
  }

  p {
    max-width: 350px;
    margin-bottom: 30px;
    color: black;
  }

  .learn-more {
    border-radius: 12px;
    font-weight: normal;
    letter-spacing: inherit;
    text-align: center;
    color: #333;
    font-size: var(--body-large);
    padding: 8px 80px;
    border: 2px solid #333;
    transition-property: background-color, color;
    transition-duration: 0.2s;
    margin-top: auto;
    display: block;
  }

  a.container:hover .learn-more {
    background-color: #333;
    color: white;
  }
</style>

<a href={link} class="container">
  <img src={image.src} alt={image.alt} />
  <h3>{heading}</h3>
  <p>
    {@html description}
  </p>
  <div class="learn-more">Read More</div>
</a>
