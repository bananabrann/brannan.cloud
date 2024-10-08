<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";
	import { onMount } from "svelte";
	import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";

	export let data: PageData;

	// NOTE - Streaming is not currently supported for load functions. See
	// https://github.com/bananabrann/brannan.cloud/issues/87 for more information.
	// $: ({ webStatuses } = data);

	let tvStatus: WebsiteUpStatus;
	let chatStatus: WebsiteUpStatus;
	let filesStatus: WebsiteUpStatus;

	$: tvStatus = WebsiteUpStatus.Loading;
	$: chatStatus = WebsiteUpStatus.Loading;
	$: filesStatus = WebsiteUpStatus.Loading;

	onMount(() => {
		isWebsiteOnline("http://146.190.0.104").then((res) => (chatStatus = res.status));
		isWebsiteOnline("https://tv.brannan.cloud").then((res) => (tvStatus = res.status));
		isWebsiteOnline("https://files.brannan.cloud").then((res) => (filesStatus = res.status));
	});

	async function isWebsiteOnline(url: string): Promise<WebsiteUpResponse> {
		try {
			const response = await fetch(url, { method: "HEAD", mode: "no-cors" });

			if (response.ok) {
				return {
					status: WebsiteUpStatus.Up,
				};
			} else {
				return {
					status: WebsiteUpStatus.Down,
				};
			}
		} catch (error) {
			return {
				status: WebsiteUpStatus.Down,
			};
		}
	}
</script>

<SkyBoard>
	<div class="flex justify-start py-4 px-8 gap-2 divide-x items-center">
		<h2 class="tracking-tight">Quick Links</h2>
		<div class="flex flex-wrap gap-2 md:gap-4 pl-2">
			<div class="flex gap-2">
				<a
					href="http://146.190.0.104"
					class="font-semibold tracking-tight text-white underline underline-offset-2 hover:text-yellow-400"
					>Chat</a
				>

				<!-- 
				NOTE - Streaming is not currently supported for load functions. See 
				https://github.com/bananabrann/brannan.cloud/issues/87 for more information.
				-->
				<!-- 
				{#await webStatuses.chat}
					<WebStatusBadge status={WebsiteUpStatus.Loading} />
				{:then status}
					<WebStatusBadge status={status.status} />
				{:catch error}
					<WebStatusBadge status={WebsiteUpStatus.Error} />
				{/await} 
				-->
				<WebStatusBadge status={chatStatus} />
			</div>

			<div class="flex gap-2">
				<a
					href="https://tv.brannan.cloud"
					class="font-semibold tracking-tight text-white underline underline-offset-2 hover:text-yellow-300"
					>TV</a
				>
				<WebStatusBadge status={tvStatus} />
			</div>

			<div class="flex gap-2">
				<a
					href="https://files.brannan.cloud"
					class="font-semibold tracking-tight text-white underline underline-offset-2">Files</a
				>
				<WebStatusBadge status={filesStatus} />
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

	<div class="my-16"></div>

	<div class="w-full flex flex-col max-w-64 mx-auto gap-4 px-4">
		<a href="https://linkedin.com/in/pbrann" class="button text-center text-lg" role="button"
			>LinkedIn</a
		>
		<a href="https://github.com/bananabrann" class="button text-center text-lg" role="button"
			>GitHub</a
		>
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="postcss">
</style>
