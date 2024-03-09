<script>
  import "../app.scss";
  import WebStatusBadge from "../lib/components/WebStatusBadge/WebStatusBadge.svelte";
  import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
  import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
  import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";
  import Stars from "$lib/assets/svg/stars.svg.svelte";
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
