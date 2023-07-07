<script>
  export let data;
</script>

<h1>Blog</h1>

<ul>
  {#each data.summaries as { slug, title, tags, summary }}
    <li>
      <a href="/posts/{slug}">{title}</a>
      <div>
        {#each tags as tag}
          <span><code>{tag.name}</code></span>
        {/each}
      </div>
      <p>{summary}</p>
    </li>
  {/each}
</ul>
