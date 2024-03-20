<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import AboutMe from "$lib/assets/png/aboutme.png";
  import Chat from "svelte-material-icons/Chat.svelte";
  import FilesIcon from "svelte-material-icons/CloudUpload.svelte";
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import TVIcon from "svelte-material-icons/TelevisionClassic.svelte";
  import ListBox from "svelte-material-icons/ListBox.svelte";
  import WebStatusBadge from "$lib/components/WebStatusBadge.svelte";

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

<div class="flex flex-col sm:flex-row max-w-6xl m-auto p-8">
  <div class="w-full sm:w-1/2 md:w-2/3">
    <h1 class="text-3xl text-center my-8">Welcome to the Brannan Cloud!</h1>
    <p>
      --the root of most of my stuff hosted on the internet. My name is Lee. I am a software developer in the United States making apps and systems Americans use
      around the world 🌐
      <br />
      Most of my career has been web development with JavaScript and TypeScript, but I've dabbled in
      other tech, especially in my early career.
      <br />
      The website is limbo right now, but I'm working on it.
    </p>
  </div>

  <div class="w-full sm:w-1/2 md:w-1/3">
    <h2 class="text-3xl text-center my-8">Quick Links</h2>
    <div class="flex mx-4 my-2 flex-col gap-5 flex-wrap justify-between sm:flex-row">
      <div class=" bg-slate-800 bg-opacity-75 shadow-lg rounded-lg backdrop-blur-sm">
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">Grandma's TV</h3>
          {#await data.streamed.isTvOnline}
            <WebStatusBadge status="loading" />
          {:then isTvOnline}
            <WebStatusBadge status={isTvOnline ? "up" : "down"} />
          {:catch error}
            <WebStatusBadge status="error" />
          {/await}
          <p class="text-sm">
            TV application for my grandma, making it simple and clear for her to select what she
            wants to watch. Also has a chatbot tailored to telling her what shows are on what
            streaming service
          </p>
          <div class=" flex flex-col justify-start space-x-2 mt-4">
            <a
              href="https://tv.brannan.cloud"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded decoration max-w-36"
            >
              Go to TV
            </a>
            <a
              href="https://github.com/bananabrann/tv.brannan.cloud"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm mt-2 underline"
            >
              View source
            </a>
          </div>
        </div>
      </div>

      <div
        class=" bg-slate-800 bg-opacity-75 shadow-lg rounded-lg overflow-hidden backdrop-blur-sm"
      >
        <div class="p-6">
          <h3 class="text-2xl font-bold mb-2">ChatLibre</h3>
          {#await data.streamed.isChatOnline}
            <WebStatusBadge status="loading" />
          {:then isTvOnline}
            <WebStatusBadge status={isTvOnline ? "up" : "down"} />
          {:catch error}
            <WebStatusBadge status="error" />
          {/await}
          <p class="text-sm">
            Enhanced ChatGPT clone for the Brannan family without any usage limitations. Only runs
            as needed for cost savings. Need it turned on? Just ask me!
          </p>
          <div class=" flex flex-col justify-start space-x-2 mt-4">
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-36"
            >
              Visit
            </a>
            <a
              href="https://github.com/bananabrann/chat.brannan.cloud"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm mt-2 underline"
            >
              View source
            </a>
            <a
              href="https://docs.librechat.ai/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm mt-2 underline">ChatLibre documentation</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
