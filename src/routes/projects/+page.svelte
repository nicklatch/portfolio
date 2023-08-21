<script lang="ts">
  import ProjectCard from '../../components/ProjectCard.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
  console.log(data);
</script>

<section>
  {#each data.projects as project}
    <ProjectCard {project} />
  {/each}
</section>

<style>
  section {
    padding-block: 5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: center;
    gap: 5rem;
  }

  a {
    background: linear-gradient(to right, #ff0094 0%, #ffec00 100%);
    background-clip: text;
    color: transparent;
  }

  p {
    text-align: center;
  }
</style>
