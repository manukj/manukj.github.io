<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { ProjectItemModel } from '$lib/data/model/ProjectItemModel';
	export let project: ProjectItemModel;

	function moveToUrl(url: string) {
		window.open(url, '_blank');
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
	class="w-96 rounded shadow-slate-600 shadow-lg border-gray-500 border-[1px] cursor-pointer"
	on:click={() => {
		moveToUrl(project?.url ?? '');
	}}
>
	<Card>
		<div class="card-body">
			<h2 class="card-title">{project.name}</h2>
			<div class="flex flex-row overflow-x-auto">
				{#each project.techStack as techStack}
					<img src={techStack.icon} alt="techStack" class="w-5 h-5 mr-1" />
				{/each}
			</div>
			<div class="line-clamp-4 text-xs">{project.description}</div>
		</div>
	</Card>
</div>
