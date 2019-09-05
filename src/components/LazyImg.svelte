<script>
  export let src = '';
  export let placeholder = '';
  export let alt = '';
  export let style = '';

  let placeholderImg;

  const watch = (node) => {
    node.onload = async () => {
      node.setAttribute('style', style);
      placeholderImg.remove();
    }
  }
</script> 
<style>
img.lazy {
  opacity: 1;
  transition: opacity 0.4s;
}
</style>
<img 
  bind:this={placeholderImg}
  src={placeholder} 
  {alt} 
  {style} 
/>
<img 
  use:watch
  class="lazy"
  style="opacity:0;{style}" 
  {src} 
  {alt} 
/>