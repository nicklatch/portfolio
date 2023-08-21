<script lang="ts">
  import ProjectCard from '../../components/ProjectCard.svelte';
</script>

<p>
  Pardon my mess, things are being built here! In the meantime, head on over to
  my <a href="https://github.com/nicklatch">GitHub!</a>
</p>
<div>
  <ProjectCard />
</div>

<style>
  div {
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
