<script lang="ts">
	import { projectData } from '$lib/data/project/project_data';
	import ProjectItem from './components/ProjectItem.svelte';
</script>

<div class="w-screen flex justify-center justify-self-center place-content-center">
	<div class="grid grid-flow-row lg:grid-cols-3 sm:grid-cols-1 gap-6 h-10">
		{#each projectData as project}
			<ProjectItem {project} />
		{/each}
	</div>
</div>
