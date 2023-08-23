<div class="seperator">
  <div class="seperator__border" />
  <div class="seperator__shadow" />
</div>

<style>
  .seperator {
    padding-top: 2vh;
  }
  .seperator__border {
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
    background-size: 100% 2vh;
    background-position: left top;
  }

  .seperator__shadow {
    border-top-width: 2vh;
    border-image-source: linear-gradient(
      to right,
      transparent,
      var(--shadow__color),
      transparent
    );
    border-image-slice: 1;
    background-image: radial-gradient(at top center, #323232, transparent 70%);
    height: 2vh;
    margin-top: 0;
  }

  @media screen and (max-width: 630px) {
    .seperator {
      padding-top: 2vw;
    }
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
