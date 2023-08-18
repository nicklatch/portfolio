<script lang="ts">
  import MeDesign from '../components/MeDesign.svelte';
</script>

<div>
  <section>
    <p>Hi, I'm Nick!</p>
    <p>And I Build Web Things<span>&nbsp;_</span></p>
  </section>
  <MeDesign />
</div>

<style>
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-block: 3rem;
  }
  p:first-child {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-size: clamp(2.75em, 4rem, 10vw);
    text-align: center;
  }

  p:last-child {
    font-size: clamp(2.5em, 3rem, 8vw);
    font-weight: unset;
    text-align: center;
  }

  span {
    color: rgb(153, 255, 0);
    animation: cursor 1s linear infinite;
  }

  @keyframes cursor {
    0% {
      opacity: 0;
    }
    49% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
</style>
