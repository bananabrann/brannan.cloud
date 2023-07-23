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
  <img src={BananaManOnHisSide} alt="" style="width: 220px;" />

  <p>
    <span>Hello!</span> This is brannan.cloud. I host everything from the website you see here to the
    TV application in my grandma's living room.
  </p>
  <p>
    I'm a full-time software developer, a prior U.S. Marine, and as is tradition of all people that
    deal with computers, my family's tech support.
  </p>

  <div style="margin: 0 auto 0 0">
    <Directory />
  </div>

  <div id="social-media">
    <a href="https://discordapp.com/users/321317378862350346" target="_blank">
      <Discord height={socialMediaIconHeight} width={socialMediaIconHeight} />
    </a>
    <a href="https://github.com/bananabrann" target="_self">
      <GitHub height={socialMediaIconHeight} width={socialMediaIconHeight} />
    </a>
  </div>

  <div>
    <!-- prettier-ignore -->
    <small>
        Website and systems by me.
        <a
          href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE"
          target="_blank">MIT license, 2023.<OpenInNew />
        </a>
      </small>
  </div>

  <div>
    <small>Art assets by various artists. All rights reserved.</small>
  </div>
</main>

<style lang="scss">
  main {
    max-width: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #social-media {
    display: flex;
    gap: 0.65rem;
  }
</style>
