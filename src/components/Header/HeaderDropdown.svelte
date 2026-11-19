<script lang="ts">
import { DropdownMenu } from "bits-ui";
import { CaretDownIcon } from "phosphor-svelte";
import type { HeaderNavProps } from "./Header.interfaces";

const { projectsLinks }: Readonly<Pick<HeaderNavProps, "projectsLinks">> =
	$props();
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="text-grey-60 text-tag hover:bg-grey-20 hover:text-blue flex cursor-pointer items-center gap-2.5 rounded px-3 py-2.5 transition-colors"
	>
		<span>Projets</span>
		<CaretDownIcon class="size-6" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Portal>
		<DropdownMenu.Content
			sideOffset={10}
			class="bg-stroke-gradient z-50 rounded p-px shadow-lg outline-hidden"
		>
			<DropdownMenu.Group
				class="rounded bg-white p-2 select-none"
				aria-label="projects links"
			>
				{#each projectsLinks as { Icon, href, label } (href + label)}
					<DropdownMenu.Item textValue={href}>
						<a
							{href}
							class="text-grey-60 text-tag hover:bg-grey-20 hover:text-blue flex items-center gap-2.5 rounded px-3 py-2.5 transition-colors"
						>
							<Icon class="size-6" />
							{label}</a
						>
					</DropdownMenu.Item>
				{/each}
			</DropdownMenu.Group>
		</DropdownMenu.Content>
	</DropdownMenu.Portal>
</DropdownMenu.Root>
