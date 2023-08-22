<script lang="ts">
  export let project: Project;
</script>

<article>
  <div>
    <h2 class="underline">{project.title}</h2>
    <div class="img_container">
      <img src={project.screenshot?.src} alt={project.screenshot?.alt} />
    </div>
  </div>
  <p>
    {project.description}
  </p>
</article>

<style>
  article {
    place-self: center center;
    text-align: center;
    width: fit-content;
  }

  h2 {
    margin-bottom: 1rem;
    margin-inline: auto;
    width: fit-content;
  }

  .img_container {
    width: clamp(300px, 75%, 600px);
    margin-bottom: 1em;
    margin-inline: auto;
    overflow: hidden;
    place-self: center center;
    border-radius: .25rem;
  }

  p {
    text-align: center;
  }
</style>
