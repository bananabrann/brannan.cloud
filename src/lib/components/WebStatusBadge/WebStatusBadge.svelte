<script>
  import CheckBold from "svelte-material-icons/CheckBold.svelte";
  import Loading from "svelte-material-icons/Loading.svelte";
  import Alert from "svelte-material-icons/Alert.svelte";
  export let status;
</script>

<div>
  {#if status === "up"}
    <span class="badge badge-up"><CheckBold />&nbsp;Online</span>
  {:else if status === "down"}
    <div class="badge badge-down"><Alert />&nbsp;Down</div>
  {:else if status === "loading"}
    <span class="badge badge-loading"><span class="spin"><Loading /></span>&nbsp;Checking service...</span>
  {:else}
    <span class="badge badge-error">Failed to determine</span>
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
    display: inline-flex;
    align-items: center;
    height: 1.25rem;
    padding: 0.25em 0.5em;
    border-radius: 0.25em;
    font-size: 0.75em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #fff;
  }

  .spin {
    animation: spin 2s linear infinite;
  }

  .badge-up {
    background-color: #4caf50;
  }

  .badge-down {
    background-color: #f44336;
  }

  .badge-loading {
    background-color: #ffc107;
  }

  .badge-error {
    background-color: #9e9e9e;
  }
</style>
