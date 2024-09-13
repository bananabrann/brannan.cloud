<script lang="ts">
	import type { PostWithAllDetails } from "$lib/types/PostWithAllDetails";
	import moment from "moment";
	import svgClap from "$lib/assets/svg/hand-clap.svg?raw";
	import svgThumbsUp from "$lib/assets/svg/thumb-up.svg?raw";

	export let post: PostWithAllDetails;
</script>

<article>
	<a href={`blog/${post.slug}`}>
		<h3 class="font-serif text-xl tracking-wide text-yellow-300 hover:text-yellow-100">
			{post.title}
		</h3>
	</a>
	<div class="flex gap-3">
		<div class="fill-white text-white flex gap-2 items-center justify-center align-middle">
			<span class="flex gap-1">
				<span class="h-5 w-5">
					{@html svgClap}
				</span>
				<p class="tracking-tighter font-semibold">
					{post.claps}
				</p>
			</span>
			<span class="flex gap-1">
				<div class="h-5 w-5">
					{@html svgThumbsUp}
				</div>

				<p class="tracking-tighter font-semibold">
					{post.likes}
				</p>
			</span>
		</div>
		<p>By {post.author.username} on {moment(post.postedOn).format("MMM Do, YYYY")}</p>
	</div>
	<div class="flex gap-2">
		{#each post.tags as tag}
			<span
				class="text-white text-sm font-sans tracking-tight bg-slate-100 bg-opacity-20 py-px px-2 rounded"
				>#{tag.name}</span
			>
		{/each}
	</div>
</article>
