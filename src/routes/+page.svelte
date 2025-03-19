<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import BananamanArtist from "$lib/assets/png/bananaman-artist.png";
	import BananamanBuilding from "$lib/assets/png/bananaman-building.png";
	import BananamanRocket from "$lib/assets/png/bananaman-rocket.png";
	import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
	import type { PageData } from "./$types";
	import WebStatusBadge from "$lib/components/WebStatusBadge/WebStatusBadge.svelte";
	import { onMount } from "svelte";
	import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
	import commentPortrait from "$lib/assets/jpeg/portait-60x60.jpg";
	import svgNewWindow from "$lib/assets/svg/new-window.svg";
	import svgBookmark from "$lib/assets/svg/bookmark.svg";

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
		class="container px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center sm:divide-x mx-auto max-w-xl"
	>
		<div class="sm:w-2/3 pr-2 py-2 space-y-4">
			<h1 class="text-4xl">Hi, I'm Lee</h1>
			<p class="text-xl">
				A software engineer in the United States building websites that Americans use all around the
				world.
			</p>

			<p class="text-xl">
				I'm also the founder and organizer of the Dallas/Fort Worth Code & Coffee, an in-person
				meetup for programmers in 27 states across the U.S.
			</p>
		</div>

		<div class="flex flex-col gap-4 px-4 sm:w-1/3 py-6 sm:py-2">
			<a href="https://linkedin.com/in/pbrann" class="button text-center text-lg" role="button"
				>LinkedIn</a
			>
			<a href="https://github.com/bananabrann" class="button text-center text-lg" role="button"
				>GitHub</a
			>
			<!-- <a href="#" class="button text-center text-lg leading-tight" role="button">Resume<br/><span class="text-xs block">(Anonymized)</span></a> -->
		</div>
	</div>

	<div class="container mx-auto flex flex-col my-10" id="my-coding-philosophy">
		<h2 class="mx-auto text-4xl font-semibold">My Web Dev Coding Philosphy</h2>

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
					this throughout my career. The reason I value making things pretty is because in my
					experience performance differences on modern hardware is negligible.<br /> Why spend
					$8,000 to save $145 a year? It's been proven that users that receive feedback in the UI/UX
					are more likely to wait that extra two seconds for a request than poor feedback with
					better performance.<br />4 times out of 5, performance complaints are <i>really</i> UI feedback
					issues in disguise. You will get more impact from your dollars spent improving the customer
					experience.
				</p>
			</div>

			<div class="lg:w-1/3 card">
				<img src={BananamanRocket} alt="" />
				<h3>#3: Make it fast</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi dolores,
					pariatur voluptate nobis alias voluptates accusamus, asperiores aspernatur architecto
					quibusdam mollitia consectetur officia numquam. Mollitia pariatur nisi natus excepturi.
				</p>
			</div>
		</div>
	</div>

	<div class="container mx-auto mt-20">
		<h1 class="text-4xl sm:text-center mb-8">Good Reading</h1>

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

	#my-coding-philosophy {
		.card {
			@apply bg-white bg-opacity-5 p-8 rounded-lg shadow-lg backdrop-blur-md;
			@apply flex flex-col gap-2;
			@apply text-black;
			@apply mx-4 lg:max-w-sm my-4;

			h3 {
				@apply text-2xl font-semibold text-center;
			}

			img {
				@apply max-h-48 object-contain -mt-28;
			}
		}
	}
</style>
