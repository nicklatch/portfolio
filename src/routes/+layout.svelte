<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import '../app.css';
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });

  $: pageTitle = $page.url.pathname.slice(1);
</script>

<svelte:head>
  <title>{pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}</title>
</svelte:head>

<Header />
<main><slot /></main>
<Footer />
