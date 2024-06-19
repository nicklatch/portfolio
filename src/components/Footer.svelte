<script lang="ts">
  import SvelteSvg from './logoSVG/SvelteSVG.svelte';
</script>

<footer>
  <p>© 2024 Nick Latcham | Made With &nbsp;</p>
  <SvelteSvg />
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
</style>
