<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
</script>

<div class="flex flex-col h-screen">
	<NavBar />
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
