<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Header />
<main><slot /></main>
<Footer />