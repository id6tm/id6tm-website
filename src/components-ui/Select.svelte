<script lang="ts">
import { cn } from "@utils/cn";
import { Select, type WithoutChildren } from "bits-ui";
import { CaretDownIcon, CheckIcon } from "phosphor-svelte";

type Props = WithoutChildren<Select.RootProps> & {
	placeholder?: string;
	items: { value: string; label: string; disabled?: boolean }[];
	contentProps?: WithoutChildren<Select.ContentProps>;
	class?: string;
};

let {
	value = $bindable(),
	items,
	contentProps,
	placeholder = "Sélectionner",
	...restProps
}: Props = $props();
</script>

<!--
TypeScript Discriminated Unions + destructing (required for "bindable") do not
get along, so we shut typescript up by casting `value` to `never`, however,
from the perspective of the consumer of this component, it will be typed appropriately.
-->
<Select.Root {items} bind:value={value as never} {...restProps}>
	<Select.Trigger
		class={cn(
			"text-input max-md:text-input-mobile flex items-center justify-between gap-2.5 rounded border border-black max-md:gap-1.5 max-md:p-2 md:px-3 md:py-2.5",
			restProps.class,
		)}
	>
		<Select.Value {placeholder} />
		<CaretDownIcon class="size-6 max-md:size-4" />
	</Select.Trigger>
	<Select.Portal>
		<Select.Content
			{...contentProps}
			class="border-grey-60 z-50 max-h-(--bits-select-content-available-height) w-(--bits-select-anchor-width) min-w-(--bits-select-anchor-width) rounded border bg-white p-2 shadow-lg outline-hidden select-none"
		>
			<Select.ScrollUpButton>up</Select.ScrollUpButton>
			<Select.Viewport>
				{#each items as { value, label, disabled } (value)}
					<Select.Item
						{value}
						{label}
						{disabled}
						class="data-highlighted:bg-grey-05 flex w-full items-center justify-between gap-1.5 rounded px-3 py-1.5 outline-hidden select-none"
					>
						{#snippet children({ selected })}
							{label}
							{#if selected}
								<CheckIcon />
							{/if}
						{/snippet}
					</Select.Item>
				{/each}
			</Select.Viewport>
			<Select.ScrollDownButton>down</Select.ScrollDownButton>
		</Select.Content>
	</Select.Portal>
</Select.Root>
