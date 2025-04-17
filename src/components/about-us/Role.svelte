<script>
  export let name = ''
  export let briefDescription = ''
  export let image
  export let hash = ''
  
  $: if (!(image && image.src)) {
    console.log(`Role '${name}': Missing image or image.src`);
  }
</script>

<style>
  a.container {
    font-weight: unset;
    margin: 40px;
    margin-bottom: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cutoff {
    height: 200px;
    overflow: hidden;
    transition: transform 0.2s;
    transform-origin: bottom;
  }

  img {
    height: 200%;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 0px;
    text-align: center;
    font-size: 40px;
  }

  h3,
  a.container:hover h3 {
    color: #333;
  }

  p {
    max-width: 300px;
    margin-bottom: 30px;
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

  a.container:hover .cutoff {
    transform: scale(1.2);
  }

  a.container:hover .learn-more {
    background-color: #333;
    color: white;
  }
</style>

<a href="/about/roles#{hash}" class="container">
  {#if image && image.src}
    <div class="cutoff">
      <img src={image.src} alt={image.alt} />
    </div>
  {/if}
  <h3>{name}</h3>
  {#if briefDescription && briefDescription.inlineHtml}
    <p>
      {@html briefDescription.inlineHtml}
    </p>
  {/if}
  <div class="learn-more">Learn More</div>
</a>
