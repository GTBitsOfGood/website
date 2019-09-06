<script>
  export let src = ''
  export let placeholder = ''
  export let alt = ''
  export let imgStyle = ''
  export let containerStyle = ''

  let placeholderImg

  const watch = node => {
    node.onload = () => {
      node.setAttribute('style', imgStyle)
      placeholderImg.style.opacity = 0
      setTimeout(() => {
        placeholderImg.remove()
      }, 0)
    }
  }
</script>

<style>
  div.container {
    position: relative;
    height: 100%;
    width: auto;
  }
  img.lazy {
    opacity: 1;
    transition: opacity 0.4s;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

<div class="container" style={containerStyle}>
  <img
    class="lazy"
    bind:this={placeholderImg}
    src={placeholder}
    style={imgStyle}
    {alt} />
  <img class="lazy" use:watch style="opacity:0;{imgStyle}" {src} {alt} />
</div>
