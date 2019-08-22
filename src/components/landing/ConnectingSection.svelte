<script>
  import InfoSplitSection from '../InfoSplitSection.svelte'
</script>

<style>
  a {
    font-size: 24px;
  }
  .artwork {
    position: relative;
    max-width: 60rem;
  }
  .artwork-front {
    position: absolute;
    right: 5%;
    top: 0;
    width: 50%;
    height: auto;
  }
  .artwork-back {
    margin-top: 30%;
    width: 100%;
  }
</style>

<InfoSplitSection>
  <div slot="left">
    <h2>Connecting with ATL</h2>
    <p>
      By building relationships with local nonprofits, we are redefining social
      good for students who want to make a meaningful impact with their
      technical background.
    </p>
    <a href="about-us">More about our mission</a>
  </div>
  <div class="artwork" slot="right">
    <img src="images/connecting-artwork-back.svg" alt="" class="artwork-back" />
    <img
      src="images/connecting-artwork-front.png"
      alt="Person leaning over looking at network"
      class="artwork-front" />
  </div>
</InfoSplitSection>
