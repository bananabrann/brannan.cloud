<script>
  import { version } from "$app/environment";
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Chat from "svelte-material-icons/Chat.svelte";
  import FilesIcon from "svelte-material-icons/CloudUpload.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import TVIcon from "svelte-material-icons/TelevisionClassic.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import ListBox from "svelte-material-icons/ListBox.svelte";
  import WebStatusBadge from "../lib/components/WebStatusBadge/WebStatusBadge.svelte";

  /**
   * I do this because Azure Static Web Apps current does not support streaming responses.
   * This means that the entire HTML response is buffered and sent all at once, rather
   * than being streamed as it's generated. As of not, there is no way to disable this
   * for Azure Static Web Apps --it is a platform limitation.
   *
   * To get around this, I provide default values instead of just `export let data;`.
   */
  export let data;

  let currentLang = "en";

  /*
  $: bio =
    currentLang === "es"
      ? "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos. A mí también estoy aprendiendo español, y siempre quiero usarlo cuando puedo."
      : "I'm a software engineer, tuba player, and a prior U.S. Marine.";
  */

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
  /*
  function changeLang(lang) {
    if (lang === "es") {
      currentLang = "es";
    } else {
      currentLang = "en";
    }

    localStorage.setItem("brannan.cloud-bioLang", currentLang);
  }
  */
</script>

<main>
  <article>
    <!-- 
      <section style="flex: 3">
        <h1>Hello!</h1>
        <p style="text-indent: 40px;">
          My name is Lee. I'm a software engineer, tuba player, and prior U.S. Marine. I was born and
          raised in the rural shrublands of West Texas. After high school, I enlisted in the U.S.
          Marine Corps. I traveled the world playing tuba, performing for foreign dignitaries and
          presidential audiences at home and abroad. The Marines gave me the launching pad for my life
          --I would do it again in a heartbeat. However, staying for a career wasn't for me.
        </p>
        
        <p>
          <span style="text-indent: 40px;" />After leaving the Marines, I attended a coding bootcamp
          in Washington, DC. I made a bunch of websites, built a simple listening robot named Decibel
          Debbie, and passed all my exams. From there, I was hired and begun my journey as a software
          developer.
        </p>
        <p>
          Most of my career has been web development with JavaScript, but I've dabbled in other tech,
        especially in my early career. For the past several years, I've been on teams building and
        maintaining core component libraries with Power Fx and creating and maintaining NodeJS
        websites.
      </p>
      
      <p>I still play tuba, and really love gardening and aquascaping.</p>
    </section>
    -->

    <!-- <section class="vertical-separator" /> -->

    <section style="flex: 2">
      <div>
        <h1>Apps</h1>
        <div class="link-button-container">
          <a href="https://files.brannan.cloud" class="button" style="margin-bottom: 0.5em;">
            <FilesIcon />
            <span style="padding-left: 2px;">Files <small>(private)</small></span>
          </a>

          <a href="https://tv.brannan.cloud" class="button">
            <TVIcon />
            <span style="padding-left: 2px;">Grandma's TV</span>
          </a>
          <div style="margin-bottom: 0.5em;">
            {#await data.streamed.isTvOnline}
              <WebStatusBadge status="loading" />
            {:then isTvOnline}
              <WebStatusBadge status={isTvOnline ? "up" : "down"} />
            {:catch error}
              <WebStatusBadge status="error" />
            {/await}
          </div>

          <a href="http://20.64.87.75/" class="button">
            <Chat />
            <span style="padding-left: 2px;">LibreChat</span>
          </a>
          <div style="margin-bottom: 0.5em;">
            {#await data.streamed.isChatOnline}
              <WebStatusBadge status="loading" />
            {:then isChatOnline}
              <WebStatusBadge status={isChatOnline ? "up" : "down"} />
            {:catch error}
              <WebStatusBadge status="error" message={error.message} />
            {/await}
          </div>
        </div>
      </div>
      <div>
        <h1>Links</h1>

        <a class="button" href="/works" style="margin-bottom: 0.5em;">
          <ListBox /> See Projects
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="button disabled" style="margin-bottom: 0.5em;">
          <span>Skills</span>
        </a>
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="button disabled" style="margin-bottom: 0.5em;">
          <span>Documents</span>
        </a>
        <a
          class="button"
          href="https://github.com/bananabrann"
          target="_self"
          style="margin-bottom: 0.5em;"
        >
          <GitHub /> GitHub
        </a>
        <a
          class="button"
          href="https://discordapp.com/users/321317378862350346"
          target="_self"
          style="margin-bottom: 0.5em;"
        >
          <Discord /> Discord
        </a>
      </div>
    </section>
  </article>

  <footer>
    <p>
      Web by me,
      <a href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE" target="_blank"
        >MIT license, 2023.<OpenInNew />
      </a>
    </p>
    <p>Art by various artists, all rights reserved.</p>
    <small> v{version} </small>
  </footer>
</main>

<style lang="scss">
  $upper-width: 350px;

  h1 {
    text-align: center;
  }

  main {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  article {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
    max-width: $upper-width;

    section {
      margin: 1rem;
    }
  }

  footer {
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
