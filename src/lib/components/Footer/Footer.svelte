<script lang="ts">
	import svgLock from "$lib/assets/svg/lock.svg?raw";
	import { version } from "$app/environment";

	const oldEgaUrl = "/old-ega.png?url";
</script>

<footer class="bg-slate-800 p-4 w-full z-30 relative text-white">
	<!--
		NOTE - Inner container is needed so that the footer covers the star board. Without
		this container, the footer's width technicaly doesn't expand the full width therefore
		some stars are visible. Of course, if the content expanded with it, it'd look weird.
		So here, the content itself lives within the footer whose width is 100% of the viewport.
	-->
	<div class="max-w-2xl m-auto flex flex-wrap">
		<div class="w-full p-2 text-center">
			<p class="">Website by me. Art and web assets by various artists. All rights reserved.</p>
			<small>Build {version}</small>

			<div class="m-auto text-white h-20 w-20 mt-4">
				<img src={oldEgaUrl} alt="" />
			</div>
			<div class="my-1.5">
				<p class="text-right text-slate-500 italic text-sm">'till the wheels fall off.</p>
				<p class="text-right text-slate-500 text-xs">- Wee Man</p>
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	li a {
		@apply hover:text-yellow-400 text-white;
	}

	h4 {
		@apply text-xl font-thin text-gray-500 tracking-wider uppercase my-2;
	}
</style>
