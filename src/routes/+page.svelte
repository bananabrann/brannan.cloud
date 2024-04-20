<script>
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import GitHub from "svelte-material-icons/Github.svelte";
	import Discord from "svelte-material-icons/Discord.svelte";
	import LinkedIn from "svelte-material-icons/Linkedin.svelte";
	import GlossyDarkContent from "../lib/components/GlossyDarkContent.svelte";
	import WebStatusBadge from "$lib/components/WebStatusBadge.svelte";

	/**
	 * I do this because Azure Static Web Apps current does not support streaming responses.
	 * This means that the entire HTML response is buffered and sent all at once, rather
	 * than being streamed as it's generated. As of now, there is no way to disable this
	 * for Azure Static Web Apps --it is a platform limitation.
	 *
	 * To get around this, I provide default values instead of just `export let data;`.
	 */
	export let data;

	$: isTvOnline = data.streamed.isTvOnline;
	$: isChatOnline = data.streamed.isChatOnline;

	onMount(() => {
		// If user has selected a language before, use that language.
		if (browser) {
			const localStorageLanguage = localStorage.getItem("brannan.cloud-bioLang");

			if (localStorageLanguage) currentLang = localStorageLanguage;
		}
	});
</script>

<div class="flex flex-col sm:flex-row max-w-6xl m-auto p-2 md:p-8 gap-2 md:gap-5 lg:gap-10">
	<div class="w-full sm:w-1/2 md:w-2/3">
		<h1 class="text-3xl text-center my-8">Welcome to the Brannan Cloud!</h1>
		<GlossyDarkContent>
			<p>
				<b>Hello! 👋</b> This is brannan.cloud, the root of most of my stuff hosted on the internet.
				My name is Lee. I am a software developer in the United States making websites and systems
				Americans use around the world.
				<br /><br />
				Most of my career has been web development with JavaScript and TypeScript, but I've dabbled in
				other tech, especially in my early career.
			</p>

			<div class="flex flex-row h-10 text-white justify-center gap-3 mt-5 *:*:h-8 *:*:w-8">
				<a href="https://github.com/bananabrann" target="_self">
					<GitHub />
				</a>

				<a href="https://discordapp.com/users/321317378862350346" target="_self">
					<Discord />
				</a>

				<a href="https://linkedin.com/in/pbrann" target="_self">
					<LinkedIn />
				</a>
			</div>

			<!-- TODO - Articles and readings -->
		</GlossyDarkContent>
	</div>

	<div class="w-full sm:w-1/2 md:w-1/3">
		<h2 class="text-3xl text-center my-8">Quick Links</h2>

		<div class="flex my-2 flex-col gap-5 flex-wrap justify-between sm:flex-row">
			<GlossyDarkContent>
				<h3 class="text-2xl font-bold mb-2">Symbols</h3>
				<p class="text-sm">Copy and paste convenience symbol picker.</p>
				<div class=" flex flex-col justify-start space-x-2 mt-4">
					<a
						href="/symbols"
						class="inline-block bg-blue-500 hover:bg-blue-600 hover:text-white font-bold py-2 px-4 rounded decoration"
					>
						Go to Symbols
					</a>
					<a
						href="https://coolsymbol.com/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm mt-2 underline"
					>
						Complete list of unicode characters
					</a>
					<a
						href="https://www.babelstone.co.uk/Unicode/whatisit.html"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm mt-2 underline"
					>
						Unicode identifier
					</a>
				</div>
			</GlossyDarkContent>

			<GlossyDarkContent>
				<h3 class="text-2xl font-bold mb-2">Grandma's TV</h3>
				{#await isTvOnline}
					<WebStatusBadge status="loading" />
				{:then isTvOnline}
					<WebStatusBadge status={isTvOnline ? "up" : "down"} />
				{:catch error}
					<WebStatusBadge status="error" />
				{/await}
				<p class="text-sm">
					TV application for my grandma, making it simple and clear for her to select what she wants
					to watch. Also has a chatbot tailored to telling her what shows are on what streaming
					service
				</p>
				<div class=" flex flex-col justify-start space-x-2 mt-4">
					{#await isTvOnline}
						<a
							href="https://tv.brannan.cloud"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block font-bold py-2 px-4 rounded bg-zinc-500 hover:bg-zinc-500 hover:text-zinc-300 text-zinc-300 cursor-not-allowed"
							on:click|preventDefault={true}
						>
							Go to TV
						</a>
					{:then isTvOnline}
						<a
							href="https://tv.brannan.cloud"
							target="_blank"
							rel="noopener noreferrer"
							class={`inline-block  font-bold py-2 px-4 rounded ${
								isTvOnline
									? "bg-blue-500 hover:bg-blue-600 hover:text-white"
									: "bg-zinc-500 hover:bg-zinc-500 hover:text-zinc-300 text-zinc-300 cursor-not-allowed"
							}`}
							on:click|preventDefault={!isChatOnline}
						>
							Go to TV
						</a>
					{/await}

					<a
						href="https://github.com/bananabrann/tv.brannan.cloud"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm mt-2 underline"
					>
						View source
					</a>
				</div>
			</GlossyDarkContent>
			<GlossyDarkContent>
				<h3 class="text-2xl font-bold mb-2">ChatLibre</h3>
				{#await isChatOnline}
					<WebStatusBadge status="loading" />
				{:then isChatOnline}
					<WebStatusBadge status={isChatOnline ? "up" : "down"} />
				{:catch error}
					<WebStatusBadge status="error" />
				{/await}
				<p class="text-sm">
					Enhanced ChatGPT clone for the Brannan family without any usage limitations. Only runs as
					needed for cost savings. Need it turned on? Just ask me!
				</p>
				<div class=" flex flex-col justify-start space-x-2 mt-4">
					{#await isChatOnline}
						<a
							href="http://chat.brannan.cloud"
							target="_blank"
							rel="noopener noreferrer"
							class="inline-block font-bold py-2 px-4 rounded bg-zinc-500 hover:bg-zinc-500 hover:text-zinc-300 text-zinc-300 cursor-not-allowed"
							on:click|preventDefault={true}
						>
							Visit
						</a>
					{:then isChatOnline}
						<a
							href="http://chat.brannan.cloud"
							target="_blank"
							rel="noopener noreferrer"
							class={`inline-block  font-bold py-2 px-4 rounded ${
								isChatOnline
									? "bg-blue-500 hover:bg-blue-600 hover:text-white"
									: "bg-zinc-500 hover:bg-zinc-500 hover:text-zinc-300 text-zinc-300 cursor-not-allowed"
							}`}
							on:click|preventDefault={!isChatOnline}
						>
							Visit
						</a>
					{/await}

					<a
						href="https://github.com/bananabrann/chat.brannan.cloud"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm mt-2 underline"
					>
						View source
					</a>
					<a
						href="https://docs.librechat.ai/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm mt-2 underline">ChatLibre documentation</a
					>
				</div>
			</GlossyDarkContent>
		</div>
	</div>
</div>

<style lang="scss">
</style>
