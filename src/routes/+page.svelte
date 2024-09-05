<script lang="ts">
	import Footer from "$lib/components/Footer/Footer.svelte";
	import SkyBoard from "$lib/components/SkyBoard/SkyBoard.svelte";
	import BananamanOnCloud from "$lib/assets/png/bananaman-on-cloud.png";
	import svgHello from "$lib/assets/svg/hello.svg?raw";
</script>

<SkyBoard>
	<div class="flex items-center justify-center pt-10">
		<img src={BananamanOnCloud} alt="" class="max-w-xl object-contain animate-oscillateGently">
		<span class="ml-16 transform scale-150">
			{@html svgHello}
		</span>
	</div>

</SkyBoard>


<Footer></Footer>
