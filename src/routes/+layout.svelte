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

<div>
  <!-- <slot /> -->
</div>

<div id="cloud-board">
  <div class="cloud-row">
    <Clouds1 />
    <Clouds1 />
  </div>
  <div class="cloud-row">
    <Clouds2 />
    <Clouds2 />
  </div>
  <div class="cloud-row">
    <Clouds3 />
    <Clouds3 />
  </div>
</div>

<style lang="scss">
  #cloud-board {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .cloud-row {
    display: flex;
  }
</style>
