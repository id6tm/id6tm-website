import type { Component } from "svelte";

export interface HeaderLink {
	label: string;
	href: string;
}

export interface ProjectLink extends HeaderLink {
	Icon: Component;
}

export interface HeaderNavProps {
	links: HeaderLink[];
	projectsLinks: ProjectLink[];
}
