<script lang="ts">
	import { projectData } from '$lib/data/project/project_data';
	import ProjectItem from './components/ProjectItem.svelte';
</script>

<div class=" w-screen flex justify-center justify-self-center">
	<div class="grid grid-flow-row grid-cols-2 gap-16 h-10">
		{#each projectData as project}
			<ProjectItem {project} />
		{/each}
	</div>
</div>
