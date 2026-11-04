<script lang="ts">
import { Label, RadioGroup, type WithoutChildrenOrChild } from "bits-ui";

type RadioGroupOption = {
	value: string;
	label: string;
};

type RadioGroupProps = WithoutChildrenOrChild<RadioGroup.RootProps> & {
	options: RadioGroupOption[];
};

let {
	options,
	value = $bindable(""),
	ref = $bindable(null),
	...restProps
}: RadioGroupProps = $props();
</script>

<RadioGroup.Root
	bind:value
	bind:ref
	{...restProps}
	class="text-button flex flex-col gap-4 font-normal"
>
	{#each options as option (option.value)}
		<div class="flex items-center transition-all select-none">
			<RadioGroup.Item id={option.value} value={option.value}>
				{#snippet children({ checked })}
					<div
						class="hover:bg-grey-20 flex h-5.5 w-5.5 items-center justify-center rounded-full border-2"
					>
						{#if checked}
							<div class="bg-orange h-3 w-3 rounded-full" />
						{/if}
					</div>
				{/snippet}
			</RadioGroup.Item>
			<Label.Root for={option.value} class="pl-3">{option.label}</Label.Root>
		</div>
	{/each}
</RadioGroup.Root>
