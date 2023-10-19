<script>
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import { browser } from "$app/environment";

  import { onMount } from "svelte";

  const socialMediaIconHeight = "2rem";
  let currentLang = "en";

  $: bio =
    currentLang === "es"
      ? "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos."
      : "Software engineer, tuba player, and prior U.S. Marine."; // English is default

  onMount(() => {
    // If user has selected a language before, use that language.
    if (browser) {
      const localStorageLanguage = localStorage.getItem("brannan.cloud-bioLang");

      if (localStorageLanguage) {
        currentLang = localStorageLanguage;
      }
    }
  });

  // Changes the language setting of the site
  function changeLang(lang) {
    if (lang === "es") {
      currentLang = "es";
      localStorage.setItem("brannan.cloud-bioLang", currentLang);
    } else {
      // English is default
      currentLang = "en";
      localStorage.setItem("brannan.cloud-bioLang", currentLang);
    }
  }
</script>

<main>
  <section id="directory">
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
      <small> v{version} </small>
    </div>
  </section>
</main>

<style lang="scss">
  $upper-width: 400px;

  main {
    margin: 0 auto;
    padding-top: 2vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  #blog-controls {
    display: flex;
    justify-content: center;
    gap: 0.45rem;

    button {
      background-color: transparent;
      border: none;
      padding: 0.25rem;
      cursor: pointer;
      border-radius: 0.25rem;
      color: $light;

      &:hover {
        background-color: rgba(112, 128, 144, 0.333);
      }
    }
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

  #blog {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    > div {
      flex-grow: 1;
      width: 100%;
    }
  }

  #blog-content {
    width: 80vw;
    max-width: 960px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;

    overflow-x: hidden;

    @media (max-width: $small-screen-breakpoint) {
      width: 95vw;
      flex-wrap: wrap;
    }
  }

  #bio {
    width: 100%;
    max-width: $upper-width;
    * {
      margin: 0;
      max-width: 100%;
    }
  }

  #directory {
    width: 100%;
    max-width: $upper-width;
    display: flex;
  }

  #legal {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.1rem;
    align-items: center;

    > * {
      text-align: center;
    }
  }

  #social-media {
    display: flex;
    justify-content: center;
    gap: 0.55rem;
    margin-top: 1rem;
  }
</style>
