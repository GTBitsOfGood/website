<script>
  export let fill = ''
  export let orientation

  $: rotation = orientationMap[orientation] || orientationMap.right

  const orientationMap = {
    left: '0.5turn',
    right: '0',
    up: '0.75turn',
    down: '0.25turn',
  }
</script>

<style>
  svg {
    --rotation: 0;
    transform: rotate(var(--rotation));
  }
</style>

<svg
  width="88"
  height="88"
  viewBox="0 0 88 88"
  {fill}
  style="--rotation: {rotation}"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M50.8063 28.1359C49.9297 28.9953 49.9297 30.4219 50.7891 31.2984L61.2391
    41.7656H21.4672C20.2469 41.7656 19.25 42.7625 19.25 44C19.25 45.2375 20.2469
    46.2344 21.4672 46.2344H61.2219L50.7719 56.7015C49.9125 57.5781 49.9297
    58.9875 50.7891 59.864C51.6656 60.7234 53.0578 60.7234 53.9344
    59.8469L68.0969 45.5812C68.2859 45.375 68.4406 45.1515 68.5609
    44.8765C68.6812 44.6015 68.7328 44.3094 68.7328 44.0172C68.7328 43.4328
    68.5094 42.8828 68.0969 42.4531L53.9344 28.1875C53.0922 27.2937 51.6828
    27.2765 50.8063 28.1359Z" />
</svg>
