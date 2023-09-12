<script lang="ts">
  import type { Article } from "$lib/interfaces/Article.interface";
  import OpenInNew from "svelte-material-icons/OpenInNew.svelte";
  import moment from "moment";
  import { fly } from "svelte/transition";
  import { fade } from "svelte/transition";

  export let data: Article;
  export let fadeOpposite: boolean = false;
</script>

<article
  in:fly={{ x: fadeOpposite ? -100 : 100, duration: 500, delay: 150 }}
  out:fade={{ duration: 150 }}
>
  <a href={data.link} target="_blank">
    <small class="article-date">{data.readTime}, {moment(data.date).format("MMMM Do, YYYY")}</small>
    <h2>
      {data.title}
      <OpenInNew />
    </h2>

    {#if data.tags.length > 0}
      <ul class="article-tag-list">
        {#each data.tags as tag}
          <li class="tag"><code>{tag}</code></li>
        {/each}
      </ul>
    {/if}
  </a>
</article>

<style lang="scss">
  article {
    @include gentle-transition();
    padding: 1rem;
    border-radius: 0.5rem;
    width: 100%;

    @media (max-width: $small-screen-breakpoint) {
      width: 100%;
      max-width: 90vw;
      flex-grow: 1;
    }

    &:hover {
      background-color: rgba(112, 128, 144, 0.333);
      @include gentle-transition();
    }

    a {
      text-decoration: none;
    }

    h2 {
      font-size: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.5rem;
      text-decoration: solid underline $light;
    }

    .article-date {
      display: block;
      text-align: left;
    }

    ul {
      // Remove default ul styling
      list-style-type: none;
      margin: 0;
      padding: 0;
      text-align: start;

      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      // align-items: flex-start;
      align-items: baseline;

      justify-content: flex-start;

      .tag {
        background-color: rgba(95, 95, 95, 0.452);
        border-radius: 0.25rem;
        padding: 0.11rem 0.45rem;
      }
    }
  }
</style>
