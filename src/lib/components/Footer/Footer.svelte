<script lang="ts">
	import svgLock from "$lib/assets/svg/lock.svg?raw";
	import { version } from "$app/environment";

	const oldEgaUrl = "/old-ega.png?url";
</script>

<footer class="bg-slate-800 p-4 w-full z-30 relative text-white">
	<!--
		NOTE - Inner container is needed so that the footer covers the star board. Without
		this container, the footer's width technicaly doesn't expand the full width therefore
		some stars are visible. Of course, if the content expanded with it, it'd look weird.
		So here, the content itself lives within the footer whose width is 100% of the viewport.
	-->
	<div class="max-w-2xl m-auto flex flex-wrap">
		<div class="w-full sm:w-1/2 p-2">
			<h4>Index</h4>
			<ul class="ml-4">
				<li><a href="/">Home</a></li>
				<li><a href="/symbols">Symbols</a></li>
			</ul>

			<h4>Sites</h4>
			<ul class="ml-4">
				<li><a href="https://tv.brannan.cloud">Grandma's TV</a></li>
				<li><a href="http://chat.brannan.cloud">LibreChat</a></li>
				<li class="text-gray-400">
					<a href="https://files.brannan.cloud" class="flex flex-row items-center ">
						<span class="fill-white mr-1 h-4 w-4"> {@html svgLock} </span>
						Brannan File Share
					</a>
				</li>
			</ul>

			<h4>Socials</h4>
			<ul class="ml-4">
				<li><a href="https://github.com/bananabrann" target="_self">GitHub</a></li>
				<li>
					<a href="https://discordapp.com/users/321317378862350346" target="_self">Discord</a>
				</li>
				<li><a href="https://linkedin.com/in/pbrann" target="_self">LinkedIn</a></li>
			</ul>
		</div>

		<div class="w-full sm:w-1/2 p-2 text-center">
			<p class="">
				Website by me,
				<a
					href="https://github.com/bananabrann/brannan.cloud/blob/main/LICENSE"
					target="_blank"
					class="underline text-white hover:text-yellow-400"
					>MIT license, 2024.
				</a><br />
				Art and web assets by various artists, all rights reserved.
			</p>
			<small>Build {version}</small>

			<div class="m-auto text-white h-20 w-20 mt-4">
				<img src={oldEgaUrl} alt="" />
			</div>
		</div>
	</div>
</footer>

<style lang="postcss">
	li a {
		@apply hover:text-yellow-400 text-white;
	}

	h4 {
		@apply text-xl font-thin text-gray-500 tracking-wider uppercase my-2;
	}
</style>
