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

type ActionProps = Pick<ButtonProps, "btnIcon"> & {
	label: string;
	href: string;
};

interface CallToActionProps {
	title: string;
	subTitle?: string;
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
<section class="flex justify-center px-25.5">
	<div class="flex max-w-198 flex-col gap-10">
		<div class={cn("flex flex-col items-center", isBig ? "gap-10" : "gap-6")}>
			<h2 class={cn("text-center", isBig ? "text-h1" : "text-h2")}>{title}</h2>
			{#if subTitle}
				<h3
					class={cn(
						"text-center",
						isBig ? "text-h2-5" : "text-h3 tracking-[-0.48px]",
					)}
				>
					{subTitle}
				</h3>
			{/if}
			<p class={cn("text-center", isBig ? "text-t2" : "text-t3")}>
				{description}
			</p>
		</div>

		<div class="flex items-center justify-center gap-3">
			<a href={primaryActionProps.href}
				><Button size={isBig ? "medium" : "small"} {...primaryActionProps}
					>{primaryActionProps.label}</Button
				></a
			>
			{#if secondaryActionProps}
				<a href={secondaryActionProps.href}
					><Button
						size={isBig ? "medium" : "small"}
						variant="stroke"
						{...secondaryActionProps}
						>{secondaryActionProps.label}</Button
					></a
				>
			{/if}
		</div>
	</div>
</section>
