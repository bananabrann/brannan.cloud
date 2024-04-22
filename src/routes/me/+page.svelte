<script>
	import SimpleLine from "$lib/components/SimpleLine.svelte";
	import ReadingPage from "$lib/components/ReadingPage.svelte";
	import unitPhoto from "$lib/assets/jpeg/db.jpg";
	import avenchesPhoto from "$lib/assets/jpeg/avenches.jpg";
	import fhgPhoto from "$lib/assets/jpeg/fhg-1954.jpg";
</script>

<ReadingPage>
	<h1>About Me</h1>
	<p>
		I was born and raised in the Great Plains of West Texas. After high school, I went to college as
		a music major. After a year, I auditioned for and won a spot in "The Commandant's Own", <a
			href="https://en.wikipedia.org/wiki/List_of_United_States_military_premier_ensembles"
			target="_blank">one of the U.S. military premier bands</a
		>.
	</p>
	<img src={unitPhoto} alt="" />
	<p class="text-sm text-center px-4">
		"The Commandant's Own", The United States Marine Drum & Bugle Corps. I'm somewhere in here.
	</p>

	<p>I traveled the world playing tuba for foreign dignitaries and presidential audiences.</p>

	<div class="flex gap-2">
		<div class="flex-1">
			<img src={avenchesPhoto} alt="" class="object-cover h-full w-full" />
		</div>
		<div class="flex-1">
			<img src={fhgPhoto} alt="" class="object-cover h-full w-full" />
		</div>
	</div>
	<div class="flex text-sm mx-1 gap-2 text-center">
		<p class="w-full px-4">
			Joint concert with military bands from the United States, United Kingdom, Russia, Italy, and
			others in Avenches, Switzerland.
		</p>
		<p class="w-full px-4">
			Celebration of the <a
				href="https://en.wikipedia.org/wiki/Ogdensburg_Agreement"
				target="_blank">Ogdensburg Agreement</a
			> in Kingston, Canada.
		</p>
	</div>

	<!-- prettier-ignore -->
	<p>
		My favorite marches: <br />
		1. <a href="https://youtu.be/Fb9HkJam-WI" target="_blank">"March No. 1 in F Major", Ludwig van Beethoven (German).</a><br>
		2. <a href="https://youtu.be/W4x3LFlnfcg" target="_blank">"Hands Across the Sea", John Sousa (American).</a><br>
		3. <a href="https://youtu.be/GF-8-avIdYI" target="_blank">"Blencathra", William Rimmer (German).</a>
	</p>

	<!-- prettier-ignore -->
	<p>
		My favorite American marches: <br />
		1. <a href="https://youtu.be/W4x3LFlnfcg" target="_blank">"Hands Across the Sea", John Sousa.</a><br>
		2. <a href="https://youtu.be/EZeU5COPFEI" target="_blank">"The Liberty Bell", John Sousa.</a><br>
		3. <a href="https://youtu.be/37Ps_YDFQJg" target="_blank">"The Trombone King", Karl King.</a>
	</p>

	<!-- prettier-ignore -->
	<p>
		Honorable mentions: <br />
		• <a href="https://youtu.be/MHYIGxPdsMg" target="_blank">"Anchors Aweigh" (U.S. Navy song), Charles Zimmerman (American).</a><br>
		• <a href="https://youtu.be/a-7XWhyvIpE&t=57" target="_blank">"The Stars and Stripes Forever", John Sousa (American).</a><br>
		• <a href="https://youtu.be/jZzHK4iJ1jM">"The British Grenadiers" (17th century's boss music) (British)</a>
	</p>

	<p>
		The Marines gave me the launching pad for my life, and I would do it again in a heartbeat.
		However, saying for a career wasn't for me.
	</p>
	<p>
		After leaving the Marines, I attended General Assembly's web development course (now called
		"Software Engineering Immersive"), a 3-month vocational coding school/bootcamp in Washington,
		D.C. I made a bunch of websites, built a simple listening robot named Debbie, and passed all my
		exams. From there, I was hired and started my journey as a software developer.
	</p>
</ReadingPage>

<style type="scss">
	a {
		@apply text-blue-600;

		&:hover {
			@apply text-pink-400;
		}
	}
	p {
		@apply my-3;
	}
</style>
