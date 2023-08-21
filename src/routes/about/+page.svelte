<script lang="ts">
  import me from '$lib/assets/me.png';
</script>

<div>
  <img src={me} alt="my face" />
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
    height: clamp(200px, 20vw, 500px);
    background-color: black;
    filter: grayscale();
  }

  img:hover {
    filter: unset;
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
    width: fit-content;
    margin: 2rem auto;
    border-radius: 50%;
    border-right: 4px solid transparent;
    background: linear-gradient(
      330deg,
      transparent 35%,
      #ffffff95,
      transparent 90%
    );
    background-size: 140% 150%;
    filter: drop-shadow(1.5rem 1.25rem 1rem #32323298)
      drop-shadow(1.5rem 0.85rem 1rem #ffffff90);
    overflow: hidden;
    transition: all linear 250ms;
  }
  div:hover {
    background: linear-gradient(330deg, #ffec00 35%, #ff0094, transparent 90%);
    background-size: 140% 150%;
    filter: drop-shadow(1.5rem 1.25rem 1rem #ffec0098)
      drop-shadow(1.5rem 0.85rem 1rem #ff009490);
  }

  @media screen and (max-width: 800px) {
    div {
      background: linear-gradient(
        330deg,
        #ffec00 35%,
        #ff0094,
        transparent 90%
      );
      background-size: 140% 150%;
      filter: drop-shadow(1.5rem 1.25rem 1rem #ffec0098)
        drop-shadow(1.5rem 0.85rem 1rem #ff009490);
    }

    img {
      filter: unset;
    }
  }
</style>
