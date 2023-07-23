<script lang="ts">
  import "../app.scss";
  import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
  import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
  import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";
</script>

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>brannan.cloud</title>
  <link rel="stylesheet" href="https://use.typekit.net/xtr6jqc.css" />
</head>

<main>
  <!-- <slot /> -->
</main>

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

<style lang="scss">
  @keyframes moveToLeft {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  main {
    margin: auto 1rem;
  }

  #cloud-board {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .cloud-row {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 200%;
  }
  .cloud {
    width: 100%;
  }

  .cloud-fast {
    animation: moveToLeft 60s cubic-bezier(0.31, 0.41, 0.6, 0.44) infinite;
  }

  .cloud-medium {
    animation: moveToLeft 110s linear infinite;
  }

  .cloud-slow {
    animation: moveToLeft 240s linear infinite;
  }
</style>
