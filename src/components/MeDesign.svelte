<script lang="ts">
  import src from '$lib/assets/person-working-from-home.png';
</script>

<div>
  <img {src} alt="asdfadsf" />
</div>

<style>
  div {
    margin-inline: auto;
  }

  img {
    display: block;
    margin-inline: auto;
    object-fit: contain;
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    filter: drop-shadow(0 0 1px white);
  }
</style>
