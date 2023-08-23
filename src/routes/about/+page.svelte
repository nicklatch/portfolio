<script lang="ts">
  import me from '$lib/assets/me.png';
  import Construction from '../../components/Construction.svelte';
  import ReactSvg from '../../components/logoSVG/ReactSVG.svelte';
  import Scsssvg from '../../components/logoSVG/SCSSSVG.svelte';
  import Seperator from '../../components/Seperator.svelte';
  import TypescriptSvg from '../../components/logoSVG/TypescriptSVG.svelte';
  import ViteSvg from '../../components/logoSVG/ViteSVG.svelte';
  import NodeSvg from '../../components/logoSVG/NodeSVG.svelte';
  import MongoSvg from '../../components/logoSVG/MongoSVG.svelte';
  import PrismaSvg from '../../components/logoSVG/PrismaSVG.svelte';
  import BunSvg from '../../components/logoSVG/BunSVG.svelte';
</script>

<div class="sub-parent__container">
  <section class="container-half face-container">
    <img src={me} alt="Nick Latcham's face" class="" />
  </section>
  <section class="container-half info-container">
    <h2 class="underline">Hey There!</h2>
    <p>
      I'm Nick, a former diesel mechanic turned full-stack web dev. I have a
      passion for building web apps that solve problems.
    </p>
    <p>
      Outside of work I enjoy golfing and spending time with my wife, son, and
      dog!
    </p>
  </section>
</div>
<Seperator />
<div class="sub-parent__container">
  <section class="container-half">
    <h2 class="underline tech-stack__heading">Tech Stack</h2>
  </section>
  <section class="container-half icons">
    <ReactSvg />
    <TypescriptSvg />
    <ViteSvg />
    <NodeSvg />
    <MongoSvg />
    <PrismaSvg />
    <BunSvg />
  </section>
</div>
<Seperator />

<style>
  img {
    object-fit: contain;
    filter: drop-shadow(0 0 8px #000000);
    margin-inline: auto;
    position: relative;
    top: 5px;
    left: 20px;
  }

  .sub-parent__container {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 5vw;
  }

  .container-half {
    margin: auto;
    text-align: center;
    width: fit-content;
    width: clamp(250px, 25vw, 400px);
  }

  .container-half > h2 {
    text-align: center;
    width: fit-content;
    margin-inline: auto;
    text-shadow: 0 0 5px var(--bg__color);
  }

  .face-container {
    aspect-ratio: 1;
    overflow: hidden;
    background: var(--gradient);
    filter: drop-shadow(0 0 0.5rem var(--shadow__color));
    border-radius: 40px 6px;
  }

  p {
    padding-top: 1rem;
  }

  @media screen and (max-width: 630px) {
    .sub-parent__container {
      display: flex;
      flex-direction: column;
    }

    .container-half {
      max-width: unset;
    }
    .face-container {
      margin-bottom: 1rem;
    }

    .info-container p:last-of-type {
      margin-bottom: 1rem;
    }

    .tech-stack__heading {
      margin-bottom: 1rem;
    }
  }
</style>
