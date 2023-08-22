<script lang="ts">
  import me from '$lib/assets/me.png';
  import Construction from '../../components/Construction.svelte';
  import ReactSvg from '../../components/ReactSVG.svelte';
  import Scsssvg from '../../components/SCSSSVG.svelte';
  import Seperator from '../../components/Seperator.svelte';
  import TypescriptSvg from '../../components/TypescriptSVG.svelte';
  import ViteSvg from '../../components/ViteSVG.svelte';
</script>

<Construction />
<div class="sub-parent__container reverse">
  <section class="face-container">
    <img src={me} alt="Nick Latcham's face" class="" />
  </section>
  <section class="info-container">
    <h2 class="underline">Hey There!</h2>
    <p>
      I'm Nick, a former diesel mechanic turned web dev. I have a passion for
      building web apps that solve problems.
    </p>
    <p>
      Outside of work I enjoy golfing and spending time with my wife, son, and
      dog!
    </p>
  </section>
</div>
<Seperator />
<div class="sub-parent__container reverse">
  <section class="container-half">
    <h2 class="underline tech-stack__heading">Tech Stack</h2>
  </section>
  <section class="container-half icons">
    <ReactSvg />
    <TypescriptSvg />
    <Scsssvg />
    <ViteSvg />
  </section>
</div>
<Seperator />

<style>
  img {
    object-fit: contain;
    filter: drop-shadow(0 0 8px black);
    margin-inline: auto;
    position: relative;
    top: 5px;
    max-width: 350px;
  }

  section > h2 {
    text-align: center;
    width: fit-content;
    margin-inline: auto;
    text-shadow: 0 0 5px var(--bg__color);
  }

  .tech-stack__heading {
    margin: auto;
  }

  .sub-parent__container {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2vw;
    margin: 0 auto;
    padding-inline: 0.5rem;
  }

  .container-half {
    margin-block: auto;
    text-align: center;
    width: fit-content;
    max-width: 50%;
  }

  .reverse {
    flex-direction: row-reverse;
  }
  .face-container {
    aspect-ratio: 1;
    overflow: hidden;
    margin-left: auto;
    background: var(--gradient);
    border-radius: 50% 20% / 10% 40%;
    filter: drop-shadow(0 0 0.5rem var(--shadow__color));
    border-radius: 40px 6px;
  }

  .info-container {
    margin-block: auto;
    text-align: center;
    width: 50%;
    margin-right: auto;
  }

  p:not(:first-of-type) {
    padding-top: 1rem;
  }
  p:first-of-type {
    padding-top: 1rem;
  }

  @media screen and (max-width: 600px) {
    .sub-parent__container {
      flex-direction: column;
    }

    .face-container {
      width: unset;
      margin-bottom: 1rem;
    }

    .info-container {
      width: unset;
    }

    .info-container p:last-of-type {
      margin-bottom: 1rem;
    }

    .tech-stack__heading {
      margin-bottom: 1rem;
    }
  }
</style>
