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
    color: transparent;
    transition: all 100ms linear;
    animation: gradient 1s infinite;
  }

  header > a:active {
    filter: drop-shadow(0 0 0.5rem white);
    transition: filter linear 1ms;
  }
  li a {
    padding-inline: 0.5rem;
    font-weight: 500;
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    color: #ffffff80;
    transition: all ease 100ms;
  }
  li a:hover {
    filter: drop-shadow(0 0 0.25rem white);
    color: #ffffff;
    transition: all ease 100ms;
  }

  li a:active {
    filter: drop-shadow(0 0 1rem white);
  }

  @keyframes gradient {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>
