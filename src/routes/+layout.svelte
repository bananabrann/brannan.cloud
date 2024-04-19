<script>
	import "../app.scss";
	import { onMount } from "svelte";
	import Lock from "svelte-material-icons/Lock.svelte";
	import Clouds1 from "$lib/assets/svg/clouds1.svg.svelte";
	import Clouds2 from "$lib/assets/svg/clouds2.svg.svelte";
	import Clouds3 from "$lib/assets/svg/clouds3.svg.svelte";
	import Stars from "$lib/assets/svg/stars.svg.svelte";
	import OldEGA from "$lib/assets/png/old-ega.png";
	import { version } from "$app/environment";

	let cloudBoard;

	onMount(() => {
		const footer = document.querySelector("footer");
		const footerHeight = footer.offsetHeight;

		window.addEventListener("scroll", () => {
			const scrollHeight = document.documentElement.scrollHeight;
			const scrollTop = document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;

			if (scrollHeight - scrollTop - windowHeight < footerHeight) {
				cloudBoard.style.position = "absolute";
				// cloudBoard.style.bottom = `${footerHeight}px`;
			} else {
				cloudBoard.style.position = "fixed";
				cloudBoard.style.bottom = "0";
			}
		});
	});
</script>

<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>brannan.cloud</title>
	<link rel="stylesheet" href="https://use.typekit.net/xtr6jqc.css" />
</head>

<main>
	<slot />

	<div id="star-board">
		<Stars />
	</div>

	<div id="cloud-board" bind:this={cloudBoard}>
		<div class="cloud-row">
			<span class="cloud cloud-slow">
				<Clouds3 />
			</span>
			<span class="cloud cloud-slow">
				<Clouds3 />
			</span>
		</div>

		<div class="cloud-row">
			<span class="cloud cloud-medium">
				<Clouds2 />
			</span>
			<span class="cloud cloud-medium">
				<Clouds2 />
			</span>
		</div>

		<div class="cloud-row">
			<span class="cloud cloud-fast">
				<Clouds1 />
			</span>
			<span class="cloud cloud-fast">
				<Clouds1 />
			</span>
		</div>
	</div>
</main>

<footer class="bg-slate-800 p-4 w-full z-10 relative">
	<!--
		NOTE - Inner container is needed so that the footer covers the star board. Without
		this container, the footer's width technicaly doesn't expand the full width therefore
		some stars are visible. Of course, if the content expanded with it, it'd look weird.
		So here, the content itself lives within the footer whose width is 100% of the viewport.
	-->
	<div class="max-w-2xl m-auto flex flex-wrap">
		<div class="w-full sm:w-1/2 p-2">
			<h4 class="font-thin text-gray-400">Index</h4>
			<ul class="ml-8">
				<li><a href="/">Home</a></li>
				<li><a href="/works">Projects & Works</a></li>
			</ul>

			<h4 class="font-thin text-gray-400">Sites</h4>
			<ul class="ml-8">
				<li><a href="https://tv.brannan.cloud">Grandma's TV</a></li>
				<li><a href="http://chat.brannan.cloud">LibreChat</a></li>
				<li class="text-gray-400">
					<a href="https://files.brannan.cloud" class="flex flex-row"
						><Lock class="mt-1 mr-1" /> Brannan File Share</a
					>
				</li>
			</ul>

			<h4 class="font-thin text-gray-400">Socials</h4>
			<ul class="ml-8">
				<li><a href="https://github.com/bananabrann" target="_self">GitHub</a></li>
				<li>
					<a href="https://discordapp.com/users/321317378862350346" target="_self">Discord</a>
				</li>
				<li><a href="https://linkedin.com/in/pbrann" target="_self">LinkedIn</a></li>
			</ul>
		</div>

		<div class="w-full sm:w-1/2 p-2 text-center">
			<p class="">
				Website by me,
				<a href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE" target="_blank"
					>MIT license, 2024.
				</a><br />
				Art and web assets by various artists, all rights reserved.
			</p>
			<small>Build {version}</small>

			<div class="m-auto text-white h-20 w-20 mt-4">
				<img src={OldEGA} alt="" />
			</div>
		</div>
	</div>
</footer>

<style lang="scss">
	@use "../variables.scss";
	@use "sass:math";

	@keyframes moveToLeft {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	#cloud-board {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: -1;
		// height: auto;

		.cloud-row {
			display: flex;
			position: absolute;
			bottom: 0;
			width: 520%;

			@media screen and (orientation: portrait) {
				width: 780%;
			}
		}
		.cloud {
			width: 100%;
		}

		.cloud-fast {
			animation: moveToLeft 60s cubic-bezier(0.31, 0.41, 0.6, 0.44) infinite;
			z-index: 1;
		}

		.cloud-medium {
			animation: moveToLeft 165s linear infinite;
		}

		.cloud-slow {
			animation: moveToLeft 300s linear infinite;
		}
	}

	main {
		@include sky-gradient();
		z-index: 1;
		position: relative;
		overflow-x: hidden;
	}

	#star-board {
		position: fixed;
		top: 0;
		z-index: -10;
		width: 100%;
		max-height: 100%;
	}
</style>
