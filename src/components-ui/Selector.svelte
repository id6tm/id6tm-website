<!--
This component can only be used inside of another Svelte component because of nested Snippets and Generic
-->
<script lang="ts" generics="TItem extends string">
// string literal generic
import { cn } from "@utils/cn";
import type { Component } from "svelte";
import { MediaQuery } from "svelte/reactivity";

const { current: isMobile } = new MediaQuery("max-width: 767px");
const { current: isLarge } = new MediaQuery("min-width: 1024px");

interface SelectorItem<TItem> {
	label: string;
	Icon: Component;
	value: TItem;
}

interface SelectorProps<TItem> {
	items: SelectorItem<TItem>[];
	value: TItem;
}

let { items, value = $bindable() }: SelectorProps<TItem> = $props();

function onTabClick(val: TItem) {
	value = val;
}
</script>

<div class="bg-stroke-gradient z-10 w-fit rounded-[40px] p-px">
	<div
		role="tablist"
		aria-label="Select a section"
		class="flex items-center gap-1 rounded-[40px] bg-white p-2"
	>
		{#each items as { Icon, label, value: itemValue } (itemValue)}
			<button
				type="button"
				role="tab"
				aria-selected={value === itemValue}
				aria-controls={`panel-${itemValue}`}
				tabindex={value === itemValue ? 0 : -1}
				onclick={() => onTabClick(itemValue)}
				class={cn(
					"text-button text-grey-60 flex h-11 cursor-pointer items-center gap-2.5 rounded-[40px] px-5 py-2.5 transition-all duration-300 ease-out",
					value === itemValue
						? "bg-blue scale-105"
						: "hover:text-blue hover:bg-grey-20",
					"active:scale-95",
				)}
				style={value === itemValue ? "color: white" : ""}
			>
				{#if !isMobile}
					{label}
				{/if}
				{#if isMobile || isLarge}
					<Icon class="size-6" />
				{/if}
			</button>
		{/each}
	</div>
</div>
