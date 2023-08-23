<script lang="ts">
  import MeDesign from '../components/MeDesign.svelte';
</script>

<div>
  <section>
    <div>
      <h1>Hi, I'm Nick!</h1>
      <p>And I Build Web Things<span>&nbsp;_</span></p>
    </div>
  </section>
  <MeDesign />
</div>

<style>
  section {
    display: flex;
  }
  div {
    height: 100%;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-block: clamp(2px, 1svh, 10dvh);
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: clamp(2.5em, 3rem, 8dvw);
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
