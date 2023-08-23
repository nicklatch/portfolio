<script lang="ts">
  import Seperator from './Seperator.svelte';
  import GithubSvg from './logoSVG/GithubSVG.svelte';

  export let project: Project;

  const projID: Number = project.id;

  $: projectBorder =
    project.id % 2 === 0 ? 'border-grad-right' : 'border-grad-left';
</script>

<div class="underline {projectBorder}">
  <section class="project-card__container">
    <div class="grid-half img_container">
      <img src={project.screenshot?.src} alt={project.screenshot?.alt} />
    </div>
    <article class="grid-half description__container">
      <h2 class="underline">{project.title}</h2>
      <p>
        {project.description}
      </p>
      <a href={project.sourceUrl}><GithubSvg /></a>
    </article>
  </section>
</div>
<Seperator />

<style>
  p {
    text-align: center;
  }
  .project-card__container {
    background-color: var(--bg__color);
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-inline: auto;
    text-align: center;
    width: fit-content;
    padding: clamp(0.5rem, 2vw, 2rem);
    border-bottom: 4px solid transparent;
    box-shadow: 4px -2px 2rem var(--bg__color);
    padding-bottom: 0;
  }

  .grid-half {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-inline: auto;
  }

  .description__container {
    max-width: 75%;
    gap: 1rem;
  }

  .img_container {
    overflow: hidden;
    filter: drop-shadow(0 0 1px var(--bg__color))
      drop-shadow(0 0 6px var(--shadow__color));
  }

  .img_container,
  .img_container > img {
    border-radius: 0.5rem;
  }

  :global(.border-grad-right) {
    border-left: 3px solid;
    border-image: linear-gradient(
        0deg,
        transparent 3%,
        #00dfff,
        #8c00ea,
        transparent 100%
      )
      1;
  }

  :global(.border-grad-left) {
    border-left: 3px solid;
    border-image: linear-gradient(
        0deg,
        transparent 3%,
        #00dfff,
        #8c00ea,
        transparent 100%
      )
      1;
  }

  @media screen and (max-width: 630px) {
    .project-card__container {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
</style>
