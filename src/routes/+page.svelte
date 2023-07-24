<script lang="ts">
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import BananaManOnHisSide from "$lib/assets/png/bananaman.png";

  export let socialMediaIconHeight: string = "2rem";
</script>

<main>
  <section style="margin: 0 auto auto 0;">
    <Directory />
  </section>

  <section>
    <div id="social-media">
      <a href="https://discordapp.com/users/321317378862350346" target="_blank">
        <Discord height={socialMediaIconHeight} width={socialMediaIconHeight} />
      </a>
      <a href="https://github.com/bananabrann" target="_self">
        <GitHub height={socialMediaIconHeight} width={socialMediaIconHeight} />
      </a>
    </div>

    <div id="legal">
      <!-- prettier-ignore -->
      <small>
          <code>*.brannan.cloud</code> websites and systems by me.
          <a
            href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE"
            target="_blank">MIT license, 2023.<OpenInNew />
          </a>
      </small>
      <small> Art assets by various artists. All rights reserved. </small>
    </div>
  </section>
</main>

<style lang="scss">
  main {
    max-width: 375px;
    margin: 0 auto;
    padding-top: 20vh;
    display: flex;
    flex-flow: column nowrap;

    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  section {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  #legal {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.1rem;
    align-items: center;

    code {
      font-size: 0.75rem;
    }
  }

  #social-media {
    display: flex;
    gap: 0.55rem;
  }
</style>
