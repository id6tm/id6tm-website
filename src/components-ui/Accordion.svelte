<script lang="ts">
import { Accordion, type WithoutChildrenOrChild } from "bits-ui";
import { CaretCircleDownIcon } from "phosphor-svelte";
import Separator from "./Separator.svelte";
import type { AccordionItem } from "./types";

let {
	value = $bindable(),
	ref = $bindable(null),
	items,
	...restProps
}: WithoutChildrenOrChild<Omit<Accordion.RootProps, "type">> & {
	items: AccordionItem[];
} = $props();
</script>

<Accordion.Root
	bind:value
	bind:ref
	{...restProps as any}
	type="single"
	class="space-y-3 max-md:space-y-1.5"
>
	<Separator />
	{#each items as item (item.title)}
		<Accordion.Item class="flex flex-col gap-4 p-5 max-md:p-2.5" {...restProps}>
			<Accordion.Header>
				<Accordion.Trigger
					class="text-orange text-h2-5 hover:text-blue [&[data-state=open]>span]:text-blue [&[data-state=open]>svg]:text-blue flex w-full cursor-pointer items-center justify-between gap-6 text-left transition-colors duration-300 max-md:gap-3 [&[data-state=open]>svg]:-rotate-180"
					><span>{item.title}</span>
					<CaretCircleDownIcon
						class="size-8 shrink-0 transition-all duration-300 max-md:size-4.5"
					/>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content class="text-t2">
				{@html item.content}
			</Accordion.Content>
		</Accordion.Item>
		<Separator />
	{/each}
</Accordion.Root>
