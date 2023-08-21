<script lang="ts">
  import me from '$lib/assets/me.png';
</script>

<div>
  <img src={me} alt="Nick Latcham's face" />
</div>
<h2>Howdy!</h2>
<section>
  <article>
    <p>
      I'm Nick, a former diesel mechanic turned web dev. I have a passion for
      building web apps that solve problems.
    </p>
    <p>
      I strive to always be using tools the web gives us, such as modern CSS,
      HTML, and WebAPI's! But, as well know, we still have to reach for tools
      and libraries to get the job done.
    </p>
    <p>
      Outside of work I enjoy golfing and spending time with my wife, son, and
      dog!
    </p>
  </article>
</section>

<style>
  img {
    aspect-ratio: 1;
    object-fit: contain;
    width: clamp(6rem, 75vw, 20rem);
  }

  h2 {
    text-align: center;
    padding-block: 1rem;
  }

  article {
    background: black;
    padding: 1rem;
  }

  section {
    width: clamp(300px, 50vw, 800px);
    background: linear-gradient(to right, transparent, #ffffff95, transparent);
    border-bottom: 4px solid transparent;
  }

  p {
    text-align: center;
  }

  p:not(:first-of-type) {
    padding-top: 1rem;
  }

  div {
    overflow: hidden;
    width: fit-content;
    margin: 2rem auto;
    border-radius: 50%;
    background-size: 140% 150%;
    transition: all linear 250ms;
    box-shadow: 1px 1px 1px -1px white;
  }
</style>
