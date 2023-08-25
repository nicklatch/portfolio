<script lang="ts">
  import Construction from '../../components/Construction.svelte';
  import ProjectCard from '../../components/ProjectCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Nick's Projects</title>
  <meta
    name="description"
    content="Explore Nick Latcham's projects, including FastLane Fusion, an all-in-one race management SaaS designed to streamline registration, heat/feature lineup creation, results entry, points allocation, and payouts. Discover more about Nick's work on GitHub."
  />
</svelte:head>

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
