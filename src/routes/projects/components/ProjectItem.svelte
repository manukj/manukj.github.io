<script lang="ts">
	import { ProjectItemModel } from '$lib/data/model/ProjectItemModel';
	export let project: ProjectItemModel;
</script>

<div class="card w-96 border border-dashed">
	<div class="card-body">
		<h2 class="card-title">{project.name}</h2>
		<div class=" overflow-x-auto">
			{#each project.techStack as techStack}
				<img src={techStack.icon} alt="techStack" class="w-5 h-5" />
			{/each}
		</div>
		<div class="line-clamp-3">{project.description}</div>
	</div>
	<div class="btn-link text-white place-content-center flex pb-4">
		<button class="card-title">Read more</button>
	</div>
</div>
