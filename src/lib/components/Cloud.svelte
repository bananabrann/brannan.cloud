<script lang="ts">
  import type { Cloud } from "$lib/interfaces/Cloud.interface";
  import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
  import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
  import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";

  export let cloud: Cloud;
</script>

{#if cloud.position === "foreground"}
  <Clouds1 />
{/if}
{#if cloud.position === "middle"}
  <Clouds2 />
{/if}
{#if cloud.position === "background"}
  <Clouds3 />
{/if}
