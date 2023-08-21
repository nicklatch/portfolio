<script lang="ts">
  export let project: Project;
</script>

<article>
  <h2>{project.title}</h2>
  <div class="img_container" />
  <p>
    {project.description}
  </p>
</article>

<style>
  article {
    place-self: center center;
    text-align: center;
    max-width: 800px;
  }

  h2 {
    padding-bottom: 1rem;
  }

  .img_container {
    margin: 1rem auto;
    height: 200px;
    aspect-ratio: 1.5;
    outline: 1px solid white;
  }

  p {
    text-align: center;
  }
</style>
