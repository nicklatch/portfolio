<header>
  <a href="/">&lt;Nick Latcham /&gt;</a>
  <nav>
    <ul>
      <li>
        <a href="/about">About</a>
      </li>
      <li><a href="/projects">Projects</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
  }

  header > a {
    font-size: clamp(1.45rem, 3vw, 2.5rem);
    font-weight: 700;
    padding-inline: 0.5rem;
  }
  header > a:hover {
    background: linear-gradient(to right, #ff0094 0%, #ffec00 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 250ms linear;
    animation: gradient 1s infinite;
  }

  header > a:active {
    filter: drop-shadow(0 0 1.5rem white);
    transition: filter linear 1ms;
  }
  li a {
    padding-inline: 0.5rem;
    font-weight: 500;
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    color: #ffffff80;
    transition: all ease 100ms;
  }
  li a:hover,
  li a:active {
    filter: drop-shadow(0 0.5ch 0.5rem white);
    text-decoration: underline 2px white;
    color: #ffffff;
    transition: all ease 100ms;
  }

  li a:active {
    filter: drop-shadow(0 0 1rem white);
  }

  @media screen and (max-width: 800px) {
    header > a:focus {
      filter: drop-shadow(0 0 1.5rem white);
      background: linear-gradient(to right, #ff0094 0%, #ffec00 100%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: all 250ms linear;
      animation: gradient 1s infinite;
    }
  }
</style>
