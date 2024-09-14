<script lang="ts">
	import moment from "moment";
	import type { PageData } from "./$types";
	import pngBananamanSquare from "$lib/assets/png/bananaman-square.png";
	import svgLinkedIn from "$lib/assets/svg/linkedin.svg?raw";
	import svgDiscord from "$lib/assets/svg/discord-mark-black.svg?raw";
	import svgGitHub from "$lib/assets/svg/github.svg?raw";
	import svgThumbsUp from "$lib/assets/svg/thumb-up.svg?raw";
	import svgClap from "$lib/assets/svg/hand-clap.svg?raw";
	import jpegNode from "$lib/assets/jpeg/node-75x75.jpeg";
	import jpegPowerPlatform from "$lib/assets/jpeg/power-platform-75x75.jpeg";
	import jpegSvelte from "$lib/assets/jpeg/svelte-75x75.jpeg";
	import "./blogStyles.css";

	export let data: PageData;
</script>

<div class="flex flex-col lg:flex-row gap-4">
	<article class="lg:w-3/4">
		<p class="text-xl">
			Posted by {data.post.author.username} on {moment(data.post.postedOn).format("MMM Do, YYYY")}
		</p>
		<h1
			class="text-4xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl xs:text-5xl bold font-serif tracking-tight"
		>
			{data.post.title}
		</h1>

		<div class="my-4 flex gap-6">
			{#each data.post.tags as tag}
				<span
					class="text-white text-base font-sans tracking-tight bg-slate-100 bg-opacity-20 py-1 px-2 rounded"
				>
					#{tag.name}
				</span>
			{/each}
		</div>

		<div class="my-auto"></div>

		<!-- 
		NOTE - Blog styles are in ./blogStyles.css. Be sure to use the id selector so that
		styles are scoped properly.
		-->
		<section id="blog-article" class="text-white font-serif text-lg md:text-xl">
			{@html data.post.content}
		</section>
	</article>

	<div class="lg:w-1/4 space-y-2">
		<div class="bg-white p-5 rounded-md flex gap-4 justify-center border-2 shadow-lg">
			<span class="flex h-8 text-3xl gap-1 font-bold tracking-tighter fill-green-700">
				{@html svgClap}
				{data.post.claps}
			</span>
			<span class="flex h-8 text-3xl gap-1 font-bold tracking-tighter fill-blue-600">
				{@html svgThumbsUp}
				{data.post.likes}
			</span>
		</div>

		<div id="about-the-author">
			<!-- <h2 class="text-white text-xl text-center font-semibold">About the Author</h2> -->

			<div class="bg-white p-5 rounded-md shadow-lg">
				<div class="flex mb-2">
					<img src={pngBananamanSquare} alt="" class="rounded-full h-16 shadow-lg" />
					<div class="pl-3">
						<h3 class="font-bold text-lg text-black">Lee Brannan</h3>
						<div class="flex gap-1 items-center">
							<a href="" class="h-6 w-6">
								<!-- <img src={svgt} alt=""> -->
								{@html svgLinkedIn}
							</a>
							<a href="" class="h-6 w-6">
								<!-- <img src={svgt} alt=""> -->
								{@html svgGitHub}
							</a>
							<a href="" class="h-full w-6">
								<!-- <img src={svgt} alt=""> -->
								{@html svgDiscord}
							</a>
						</div>
					</div>
				</div>
				<p class="text-sm text-black hyphens-none my-2">
					<strong>Lee</strong> is a prior U.S. Marine and experienced software engineer in the United
					States public sector specializing in web development and user interfaces.
				</p>

				<p class="text-sm text-black hyphens-none my-2">
					He primarily writes about Power Fx and vanilla JavaScript on the Microsoft Power Platform,
					Node.js, TypeScript, and Svelte.
				</p>

				<div class="flex max-h-9 justify-center my-5 grayscale">
					<img src={jpegPowerPlatform} alt="" class="object-contain" />
					<img src={jpegNode} alt="" class="object-contain" />
					<img src={jpegSvelte} alt="" class="object-contain" />
				</div>

				<div class="w-full mt-2 gap-2 flex-col flex">
					<a
						href="/blog"
						class="button block text-center bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
						>Read more</a
					>
					<a href="/" class="button block text-center">View website</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	/* #about-the-author div * {
		@apply text-black;
	} */
</style>
