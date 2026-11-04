<script lang="ts">
import { Accordion, type WithoutChildrenOrChild } from "bits-ui";
import { CaretCircleDownIcon } from "phosphor-svelte";

type Item = {
	value?: string;
	title: string;
	content: string;
	disabled?: boolean;
};

let {
	value = $bindable(),
	ref = $bindable(null),
	items,
	...restProps
}: WithoutChildrenOrChild<Accordion.RootProps> & {
	items: Item[];
} = $props();
</script>

<Accordion.Root bind:value bind:ref {...restProps as any} type="single">
	{#each items as item (item.title)}
		<Accordion.Item {...restProps}>
			<Accordion.Header class="p-5 max-md:p-2.5">
				<Accordion.Trigger
					class="text-orange text-h2-5 hover:text-blue [&[data-state=open]>span]:text-blue [&[data-state=open]>svg]:text-blue flex cursor-pointer items-center justify-between gap-2.5 max-md:gap-1.5 [&[data-state=open]>svg]:-rotate-180"
					><span>{item.title}</span>
					<CaretCircleDownIcon
						class="size-8 transition-all duration-300 max-md:size-4.5"
					/>
				</Accordion.Trigger>
			</Accordion.Header>
			<Accordion.Content class="text-t2">
				{item.content}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
