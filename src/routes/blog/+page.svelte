<script lang="ts">
	import PostSnippet from "$lib/components/PostSnippet/PostSnippet.svelte";
	import { slide } from "svelte/transition";
	import type { PageData } from "./$types";
	import type { Tag } from "@prisma/client";

	export let data: PageData;

	let filteredPosts = data.posts;
	let selectedTags = new Set<string>();

	function handleTagSelection(tag: Tag): void {
		const tagName = tag.name;

		if (selectedTags.has(tagName)) {
			selectedTags.delete(tagName);
		} else {
			selectedTags.add(tagName);
		}

		if (selectedTags.size === 0) {
			filteredPosts = data.posts;
		} else {
			filteredPosts = data.posts.filter((post) =>
				post.tags.some((tag: Tag) => selectedTags.has(tag.name)),
			);
		}

		// https://github.com/sveltejs/svelte/issues/10263
		// This will hopefully be addressed in Svelte 5!
		selectedTags = selectedTags;
	}
</script>

<div>
	<a role="button" href="/" class="button">Go home</a>
</div>

<div class="flex gap-x-6 gap-y-3 flex-wrap">
	{#each data.tags as tag}
		<!-- svelte-ignore a11y-interactive-supports-focus -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			on:click={() => handleTagSelection(tag)}
			class:selected-tag={selectedTags.has(tag.name)}
			class="tag text-xl bg-white bg-opacity-25 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-opacity-50 transition-all"
			role="button"
		>
			#{tag.name}
		</span>
	{/each}
</div>

<hr class="h-px my-8 bg-gray-200 border-0" />

<div class="space-y-8">
	{#each filteredPosts as article}
		<div transition:slide={{ delay: 0, duration: 300 }}>
			<PostSnippet post={article} />
		</div>
	{/each}
</div>

<style lang="postcss">
	.selected-tag {
		@apply transition-all bg-opacity-40 text-yellow-300 hover:bg-opacity-50;
		box-shadow: 0 0 15px rgba(255, 230, 3, 0.75);
	}
</style>
