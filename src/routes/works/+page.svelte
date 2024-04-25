<script>
	import Play from "svelte-material-icons/PlayBox.svelte";
	import MicrosoftAzureDevops from "svelte-material-icons/MicrosoftAzureDevops.svelte";
	import Tag from "$lib/components/Tag.svelte";
	import SimpleLine from "$lib/components/SimpleLine.svelte";
	import GitHub from "svelte-material-icons/Github.svelte";
	import ReadingPage from "$lib/components/ReadingPage.svelte";
</script>

<ReadingPage>
	<a
		href="/"
		class="bg-zinc-600 text-slate-100 text-sm cursor-pointer rounded px-2 py-1 hover:bg-zinc-800"
		>Go home</a
	>

	<h1>Works</h1>

	<p>
		Most of my career has been web development with JavaScript frameworks, but early in my career
		and in school, I've worked on some good ol' Java apps or Lua plugins. I don't include those here
		though, because I'm embaressed.
	</p>
	<p>Below are projects I've lead or worked on that are worthy enough to talk about.</p>

	<div class="h-10" />

	<section class="flex flex-col">
		<div>
			<div class="flex place-content-between w-full">
				<h3>brannan.cloud</h3>
				<div class="flex h-8">
					<a href="https://brannan.cloud" target="_blank">
						<Play class="self-center h-full w-full" />
					</a>
					<a href="https://github.com/bananabrann/brannan.cloud">
						<GitHub class="self-center h-full w-full" />
					</a>
				</div>
			</div>
			<Tag>sveltekit</Tag>
			<p>My personal website and the root domain of most of my stuff on the internet.</p>
		</div>

		<SimpleLine />

		<div>
			<div class="flex content-between w-full">
				<h3>files.brannan.cloud</h3>
			</div>
			<p>
				File hosting GUI for Azure storage containers. I use this for sharing documents with myself
				and others, and storage for all things *.brannan.cloud. Private access only, duh.
			</p>
		</div>

		<SimpleLine />

		<div>
			<div class="flex place-content-between w-full">
				<h3>tv.brannan.cloud</h3>
				<div class="flex h-8">
					<a href="https://tv.brannan.cloud" target="_blank">
						<Play class="self-center h-full w-full" />
					</a>
					<a href="https://github.com/bananabrann/tv.brannan.cloud" target="_blank">
						<GitHub class="self-center h-full w-full" />
					</a>
				</div>
			</div>
			<Tag>sveltekit</Tag>
			<Tag>ai</Tag>
			<p>
				App for my grandma loaded onto a Raspberry Pi connected to her TV. The app makes it simple
				and clear for her to select what she wants to watch, and also has a chatbot tailored to
				telling her what shows are on what streaming service.
			</p>
		</div>

		<SimpleLine />

		<div>
			<div class="flex place-content-between w-full">
				<h3>vsfs.state.gov</h3>
				<div class="flex h-8">
					<a href="https://careers.state.gov" target="_blank">
						<Play class="self-center h-full w-full" />
					</a>
					<span class="cursor-not-allowed text-zinc-300">
						<MicrosoftAzureDevops class="self-center h-full w-full " />
					</span>
				</div>
			</div>
			<Tag>react.js</Tag>
			<Tag>express.js</Tag>
			<Tag>bash</Tag>
			<p>
				Virtual Student Federal Services - a remote internship application site. College students
				browse and apply to internships posted by project mentors. In 2022, vsfs.state.gov was
				absorbed by careers.state.gov, where it lives today.
			</p>
		</div>

		<SimpleLine />

		<div>
			<div class="flex place-content-between w-full">
				<h3>tims</h3>
				<div class="flex h-8">
					<a href="https://state.gov/tias" target="_blank">
						<Play class="self-center h-full w-full" />
					</a>
					<span class="cursor-not-allowed text-zinc-300">
						<MicrosoftAzureDevops class="self-center h-full w-full " />
					</span>
				</div>
			</div>
			<Tag>power platform</Tag>
			<Tag>es2015 javascript</Tag>
			<p>
				Treaty Information Management System - the backend system for state.gov/tias, a place where
				unclassified treaties and agreements of the United States are managed by archivists and
				publicly available for viewing.
			</p>
		</div>

		<!--
		<div>
			<div class="flex place-content-between w-full">
				<h3>debbie</h3>
				<div class="flex h-8">
					<a href="https://github.com/bananabrann/debbie" target="_blank">
						<GitHub class="self-center h-full w-full" />
					</a>
				</div>
			</div>
			<Tag>c++</Tag>
			<p>
				Debbie the Decibel Robot, a simple robot that detects sounds around it, then calculates and
				displays the decibels in under 100 lines of code. An old project, but it has been near and
				dear to me. Debbie was dismantled in 2021.
			</p>
		</div>
		-->

		<!-- <h1>Fav Repos</h1>
		<div>
			<div class="flex content-between w-full">
				<h3>geoffrich/svelte-adapter-azure-swa</h3>
			</div>
			<span class="text-sm rounded bg-slate-300 px-2 py-1 text-zinc-600">javascript</span>
			<p>
				SvelteKit adapter for Azure Static Web Apps. I've only contributed a few lines, but I love
				the work they're doing on this repo.
			</p>
		</div> -->
	</section>

	<div class="h-10" />
</ReadingPage>

<style lang="scss">
</style>
