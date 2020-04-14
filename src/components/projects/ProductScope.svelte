<script>
  export let clientGoals = content.clientGoals
  export let endUserGoals = content.endUserGoals
  export let kpiList = content.kpiList
  export let productTechnology = content.productTechnology
  export let productDesign = content.productDesign
</script>

<style>
  .kpi-container {
    display: flex;
    justify-content: space-around;
  }

  h5 {
    font-size: 48px;
    color: #3960fb;
    font-style: normal;
    margin: 0;
    font-family: var(--header-font);
  }

  .kpi {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    text-align: center;
  }

  @media (max-width: 600px) {
    .kpi-container {
      flex-direction: column;
      align-items: center;
    }
  }
</style>

<section>
  <h2>Our Process</h2>
  <h3>Product Scope</h3>
  <h4>Client Goals 🥅</h4>
  {@html clientGoals.html}
  <h4>End-User Goals ⚽</h4>
  {@html endUserGoals.html}
  {#if kpiList.length}
    <h4>KPI 📈</h4>
    <div class="kpi-container">
      {#each kpiList as kpi}
        <div class="kpi">
          <h5>{kpi.header}</h5>
          {@html kpi.body.html}
        </div>
      {/each}
    </div>
  {/if}
  <h4>Technology 💻</h4>
  {@html productTechnology.html}
  <h4>Design 🖊</h4>
  {@html productDesign.html}
</section>
