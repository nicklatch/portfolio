<script lang="ts">
  export let project: Project;
</script>

<article>
  <h2>{project.title}</h2>
  <p>
    {project.description}
  </p>
</article>

<style>
  article {
    text-align: center;
    max-width: 800px;
  }

  h2 {
    padding-bottom: 1rem;
  }

  p {
    text-align: center;
  }
</style>
