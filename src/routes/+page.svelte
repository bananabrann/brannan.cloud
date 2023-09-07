<script lang="ts">
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  // import ArrowRight from "svelte-material-icons/ArrowRight.svelte";
  // import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  // import ListBoxOutline from "svelte-material-icons/ViewList.svelte";
  // import Refresh from "svelte-material-icons/Refresh.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import { browser } from "$app/environment";
  import BlogSnippet from "$lib/components/BlogSnippet.svelte";
  import blogs from "$lib/blogMetaData";
  import moment from "moment";
  import "moment/locale/es";
  import "moment/locale/en-gb";

  export let socialMediaIconHeight: string = "2rem";

  let currentLang: "es" | "en" = "en";

  $: bio =
    currentLang === "es"
      ? "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos."
      : "Software engineer, tuba player, and prior U.S. Marine."; // English is default

  /*
  $: formatDate = (dateString) => {
    return moment(dateString)
      .locale(currentLang === "es" ? "es" : "en-gb")
      .format("MMMM Do, YYYY");
  };
  */

  // If user has selected a language before, use that language
  if (browser) {
    const localStorageLanguage: string | null = localStorage.getItem("brannan.cloud-bioLang");

    if (localStorageLanguage) {
      currentLang = localStorageLanguage as "es" | "en";
    }
  }

  // Changes the language setting of the site
  function changeLang(lang: "es" | "en") {
    if (lang === "es") {
      currentLang = "es";
      moment.locale("es");
      localStorage.setItem("brannan.cloud-bioLang", currentLang);
    } else {
      // English is default
      currentLang = "en";
      moment.locale("en-gb");
      localStorage.setItem("brannan.cloud-bioLang", currentLang);
    }
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

    <p>
      {`* * *`}
    </p>

    <div id="blog">
      {#each blogs as blog}
        <BlogSnippet
          metaData={{
            ...blog
          }}
        />
      {/each}

      <!-- 
      <div id="blog-controls">
        <div />
        <div>
          <ArrowLeft />
          <Refresh />
          <ArrowRight />
        </div>
        <div>
          <ListBoxOutline />
        </div>
      </div>
    </div>
     -->

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

  #blog {
    width: 106%;
  }

  section {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }

  /*

  #blog-controls {
    display: flex;
    justify-content: space-between;
    padding: 0 0.6rem;
    
    div {
      cursor: pointer;
    }
  }
  */

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
    justify-content: center;
    gap: 0.55rem;
    margin-top: 1rem;
  }
</style>
