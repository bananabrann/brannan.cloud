<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import Chat from "svelte-material-icons/Chat.svelte";
  import FilesIcon from "svelte-material-icons/CloudUpload.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import TVIcon from "svelte-material-icons/TelevisionClassic.svelte";
  import ListBox from "svelte-material-icons/ListBox.svelte";
  import WebStatusBadge from "../lib/components/WebStatusBadge/WebStatusBadge.svelte";

  /**
   * I do this because Azure Static Web Apps current does not support streaming responses.
   * This means that the entire HTML response is buffered and sent all at once, rather
   * than being streamed as it's generated. As of now, there is no way to disable this
   * for Azure Static Web Apps --it is a platform limitation.
   *
   * To get around this, I provide default values instead of just `export let data;`.
   */
  export let data;

  onMount(() => {
    // If user has selected a language before, use that language.
    if (browser) {
      const localStorageLanguage = localStorage.getItem("brannan.cloud-bioLang");

      if (localStorageLanguage) currentLang = localStorageLanguage;
    }
  });
</script>

<main>
  <article>
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
              <span style="display: flex; gap: 0.25rem;">
                <WebStatusBadge status={isChatOnline ? "up" : "down"} />
                {#if !isChatOnline}
                  <small id="shutdown-message">Auto shutdown daily @ 11pm CT</small>
                {/if}
              </span>
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

  #shutdown-message {
    background-color: rgba(darken($light, 80%), 0.2);
    padding: 3px 0.8rem;
    border-radius: 6.5px;
    margin-top: 2px;
  }
</style>
