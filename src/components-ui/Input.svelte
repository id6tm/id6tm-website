<script lang="ts">
import { cn } from "@utils/cn";
import type { HTMLInputAttributes } from "svelte/elements";

interface InputProps extends HTMLInputAttributes {
	value?: string | number;
}

let { value = $bindable(), ...others }: InputProps = $props();
</script>

<input
	{...others}
	bind:value
	class={cn(
		"text-input max-md:text-input-mobile placeholder:text-gey-40 hover:border-blue rounded border border-black bg-white transition-all duration-300 outline-none hover:placeholder:text-blue-50 max-md:p-8 md:px-3 md:py-2.5",
		others.class as string | undefined,
	)}
>
