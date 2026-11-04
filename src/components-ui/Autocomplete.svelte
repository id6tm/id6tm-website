<script lang="ts">
import { cn } from "@utils/cn";
import { Combobox, mergeProps, type WithoutChildrenOrChild } from "bits-ui";
import { CheckIcon, MagnifyingGlassIcon } from "phosphor-svelte";

type AutocompleteProps = Combobox.RootProps & {
	inputProps?: WithoutChildrenOrChild<Combobox.InputProps>;
	contentProps?: WithoutChildrenOrChild<Combobox.ContentProps>;
};

let {
	items = [],
	value = $bindable(),
	open = $bindable(false),
	inputProps,
	contentProps,
	type,
	...restProps
}: AutocompleteProps = $props();

let customAnchor = $state<HTMLElement>(null!);

let searchValue = $state("");

const filteredItems = $derived.by(() => {
	if (searchValue === "") return items;
	return items.filter((item) =>
		item.label.toLowerCase().includes(searchValue.toLowerCase()),
	);
});

function handleInput(e: Event & { currentTarget: HTMLInputElement }) {
	searchValue = e.currentTarget.value;
}

function handleOpenChange(newOpen: boolean) {
	if (!newOpen) searchValue = "";
}

const mergedRootProps = $derived(
	mergeProps(restProps, { onOpenChange: handleOpenChange }),
);
const mergedInputProps = $derived(
	mergeProps(inputProps, { oninput: handleInput }),
);
</script>

<!--
Destructuring (required for bindable) and discriminated unions don't play well together,
so we cast the value to `never` to avoid type errors here. However, on the consumer
side, the component will still be type-checked correctly.
-->
<Combobox.Root
	{type}
	{items}
	bind:value={value as never}
	bind:open
	{...mergedRootProps}
>
	<div
		bind:this={customAnchor}
		class={cn(
			"text-input max-md:text-input-mobile placeholder:text-gey-40 hover:border-blue flex w-fit items-center gap-2.5 rounded border border-black transition-all duration-300 max-md:p-8 md:px-3 md:py-2.5 hover:[&_svg]:text-blue-50 hover:[&>input]:placeholder:text-blue-50",
			inputProps?.class as string | undefined,
		)}
	>
		<Combobox.Input {...mergedInputProps} class="outline-hidden" />
		<Combobox.Trigger
			><MagnifyingGlassIcon class="size-6 max-md:size-4" /></Combobox.Trigger
		>
	</div>
	<Combobox.Portal>
		<Combobox.Content
			{...contentProps}
			class="border-grey-60 z-50 max-h-(--bits-combobox-content-available-height) w-(--bits-combobox-anchor-width) min-w-[(--bits-combobox-anchor-width)] rounded border bg-white p-2 shadow-lg outline-hidden select-none"
			sideOffset={10}
		>
			{#each filteredItems as item, i (i + item.value)}
				<Combobox.Item
					{...item}
					class="data-highlighted:bg-grey-05 flex w-full items-center justify-between gap-1.5 rounded px-3 py-1.5 outline-hidden select-none"
				>
					{#snippet children({ selected })}
						{item.label}
						{#if selected}
							<CheckIcon />
						{/if}
					{/snippet}
				</Combobox.Item>
			{:else}
				<span>Aucun résultat</span>
			{/each}
		</Combobox.Content>
	</Combobox.Portal>
</Combobox.Root>
