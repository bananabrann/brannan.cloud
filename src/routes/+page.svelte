<script>
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";

  import Wrench from "svelte-material-icons/Wrench.svelte";

  import { version } from "$app/environment";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  const socialMediaIconHeight = "100%";
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
  <section id="social">
    <a href="https://discordapp.com/users/321317378862350346" target="_self">
      <Discord height={socialMediaIconHeight} width={socialMediaIconHeight} />
    </a>
    <a href="https://github.com/bananabrann" target="_self">
      <GitHub height={socialMediaIconHeight} width={socialMediaIconHeight} />
    </a>
    <a href="/works">
      <Wrench height={socialMediaIconHeight} width={socialMediaIconHeight} />
    </a>
  </section>

  <section id="legal">
    <p>
      Web by @bananabrann,
      <a href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE" target="_blank"
        >MIT license, 2023.<OpenInNew />
      </a>
    </p>
    <p>Art assets by various artists, all rights reserved.</p>
    <small> v{version} </small>
  </section>
</main>

<style lang="scss">
  $upper-width: 475px;

  main {
    padding-top: 20vh;
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

  #social {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    gap: 2.5rem;

    @media (orientation: portrait) {
      gap: 15px;
    }

    a {
      height: 100%;
      width: 8.5vw;

      @media (orientation: portrait) {
        width: 24vw;
      }
    }
  }

  #legal {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.1rem;
    align-items: center;

    p {
      margin: 0;
      padding: 0 2px;
    }

    > * {
      text-align: center;
    }
  }
</style>
