<script>
	import { fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";

	export let title;
	export let character;
	export let unicode;

	let showBanner = false;

	function copyToClipboard() {
		navigator.clipboard.writeText(character);
		showBanner = true;
		setTimeout(() => {
			showBanner = false;
		}, 1500);
	}
</script>

<div
	class="w-28 bg-zinc-200 p-2 rounded bg-opacity-60 hover:bg-opacity-100 cursor-pointer"
	on:click={copyToClipboard}
	on:keydown={copyToClipboard}
>
	<div class="text-center text-sm">{title}</div>
	<div class="text-center text-7xl">{character}</div>
	<div class="text-center text-sm font-mono">{unicode}</div>

	{#if showBanner}
		<div
			transition:fly={{ delay: 0, duration: 300, x: 0, y: -10, opacity: 0, easing: quintOut }}
			class="fixed w-28 -ml-2 mt-2 bg-green-500 text-white text-center py-1 rounded-b-md"
		>
			Copied!
		</div>
	{/if}
</div>
