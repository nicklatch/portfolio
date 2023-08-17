<script>
	import SvelteSvg from './SvelteSVG.svelte';
</script>

<footer>
	<p>© 2023 Nick Latcham | Made With &nbsp;</p>
	<iconify-icon icon="logos:svelte" />
</footer>

<style>
	footer {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		text-align: center;
		font-size: clamp(8px, 0.8rem, 1.5rem);
	}

	@media (max-width: 450) {
	}
</style>
