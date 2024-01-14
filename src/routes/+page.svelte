<script>
	import { mainPageHeader, mainPageSubHeader } from '$lib/data/data';
</script>

<svelte:head>
	<title>Manu - Main page</title>
</svelte:head>
<div class="flex flex-col text-center w-1/2">
	<div class="text-white font-bold text-4xl text-center">Hi!✋ <br /> {mainPageHeader}</div>
	<div class="text-white font-thin">
		{mainPageSubHeader}
	</div>
</div>
