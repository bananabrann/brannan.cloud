<script lang="ts">
  import type { BlogTag } from "$lib/interfaces/BlogPostTag.interface";
  import moment from "moment";

  export let title: string;
  export let description: string;
  export let slug: string;
  export let date: Date;
  export let tags: Array<BlogTag> = [];
</script>

<div class="blog-snippet">
  <a href={`blogs/${slug}`}>
    <small class="blog-snippet-date">{moment(date).format("MMMM Do, YYYY")}</small>
    <h2>{title}</h2>

    {#if tags.length > 0}
      <ul class="blog-snippet-tag-list">
        {#each tags as tag}
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
