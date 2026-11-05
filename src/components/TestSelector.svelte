<!-- test component to be removed -->
<script lang="ts">
import Selector from "@ui/Selector.svelte";
import { ShrimpIcon } from "phosphor-svelte";

type Value = "1" | "2" | "3" | "4";
let items = [
	{
		label: "Show more",
		Icon: ShrimpIcon,
		value: "1",
	},
	{
		label: "Show more",
		Icon: ShrimpIcon,
		value: "2",
	},
	{
		label: "Show more",
		Icon: ShrimpIcon,
		value: "3",
	},
	{
		label: "Show more",
		Icon: ShrimpIcon,
		value: "4",
	},
];
let value = $state<Value>("1");
</script>

<section>
	<Selector {items} bind:value />
</section>
