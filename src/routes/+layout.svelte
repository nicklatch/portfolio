<script lang="ts">
  import { dev } from '$app/environment';
  import { inject } from '@vercel/analytics';
  import Header from '../components/Header.svelte';
  import Footer from '../components/Footer.svelte';
  import '../app.css';

  inject({ mode: dev ? 'development' : 'production' });
</script>

<Header />
<main><slot /></main>
<Footer />
