<script lang="ts">
	import { mainPageHeader, mainPageSubHeader } from '$lib/data/data';
	import { firstTime } from '$lib/stores/store';
	import { onMount } from 'svelte';

	onMount(() => {
		if ($firstTime) {
			setTimeout(() => {
				$firstTime = false;
			}, 2500);
		}
	});
</script>

<svelte:head>
	<title>Manu - Main page</title>
</svelte:head>
<div class="h-full w-full place-content-center flex place-items-center">
	<div class="flex flex-col text-center h-full justify-center justify-items-center">
		<div class="text-white font-bold text-4xl text-center">
			Hi!✋ <br />
			<div class={$firstTime ? 'typewriter-start' : 'typewriter-stop'}>
				{mainPageHeader}
			</div>
		</div>
		<div class="text-white font-thin pt-5 {$firstTime ? 'fade-in' : ''}">
			{mainPageSubHeader}
		</div>
		<div class="w-full place-content-center flex pt-10">
			<iframe
				src="https://github-readme-activity-graph.vercel.app/graph?username=manukj&hide_title=true&color=FFFFFF&line=FFF&bg_color=000000&area_color=FF0000"
				width="570"
				height="200"
				title="GitHub Readme Activity Graph"
				style="background: #000000;"
			/>
		</div>
	</div>
</div>

<style>
	.typewriter-start {
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
		animation:
			typing 2.5s steps(40, end),
			blink-caret 0.75s step-end infinite;
	}

	.typewriter-stop {
		animation: none;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
	}

	.fade-in {
		animation: fadeIn 6s;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
</style>
