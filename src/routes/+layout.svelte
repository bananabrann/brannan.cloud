<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";

	$: title = `${$page.data.metadata?.title ? $page.data.metadata?.title + " |" : "" } The Brannan Cloud`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content="Home site of the @bananabrann" />
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<slot />
