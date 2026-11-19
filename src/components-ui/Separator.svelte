<script lang="ts">
import { Separator, type SeparatorRootProps } from "bits-ui";

interface SeparatorProps {
	/**
	 * default — horizontal
	 */
	orientation?: SeparatorRootProps["orientation"];
}

const { orientation = "horizontal" }: SeparatorProps = $props();
</script>

<Separator.Root
	{orientation}
	class="shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
	style="background: linear-gradient(90deg, #C8C8C8 0%, #EDEDF8 100%);"
/>
