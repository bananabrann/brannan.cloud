<script lang="ts">
	import CloudsForeground from "$lib/assets/png/clouds-foreground.png";
	import CloudsBackground from "$lib/assets/png/clouds-background-no-doodles.png";
</script>

<div class="sky-gradient-background min-h-[80vh] relative">
	<slot />

	<!-- NOTE - CSS is in <style> -->
	<div id="cloud-board">
		<div class="cloud-row" style="--duration: var(--speed-clouds-background);">
			<img src={CloudsBackground} alt="Distant clouds in the background" />
			<img src={CloudsBackground} alt="Distant clouds in the background" />
		</div>

		<div class="cloud-row" style="--duration: var(--speed-clouds-foreground);">
			<img src={CloudsForeground} alt="Clouds in the foreground" />
			<img src={CloudsForeground} alt="Clouds in the foreground" />
		</div>
	</div>
</div>

<style lang="postcss">
	:root {
		--speed-clouds-foreground: 20s;
		--speed-clouds-background: 60s;
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
