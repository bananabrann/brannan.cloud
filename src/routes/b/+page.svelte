<script lang="ts">
	import type { PageData } from "./$types";

	import { POSTS_LIST, type Post } from "$lib/index";

	export let data: PageData;
</script>

{#each POSTS_LIST as post}
	<article>
		<a href={`b/${post.slug}`}>{post.title}</a>
		
	</article>
{/each}