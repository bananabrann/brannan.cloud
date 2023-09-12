<script lang="ts">
  import GitHub from "svelte-material-icons/Github.svelte";
  import Discord from "svelte-material-icons/Discord.svelte";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import ArrowRight from "svelte-material-icons/ArrowRight.svelte";
  import ArrowLeft from "svelte-material-icons/ArrowLeft.svelte";
  import Refresh from "svelte-material-icons/Refresh.svelte";
  import { version } from "$app/environment";
  import Directory from "$lib/components/Directory.svelte";
  import { browser } from "$app/environment";
  import articles from "$lib/articles";
  import moment from "moment";
  import "moment/locale/es";
  import "moment/locale/en-gb";
  import Article from "$lib/components/Article.svelte";
  import type { Article as IArticle } from "$lib/interfaces/Article.interface";
  import { fade } from "svelte/transition";

  export let socialMediaIconHeight: string = "2rem";

  const ARTICLES_PER_PAGE = 2;

  let currentLang: "es" | "en" = "en";
  let currentArticleIndex: number = 0;
  let viewedArticles = articles.slice(currentArticleIndex, ARTICLES_PER_PAGE);
  let isLastArrowClickedForward: boolean = false;

  $: bio =
    currentLang === "es"
      ? "Yo soy ingeniero de software, tubista, y un exmarino de los Estados Unidos."
      : "Software engineer, tuba player, and prior U.S. Marine."; // English is default

  $: currentPageNumber = Math.floor(currentArticleIndex / ARTICLES_PER_PAGE) + 1;
  $: totalPageNumber = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  $: articlePages = `${currentPageNumber}/${totalPageNumber}`;

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

  function articlesGoForward() {
    let newArticles: Array<IArticle>;
    isLastArrowClickedForward = true;

    // If the next chunk of articles starts out of bounds...
    if (!articles[currentArticleIndex + ARTICLES_PER_PAGE]) {
      // No need to worry about remainder, as .slice() won't return weird things. E.g.
      // let articlesLeft = articles.length % ARTICLES_PER_PAGE
      // We don't have to handle the excess articles here in JavaScript.
      currentArticleIndex = 0;
      newArticles = articles.slice(0, ARTICLES_PER_PAGE);
    } else {
      currentArticleIndex += ARTICLES_PER_PAGE;
      newArticles = articles.slice(currentArticleIndex, currentArticleIndex + ARTICLES_PER_PAGE);
    }

    viewedArticles = newArticles;
  }

  function articlesGoBackward() {
    let newArticles: Array<IArticle>;
    isLastArrowClickedForward = false;

    if (!articles[currentArticleIndex - ARTICLES_PER_PAGE]) {
      currentArticleIndex = 0;
      newArticles = articles.slice(0, ARTICLES_PER_PAGE);
    } else {
      currentArticleIndex -= ARTICLES_PER_PAGE;
      newArticles = articles.slice(currentArticleIndex, ARTICLES_PER_PAGE);
    }

    viewedArticles = newArticles;
  }
</script>

<main>
  <section id="bio">
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
    <Directory />
  </section>

  <section>
    <h3 style="text-align: center">Reading List</h3>

    <div id="blog-content">
      {#each viewedArticles as article (article.slug)}
        <Article
          fadeOpposite={!isLastArrowClickedForward}
          data={{
            ...article
          }}
        />
      {/each}
    </div>

    <div id="blog-controls">
      <button on:click={articlesGoBackward}>
        <ArrowLeft />
      </button>
      <p>{articlePages}</p>
      <button on:click={articlesGoForward}>
        <ArrowRight />
      </button>
    </div>
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
