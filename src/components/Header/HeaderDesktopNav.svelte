<script lang="ts">
import type { HeaderNavProps } from "./Header.interfaces";
import HeaderDropdown from "./HeaderDropdown.svelte";

const { links, projectsLinks }: Readonly<HeaderNavProps> = $props();
</script>

<div class="flex items-center gap-2">
	<HeaderDropdown {projectsLinks} />
	{#each links as link (link.href + link.label)}
		<a
			href={link.href}
			class="text-grey-60 text-tag hover:bg-grey-20 hover:text-blue rounded px-3 py-2.5 transition-colors"
		>
			{link.label}
		</a>
	{/each}
</div>
