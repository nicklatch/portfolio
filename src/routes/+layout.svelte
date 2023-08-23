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
  :global(:root) {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background: var(--bg__color);
    color: var(--font__color);
    --font__color: white;
    --bg__color: black;
    --gradient: radial-gradient(
      farthest-corner circle at 100% 0%,
      #00dfff 0%,
      #8c00ea 100%
    );
    --shadow__color: #323232;
    --logo__h-w: clamp(3rem, 5vw, 5rem);
  }

  :global(*, *::before, *::after, *:visited) {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    text-decoration: unset;
    list-style: none;
  }

  :global(body) {
    width: clamp(300px, 100vw, 1440px);
    min-height: 100svh;
    margin-inline: auto;
    padding-block: 0.5rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
    place-items: center center;
  }

  :global(main) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    height: 100%;
    width: auto;
    padding-block: 2rem;
    padding-inline: calc(25vw / 2);
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
    font-size: clamp(2.5em, 4vw, 3.5vw);
    font-weight: 700;
  }

  :global(h2) {
    font-weight: 700;
    font-size: clamp(2rem, 3vw, 3rem);
  }

  :global(p) {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
  }

  :global(a) {
    text-decoration: none;
    color: unset;
  }

  :global(.underline) {
    background: var(--gradient);
    background-size: 300% 0.25rem;
    background-repeat: no-repeat;
    background-position: left bottom;
    transition: background-size 1s ease;
  }

  :global(.underline:hover) {
    background-size: 100% 0.25rem;
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  :global(.logo-svg) {
    object-fit: contain;
    width: var(--logo__h-w);
    aspect-ratio: 1;
    filter: drop-shadow(0 0 1px var(--font__color));
    transition: all linear 100ms;
  }

  :global(.logo-svg:hover) {
    scale: 1.1;
    filter: drop-shadow(0.25rem 0 1rem var(--font__color));
  }

  /* For mobile/touch devices */
  @media screen and (max-width: 630px) {
    :global(body) {
      min-height: 99svh;
    }

    :global(main) {
      padding: 1svh;
    }
  }

  @supports (
    background:
      radial-gradient(
        farthest-corner circle at 100% 0% in oklab,
        oklch(80% 0.4 222) 0%,
        oklch(35% 0.5 313) 33% transparent
      )
  ) {
    :global(:root) {
      --gradient: radial-gradient(
        farthest-corner circle at 100% 0% in oklab,
        oklch(80% 0.4 222) 0%,
        oklch(35% 0.5 313) 100%
      );
    }
  }

  @media (prefers-color-scheme: light) {
    :global(:root) {
      --font__color: black;
      --bg__color: white;
      --shadow__color: #32323270;
    }
  }
</style>
