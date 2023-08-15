<script lang="ts">
	import { onMount } from 'svelte';
</script>

<header>
	<a href="/">Nick Latcham</a>
	<nav>
		<ul>
			<li>
				<a href="/about">About</a>
			</li>
			<li><a href="/projects">Projects</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		width: 100%;
		margin-top: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	ul {
		display: flex;
	}

	li {
		padding-inline: 1em;
	}

	header > a {
		font-size: clamp(1.5em, 3vw, 2.5em);
	}
</style>
