<script lang="ts">
import { cn } from "@utils/cn";
import { Checkbox, Label, type WithoutChildrenOrChild } from "bits-ui";
import { CheckIcon, SquareIcon } from "phosphor-svelte";
import type { Snippet } from "svelte";

interface CheckboxProps {
	/**
	 * if not passed, fallback to name
	 */
	id?: string;
	name: string;
	label: Snippet;
}
let {
	checked = $bindable(false),
	ref = $bindable(null),
	label,
	name,
	id,
}: WithoutChildrenOrChild<Checkbox.RootProps> & CheckboxProps = $props();
</script>

<div class="flex items-center gap-2.5 max-md:gap-1.5">
	<Checkbox.Root
		id={id ?? name}
		bind:checked
		bind:ref
		aria-labelledby={name}
		class="inline-flex items-center justify-center"
		{name}
	>
		<div
			class={cn(
				"inline-flex items-center justify-center",
				checked && "bg-orange size-6 max-md:size-2.75",
			)}
		>
			{#if checked}
				<CheckIcon
					class="h-[22.5px] w-[15.75px] stroke-2! max-md:h-[12.5px] max-md:w-[8.75px]"
					fill="white"
					weight="bold"
				/>
			{:else}
				<SquareIcon class="size-6 max-md:size-2.75" weight="bold" />
			{/if}
		</div>
	</Checkbox.Root>
	<Label.Root
		id={`${id ?? name}-label`}
		for={id ?? name}
		class="text-button max-md:text-tags-mobile font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
	>
		{@render label()}
	</Label.Root>
</div>
