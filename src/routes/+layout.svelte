<script lang="ts">
	import { goto } from '$app/navigation';
	import NavBar from '$lib/components/NavBar.svelte';
	import { pageStore } from '$lib/stores/store';
	import '../app.css';

	function moveToPage(page: string) {
		pageStore.set(page);
		// redirect the page to root/page
		goto(`/${page.toLowerCase()}`);
	}
</script>

<div class="flex flex-col h-screen">
	<NavBar segment={$pageStore} />
	<div class="flex flex-1">
		<slot />
	</div>
</div>

<style>
	@font-face {
		font-family: 'Fira Code', monospace;
		font-display: optional;
		src: url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');
	}
	:global(body) {
		transition: background-color 0.2s ease 0s;
		position: relative;
		width: 100%;
		height: 100%;
		overflow: auto;
		font-family: 'Fira Code', monospace;
		background-color: #0a0908;
	}
</style>
