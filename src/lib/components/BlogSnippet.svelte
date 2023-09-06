<script lang="ts">
  import type { BlogMetaData } from "$lib/interfaces/BlogMetaData.interface";
  import type { BlogTag } from "$lib/interfaces/BlogTag.interface";
  import moment from "moment";

  export let metaData: BlogMetaData;
</script>

<div class="blog-snippet">
  <a href={`blogs/${metaData.slug}`}>
    <small class="blog-snippet-date">{metaData.date}</small>
    <h2>{metaData.title}</h2>

    {#if metaData.tags.length > 0}
      <ul class="blog-snippet-tag-list">
        {#each metaData.tags as tag}
          <li class="tag"><code>{tag.name}</code></li>
        {/each}
      </ul>
    {/if}
  </a>
</div>

<style lang="scss">
  .blog-snippet {
    @include gentle-transition();

    border-radius: 1rem;
    padding: 0.75rem;

    .blog-snippet-date {
      display: block;
      text-align: left;
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
