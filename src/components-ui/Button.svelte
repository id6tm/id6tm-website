<script lang="ts">
import { cn } from "@utils/cn";
import { Button } from "bits-ui";
import type { Component, Snippet } from "svelte";

type ButtonVariant = "filled" | "stroke" | "transparent";
type ButtonColor = "black" | "orange";
type ButtonSize = "small" | "medium";

export interface ButtonProps {
	children: Snippet;
	btnIcon?: Snippet | Component;
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
}: ButtonProps = $props();

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

const isSnippet = (val: unknown): val is Snippet =>
	typeof val === "function" &&
	Boolean((val as any)[Symbol.for("svelte.snippet")]);
</script>

<Button.Root
	type="button"
	class={`text-button flex cursor-pointer items-center gap-2.5 rounded transition-colors duration-300 ${variantAndColorClasses[variant][color]} ${sizeClasses[size]}`}
	{onclick}
	{disabled}
>
	{@render children()}
	{#if btnIcon}
		<i class={cn(size === "medium" ? "[&>svg]:size-8" : "[&>svg]:size-6")}>
			{#if isSnippet(btnIcon)}
				{@render btnIcon()}
			{:else}
				{@const BtnIcon = btnIcon as Component}
				<BtnIcon />
			{/if}
		</i>
	{/if}
</Button.Root>
