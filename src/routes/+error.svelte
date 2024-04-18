<script>
	import { page } from "$app/stores";
	import InternalScreamingPng from "$lib/assets/png/internal-screaming.png";
</script>

<div class="min-h-96 flex flex-col justify-center text-center mt-6 mb-32 mx-auto gap-4 w-5/6">
	<img src={InternalScreamingPng} alt="" class="max-w-full mx-auto" />

	<h1 class="text-7xl font-bold text-red-600">
		{$page.status}
	</h1>
	<h2 class="font-bold text-red-600 text-4xl">
		{$page.error.message}
	</h2>
</div>
