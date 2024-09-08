<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import { page } from "$app/stores";
	import PngBananamanUpset from "$lib/assets/png/bananaman-upset.png";
</script>

<SkyBoard>
	<div class="flex flex-col items-center px-2 md:px-6">
		<h1 class="text-xl sm:text-2xl lg:text-3xl mt-4 lg:mt-10">Uh-oh... Something went wrong.</h1>
		<img src={PngBananamanUpset} alt="" class="w-44 md:w-56 lg:w-72" />
		<div class="flex flex-col items-center justify-center">
			<p
				class=" bg-black w-full py-6 px-10 rounded-lg font-mono text-sm md:text-base lg:text-lg mb-2"
			>
				<!-- <p class="text-red-600 font-semibold font-mono w-full text-2xl"> -->
				bananabrann@definitely-not-a-prod-vm:/www/brannan.cloud$ rm -rf .{$page.url.pathname}<br />
				^C<br />^C<br />^Comg pls^C^C<br />^C<br />

				Failed to remove directory .{$page.url.pathname}:
				<span class="text-red-500 font-semibold"
					>{$page.status}:
					{#if $page.error}
						{$page.error.message}
					{:else}
						An unknown error occured.
					{/if}
				</span><br />
				bananabrann@definitely-not-a-prod-vm:~$
			</p>

			<p class="text-sm text-gray-50 ml-auto mb-6">
				This is a joke. Your actual error message is in red.
			</p>

			<a role="button" href="/" class="button">Go home</a>
		</div>
	</div>
</SkyBoard>

<Footer></Footer>
