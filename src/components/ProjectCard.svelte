<script lang="ts">
  export let project: Project;
</script>

<div class="gradient__border">
  <section class="project-card__container">
    <div class="grid-half img_container">
      <img src={project.screenshot?.src} alt={project.screenshot?.alt} />
    </div>
    <article class="grid-half description__container">
      <h2 class="underline">{project.title}</h2>
      <p>
        {project.description}
      </p>
    </article>
  </section>
</div>

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
    border-radius: 0.25rem;
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
    filter: drop-shadow(0 0 6px var(--shadow__color));
  }

  .img_container,
  .img_container > img {
    border-radius: 0.5rem;
  }

  .gradient__border {
    background-image: none;
    padding: 0.25rem;
    border-radius: 0.5rem;
  }

  .gradient__border:hover {
    background-image: var(--gradient);
  }

  @media screen and (max-width: 630px) {
    .project-card__container {
      display: flex;
      flex-direction: column-reverse;
      gap: 1rem;
    }
  }
</style>
