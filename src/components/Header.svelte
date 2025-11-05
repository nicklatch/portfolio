<script lang="ts">
  import { page } from '$app/state';
  import GithubSvg from './logoSVG/GithubSVG.svelte';

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
            class:active={page.url.pathname === navLink.path}
            class:underline={page.url.pathname === navLink.path}
            >{navLink.name}
          </a>
        </li>
      {/each}
      <li><a href="https://github.com/nicklatch" target="_blank"><GithubSvg /></a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    width: 90%;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    display: flex;
    gap: clamp(1ch, 1vw, 2rem);
    justify-content: space-between;
    align-items: center;
  }

  .header-name {
    font-size: clamp(1.45rem, 3vw, 2.5rem);
    font-weight: 700;
    padding-inline: 0.5rem;
    background: var(--gradient__linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-size: 100% 100%;
    transition: all 200ms linear;
    width: fit-content;
  }

  .normal {
    display: inline;
  }

  .small {
    display: none;
  }

  .header-name:hover {
    background-size: 180% 200%;
  }
  .header-name:active {
    scale: 0.98;
  }

  li a {
    font-weight: 700;
    font-size: clamp(1rem, 1.5vw, 1rem);
    opacity: 70%;
    transition: all ease 100ms;
  }
  li a:is(:global(:hover, :focused)):not(.active) {
    filter: drop-shadow(0 0 0.75rem var(--font__color))
      drop-shadow(0 0 0.1rem var(--bg__color));
    opacity: 100%;
  }

  .active {
    opacity: 100%;
    padding-bottom: 1px;
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
