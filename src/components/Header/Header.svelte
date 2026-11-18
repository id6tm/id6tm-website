<script lang="ts">
import Button from "@ui/Button.svelte";
import { Collapsible } from "bits-ui";
import {
	CubeIcon,
	EyeIcon,
	ListIcon,
	ShootingStarIcon,
	SparkleIcon,
	StudentIcon,
} from "phosphor-svelte";
import { MediaQuery } from "svelte/reactivity";
import type { HeaderLink, ProjectLink } from "./Header.interfaces";
import HeaderDesktopNav from "./HeaderDesktopNav.svelte";
import HeaderLogo from "./HeaderLogo.svelte";
import HeaderMobileNav from "./HeaderMobileNav.svelte";

// small tablets and mobile
const isMobile = new MediaQuery("max-width: 768px");

const links: HeaderLink[] = [
	{
		label: "Qui sommes-nous ?",
		href: "#",
	},
	{
		label: "Blog",
		href: "#",
	},
	{
		label: "Boutique",
		href: "#",
	},
	{
		label: "Contact",
		href: "#",
	},
];
const projectsLinks: ProjectLink[] = [
	{
		label: "Diagoriente",
		href: "#",
		Icon: SparkleIcon,
	},
	{
		label: "Oribox",
		href: "#",
		Icon: CubeIcon,
	},
	{
		label: "EAM Connect",
		href: "#",
		Icon: ShootingStarIcon,
	},
	{
		label: "Formations",
		href: "#",
		Icon: StudentIcon,
	},
	{
		label: "Pilotage CMA",
		href: "#",
		Icon: EyeIcon,
	},
];
</script>

<header>
	{#if isMobile.current}
		<Collapsible.Root>
			<div class="bg-stroke-gradient w-full pb-[0.5px]">
				<div class="w-full bg-white px-30 pt-3 pb-1.5 max-sm:px-5">
					<div class="flex items-center justify-between">
						<HeaderLogo />
						<Collapsible.Trigger aria-label="Open mobile menu">
							<Button variant="transparent" color="black">
								<ListIcon class="size-6" />
							</Button>
						</Collapsible.Trigger>
					</div>
				</div>
			</div>
			<Collapsible.Content class="shadow-lg">
				<HeaderMobileNav {links} {projectsLinks} />
			</Collapsible.Content>
		</Collapsible.Root>
	{:else}
		<div class="bg-stroke-gradient w-full pb-[0.5px]">
			<div class="w-full bg-white px-30 pt-3 pb-1.5">
				<div class="flex items-center justify-between">
					<HeaderLogo />
					<HeaderDesktopNav {links} {projectsLinks} />
				</div>
			</div>
		</div>
	{/if}
</header>
