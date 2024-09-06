<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import svgHello from "$lib/assets/svg/hello.svg?raw";
	import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import { afterUpdate } from "svelte";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";

	export let data: PageData;

	// $: ({ webStatuses } = data);
</script>

<SkyBoard>
	<div class="flex items-start justify-start py-4 text-white px-8 gap-2 divide-x">
		<h2 class="tracking-tight font-semibold">Quick Links</h2>
		<div class="flex gap-2 md:gap-4">
			<div class="flex gap-2">
				<p class="font-semibold tracking-tight ml-2">Chat</p>

				{#await data.webStatuses.chat}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<p class="font-semibold tracking-tight">TV</p>

				{#await data.webStatuses.tv}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>

			<div class="flex gap-2">
				<p class="font-semibold tracking-tight">Files</p>

				{#await data.webStatuses.files}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await}
			</div>
		</div>
	</div>

	<!-- 
	{#if webStatuses.tv.status === WebsiteUpStatus.Up}
		<h1>Up</h1>
	{:else if webStatuses.tv.status === WebsiteUpStatus.Down}
		<h1>Down</h1>
	{:else if webStatuses.tv.status === WebsiteUpStatus.Error}
		<h1>Error</h1>
	{:else}
		<h1>Loading</h1>
	{/if} -->

	<!-- <h1>{webStatuses}</h1> -->

	<div class="flex items-center justify-center pt-10">
		<img src={BananamanOnCloud} alt="" class="max-w-xl object-contain animate-oscillateGently" />
		<span class="ml-16 transform scale-150">
			{@html svgHello}
		</span>
	</div>
</SkyBoard>

<Footer></Footer>
