<script lang="ts">
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
</script>

<div>
  <a href="/">Homepage</a>

  <a href="https://files.brannan.cloud" target="_blank"
    >Files <small>(private)</small><OpenInNew />
  </a>

  <a href="https://tv.brannan.cloud" target="_blank">Grandma's TV<OpenInNew /></a>
</div>

<style lang="scss">
  div {
    display: flex;
    flex-flow: column nowrap;
  }
</style>
