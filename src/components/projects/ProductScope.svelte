<script>
  export let clientGoals
  export let endUserGoals
  export let kpiList = []
  export let productTechnology = ''
  export let productDesign = ''
  export let themeColor = ''
</script>

<style>
  .kpi-container {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;
    margin-bottom: 60px;
  }

  h5 {
    font-size: var(--header-2-desktop);
    color: var(--theme-color);
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

<section style="--theme-color: {themeColor}">
  <h2>Our Process</h2>
  <h3>Product Scope</h3>
  <h4>Client Goals 🥅</h4>
  {@html clientGoals.html}
  <h4>End-User Goals ⚽</h4>
  {@html endUserGoals.html}
  {#if kpiList && kpiList.length}
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
  {#if productTechnology}
    <h4>Technology 💻</h4>
    {@html productTechnology.html}
  {/if}
  {#if productDesign}
    <h4>Design 🖊</h4>
    {@html productDesign.html}
  {/if}
</section>
