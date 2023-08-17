<script lang="ts">
	import Construction from '../../components/Construction.svelte';
	import ProjectCard from '../../components/ProjectCard.svelte';
</script>

<div>
	<Construction />
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
</style>
