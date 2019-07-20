<script>
  import { InfoSplitSection, DottedAccent } from '../'
</script>

<style>
  .artwork {
    position: relative;
    max-width: 60rem;
  }
  .artwork-front {
    position: absolute;
    right: 20%;
    top: 0;
    width: 40%;
    height: auto;
    transform: translateZ(-1px);
  }
  .artwork-back {
    width: 100%;
  }
</style>

<InfoSplitSection>
  <div slot="left">
    <h2>Building powerful web apps</h2>
    <p>
      Our organization develops real-world applications and promotes learning
      and mentorship at all levels, both from team members of diverse skillsets
      and from the close-knit, passionate club community.
    </p>
    <DottedAccent top="10%" left="-5rem" width="m" height="l" />
  </div>
  <div class="artwork" slot="right">
    <img src="images/building-artwork-back.svg" alt="" class="artwork-back" />
    <img
      src="images/building-artwork-front.png"
      alt="Person leaning over looking at network"
      class="artwork-front" />
  </div>
</InfoSplitSection>
