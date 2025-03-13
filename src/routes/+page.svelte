<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";
	import { onMount } from "svelte";
	import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
	import commentPortrait from "$lib/assets/jpeg/portait-60x60.jpg";
	import svgNewWindow from "$lib/assets/svg/new-window.svg";
	import svgBookmark from "$lib/assets/svg/bookmark.svg";

	export let data: PageData;

	// NOTE - Streaming is not currently supported for load functions. See
	// https://github.com/bananabrann/brannan.cloud/issues/87 for more information.
	$: ({ webStatuses } = data);
</script>

<SkyBoard>
	<div class="flex justify-start py-4 px-8 gap-2 divide-x items-center">
		<h2 class="tracking-tight">Quick Links</h2>
		<div class="flex flex-wrap gap-2 md:gap-4 pl-2">
			<div class="flex gap-2">
				<a
					href="http://146.190.0.104"
					class="font-semibold tracking-tight text-white underline underline-offset-2 hover:text-yellow-400"
					>LibreChat</a
				>

				<!-- 
				NOTE - Streaming is not currently supported for load functions on Azure SWA. See 
				https://github.com/bananabrann/brannan.cloud/issues/87 for more information.
				-->
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
					>Grandma's TV</a
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
				<p class="font-semibold tracking-tight text-gray-300 cursor-not-allowed">File Hosting</p>
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

	<div class="flex flex-col-reverse items-center justify-center pt-10">
		<img
			src={BananamanOnCloud}
			alt=""
			class="max-w-xl object-contain animate-oscillateGently w-[75vw]"
		/>
	</div>

	<div class="my-14"></div>

	<div
		class="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:divide-x mx-auto max-w-xl"
	>
		<div class="sm:w-2/3 pr-2 py-2">
			<h1 class="text-4xl">Hi, I'm Lee</h1>
			<p class="text-xl">
				A software engineer in the United States building websites that Americans use all around the
				world.
			</p>
		</div>

		<div class="flex flex-col gap-4 px-4 sm:w-1/3 py-6 sm:py-2">
			<a href="https://linkedin.com/in/pbrann" class="button text-center text-lg" role="button"
				>LinkedIn</a
			>
			<a href="https://github.com/bananabrann" class="button text-center text-lg" role="button"
				>GitHub</a
			>
			<!-- <a href="#" class="button text-center text-lg leading-tight" role="button">Resume<br/><span class="text-xs block">(Anonymized)</span></a> -->
		</div>
	</div>

	<div class="container mx-auto mt-20 px-4">
		<h1 class="text-4xl sm:text-center mb-8">Good Reading</h1>

		<div class="masonry">
			{#each data.shareSnippets as snippet}
				<div
					class={`lg:max-w-md w-full m-2 bg-opacity-20 py-4 px-8 rounded-lg ${snippet.isFeatured ? "bg-green-100 backdrop-blur-md border-2 border-lime-500" : ""}`}
				>
					{#if snippet.isFeatured}
						<img src={svgBookmark} class="h-12 absolute -top-3 -right-0.5" alt="" />
					{/if}

					<a href={snippet.url} target="_blank" class="text-white font-semibold tracking-wide">
						{snippet.title}
						<img src={svgNewWindow} class="h-4 inline mb-1" alt="" />
					</a>
					<span class="flex flex-nowrap justify-between">
						<p>By {snippet.author}</p>
						<p>{snippet.date}</p>
					</span>

					{#if snippet.comment}
						<div class="divide-x-2 divide-y-reverse ml-8 mt-4">
							<img src={commentPortrait} class="rounded-full max-w-12 absolute -ml-6" alt="" />
							<p class="italic lg:text-sm tracking-wide pl-12">"{snippet.comment}"</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="scss">
	.masonry {
		@apply mx-auto lg:flex lg:flex-col lg:flex-wrap;
		max-width: fit-content;
		gap: 0.5rem;
		align-items: center;

		// CHANGE THIS FOR ADJUSTING MASONRY.
		// TODO - Make this responsive.
		@apply lg:max-h-[800px];
	}
</style>
