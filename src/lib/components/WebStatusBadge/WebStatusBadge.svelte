<script>
  import CheckBold from "svelte-material-icons/CheckBold.svelte";
  import Loading from "svelte-material-icons/Loading.svelte";
  import Alert from "svelte-material-icons/Alert.svelte";
  import ServerRemove from "svelte-material-icons/ServerRemove.svelte";
  export let status;
  export let message = "";
</script>

<div>
  {#if status === "up"}
    <span class="badge badge-up"><CheckBold />&nbsp;Online</span>
  {:else if status === "down"}
    <div class="badge badge-down"><Alert />&nbsp;Down</div>
  {:else if status === "loading"}
    <span class="badge badge-loading"
      ><span class="spin"><Loading /></span>&nbsp;Checking service...</span
    >
  {:else}
    <span class="badge badge-error"
      ><ServerRemove />&nbsp;{message.length > 0 ? message : "Internal error"}</span
    >
  {/if}
</div>

<style lang="scss">
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .badge {
    margin-top: 2px;
    margin-left: 2px;
  }

  .spin {
    animation: spin 2s linear infinite;
  }

  .badge-up {
    background-color: #4caf50;
  }

  .badge-down {
    background-color: #9e9e9e;
  }

  .badge-loading {
    background-color: #ffc107;
  }

  .badge-error {
    background-color: #9e9e9e; // #f44336;
  }
</style>
