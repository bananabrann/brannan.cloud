<script>
  import ListBox from "svelte-material-icons/ListBox.svelte";
  import SealVariant from "svelte-material-icons/SealVariant.svelte";
  import FileAccount from "svelte-material-icons/FileAccount.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import LinkedIn from "svelte-material-icons/Linkedin.svelte";
</script>

<main>
  <h1>Documents & Links</h1>

  <a class="button" href="/works">
    <ListBox /> See Projects
  </a>
  <a class="button" href="https://files.brannan.cloud/docs/itil4.pdf" target="_self">
    <SealVariant /> ITIL Certificate
  </a>
  <a class="button" href="https://files.brannan.cloud/docs/az-204.png" target="_self">
    <SealVariant /> AZ-204 Certificate
  </a>
  <a class="button" href="https://files.brannan.cloud/docs/resume.pdf" target="_self">
    <FileAccount /> Resume
  </a>

  <h1>Socials</h1>

  <a class="button" href="https://linkedin.com/in/pbrann" target="_self">
    <LinkedIn /> LinkedIn
  </a>
  <a class="button" href="https://github.com/bananabrann" target="_self">
    <GitHub /> GitHub
  </a>
  <a class="button" href="https://discordapp.com/users/321317378862350346" target="_self">
    <Discord /> Discord
  </a>
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

  a.button {
    width: 16rem;

    &:hover {
      width: 17rem;
    }
  }
</style>
