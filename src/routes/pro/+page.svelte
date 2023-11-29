<script>
  import SealVariant from "svelte-material-icons/SealVariant.svelte";
  import FileEye from "svelte-material-icons/FileEye.svelte";
  import FileDownload from "svelte-material-icons/FileDownload.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import ListBox from "svelte-material-icons/ListBox.svelte";
</script>

<main>
  <h1>Documents & Links</h1>

  <button><ListBox /> See Projects</button>
  <button><SealVariant /> View ITIL Certificate</button>
  <button><SealVariant /> View AZ-204 Certificate</button>
  <button><FileEye /> View Resume </button>
  <button><FileDownload /> Download Resume as PDF </button>

  <h1>Socials</h1>

  <button><GitHub /> Open GitHub</button>
  <button><Discord /> Open Discord</button>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    /* height: 100vh; */
  }

  button {
    width: 20rem;
  }
</style>
