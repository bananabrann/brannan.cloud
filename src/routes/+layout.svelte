<script>
  import "../app.scss";
  import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
  import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
  import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";
  import Stars from "$lib/assets/svg/stars.svg.svelte";
  import { Analytics } from "@vercel/analytics";
</script>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>brannan.cloud</title>
  <link rel="stylesheet" href="https://use.typekit.net/xtr6jqc.css" />
</head>

<content>
  <slot />
</content>

<div id="cloud-board">
  <div class="cloud-row">
    <span class="cloud cloud-slow">
      <Clouds3 />
    </span>
    <span class="cloud cloud-slow">
      <Clouds3 />
    </span>
  </div>

  <div class="cloud-row">
    <span class="cloud cloud-medium">
      <Clouds2 />
    </span>
    <span class="cloud cloud-medium">
      <Clouds2 />
    </span>
  </div>

  <div class="cloud-row">
    <span class="cloud cloud-fast">
      <Clouds1 />
    </span>
    <span class="cloud cloud-fast">
      <Clouds1 />
    </span>
  </div>
</div>

<div id="star-board">
  <Stars />
</div>

<Analytics />

<style lang="scss">
  @use "../variables.scss";
  @use "sass:math";

  content {
    margin: auto 1rem;
  }

  @keyframes moveToLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  #cloud-board {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: -1;

    .cloud-row {
      display: flex;
      position: fixed;
      bottom: 0;
      width: 400%;
      @media screen and (orientation: portrait) {
        width: 680%;
      }
    }
    .cloud {
      width: 100%;
    }

    .cloud-fast {
      animation: moveToLeft 60s cubic-bezier(0.31, 0.41, 0.6, 0.44) infinite;
      z-index: 1;
    }

    .cloud-medium {
      animation: moveToLeft 125s linear infinite;
    }

    .cloud-slow {
      animation: moveToLeft 300s linear infinite;
    }
  }

  #star-board {
    position: fixed;
    top: 0;
    z-index: -2;
    width: 100vw;

    @media (orientation: landscape) {
      width: 120vw;
    }

    @media (orientation: portrait) {
      width: 150vw;
    }
  }
</style>
