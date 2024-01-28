<script lang="ts">
	import { goto } from '$app/navigation';
	import { pageStore } from '$lib/stores/store.js';
	import { onMount } from 'svelte';

	onMount(() => {
		pageStore.set('home');
		goto('/home');
	});
</script>
