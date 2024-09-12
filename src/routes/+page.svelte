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
		<h2 class="tracking-tight">Quick Links</h2>
		<div class="flex gap-2 md:gap-4">
			<div class="flex gap-2">
				<a
					href="http://146.190.0.104"
					class="font-semibold tracking-tight ml-2 text-white underline underline-offset-2 hover:text-yellow-400"
					>Chat</a
				>

				{#await webStatuses.chat}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<a
					href="https://tv.brannan.cloud"
					class="font-semibold tracking-tight text-white underline underline-offset-2 hover:text-yellow-300"
					>TV</a
				>

				{#await webStatuses.tv}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<a
					href="https://files.brannan.cloud"
					class="font-semibold tracking-tight text-white underline underline-offset-2">Files</a
				>

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

	<div class="flex flex-col-reverse md:flex-row items-center justify-center pt-10">
		<img
			src={BananamanOnCloud}
			alt=""
			class="max-w-xl object-contain animate-oscillateGently w-[75vw] sm:w-1/2 lg:w-1/3"
		/>
		<span class="ml-16 transform md:scale-100 lg:scale-150 relative">
			{@html svgHello}
		</span>
	</div>

	<div class="container px-3 sm:px-6 lg:px-8 mt-5 mx-auto">
		<a role="button" href="/blog" class="button">See all articles</a>

		<div class="flex flex-col md:grid md:grid-cols-2" id="blog">
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
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="postcss">
	#blog h2 {
		@apply text-3xl tracking-wide font-thin text-center;
	}
</style>
