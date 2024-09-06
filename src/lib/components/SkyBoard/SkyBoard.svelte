<script lang="ts">
	import CloudsForeground from "$lib/assets/png/clouds-foreground.png";
	import CloudsMidground from "$lib/assets/png/clouds-midground.png";
	import CloudsBackground from "$lib/assets/png/clouds-background-no-doodles.png";
	import { onMount } from "svelte";
	import Stars from "./Stars.svelte";

	let cloudBoard: HTMLElement;

	function calculateCloudBoardPosition(): void {
		let footer: HTMLElement | null;
		let footerHeight: number;

		footer = document.querySelector("footer");
		footerHeight = footer ? footer.offsetHeight : 0;

		const scrollHeight = document.documentElement.scrollHeight;
		const scrollTop = document.documentElement.scrollTop;
		const windowHeight = window.innerHeight;

		if (scrollHeight - scrollTop - windowHeight < footerHeight) {
			cloudBoard.style.position = "absolute";
		} else {
			cloudBoard.style.position = "fixed";
			cloudBoard.style.bottom = "0";
		}
	}

	onMount(() => {
		calculateCloudBoardPosition();

		window.addEventListener("scroll", () => {
			calculateCloudBoardPosition();
		});

		window.addEventListener("resize", () => {
			calculateCloudBoardPosition();
		});
	});
</script>

<div class="sky-gradient-background min-h-[80vh] relative pb-56">
	<!-- NOTE - CSS is in <style> -->
	<div id="cloud-board" bind:this={cloudBoard}>
		<Stars></Stars>

		<div class="cloud-row" style="--duration: var(--speed-clouds-background);">
			<img src={CloudsBackground} alt="Distant clouds in the background" />
			<img src={CloudsBackground} alt="Distant clouds in the background" />
		</div>

		<div class="cloud-row" style="--duration: var(--speed-clouds-midground);">
			<img src={CloudsMidground} alt="Clouds between the clouds" />
			<img src={CloudsMidground} alt="Clouds between the clouds" />
		</div>

		<div class="cloud-row" style="--duration: var(--speed-clouds-foreground);">
			<img src={CloudsForeground} alt="Clouds in the foreground" />
			<img src={CloudsForeground} alt="Clouds in the foreground" />
		</div>
	</div>

	<div class="relative z-10">
		<slot />
	</div>
</div>

<style lang="postcss">
	:root {
		--speed-clouds-foreground: 35s;
		--speed-clouds-midground: 76s;
		--speed-clouds-background: 160s;
	}

	#cloud-board {
		position: absolute;
		bottom: 0;
		overflow: hidden;
		height: 100%;
		width: 100%;
	}

	.cloud-row {
		@apply animate-moveLeftContinuous;
		@apply flex flex-row;
		position: absolute;
		bottom: 0;
	}

	.cloud-row > * {
		@apply transform scale-150;
	}
</style>
