<script lang="ts">
	import { goto } from '$app/navigation';
	import { pageStore } from '$lib/stores/store';
// import Logo from '$lib/assets/logo.svg';
	import routes from './NavRoutes';

	var selected = 'border-b-2 border-solid border-white text-white';
	var unSelected = 'text-gray-500';

	function moveToPage(page: string) {
		pageStore.set(page);
		goto(`${page.toLowerCase()}`);
	}
</script>

<div class="w-full flex place-content-center pt-5">
	<div class="buttons">
		{#each routes as route}
			<button
				class={` ml-4 text-center ${$pageStore === route.href ? selected : unSelected}`}
				on:click={() => moveToPage(route.href)}
				type="button"
			>
				{route.label}
			</button>
		{/each}
	</div>
</div>

<style>
</style>
