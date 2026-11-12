<!--
Need for a Svelte component only to display the header logo, as the Astro generic Logo component cannot be imported from Svelte
-->

<script lang="ts">
import id6LogoUrl from "../../assets/id6-logo/icon-orange.svg?url";
</script>

<a
	href="/"
	aria-label="home link"
	class="font-outfit flex items-center gap-3.5 text-[24px] font-bold tracking-[-0.24px]"
>
	<img src={id6LogoUrl} alt="id6-logo" class="size-10">
	id6
</a>
