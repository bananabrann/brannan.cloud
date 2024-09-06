<script lang="ts">
	import svgCheckBold from "$lib/assets/svg/check-bold.svg?raw";
	import svgLoading from "$lib/assets/svg/loading.svg?raw";
	import svgServerRemove from "$lib/assets/svg/server-remove.svg?raw";
	import svgCloudQuestion from "$lib/assets/svg/cloud-question.svg?raw";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";

	export let status: WebsiteUpStatus;
	export let message: string = "";
</script>

{#if status === WebsiteUpStatus.Up}
	<span
		class="inline-flex fill-white font-medium tracking-tight text-sm align-middle items-center rounded-md py-px px-2 text-green-100 bg-green-500"
	>
		<div class="svg-container">
			{@html svgCheckBold}
		</div>
		&nbsp;Online</span
	>
{:else if status === WebsiteUpStatus.Down}
	<div
		class="inline-flex fill-white font-medium tracking-tight text-sm align-middle items-center rounded-md py-px px-2 text-gray-100 bg-gray-500"
	>
		<div class="svg-container">
			{@html svgCloudQuestion}
		</div>
		&nbsp;No response
	</div>
{:else if status === WebsiteUpStatus.Loading}
	<span
		class="inline-flex fill-white font-medium tracking-tighter text-sm align-middle items-center rounded-md py-px px-2 text-yellow-100 bg-yellow-500"
		><span class="animate-spin svg-container"> {@html svgLoading}</span>&nbsp;Checking ...</span
	>
{:else}
	<span
		class=" inline-flex fill-white font-medium tracking-tight text-sm align-middle items-center rounded-md py-px px-2 text-red-100 bg-red-500"
	>
		<div class="svg-container">
			{@html svgServerRemove}
		</div>
		&nbsp;{message.length > 0 ? message : "Internal error"}</span
	>
{/if}

<style lang="postcss">
	.svg-container {
		@apply h-5 w-5;
	}
</style>
