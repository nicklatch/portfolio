<div class="seperator">
  <div class="seperator__border" />
  <div class="seperator__shadow" />
</div>

<style>
  .seperator {
    padding-block: 3vh;
  }

  .seperator__border {
    margin-top: 0.5rem;
    margin-bottom: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(
      to right,
      transparent,
      var(--font__color),
      transparent
    );
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background-position: left top;
  }

  .seperator__shadow {
    border-top-width: 2px;
    border-image-source: linear-gradient(
      to right,
      transparent,
      var(--shadow__color),
      transparent
    );
    border-image-slice: 1;
    background-image: radial-gradient(
      at top center,
      #323232,
      transparent 70%
    );
    height: 3vh;
    margin-top: 0;
  }

  @media (prefers-color-scheme: light) {
    .seperator__shadow {
          background-image: radial-gradient(
      at top center,
      var(--shadow__color),
      transparent 70%
    );
    }
  }
</style>
