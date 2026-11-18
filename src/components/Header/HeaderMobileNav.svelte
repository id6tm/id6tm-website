<script lang="ts">
import { Collapsible } from "bits-ui";
import { ArrowRightIcon, CaretDownIcon } from "phosphor-svelte";
import type { HeaderNavProps } from "./Header.interfaces";

const { links, projectsLinks }: Readonly<HeaderNavProps> = $props();
</script>

<div class="flex flex-col gap-2.5 px-30 pt-3 pb-1.5 max-sm:px-5">
	<Collapsible.Root>
		<Collapsible.Trigger
			class="text-grey-60 text-tag flex w-full items-center justify-between gap-2.5 rounded px-3 py-2.5 [&[data-state=open]>svg]:-rotate-180"
		>
			Projets
			<CaretDownIcon class="size-6 transition-all" />
		</Collapsible.Trigger>
		<Collapsible.Content class="px-3 py-1.5">
			{#each projectsLinks as { Icon, href, label } (href + label)}
				<a
					{href}
					class="text-grey-60 text-tags flex items-center gap-2.5 rounded px-3 py-2.5"
					style="font-size: 15px;"
				>
					<Icon class="size-5" />
					{label} <ArrowRightIcon class="size-5" />
				</a>
			{/each}
		</Collapsible.Content>
	</Collapsible.Root>
	{#each links as link (link.href + link.label)}
		<a
			href={link.href}
			class="text-grey-60 text-tag flex items-center gap-2.5 rounded px-3 py-2.5"
		>
			{link.label}
			<ArrowRightIcon class="size-6" />
		</a>
	{/each}
</div>
