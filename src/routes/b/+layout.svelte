<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import "./blogStyles.css";


</script>

<div class="bg-white container mx-auto px-4 sm:px-6 lg:px-8">nav TODO hi</div>


<SkyBoard>
	<h1 class="text-black text-5xl">Header 1</h1>
	<article>
		<slot />
	</article>
</SkyBoard>

<Footer></Footer>

<style lang="postcss">
	/* h2 {
		@apply text-black text-2xl;
	} */
</style>
