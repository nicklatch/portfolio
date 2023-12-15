<script lang="ts">
  import me from '$lib/assets/me.png';
  import ReactSvg from '../../components/logoSVG/ReactSVG.svelte';
  import Seperator from '../../components/Seperator.svelte';
  import TypescriptSvg from '../../components/logoSVG/TypescriptSVG.svelte';
  import ViteSvg from '../../components/logoSVG/ViteSVG.svelte';
  import NodeSvg from '../../components/logoSVG/NodeSVG.svelte';
  import MongoSvg from '../../components/logoSVG/MongoSVG.svelte';
  import PrismaSvg from '../../components/logoSVG/PrismaSVG.svelte';
  import BunSvg from '../../components/logoSVG/BunSVG.svelte';
  import AwsSvg from '../../components/logoSVG/AwsSVG.svelte';
  import JavaSvg from '../../components/logoSVG/JavaSVG.svelte';
  import RustSvg from '../../components/logoSVG/RustSVG.svelte';
  import ElmSVG from '../../components/logoSVG/ElmSVG.svelte';
  import SpringSvg from '../../components/logoSVG/SpringSvg.svelte';
  import PGSVG from '../../components/logoSVG/PGSVG.svelte';
  import Mysqlsvg from '../../components/logoSVG/MYSQLSVG.svelte';
</script>

<svelte:head>
  <title>About Nick</title>
  <meta
    name="description"
    content="Hey there! I'm Nick, a former diesel mechanic turned passionate full-stack web developer. I specialize in using TypeScript for both front-end and back-end development, with expertise in React and Node.js. Check out my skills and projects to see more about my journey to becoming the best fullstack developer I can be."
  />
</svelte:head>

<div class="sub-parent__container">
  <section class="container-half face-container">
    <img src={me} alt="Nick Latcham's face" class="" />
  </section>
  <section class="container-half info-container">
    <h2 class="underline">Hey There!</h2>
    <p>
      I'm Nick, a former diesel mechanic turned software engineer. I am
      currently pursuing my B.S in Software Engineering at WGU.
    </p>
    <p>
      Outside of work I enjoy golfing, spending time with my family, and hacking
      away on side projects. I'm almost always building something!
    </p>
  </section>
</div>
<Seperator />
<div class="sub-parent__container">
  <section class="container-half">
    <h2 class="underline tech-stack__heading">Skills</h2>
    <p>
      I'm proficient in Java and TypeScript while also dabbling with Rust and
      Elm. I have experience building web applications using Spring Boot and
      Express frameworks on the backend, paired with React and other modern
      front-end tools.
    </p>
    <p>
      I'm always striving to gain knowledge across new languages, frameworks,
      tools, and development techniques to expand my skills. So, if what you are
      looking for is not listed or shown, odds are I can pick it up pretty fast!
    </p>
  </section>
  <section class="container-half icons">
    <TypescriptSvg />
    <JavaSvg />
    <RustSvg />
    <ElmSVG />
    <ReactSvg />
    <ViteSvg />
    <NodeSvg />
    <BunSvg />
    <MongoSvg />
    <PGSVG />
    <PrismaSvg />
    <Mysqlsvg />
    <SpringSvg />
    <AwsSvg />
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
    gap: 2vh;
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

    .sub-parent__container:first-of-type {
      padding-block: 2vh;
    }

    .container-half {
      max-width: unset;
    }
    .face-container {
      margin-bottom: 1rem;
    }
  }
</style>
