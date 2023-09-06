<script lang="ts">
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import { browser } from "$app/environment";

  export let socialMediaIconHeight: string = "2rem";

  const bioLanguages = {
    en: "Software engineer, tuba player, and prior U.S. Marine.",
    es: "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos."
  };

  let bio: string;

  if (browser) {
    bio = bioLanguages[localStorage.getItem("brannan.cloud-bioLang") || "es"];
  } else {
    bio = bioLanguages["en"];
  }

  function changeLang(lang: "es" | "en") {
    if (lang === "es") {
      localStorage.setItem("brannan.cloud-bioLang", "es");
    } else {
      localStorage.setItem("brannan.cloud-bioLang", "en");
    }
    bio = bioLanguages[lang];
  }
</script>

<main>
  <section>
    <div>
      <p id="lang-selection-container">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => changeLang("en")}>[en]</span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <span on:click={() => changeLang("es")}>[es]</span>
      </p>
      <p>
        {bio}
      </p>
    </div>
  </section>

  <section>
    <div style="margin: 3px auto 5px 0;">
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
    max-width: 415px;
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

  #lang-selection-container {
    gap: 0.5rem;

    span {
      @include gentle-transition();
      cursor: pointer;

      &:hover {
        @include gentle-transition();
        text-decoration: underline;
        color: $brand-secondary;
      }
    }
  }

  #legal {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.1rem;
    align-items: center;
  }

  #social-media {
    display: flex;
    gap: 0.55rem;
  }
</style>
