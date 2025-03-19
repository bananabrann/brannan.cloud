<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import BananamanArtist from "$lib/assets/png/bananaman-artist.png";
	import BananamanBuilding from "$lib/assets/png/bananaman-building.png";
	import BananamanRocket from "$lib/assets/png/bananaman-rocket.png";
	import CodeAndCoffeeLogo from "$lib/assets/png/cnc-logo.png";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";
	import { onMount } from "svelte";
	import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
	import commentPortrait from "$lib/assets/jpeg/portait-60x60.jpg";
	import svgNewWindow from "$lib/assets/svg/new-window.svg";
	import svgBookmark from "$lib/assets/svg/bookmark.svg";
	import svgTimer from "$lib/assets/svg/timer.svg";
	import svgStorefront from "$lib/assets/svg/storefront.svg";
	import svgContract from "$lib/assets/svg/contract.svg";
	import svgBadge from "$lib/assets/svg/badge.svg";

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
					>chat.brannan</a
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
					>tv.brannan</a
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
				<p class="font-semibold tracking-tight text-gray-300 cursor-not-allowed">files.brannan</p>
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

	<div class="my-14"></div>

	<div
		class="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:divide-x mx-auto max-w-4xl"
	>
		<div class="sm:w-1/2 pr-2 py-2 space-y-4">
			<h1 class="text-4xl">Hi, I'm Lee</h1>
			<p class="text-xl">
				I'm a prior U.S. Marine turned software engineer in the United States building websites and
				apps that Americans use all around the world.
			</p>
			<p class="text-xl">
				Due to the sweeping budget reductions in the federal government, I have new availibility for
				new work.
			</p>

			<div>
				<h2 class="text-xl font-semibold">Web Development</h2>
				<p>Everything in the world of JavaScript and Node.js.</p>
			</div>

			<div class="space-y-1.5 ml-6 sm:text-sm lg:text-base">
				<div class="flex space-x-2">
					<img src={svgContract} alt="" />
					<p>Short-term contracting</p>
					<span
						class="bg-green-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Available
					</span>
				</div>
				<!-- <div class="flex space-x-2">
					<img src={svgStorefront} alt="" />
					<p>Freelance for small businesses</p>
					<span
						class="bg-green-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Available
					</span>
				</div> -->

				<div class="flex space-x-2">
					<img src={svgBadge} alt="" />
					<p>Full-time employment</p>
					<span
						class="bg-green-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Available
					</span>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold">Power Platform Development</h2>
				<p>Canvas Power Apps, Power Automate, Power Pages, etc. with Power Fx and JavaScript.</p>
			</div>

			<div class="space-y-1.5 ml-6 sm:text-sm lg:text-base">
				<div class="flex space-x-2">
					<img src={svgContract} alt="" />
					<p>Short-term contracting</p>
					<span
						class="bg-green-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Available
					</span>
				</div>

				<!-- <div class="flex space-x-2">
					<img src={svgStorefront} alt="" />
					<p>Freelance for small businesses</p>
					<span
						class="bg-green-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Available
					</span>
				</div> -->

				<div class="flex space-x-2">
					<img src={svgBadge} alt="" class="opacity-30" />
					<p class="opacity-30">Full-time employment</p>
					<span
						class="bg-gray-600 text-white rounded-full px-2 py-px h-5 my-auto text-xs font-semibold"
					>
						Unavailable
					</span>
				</div>
			</div>
			<p class="text-xl">
				Want more information on past projects?<br />Ready to connect?<br />Reach out to me on
				LinkedIn!
			</p>
		</div>

		<div class="flex flex-col gap-4 px-4 sm:w-1/2 py-6 sm:py-2">
			<a href="https://linkedin.com/in/pbrann" class="button text-center text-lg" role="button"
				>LinkedIn</a
			>
			<!-- <a href="https://github.com/bananabrann" class="button text-center text-lg" role="button"
				>GitHub</a
			> -->
			<!-- <a href="#" class="button text-center text-lg leading-tight" role="button"
				>Resume<br /><span class="text-xs block">(Anonymized)</span></a
			> -->
			<p class="text-xl mt-10">
				I'm also a founder and volunteer organizer at <a
					href="https://codeandcoffee.org/"
					target="_blank"
					class="underline underline-offset-2">Code & Coffee</a
				>, a non-profit org that hosts meetups for programmers in 35 cities across the U.S.
			</p>

			<div class="flex items-center mx-auto justify-center">
				<ul class="text-right underline underline-offset-1 leading-4 text-sm">
					<li>
						<a href="https://www.meetup.com/dfw-code-coffee/events/" target="_blank">See events</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/uscodecoffee/" target="_blank">LinkedIn</a>
					</li>
					<li>
						<a href="https://discord.com/invite/JbGyY3bKTS" target="_blank">Join our Discord</a>
					</li>
					<li>
						<a href="https://hcb.hackclub.com/donations/start/dfw-code-coffee" target="_blank"
							>Donate to DFW</a
						>
					</li>
				</ul>
				<a href="https://codeandcoffee.org/">
					<img src={CodeAndCoffeeLogo} alt="" class="h-10 ml-2" />
				</a>
			</div>
		</div>
	</div>

	<div class="container mx-auto flex flex-col items-center mt-20" id="my-coding-philosophy">
		<h2 class="text-4xl font-semibold mx-2">My Coding Philosophy</h2>
		<p>(for web dev)</p>

		<div class="flex flex-col lg:flex-row pt-24 justify-center">
			<div class="lg:w-1/3 card">
				<img src={BananamanBuilding} alt="" />
				<h3 class="text-2xl font-semibold">#1: Make it work</h3>

				<p>
					The most important part: it has to work. How good or fast your app is doesn't matter if it
					doesn't do what it's suppose to do. Documentation and design docs <i>can</i> be important,
					but it shouldn't come before proof of concepts. I like to understand the problem and
					create a solution that makes the most sense.<br /><i>"Discovery above theory."</i><br /><i
						>"Bias towards action"</i
					><br />
				</p>
			</div>

			<div class="lg:w-1/3 card">
				<img src={BananamanArtist} alt="" />
				<h3>#2: Make it pretty</h3>
				<p>
					Putting look-and-feel above performance is controversial, and I've gone back and forth on
					this throughout my career. The reason I usually place design above performance is because
					most small- to mid-size businesses simply don't benefit from performance increases. You
					got an API service to go from 4s to 3s? Great! You're still paying for one VM and have 75%
					of your capacity available.<br /><br />Developers love endlessly optimizing (I sure do!),
					so I think it's important to stop yourself and think about using your time to improve the
					customer experience.
				</p>
			</div>

			<div class="lg:w-1/3 card">
				<img src={BananamanRocket} alt="" />
				<h3>#3: Make it fast</h3>
				<p>
					Listing performance as third does not mean I'm saying performance isn't important. It
					obviously is. I'm just saying, in my experience and assuming competent code, performance
					differences on modern hardware is negligible.<br /><br />However, that also doesn't mean
					forget about performance entirely. If you've created a product for a customer that does
					its job beautifully, or if you're a huge corporation where every second is thousands of
					dollars (this is very uncommon), <i>then</i> it's time to start thinking about optimization.
				</p>
			</div>
		</div>
	</div>

	<div class="container mx-auto mt-20 flex flex-col items-center">
		<h2 class="text-4xl font-semibold mx-2">Good Reading</h2>

		<div class="masonry">
			{#each data.shareSnippets as snippet}
				<div
					class={`lg:max-w-md lg:w-full m-2 bg-opacity-20 py-4 rounded-lg ${snippet.isFeatured ? "bg-green-100 px-8 backdrop-blur-md border-2 border-lime-500" : ""}`}
				>
					{#if snippet.isFeatured}
						<img src={svgBookmark} class="h-12 absolute -top-3 -right-0.5" alt="" />
					{/if}

					<a href={snippet.url} target="_blank" class="text-white font-semibold tracking-wide">
						{snippet.title}
						<img src={svgNewWindow} class="h-4 inline mb-1" alt="" />
					</a>
					<span class="flex flex-nowrap justify-between">
						<p>By {snippet.author}</p>
						<p>{snippet.date}</p>
					</span>

					{#if snippet.comment}
						<div class="divide-x-2 divide-y-reverse ml-8 mt-4">
							<img src={commentPortrait} class="rounded-full max-w-12 absolute -ml-6" alt="" />
							<p class="italic lg:text-sm tracking-wide pl-12">"{snippet.comment}"</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</SkyBoard>

<Footer></Footer>

<style lang="scss">
	.masonry {
		@apply mx-auto lg:flex lg:flex-col lg:flex-wrap w-full;
		max-width: fit-content;
		gap: 0.5rem;
		align-items: center;

		// CHANGE THIS FOR ADJUSTING MASONRY.
		// TODO - Make this responsive.
		@apply lg:max-h-[800px];
	}

	.card {
		@apply bg-white bg-opacity-5 p-8 rounded-lg shadow-lg backdrop-blur-md border-gray-50 border-opacity-15 border-2 hover:border-opacity-35 transition-all;
		@apply flex flex-col gap-2;
		@apply mx-4  my-4;

		h3 {
			@apply text-2xl font-semibold text-center;
		}
	}

	#my-coding-philosophy {
		.card {
			img {
				@apply max-h-48 object-contain -mt-28;
			}
		}
	}
</style>
