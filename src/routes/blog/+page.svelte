<script lang="ts">
	import PostSnippet from "$lib/components/PostSnippet/PostSnippet.svelte";
	import { fly } from "svelte/transition";
	import type { PageData } from "./$types";
	import type { Tag } from "@prisma/client";
	import { page } from "$app/stores";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { sineInOut } from "svelte/easing";
	import { BlogPostSortByOption } from "$lib/enums/BlogPostSortByOption";

	export let data: PageData;

	let filteredPosts = data.posts;
	let sortOrder: BlogPostSortByOption;
	let selectedTags = new Set<string>();
	let inputSearch: string;

	$: sortOrder, filterPosts();
	$: inputSearch, filterPosts();

	function handleTagSelection(tag: Tag): void {
		const tagName = tag.name;
		let url: URL = $page.url;

		if (selectedTags.has(tagName)) {
			selectedTags.delete(tagName);
		} else {
			selectedTags.add(tagName);
		}

		if (selectedTags.size === 0) {
			url.searchParams.delete("tags");
		} else {
			// Combine selected tags into a concatenated string, e.g. "javascript,svelte".
			url.searchParams.set("tags", Array.from(selectedTags).join(","));
		}

		// https://github.com/sveltejs/svelte/issues/10263
		// This will hopefully be addressed in Svelte 5!
		selectedTags = selectedTags;

		filterPosts();

		goto(url);
	}

	function handleSortSelection(): void {
		let url: URL = $page.url;
		url.searchParams.set("sortOrder", sortOrder as string);
		goto(url);
	}

	function filterPosts(): void {
		if (selectedTags.size > 0) {
			filteredPosts = data.posts.filter((post) =>
				post.tags.some((tag: Tag) => selectedTags.has(tag.name)),
			);
		} else {
			filteredPosts = data.posts;
		}

		if (inputSearch) {
			filteredPosts = filteredPosts.filter((p) =>
				p.title.toLowerCase().includes(inputSearch.toLowerCase()),
			);
		}

		// if (sortOrder) {
		// 	filteredPosts = filteredPosts.sort((a, b) => {
		// 		switch (sortOrder) {
		// 			case BlogPostSortByOption.AlphabeticalTitleAsc:
		// 				return a.title.localeCompare(b.title);
		// 			case BlogPostSortByOption.PostedDateAsc:
		// 				return new Date(a.postedOn).getTime() - new Date(b.postedOn).getTime();
		// 			case BlogPostSortByOption.MostClaps:
		// 				return b.claps - a.claps; // Assuming `claps` is a property of `post`
		// 			case BlogPostSortByOption.MostLikes:
		// 				return b.likes - a.likes; // Assuming `likes` is a property of `post`
		// 			case BlogPostSortByOption.Controversial:
		// 				return b.likes - a.dislikes; // Assuming `comments` is a property of `post`
		// 			default:
		// 				return 0;
		// 		}
		// 	});
		// }
	}

	onMount(() => {
		const url: URL = $page.url;
		const tagParams = url.searchParams.get("tags")?.split(",");

		// Parse tags in the URL params and manage it into the selectedTags set, if
		// applicable.
		if (tagParams) {
			const tagsFlattened: string[] = data.tags.map((x) => x.name);

			for (let i = 0; i < tagParams.length; i++) {
				const s = tagParams[i];

				if (tagsFlattened.find((x) => x === s)) {
					selectedTags.add(s);
				}
			}
		}

		const sortOrderParams = url.searchParams.get("sortOrder");

		if (sortOrderParams && sortOrderParams in BlogPostSortByOption) {
			/*
			TODO - Fix typing on sortOrder.
			
			I have no idea why I'm having such difficulties casting the enum with string keys
			into this variable. Both of these options do nothing:
	
			sortOrder = BlogPostSortByOption[sortOrderParams as keyof typeof BlogPostSortByOption];
			
			(Object.keys(BlogPostSortByOption) as Array<keyof typeof BlogPostSortByOption>)
			.find(key => BlogPostSortByOption[key] === sortOrderParams);

			A thing that works right now is to use `as unknown as BlogPostSortByOption;`, but
			at that point why even use TypeScript? I'd rather just @ts-ignore it.
			*/

			// @ts-ignore
			sortOrder = sortOrderParams;
		} else {
			// @ts-ignore
			sortOrder = "AlphabeticalTitleAsc";
		}

		filterPosts();

		// https://github.com/sveltejs/svelte/issues/10263
		// This will hopefully be addressed in Svelte 5!
		selectedTags = selectedTags;
	});
</script>

<div class="flex flex-col md:flex-row container mx-auto px-4 sm:px-6 lg:px-8">
	<div
		class="w-full md:flex-initial md:w-64 md:h-[22rem] bg-white shadow-lg px-4 pt-4 pb-8 space-y-5 rounded-lg mt-4 transition-all"
	>
		<div>
			<label for="search" class="block text-sm font-medium leading-6 text-gray-900 mb-2"
				>Search titles</label
			>
			<input
				type="text"
				name="search"
				id="search"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
				placeholder="Search anything"
				bind:value={inputSearch}
			/>
		</div>

		<div>
			<label for="search" class="block text-sm font-medium leading-6 text-gray-900 mb-2"
				>Filter by tag</label
			>

			<div class="flex gap-x-2 gap-y-2 flex-wrap justify-center">
				{#each data.tags as tag}
					<!-- svelte-ignore a11y-interactive-supports-focus -->
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<span
						on:click={() => handleTagSelection(tag)}
						class:selected-tag={selectedTags.has(tag.name)}
						class="tag"
						role="button"
					>
						#{tag.name}
					</span>
				{/each}
			</div>
		</div>

		<div>
			<label for="sort" class="block text-sm font-medium leading-6 text-gray-900 mb-2"
				>Sort by</label
			>
			<select name="" id="" bind:value={sortOrder} on:change={() => handleSortSelection()}>
				{#each Object.entries(BlogPostSortByOption) as [key, value]}
					<option value={key}>{value}</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="flex-1 p-8">
		<p>{filteredPosts.length} result{filteredPosts.length === 1 ? "" : "s"}</p>

		<hr class="my-4 fill-gray-900 text-gray-900" />

		{#if filteredPosts.length > 0}
			<div class="flex flex-col gap-4">
				{#each filteredPosts as article}
					<div transition:fly={{ delay: 0, duration: 300, easing: sineInOut }}>
						<PostSnippet post={article} />
					</div>
				{/each}
			</div>
		{:else}
			<div class="text-center">
				<p class="text-xl">No articles found.</p>
				<p>Adjust your filters, or remove your gibberish.</p>
			</div>
		{/if}
	</div>
</div>

<style lang="postcss">
	.selected-tag {
		@apply transition-all text-blue-700;
		box-shadow: 0 0 15px rgba(78, 140, 231, 0.75);
	}

	.tag {
		@apply border bg-slate-100 px-4 py-px rounded-lg cursor-pointer transition-all hover:bg-slate-50 text-gray-800 hover:text-gray-600;
	}
</style>
