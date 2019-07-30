<script>
  import InfoCard from '../components/InfoCard/index.svelte'

  const exampleProjects = [
    {
      header: 'Bright Futures Academy',
      body: `This is a web app built to manage payroll at Bright Futures Academy in Atlanta. It provides information for prospective students, and enrolled families can sign in to manage their students' tuition and other payments.`,
      imgSrc: '/example-data/bfa.png',
      imgAlt: '',
      href: 'https://github.com/GTBitsOfGood/bright-futures-academy',
      label: 'In Early Design',
    },
    {
      header: 'Drawchange',
      body: `This portal is meant to be used by Atlanta nonprofit drawchange to manage their volunteers and events. New volunteers will register an account, be vetted by an administrator, then sign up for volunteer events through this portal.`,
      imgSrc: '/example-data/drawchange.png',
      imgAlt: '',
      href: 'https://github.com/GTBitsOfGood/drawchange',
      label: 'In Development',
    },
    {
      header: 'International Rescue Committee',
      body: `This inventory system is being developed as a pilot system for the Atlanta office of IRC. It is meant to track inventory usage at their shopfront, and log volunteer hours. Further, it can create reports regarding contributions.`,
      imgSrc: '/example-data/irc.png',
      imgAlt: '',
      href: 'https://github.com/GTBitsOfGood/irc',
      label: 'Near finish line',
    },
  ]
</script>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    width: 100%;
    margin: 2rem;
  }
</style>

<section>
  <h2>Projects</h2>
  {#each exampleProjects as project}
    <InfoCard {...project} />
  {/each}
</section>
