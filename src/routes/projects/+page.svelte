<script lang="ts">
  import Construction from '../../components/Construction.svelte';
  import ProjectCard from '../../components/ProjectCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data.projects);
</script>

<section class="project-parent__container">
  {#each data.projects as project}
    <ProjectCard {project} />
  {/each}
</section>

<style>
  
  .project-parent__container {
    margin: auto;
  }
</style>
