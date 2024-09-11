<script lang="ts">
	import moment from "moment";
	import type { PageData } from "./$types";
	import "./blogStyles.css";

	export let data: PageData;
</script>

<p class="text-xl">
	Posted by {data.post.author.username} on {moment(data.post.postedOn).format("MMM Do, YYYY")}
</p>
<h1
	class="text-4xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-5xl bold font-serif tracking-tight"
>
	{data.post.title}
</h1>

<div class="my-4 flex gap-6">
	{#each data.post.tags as tag}
		<span
			class="text-white text-base font-sans tracking-tight bg-slate-100 bg-opacity-20 py-1 px-2 rounded"
		>
			#{tag.name}
		</span>
	{/each}
</div>

<div class="my-auto"></div>

<section class="text-white font-serif text-lg md:text-xl">
	<!-- NOTE - Blog styles themselves are in ./blogStyles.css -->
	{@html data.post.content}
</section>

<style lang="postcss">
</style>
