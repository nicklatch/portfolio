<script lang="ts">
  import me from "$lib/assets/me.png";
  import ReactSvg from "../../components/logoSVG/ReactSVG.svelte";
  import Seperator from "../../components/Seperator.svelte";
  import TypescriptSvg from "../../components/logoSVG/TypescriptSVG.svelte";
  import NodeSvg from "../../components/logoSVG/NodeSVG.svelte";
  // import MongoSvg from "../../components/logoSVG/MongoSVG.svelte";
  import AwsSvg from "../../components/logoSVG/AwsSVG.svelte";
  import JavaSvg from "../../components/logoSVG/JavaSVG.svelte";
  // import RustSvg from "../../components/logoSVG/RustSVG.svelte";
  import SpringSvg from "../../components/logoSVG/SpringSVG.svelte";
  import PGSVG from "../../components/logoSVG/PGSVG.svelte";
  import Mysqlsvg from "../../components/logoSVG/MYSQLSVG.svelte";
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
      I’m Nick, a former diesel technician turned software engineer. In my 2+
      years as a developer, I have developed a passion for writing clean and
      efficient code, always keeping "mechanical sympathy" in mind.
    </p>
    <p>
      While I primarily focus on backend systems for web applications, I also
      enjoy exploring systems programming and any other areas that capture my
      interest. I am currently seeking my next role and am ready to work ASAP.
      If you think I would be a great fit for your team, feel free to message me
      on <a href="https://www.linkedin.com/in/nicklatcham">LinkedIn</a>!
    </p>
    <p>
      Outside of work I enjoy spending time with my wife, our two kids and our
      goldendoodle, Reggie. When I do get free-time, you will usuaslly find me
      hacking away on a side project, playing guitar, or golfing!
    </p>
  </section>
</div>
<Seperator />
<div class="sub-parent__container">
  <section class="container-half">
    <h2 class="underline tech-stack__heading">Skills</h2>
    <p>
      My professional experince is in Java, PHP, and TypeScript. My most recent
      role has me working with PHP, Laravel, Inertia, and TailwindCSS.
      Previously, I had also used the Spring Framework ecosystem of tools,
      Django, and React. In my own time I like to write Zig, C, and Nim to
      create everything from CLI tools, to web applications, and everything
      inbetween.
    </p>
    <p>
      I'm always striving to gain knowledge across new languages, frameworks,
      tools, and development techniques to expand my skills. So, if what you are
      looking for is not listed or shown, odds are I can pick it up pretty fast!
    </p>
  </section>
  <section class="container-half icons">
    <JavaSvg />
    <!-- <RustSvg /> -->
    <TypescriptSvg />
    <ReactSvg />
    <NodeSvg />
    <!-- <MongoSvg /> -->
    <PGSVG />
    <Mysqlsvg />
    <SpringSvg />
    <AwsSvg />
  </section>
</div>
<Seperator />

<style>
  a {
    text-decoration: underline;
  }

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
