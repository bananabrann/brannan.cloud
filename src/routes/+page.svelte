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

	<div class="my-16"></div>

	<div
		class="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:divide-x mx-auto max-w-xl"
	>
		<p class="text-xl pr-2 sm:w-2/3 py-2">
			Hi 👋 I'm Lee, a software engineer in the United States building websites that Americans use
			all around the world.
		</p>

		<div class="flex flex-col gap-4 px-4 sm:w-1/3 py-6 sm:py-2">
			<a href="https://linkedin.com/in/pbrann" class="button text-center text-lg" role="button"
				>LinkedIn</a
			>
			<a href="https://github.com/bananabrann" class="button text-center text-lg" role="button"
				>GitHub</a
			>
		</div>
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="postcss">
</style>
