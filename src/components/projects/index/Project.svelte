<script>
  export let name = ''
  export let briefDescription = ''
  export let image = {}
  export let link = ''
</script>

<style>
  a.container {
    width: 340px;
    font-weight: unset;
    display: flex;
    flex-direction: column;
  }

  .img-container {
    width: 340px;
    height: 243px;
    overflow: hidden;
  }

  a.container:hover img {
    transform: scale(1.2);
  }

  img {
    width: inherit;
    height: inherit;
    transition: transform 0.2s;
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
  <div class="img-container">
    <img src={image.src} alt={image.alt} />
  </div>
  <h3>{name}</h3>
  <p>
    {@html briefDescription}
  </p>
  <div class="learn-more">Read More</div>
</a>
