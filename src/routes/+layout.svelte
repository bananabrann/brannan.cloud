<script>
  import "../app.scss";
  import WebStatusBadge from "../lib/components/WebStatusBadge/WebStatusBadge.svelte";
  import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
  import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
  import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";
  import Stars from "$lib/assets/svg/stars.svg.svelte";
  import { version } from "$app/environment";
</script>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>brannan.cloud</title>
  <link rel="stylesheet" href="https://use.typekit.net/xtr6jqc.css" />
</head>

<main>
  <slot />

    <div id="star-board">
      <Stars />
    </div>

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
</main>

<footer class="bg-slate-800 flex flex-wrap p-4">
  <div class="w-full sm:w-1/2 p-2">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/works">Projects & Works</a></li>
      <li><a href="https://tv.brannan.cloud">tv.brannan.cloud</a></li>
      <li><a href="http://chat.brannan.cloud">chat.brannan.cloud</a></li>
    </ul>
  </div>

  <div class="w-full sm:w-1/2 p-2 text-center">
    <p class="">
      Website by me,
      <a href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE" target="_blank"
        >MIT license, 2024.
      </a><br />
      Art and web assets by various artists, all rights reserved.
    </p>

    <small> Version {version} </small>
  </div>
</footer>

<style lang="scss">
  @use "../variables.scss";
  @use "sass:math";


  @keyframes moveToLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  #cloud-board {
    position: relative;
    bottom: 0;
    z-index: -1;
    height: auto;

    .cloud-row {
      display: flex;
      position: absolute;
      bottom: 0;
      width: 520%;

      @media screen and (orientation: portrait) {
        width: 780%;
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

  main {
    @include sky-gradient();
    z-index: 1;
    position: relative;
    overflow-x: hidden;
  }

  #star-board {
    position: absolute;
    top: 0;
    z-index: -2;
    max-width: 200%;
    overflow-x: hidden;

    @media (orientation: landscape) {
      width: 120vw;
    }

    @media (orientation: portrait) {
      width: 150vw;
    }
  }
</style>
