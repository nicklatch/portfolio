<script lang="ts">
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import { page } from '$app/stores';
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';

  inject({ mode: dev ? 'development' : 'production' });

  $: pageTitle = $page.url.pathname.slice(1);
</script>

<svelte:head>
  <title>{pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Header />
<main><slot /></main>
<Footer />

<style>
  :root {
    box-sizing: border-box;
    height: 100%;
    font-family: 'Inter', sans-serif;
  }

  :global(*, *::before, *::after, *:visited) {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    text-decoration: unset;
    list-style: none;
  }

  :global(body) {
    background: black;
    color: white;
    max-width: clamp(340px, 100vw, 1440px);
    min-height: 100svh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    place-items: center center;
    margin-inline: auto;
    padding-block: 0.75rem;
    padding-inline: 0.5rem;
  }

  :global(main) {
    height: 100%;
    margin-inline: auto;
    padding-block: 1rem;
  }

  :global(input, button) {
    font: inherit;
  }

  :global(img) {
    display: block;
    width: 100%;
  }

  :global(p, h1, h2, h3, h4, h5, h6) {
    overflow-wrap: break-word;
  }

  :global(h1) {
    font-size: clamp(2.75em, 4rem, 10vw);
    font-weight: 700;
  }

  :global(h2) {
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3.5rem);
  }

  :global(p) {
    font-size: clamp(1rem, 1.5vw, 1rem);
  }

  :global(a) {
    text-decoration: none;
    color: unset;
  }
</style>
