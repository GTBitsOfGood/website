<script>
  export let src = ''
  export let placeholder = ''
  export let alt = ''

  let placeholderImg

  const watchForImgLoad = fullResImg => {
    const transitionDuration = 200
    fullResImg.onload = () => {
      fullResImg.style.display = 'initial'

      placeholderImg.style.transition = `opacity ${transitionDuration}ms`
      placeholderImg.style.opacity = 0
      setTimeout(() => {
        placeholderImg.remove()
      }, transitionDuration)
    }
  }
</script>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  img.full-res {
    display: none;
  }
</style>

<div class="container">
  <img use:watchForImgLoad class="full-res" {src} {alt} />
  <img bind:this={placeholderImg} src={placeholder} {alt} />
</div>
