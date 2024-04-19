<script>
	import SimpleLine from "$lib/components/SimpleLine.svelte";
	import ReadingPage from "$lib/components/ReadingPage.svelte";
	import CharacterCard from "$lib/components/CharacterCard.svelte";
</script>

<ReadingPage>
	<h1>Symbols</h1>
	<p>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa autem atque aperiam. Delectus nemo
		veritatis itaque ipsa ipsam corporis, voluptate, dolor consequatur tenetur hic cum qui velit
		architecto, quod possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam
		neque debitis reiciendis tempore cum repellendus eius inventore velit expedita dolore, assumenda
		alias deleniti quis ipsa. Voluptate aspernatur distinctio ab?
	</p>
	<p>
		Have you ever wanted to copy and paste a unicode character, but found yourself going to
		half-shady websites filled with ads, or having to find text with the symbol and surgically
		selecting it from the document? I sure have! Which is why I've created this page for myself to
		copy commonly used unicode characters.
	</p>

	<div class="my-7">
		<SimpleLine />
	</div>

	<h3>Bullets</h3>
	<div class="flex flex-wrap flex-start gap-1.5 my-4">
		<CharacterCard title="bullet" character="•" unicode="U+2022" />
		<CharacterCard title="four point star" character="✦" unicode="U+2726" />
	</div>

	<h3 class="mt-10">Currencies and Symbols</h3>
</ReadingPage>
