<script>
	import SimpleLine from "$lib/components/SimpleLine.svelte";
	import ReadingPage from "$lib/components/ReadingPage.svelte";
	import unitPhoto from "$lib/assets/jpeg/db.jpg";
	import avenchesPhoto from "$lib/assets/jpeg/avenches.jpg";
	import fhgPhoto from "$lib/assets/jpeg/fhg-1954.jpg";
	import horsePhoto from "$lib/assets/png/horse.png";
	import cowboyBandPhoto from "$lib/assets/jpeg/cbb.jpg";
</script>

<ReadingPage>
	<h1>About Me</h1>

	<div class="h-6" />

	<ol>
		<li><a href="#first-beat">First Beat in Music</a></li>
		<li><a href="#career-in-software">A Career in Software</a></li>
	</ol>

	<SimpleLine />

	<h2 id="first-beat">First Beat in Music</h2>

	<!-- prettier-ignore -->
	<p>
		I was born and raised in the Great Plains of West Texas. Before becoming a software engineer,
		my main <del>addiction</del> hobby was playing tuba. I've performed in hundreds if not
		thousands of concerts throughout my life, including audiences of former U.S. president 
		<a href="https://en.wikipedia.org/wiki/Barack_Obama" target="_blank">Barack Obama</a>
		and his wife, Michelle, former Vice President 
		<a href="https://en.wikipedia.org/wiki/Mike_Pence" target="_blank">Mike Pence</a>, and
		countless generals, heads of states, and foreign dignatories and ambassasdors.
		</p>

	<!-- prettier-ignore -->
	<p>
		Along with tuba, I've also played bass trombone in the jazz bands for
		<a href="https://en.wikipedia.org/wiki/Lenny_Pickett" target="_blank">Lenny Pickett</a>,
		<a href="https://en.wikipedia.org/wiki/Tom_Malone_(musician)" target="_blank">Tom "Bones" Malone</a>,
		<a href="https://en.wikipedia.org/wiki/Wayne_Bergeron">Wayne Bergeron</a>, and many more.
	</p>

	<p>
		I started off by going to college majoring in Music Education. In West Texas "big country",
		rodeos are a popular sport. I played in my school's rodeo band, performing at competitions
		primarily in Stamford, Texas.
	</p>

	<div class="flex gap-2">
		<div class="flex-1">
			<img src={cowboyBandPhoto} alt="" class="object-cover h-full w-full" />
		</div>
		<div class="flex-1">
			<img src={horsePhoto} alt="" class="object-cover h-full w-full" />
		</div>
	</div>
	<div class="flex image-text">
		<p>Portrait of the HSU Cowboy Band.</p>
		<p>
			A barrel racer at the <a
				href="https://en.wikipedia.org/?title=Texas_Cowboy_Reunion&redirect=no"
				target="_blank">Texas Cowboy Reunion</a
			> rodeo in Stamford, Texas.
		</p>
	</div>

	<p>
		Later during my first year of college, I auditioned for and won a spot as a tuba player in "The
		Commandant's Own",
		<a
			href="https://en.wikipedia.org/wiki/List_of_United_States_military_premier_ensembles"
			target="_blank">one of the U.S. military premier bands</a
		>.
	</p>
	<img src={unitPhoto} alt="" />
	<div class="image-text">
		<p>
			"The Commandant's Own", The United States Marine Drum & Bugle Corps. I'm somewhere in here.
		</p>
	</div>

	<p>
		After being injected from West Texas to the urban living of Washington, D.C., I traveled the
		world playing tuba for foreign dignitaries and presidential audiences.
	</p>

	<div class="flex gap-2">
		<div class="flex-1">
			<img src={avenchesPhoto} alt="" class="object-cover h-full w-full" />
		</div>
		<div class="flex-1">
			<img src={fhgPhoto} alt="" class="object-cover h-full w-full" />
		</div>
	</div>
	<div class="flex image-text">
		<p>
			Joint concert with military bands from the United States, United Kingdom, Russia, Italy, and
			others in Avenches, Switzerland.
		</p>
		<p>
			Celebration of the <a
				href="https://en.wikipedia.org/wiki/Ogdensburg_Agreement"
				target="_blank">Ogdensburg Agreement</a
			> in Kingston, Canada.
		</p>
	</div>

	<p>
		Between mostly playing a rodeo band and military band, I've played more than my fair share of
		marches and gallops (marches in cut time). I've come to really love the genre 😛
	</p>

	<p>My favorite marches:</p>

	<!-- prettier-ignore -->
	<ol class="list-decimal">
		<li><a href="https://youtu.be/Fb9HkJam-WI" target="_blank">"March No. 1 in F Major", Ludwig van Beethoven (German/Austrian)</a></li>
		<li><a href="https://youtu.be/W4x3LFlnfcg" target="_blank">"Hands Across the Sea", John Sousa (American)</a></li>
		<li><a href="https://youtu.be/GF-8-avIdYI" target="_blank">"Blencathra", William Rimmer (German)</a></li>
	</ol>

	<p>My favorite American marches:</p>

	<!-- prettier-ignore -->
	<ol class="list-decimal">
		<li><a href="https://youtu.be/W4x3LFlnfcg" target="_blank">"Hands Across the Sea", John Sousa</a></li>
		<li><a href="https://youtu.be/peidgSY8A50" target="_blank">"The Washington Post", John Sousa</a></li>
		<li><a href="https://youtu.be/37Ps_YDFQJg" target="_blank">"Trombone King", Karl King</a></li>
	</ol>

	<p>Honorable mentions:</p>

	<!-- prettier-ignore -->
	<ul>
		<li><a href="https://youtu.be/ln-3VMr7l-Y" target="_blank">"Anchors Aweigh", Charles Zimmerman (American)</a></li>
		<li><a href="https://youtu.be/a-7XWhyvIpE&t=57" target="_blank">"The Stars and Stripes Forever", John Sousa (American)</a></li>
		<li><a href="https://youtu.be/jZzHK4iJ1jM">"The British Grenadiers", (British)</a></li>
		<li><a href="https://youtu.be/EZeU5COPFEI" target="_blank">"The Liberty Bell", John Sousa (American)</a></li>
	</ul>

	<p>Marches that got confused and turned into spy jazz:</p>

	<!-- prettier-ignore -->
	<ul>
		<li><a href="https://youtu.be/cM8SLX6fa40" target="_blank">"Wakawashi", Yuji Koseki (Imperialist Japanese)</a></li>
	</ul>

	<SimpleLine />

	<h2 id="career-in-software">A Career in Software</h2>

	<p>
		The Marines gave me the launching pad for my life, and I would do it again in a heartbeat.
		However, staying for a career wasn't for me.
	</p>

	<p>
		After leaving the Marines, I attended General Assembly's web development course (now called
		"Software Engineering Immersive"), a three-month vocational coding school/bootcamp in
		Washington, D.C. I made a bunch of websites, built a simple listening robot named Debbie, and
		passed all my exams. From there, I was hired and started my journey as a software developer.
	</p>
	<p class="text-sm italic text-zinc-400 text-center">
		I don't have many photos from this time period. I regret not taking more photos.
	</p>
</ReadingPage>

<style lang="scss">
	.image-text {
		@apply text-xs md:text-sm gap-1 text-center;

		> p {
			@apply w-full px-1;
		}
	}

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
