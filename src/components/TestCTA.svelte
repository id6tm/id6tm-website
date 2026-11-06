<script lang="ts">
import CallToAction from "@ui/CallToAction.svelte";
import { ShrimpIcon } from "phosphor-svelte";
</script>

<div class="flex flex-col items-center gap-3">
	<CallToAction
		title="Call to action"
		subTitle="Subtitles CTA"
		description="Description"
		primaryActionProps={{
			label: "Show more",
			btnIcon: ShrimpIcon,
			onclick: undefined,
		}}
		secondaryActionProps={{
			label: "Show more",
			btnIcon: ShrimpIcon,
			onclick: undefined,
		}}
	/>
	<CallToAction
		variant="big"
		title="Call to action"
		subTitle="Subtitles CTA"
		description="Description"
		primaryActionProps={{
			label: "Show more",
			btnIcon: ShrimpIcon,
			onclick: undefined,
		}}
		secondaryActionProps={{
			label: "Show more",
			btnIcon: ShrimpIcon,
			onclick: undefined,
		}}
	/>
</div>
