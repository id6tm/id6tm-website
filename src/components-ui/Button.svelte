<script lang="ts">
import { cn } from "@utils/cn";
import { Button } from "bits-ui";
import type { Snippet } from "svelte";

type ButtonVariant = "filled" | "stroke" | "transparent";
type ButtonColor = "black" | "orange";
type ButtonSize = "small" | "medium";

interface ButtonProps {
	children: Snippet;
	btnIcon?: Snippet;
	/**
	 * only from another Svelte component — won't work from Astro
	 */
	onclick?: () => void;
	disabled?: boolean;
	/**
	 * default — orange
	 */
	color?: ButtonColor;
	/**
	 * default — filled
	 */
	variant?: ButtonVariant;
	/**
	 * default — small
	 */
	size?: ButtonSize;
}

const {
	color = "orange",
	variant = "filled",
	size = "small",
	onclick,
	children,
	btnIcon,
	disabled = false,
}: Readonly<ButtonProps> = $props();

let variantAndColorClasses: Record<
	ButtonVariant,
	Record<ButtonColor, string>
> = {
	filled: {
		black: "text-white bg-black hover:bg-blue",
		orange: "text-white bg-orange hover:bg-blue",
	},
	stroke: {
		black:
			"border border-black text-black hover:text-blue hover:border-blue hover:bg-grey-20",
		orange:
			"border border-orange text-orange hover:text-blue hover:border-blue hover:bg-grey-20",
	},
	transparent: {
		black: "text-black hover:text-blue hover:bg-grey-20",
		orange: "text-orange hover:text-blue hover:bg-grey-20",
	},
};

let sizeClasses: Record<ButtonSize, string> = {
	small: "px-3 py-2.5 h-11",
	medium: " p-5",
};
</script>

<Button.Root
	type="button"
	class={`text-button flex cursor-pointer items-center gap-2.5 rounded transition-colors duration-300 ${variantAndColorClasses[variant][color]} ${sizeClasses[size]}`}
	{onclick}
	{disabled}
>
	{@render children()}
	{#if btnIcon}
		<i
			class={cn(
				size === "medium"
					? "[&>svg]:h-8 [&>svg]:w-8"
					: "[&>svg]:h-6 [&>svg]:w-6",
			)}
		>
			{@render btnIcon()}
		</i>
	{/if}
</Button.Root>
