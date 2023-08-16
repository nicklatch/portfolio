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
		padding-inline: 1ch;
		font-size: clamp(1em, 1vw, 2vw);
	}

	header > a {
		font-size: clamp(2rem, 2vw, 4vw);
		font-weight: 700;

		&:hover {
			color: transparent;
			background: linear-gradient(to right, red, orange, purple);
			background-clip: text;		}
	}
</style>
