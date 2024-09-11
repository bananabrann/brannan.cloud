<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
</script>

<SkyBoard>
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
		<a role="button" href="/" class="button">Go home</a>

		<div class="my-6"></div>

		<slot />
	</div>
</SkyBoard>

<Footer></Footer>
