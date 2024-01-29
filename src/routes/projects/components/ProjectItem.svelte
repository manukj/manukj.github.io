<script lang="ts">
	import { ProjectItemModel } from '$lib/data/model/ProjectItemModel';
	export let project: ProjectItemModel;

	function moveToUrl(url: string) {
		window.open(url, '_blank');
	}
</script>

<div class="card w-96  border border-dashed">
	<div class="card-body">
		<h2 class="card-title">{project.name}</h2>
		<div class=" flex flex-row overflow-x-auto">
			{#each project.techStack as techStack}
				<img src={techStack.icon} alt="techStack" class="w-5 h-5 mr-1" />
			{/each}
		</div>
		<div class="line-clamp-3 text-xs">{project.description}</div>
	</div>
	{#if project.url}
		<div class="btn-link text-white place-content-center flex pb-4">
			<button
				class="card-title"
				on:click={() => {
					moveToUrl(project?.url ?? '');
				}}>Read more</button
			>
		</div>
	{/if}
</div>
