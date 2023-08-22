<script lang="ts">
  import { page } from '$app/stores';

  const navLinks: Array<Path> = [
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
  ];
</script>

<header>
  <a href="/" class="header-name normal">&lt;Nick Latcham /&gt;</a>
  <a href="/" class="header-name small">&lt;NL /&gt;</a>
  <nav>
    <ul>
      {#each navLinks as navLink}
        <li>
          <a
            href={navLink.path}
            class:active={$page.url.pathname === navLink.path}
            >{navLink.name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  header {
    width: 100%;
    margin-top: 0;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
  }

  .header-name {
    font-size: clamp(1.45rem, 3vw, 2.5rem);
    font-weight: 700;
    padding-inline: 0.5rem;
    background-size: 200% 100%;
    background: var(--gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: background-size 500ms ease;
    transition: display linear 1s;
  }

  .normal {
    display: inline;
  }

  .small {
    display: none;
  }

  header > a:active {
    background-size: 150% 100%;
    scale: 0.99;
    transition: scale linear 20ms;
  }

  li a {
    padding-inline: 0.5rem;
    font-weight: 700;
    font-size: clamp(0.85rem, 1.5vw, 1rem);
    opacity: 70%;
    transition: all ease 100ms;
  }
  li a:is(:hover, :focused) {
    filter: drop-shadow(0 0 0.75rem var(--font__color))
      drop-shadow(0 0 0.1rem var(--bg__color));
    opacity: 100%;
  }

  .active {
    text-decoration: 2px underline var(--font__color);
    opacity: 100%;
    padding-bottom: 2px;
  }

  @media screen and (max-width: 376px) {
    .normal {
      display: none;
    }
    .small {
      display: unset;
    }
  }
</style>
