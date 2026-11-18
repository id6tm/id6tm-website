<script lang="ts">
import { cn } from "@utils/cn";
import type { ButtonProps } from "./Button.svelte";
import Button from "./Button.svelte";

const callToActionVariants = {
	NORMAL: "normal",
	BIG: "big",
} as const;
type CallToActionVariant =
	(typeof callToActionVariants)[keyof typeof callToActionVariants];

type ActionProps = Pick<ButtonProps, "btnIcon" | "onclick"> & { label: string };

interface CallToActionProps {
	title: string;
	subTitle: string;
	description: string;
	primaryActionProps: ActionProps;
	secondaryActionProps?: ActionProps;
	variant?: CallToActionVariant;
}

let {
	description,
	primaryActionProps,
	subTitle,
	title,
	secondaryActionProps,
	/**
	 * default - normal
	 */
	variant = callToActionVariants.NORMAL,
}: CallToActionProps = $props();

let isBig = $derived(variant === callToActionVariants.BIG);
</script>

<!-- hardcoded background style for now, custom dynamic background images later on -->
<section
	class="p-16"
	style="background: linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.00) 50%), linear-gradient(180deg, rgba(255, 233, 226, 0.00) 0%, #FFE9E2 100%);"
>
	<div class="flex flex-col gap-10">
		<div class={cn("flex flex-col items-center", isBig ? "gap-10" : "gap-6")}>
			<h2 class={isBig ? "text-h1" : "text-h2"}>{title}</h2>
			<h3 class={isBig ? "text-h2-5" : "text-h3 tracking-[-0.48px]"}>
				{subTitle}
			</h3>
			<p class={isBig ? "text-t2" : "text-t3"}>{description}</p>
		</div>

		<div class="flex items-center justify-center gap-3">
			<Button size={isBig ? "medium" : "small"} {...primaryActionProps}
				>{primaryActionProps.label}</Button
			>
			{#if secondaryActionProps}
				<Button
					size={isBig ? "medium" : "small"}
					variant="stroke"
					{...secondaryActionProps}
					>{secondaryActionProps.label}</Button
				>
			{/if}
		</div>
	</div>
</section>
