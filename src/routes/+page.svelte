<script>
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import Mastodon from "svelte-material-icons/Mastodon.svelte";
  import BananamanLaying from "$lib/assets/png/bananaman-on-side.png";
  import { version } from "$app/environment";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  const socialMediaIconHeight = "1.25rem";
  let currentLang = "en";

  $: bio =
    currentLang === "es"
      ? "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos. A mí también estoy aprendiendo español, y siempre quiero usarlo cuando puedo."
      : "I'm a software engineer, tuba player, and a prior U.S. Marine.";

  onMount(() => {
    // If user has selected a language before, use that language.
    if (browser) {
      const localStorageLanguage = localStorage.getItem("brannan.cloud-bioLang");

      if (localStorageLanguage) currentLang = localStorageLanguage;
    }
  });

  // Changes the language setting of the site, saving to localStorage.
  // If some weird stuff happens, or it's the user's first time visiting the site, the
  // site will default to English.
  function changeLang(lang) {
    if (lang === "es") {
      currentLang = "es";
    } else {
      currentLang = "en";
    }

    localStorage.setItem("brannan.cloud-bioLang", currentLang);
  }
</script>

<main>
  <!-- <Bananaman /> -->
  <img src={BananamanLaying} alt="" style="height: 210px;" />
  <section>
    <p id="lang-selection-container">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => changeLang("en")}>[en]</span>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span on:click={() => changeLang("es")}>[es]</span>
    </p>
    <p>
      {bio}
    </p>
  </section>

  <section id="directory">
    <!-- <Directory /> -->
    <a href="/">Homepage</a>

    <a href="https://files.brannan.cloud" target="_blank"
      >Files <small>(private)</small><OpenInNew />
    </a>

    <a href="https://tv.brannan.cloud" target="_blank">Grandma's TV<OpenInNew /></a>

    <br />

    <a href="https://discordapp.com/users/321317378862350346" target="_blank">
      <Discord height={socialMediaIconHeight} width={socialMediaIconHeight} />Discord
    </a>
    <a href="https://github.com/bananabrann" target="_self">
      <GitHub height={socialMediaIconHeight} width={socialMediaIconHeight} />GitHub
    </a>
    <a href="" target="_self">
      <Mastodon height={socialMediaIconHeight} width={socialMediaIconHeight} />Mastodon
    </a>
  </section>

  <section>
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
  $upper-width: 475px;

  main {
    // margin: 0 auto;
    padding-top: 2vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  section {
    width: 100%;
    max-width: $upper-width;
  }

  #directory {
    display: flex;
    flex-flow: column nowrap;
  }

  #lang-selection-container {
    text-align: right;
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

    > * {
      text-align: center;
    }
  }
</style>
