<script>
	import SimpleLine from "$lib/components/SimpleLine.svelte";
	import ReadingPage from "$lib/components/ReadingPage.svelte";
	import CharacterCard from "$lib/components/CharacterCard.svelte";
</script>

<ReadingPage>
	<h1>Symbols</h1>
	<p>
		Have you ever wanted to copy and paste a unicode character, but found yourself going to
		half-shady websites filled with ads, or having to find text with the symbol and surgically
		selecting it from the document? I sure have! Which is why I've created this page for myself to
		copy commonly used unicode characters.
	</p>

	<div class="my-7">
		<SimpleLine />
	</div>

	<h2>My Favorites</h2>
	<section>
		<CharacterCard title="bullet" character="•" unicode="U+2022" />
		<CharacterCard title="four point" character="✦" unicode="U+2726" />
		<CharacterCard title="alt four point" character="✧" unicode="U+2727" />
		<CharacterCard title="not equal" character="≠" unicode="U+2260" />
		<CharacterCard title="check mark" character="✔" unicode="U+2714" />
		<CharacterCard title="ballot x" character="✘" unicode="U+2718" />
	</section>

	<h2 class="mt-10">Currencies and Symbols</h2>
	<section>
		<CharacterCard title="cent" character="¢" unicode="U+00A2" />
		<CharacterCard title="euro" character="€" unicode="U+20AC" />
		<CharacterCard title="pound" character="£" unicode="U+00A3" />
		<CharacterCard title="copyright" character="©" unicode="U+00A9" />
		<CharacterCard title="registered" character="®" unicode="U+00AE" />
		<CharacterCard title="trademark" character="™" unicode="U+2122" />
		<CharacterCard title="less than or equal to" character="≤" unicode="U+2264" />
		<CharacterCard title="greater than or equal to" character="≥" unicode="U+2265" />
	</section>

	<h2>Chess and Cards</h2>
	<section>
		<CharacterCard title="spade" character="♠" unicode="U+2660" />
		<CharacterCard title="club" character="♣" unicode="U+2663" />
		<CharacterCard title="black heart" character="♥" unicode="U+2665" />
		<CharacterCard title="black diamond" character="♦" unicode="U+2666" />
		<CharacterCard title="white king" character="♔" unicode="U+2654" />
		<CharacterCard title="white queen" character="♕" unicode="U+2655" />
		<CharacterCard title="white rook" character="♖" unicode="U+2656" />
		<CharacterCard title="white bishop" character="♗" unicode="U+2657" />
		<CharacterCard title="white knight" character="♘" unicode="U+2658" />
		<CharacterCard title="white pawn" character="♙" unicode="U+2659" />
		<CharacterCard title="black king" character="♚" unicode="U+265A" />
		<CharacterCard title="black queen" character="♛" unicode="U+265B" />
		<CharacterCard title="black rook" character="♜" unicode="U+265C" />
		<CharacterCard title="black bishop" character="♝" unicode="U+265D" />
		<CharacterCard title="black knight" character="♞" unicode="U+265E" />
		<CharacterCard title="black pawn" character="♟" unicode="U+265F" />
	</section>
</ReadingPage>

<style type="scss">
	section {
		@apply flex flex-wrap gap-1.5 my-7;
	}
</style>
