<script>
  import MissionCard from './MissionCard'
  export let id = ''
</script>

<style>
  h2 {
    text-align: center;
    grid-column: span 2;
  }
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10rem;
  }
</style>

<section {id}>
  <h2>Our Mission</h2>
  <MissionCard />
  <MissionCard />
</section>
