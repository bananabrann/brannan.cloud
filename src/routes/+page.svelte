<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import svgHello from "$lib/assets/svg/hello.svg?raw";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";
	import type { PostWithAllDetails } from "$lib/types/PostWithAllDetails";
	import PostSnippet from "$lib/components/PostSnippet/PostSnippet.svelte";

	export let data: PageData;

	$: ({ webStatuses, posts } = data);
</script>

<SkyBoard>
	<div class="flex items-start justify-start py-4 px-8 gap-2 divide-x">
		<h2 class="tracking-tight font-semibold">Quick Links</h2>
		<div class="flex gap-2 md:gap-4">
			<div class="flex gap-2">
				<p class="font-semibold tracking-tight ml-2">Chat</p>

				{#await webStatuses.chat}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<p class="font-semibold tracking-tight">TV</p>

				{#await webStatuses.tv}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<p class="font-semibold tracking-tight">Files</p>

				{#await webStatuses.files}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>
		</div>
	</div>

	<div class="flex items-center justify-center pt-10">
		<img src={BananamanOnCloud} alt="" class="max-w-xl object-contain animate-oscillateGently" />
		<span class="ml-16 transform scale-150">
			{@html svgHello}
		</span>
	</div>

	<div class="container grid grid-cols-2 mx-auto sm:px-6lg:px-8 mt-5" id="blog">
		<div>
			<section>
				<h2>Top</h2>
				<div class="flex flex-col gap-6 py-4">
					{#each posts.top as post}
						<PostSnippet {post}></PostSnippet>
					{/each}
				</div>
			</section>

			<section>
				<h2>Learn</h2>

				<div class="flex flex-col gap-6 py-4">
					{#each posts.tutorials as post}
						<PostSnippet {post}></PostSnippet>
					{/each}
				</div>
			</section>
		</div>
		<div>
			<section>
				<h2>Latest</h2>
				<div class="flex flex-col gap-6 py-4">
					{#each posts.latest as post}
						<PostSnippet {post}></PostSnippet>
					{/each}
				</div>
			</section>
		</div>
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="postcss">
	#blog h2 {
		@apply text-3xl tracking-wide font-thin text-center;
	}
</style>
