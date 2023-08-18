<script lang="ts">
  import Construction from '../../components/Construction.svelte';
  import me from '$lib/assets/me.png';
</script>

<img src={me} alt="image of my face" />
<h2>Howdy!</h2>

<style>
  img {
    height: clamp(200px, 20vw, 500px);
    border-radius: 100%;
    border-bottom: 4px solid white;
    border-right: 4px solid white;
  }

  h2 {
    text-align: center;
  }
</style>
