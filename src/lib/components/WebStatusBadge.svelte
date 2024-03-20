<script>
  import CheckBold from "svelte-material-icons/CheckBold.svelte";
  import Loading from "svelte-material-icons/Loading.svelte";
  import Alert from "svelte-material-icons/Alert.svelte";
  import ServerRemove from "svelte-material-icons/ServerRemove.svelte";

  export let status;
  export let message = "";
</script>

{#if status === "up"}
  <span
    class="inline-flex font-medium text-sm align-middle items-center rounded-md py-1 px-2 text-green-100 bg-green-500"
    ><CheckBold />&nbsp;Online</span
  >
{:else if status === "down"}
  <div
    class="inline-flex font-medium text-sm align-middle items-center rounded-md py-1 px-2 text-gray-100 bg-gray-500"
  >
    <Alert />&nbsp;Down
  </div>
{:else if status === "loading"}
  <span
    class="inline-flex font-medium text-sm align-middle items-center rounded-md py-1 px-2 text-yellow-100 bg-yellow-500"
    ><span class="animate-spin"><Loading /></span>&nbsp;Checking service...</span
  >
{:else}
  <span
    class="inline-flex font-medium text-sm align-middle items-center rounded-md py-1 px-2 text-red-100 bg-red-500"
    ><ServerRemove />&nbsp;{message.length > 0 ? message : "Internal error"}</span
  >
{/if}
